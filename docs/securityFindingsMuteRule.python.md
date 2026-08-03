# `securityFindingsMuteRule` Submodule <a name="`securityFindingsMuteRule` Submodule" id="@cdktn/provider-datadog.securityFindingsMuteRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityFindingsMuteRule <a name="SecurityFindingsMuteRule" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rule datadog_security_findings_mute_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_mute_rule

securityFindingsMuteRule.SecurityFindingsMuteRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action: SecurityFindingsMuteRuleAction,
  name: str,
  rule: SecurityFindingsMuteRuleRule,
  enabled: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleAction">SecurityFindingsMuteRuleAction</a></code> | The action to take when the mute rule matches a finding. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the mute rule. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRule">SecurityFindingsMuteRuleRule</a></code> | Defines the scope of findings to which the automation rule applies. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the mute rule is enabled. Defaults to `true`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.action"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleAction">SecurityFindingsMuteRuleAction</a>

The action to take when the mute rule matches a finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rule#action SecurityFindingsMuteRule#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.name"></a>

- *Type:* str

The name of the mute rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rule#name SecurityFindingsMuteRule#name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.rule"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRule">SecurityFindingsMuteRuleRule</a>

Defines the scope of findings to which the automation rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rule#rule SecurityFindingsMuteRule#rule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the mute rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rule#enabled SecurityFindingsMuteRule#enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_action` <a name="put_action" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.putAction"></a>

```python
def put_action(
  reason: str,
  expire_at: typing.Union[int, float] = None,
  reason_description: str = None
) -> None
```

###### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.putAction.parameter.reason"></a>

- *Type:* str

The reason for muting a security finding. Valid values are `duplicate`, `false_positive`, `no_fix`, `other`, `pending_fix`, `risk_accepted`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rule#reason SecurityFindingsMuteRule#reason}

---

###### `expire_at`<sup>Optional</sup> <a name="expire_at" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.putAction.parameter.expireAt"></a>

- *Type:* typing.Union[int, float]

The Unix timestamp in milliseconds at which the mute expires. If omitted, the mute does not expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rule#expire_at SecurityFindingsMuteRule#expire_at}

---

###### `reason_description`<sup>Optional</sup> <a name="reason_description" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.putAction.parameter.reasonDescription"></a>

- *Type:* str

An optional description providing more context for the mute reason.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rule#reason_description SecurityFindingsMuteRule#reason_description}

---

##### `put_rule` <a name="put_rule" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.putRule"></a>

```python
def put_rule(
  finding_types: typing.List[str],
  query: str = None
) -> None
```

###### `finding_types`<sup>Required</sup> <a name="finding_types" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.putRule.parameter.findingTypes"></a>

- *Type:* typing.List[str]

The list of security finding types that the automation rule applies to.

Valid values are `api_security`, `attack_path`, `host_and_container_vulnerability`, `iac_misconfiguration`, `identity_risk`, `library_vulnerability`, `misconfiguration`, `runtime_code_vulnerability`, `secret`, `static_code_vulnerability`, `workload_activity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rule#finding_types SecurityFindingsMuteRule#finding_types}

---

###### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.putRule.parameter.query"></a>

- *Type:* str

A search query to further filter the findings matched by this rule.

The `@workflow.*` namespace and `@status` fields are not permitted. For a reference of available fields, see the [Security Findings schema documentation](https://docs.datadoghq.com/security/guide/findings-schema/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rule#query SecurityFindingsMuteRule#query}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SecurityFindingsMuteRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.isConstruct"></a>

```python
from cdktn_provider_datadog import security_findings_mute_rule

securityFindingsMuteRule.SecurityFindingsMuteRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.isTerraformElement"></a>

```python
from cdktn_provider_datadog import security_findings_mute_rule

securityFindingsMuteRule.SecurityFindingsMuteRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.isTerraformResource"></a>

```python
from cdktn_provider_datadog import security_findings_mute_rule

securityFindingsMuteRule.SecurityFindingsMuteRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import security_findings_mute_rule

securityFindingsMuteRule.SecurityFindingsMuteRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SecurityFindingsMuteRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecurityFindingsMuteRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecurityFindingsMuteRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityFindingsMuteRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference">SecurityFindingsMuteRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference">SecurityFindingsMuteRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.actionInput">action_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleAction">SecurityFindingsMuteRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.ruleInput">rule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRule">SecurityFindingsMuteRuleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.action"></a>

```python
action: SecurityFindingsMuteRuleActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference">SecurityFindingsMuteRuleActionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.rule"></a>

```python
rule: SecurityFindingsMuteRuleRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference">SecurityFindingsMuteRuleRuleOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.actionInput"></a>

```python
action_input: IResolvable | SecurityFindingsMuteRuleAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleAction">SecurityFindingsMuteRuleAction</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.ruleInput"></a>

```python
rule_input: IResolvable | SecurityFindingsMuteRuleRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRule">SecurityFindingsMuteRuleRule</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityFindingsMuteRuleAction <a name="SecurityFindingsMuteRuleAction" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleAction.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_mute_rule

securityFindingsMuteRule.SecurityFindingsMuteRuleAction(
  reason: str,
  expire_at: typing.Union[int, float] = None,
  reason_description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleAction.property.reason">reason</a></code> | <code>str</code> | The reason for muting a security finding. Valid values are `duplicate`, `false_positive`, `no_fix`, `other`, `pending_fix`, `risk_accepted`. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleAction.property.expireAt">expire_at</a></code> | <code>typing.Union[int, float]</code> | The Unix timestamp in milliseconds at which the mute expires. If omitted, the mute does not expire. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleAction.property.reasonDescription">reason_description</a></code> | <code>str</code> | An optional description providing more context for the mute reason. |

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleAction.property.reason"></a>

```python
reason: str
```

- *Type:* str

The reason for muting a security finding. Valid values are `duplicate`, `false_positive`, `no_fix`, `other`, `pending_fix`, `risk_accepted`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rule#reason SecurityFindingsMuteRule#reason}

---

##### `expire_at`<sup>Optional</sup> <a name="expire_at" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleAction.property.expireAt"></a>

```python
expire_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The Unix timestamp in milliseconds at which the mute expires. If omitted, the mute does not expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rule#expire_at SecurityFindingsMuteRule#expire_at}

---

##### `reason_description`<sup>Optional</sup> <a name="reason_description" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleAction.property.reasonDescription"></a>

```python
reason_description: str
```

- *Type:* str

An optional description providing more context for the mute reason.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rule#reason_description SecurityFindingsMuteRule#reason_description}

---

### SecurityFindingsMuteRuleConfig <a name="SecurityFindingsMuteRuleConfig" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleConfig.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_mute_rule

securityFindingsMuteRule.SecurityFindingsMuteRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action: SecurityFindingsMuteRuleAction,
  name: str,
  rule: SecurityFindingsMuteRuleRule,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleConfig.property.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleAction">SecurityFindingsMuteRuleAction</a></code> | The action to take when the mute rule matches a finding. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleConfig.property.name">name</a></code> | <code>str</code> | The name of the mute rule. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRule">SecurityFindingsMuteRuleRule</a></code> | Defines the scope of findings to which the automation rule applies. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the mute rule is enabled. Defaults to `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleConfig.property.action"></a>

```python
action: SecurityFindingsMuteRuleAction
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleAction">SecurityFindingsMuteRuleAction</a>

The action to take when the mute rule matches a finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rule#action SecurityFindingsMuteRule#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the mute rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rule#name SecurityFindingsMuteRule#name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleConfig.property.rule"></a>

```python
rule: SecurityFindingsMuteRuleRule
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRule">SecurityFindingsMuteRuleRule</a>

Defines the scope of findings to which the automation rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rule#rule SecurityFindingsMuteRule#rule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the mute rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rule#enabled SecurityFindingsMuteRule#enabled}

---

### SecurityFindingsMuteRuleRule <a name="SecurityFindingsMuteRuleRule" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRule.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_mute_rule

securityFindingsMuteRule.SecurityFindingsMuteRuleRule(
  finding_types: typing.List[str],
  query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRule.property.findingTypes">finding_types</a></code> | <code>typing.List[str]</code> | The list of security finding types that the automation rule applies to. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRule.property.query">query</a></code> | <code>str</code> | A search query to further filter the findings matched by this rule. |

---

##### `finding_types`<sup>Required</sup> <a name="finding_types" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRule.property.findingTypes"></a>

```python
finding_types: typing.List[str]
```

- *Type:* typing.List[str]

The list of security finding types that the automation rule applies to.

Valid values are `api_security`, `attack_path`, `host_and_container_vulnerability`, `iac_misconfiguration`, `identity_risk`, `library_vulnerability`, `misconfiguration`, `runtime_code_vulnerability`, `secret`, `static_code_vulnerability`, `workload_activity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rule#finding_types SecurityFindingsMuteRule#finding_types}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRule.property.query"></a>

```python
query: str
```

- *Type:* str

A search query to further filter the findings matched by this rule.

The `@workflow.*` namespace and `@status` fields are not permitted. For a reference of available fields, see the [Security Findings schema documentation](https://docs.datadoghq.com/security/guide/findings-schema/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rule#query SecurityFindingsMuteRule#query}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityFindingsMuteRuleActionOutputReference <a name="SecurityFindingsMuteRuleActionOutputReference" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_mute_rule

securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.resetExpireAt">reset_expire_at</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.resetReasonDescription">reset_reason_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expire_at` <a name="reset_expire_at" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.resetExpireAt"></a>

```python
def reset_expire_at() -> None
```

##### `reset_reason_description` <a name="reset_reason_description" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.resetReasonDescription"></a>

```python
def reset_reason_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.property.expireAtInput">expire_at_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.property.reasonDescriptionInput">reason_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.property.reasonInput">reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.property.expireAt">expire_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.property.reasonDescription">reason_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleAction">SecurityFindingsMuteRuleAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expire_at_input`<sup>Optional</sup> <a name="expire_at_input" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.property.expireAtInput"></a>

```python
expire_at_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reason_description_input`<sup>Optional</sup> <a name="reason_description_input" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.property.reasonDescriptionInput"></a>

```python
reason_description_input: str
```

- *Type:* str

---

##### `reason_input`<sup>Optional</sup> <a name="reason_input" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.property.reasonInput"></a>

```python
reason_input: str
```

- *Type:* str

---

##### `expire_at`<sup>Required</sup> <a name="expire_at" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.property.expireAt"></a>

```python
expire_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `reason_description`<sup>Required</sup> <a name="reason_description" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.property.reasonDescription"></a>

```python
reason_description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityFindingsMuteRuleAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleAction">SecurityFindingsMuteRuleAction</a>

---


### SecurityFindingsMuteRuleRuleOutputReference <a name="SecurityFindingsMuteRuleRuleOutputReference" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_mute_rule

securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.resetQuery">reset_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_query` <a name="reset_query" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.property.findingTypesInput">finding_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.property.findingTypes">finding_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRule">SecurityFindingsMuteRuleRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `finding_types_input`<sup>Optional</sup> <a name="finding_types_input" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.property.findingTypesInput"></a>

```python
finding_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `finding_types`<sup>Required</sup> <a name="finding_types" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.property.findingTypes"></a>

```python
finding_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityFindingsMuteRuleRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityFindingsMuteRule.SecurityFindingsMuteRuleRule">SecurityFindingsMuteRuleRule</a>

---



