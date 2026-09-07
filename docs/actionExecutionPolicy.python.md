# `actionExecutionPolicy` Submodule <a name="`actionExecutionPolicy` Submodule" id="@cdktn/provider-datadog.actionExecutionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionExecutionPolicy <a name="ActionExecutionPolicy" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy datadog_action_execution_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action_pattern: ActionExecutionPolicyActionPattern,
  effect: str,
  name: str,
  scope: ActionExecutionPolicyScope = None,
  target: IResolvable | typing.List[ActionExecutionPolicyTarget] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.actionPattern">action_pattern</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a></code> | action_pattern block. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.effect">effect</a></code> | <code>str</code> | Whether the policy allows or denies the matched actions. Valid values are `allow`, `deny`. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the execution policy. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.scope">scope</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.target">target</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>]</code> | target block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action_pattern`<sup>Required</sup> <a name="action_pattern" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.actionPattern"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a>

action_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#action_pattern ActionExecutionPolicy#action_pattern}

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.effect"></a>

- *Type:* str

Whether the policy allows or denies the matched actions. Valid values are `allow`, `deny`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#effect ActionExecutionPolicy#effect}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.name"></a>

- *Type:* str

The name of the execution policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#name ActionExecutionPolicy#name}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.scope"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#scope ActionExecutionPolicy#scope}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.target"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>]

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target ActionExecutionPolicy#target}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putActionPattern">put_action_pattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putScope">put_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetTarget">reset_target</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_action_pattern` <a name="put_action_pattern" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putActionPattern"></a>

```python
def put_action_pattern(
  action_fqns: typing.List[str],
  integration: str
) -> None
```

###### `action_fqns`<sup>Required</sup> <a name="action_fqns" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putActionPattern.parameter.actionFqns"></a>

- *Type:* typing.List[str]

The fully qualified action names this policy matches.

Use `*` to match all actions of the integration, or a fully qualified name prefixed with the integration's action namespace (for example `com.datadoghq.script.*` for the Script integration).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#action_fqns ActionExecutionPolicy#action_fqns}

---

###### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putActionPattern.parameter.integration"></a>

- *Type:* str

The integration the actions belong to. Valid values are `INTEGRATION_KUBERNETES`, `INTEGRATION_SCRIPT`, `INTEGRATION_REMOTE_ACTION`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#integration ActionExecutionPolicy#integration}

---

##### `put_scope` <a name="put_scope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putScope"></a>

```python
def put_scope(
  kubernetes: ActionExecutionPolicyScopeKubernetes = None,
  remote_action_rshell: ActionExecutionPolicyScopeRemoteActionRshell = None,
  scripts: ActionExecutionPolicyScopeScripts = None
) -> None
```

###### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putScope.parameter.kubernetes"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#kubernetes ActionExecutionPolicy#kubernetes}

---

###### `remote_action_rshell`<sup>Optional</sup> <a name="remote_action_rshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putScope.parameter.remoteActionRshell"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a>

remote_action_rshell block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#remote_action_rshell ActionExecutionPolicy#remote_action_rshell}

---

###### `scripts`<sup>Optional</sup> <a name="scripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putScope.parameter.scripts"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a>

scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#scripts ActionExecutionPolicy#scripts}

---

##### `put_target` <a name="put_target" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putTarget"></a>

```python
def put_target(
  value: IResolvable | typing.List[ActionExecutionPolicyTarget]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putTarget.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>]

---

##### `reset_scope` <a name="reset_scope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetTarget"></a>

```python
def reset_target() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ActionExecutionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isConstruct"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformElement"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformResource"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ActionExecutionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ActionExecutionPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ActionExecutionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ActionExecutionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.actionPattern">action_pattern</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference">ActionExecutionPolicyActionPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference">ActionExecutionPolicyScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.target">target</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList">ActionExecutionPolicyTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.actionPatternInput">action_pattern_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.scopeInput">scope_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.targetInput">target_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action_pattern`<sup>Required</sup> <a name="action_pattern" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.actionPattern"></a>

```python
action_pattern: ActionExecutionPolicyActionPatternOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference">ActionExecutionPolicyActionPatternOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.scope"></a>

```python
scope: ActionExecutionPolicyScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference">ActionExecutionPolicyScopeOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.target"></a>

```python
target: ActionExecutionPolicyTargetList
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList">ActionExecutionPolicyTargetList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action_pattern_input`<sup>Optional</sup> <a name="action_pattern_input" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.actionPatternInput"></a>

```python
action_pattern_input: IResolvable | ActionExecutionPolicyActionPattern
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a>

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.scopeInput"></a>

```python
scope_input: IResolvable | ActionExecutionPolicyScope
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a>

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.targetInput"></a>

```python
target_input: IResolvable | typing.List[ActionExecutionPolicyTarget]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>]

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ActionExecutionPolicyActionPattern <a name="ActionExecutionPolicyActionPattern" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern.Initializer"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicyActionPattern(
  action_fqns: typing.List[str],
  integration: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern.property.actionFqns">action_fqns</a></code> | <code>typing.List[str]</code> | The fully qualified action names this policy matches. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern.property.integration">integration</a></code> | <code>str</code> | The integration the actions belong to. Valid values are `INTEGRATION_KUBERNETES`, `INTEGRATION_SCRIPT`, `INTEGRATION_REMOTE_ACTION`. |

---

##### `action_fqns`<sup>Required</sup> <a name="action_fqns" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern.property.actionFqns"></a>

```python
action_fqns: typing.List[str]
```

- *Type:* typing.List[str]

The fully qualified action names this policy matches.

Use `*` to match all actions of the integration, or a fully qualified name prefixed with the integration's action namespace (for example `com.datadoghq.script.*` for the Script integration).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#action_fqns ActionExecutionPolicy#action_fqns}

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern.property.integration"></a>

```python
integration: str
```

- *Type:* str

The integration the actions belong to. Valid values are `INTEGRATION_KUBERNETES`, `INTEGRATION_SCRIPT`, `INTEGRATION_REMOTE_ACTION`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#integration ActionExecutionPolicy#integration}

---

### ActionExecutionPolicyConfig <a name="ActionExecutionPolicyConfig" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.Initializer"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  action_pattern: ActionExecutionPolicyActionPattern,
  effect: str,
  name: str,
  scope: ActionExecutionPolicyScope = None,
  target: IResolvable | typing.List[ActionExecutionPolicyTarget] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.actionPattern">action_pattern</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a></code> | action_pattern block. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.effect">effect</a></code> | <code>str</code> | Whether the policy allows or denies the matched actions. Valid values are `allow`, `deny`. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.name">name</a></code> | <code>str</code> | The name of the execution policy. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.target">target</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>]</code> | target block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action_pattern`<sup>Required</sup> <a name="action_pattern" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.actionPattern"></a>

```python
action_pattern: ActionExecutionPolicyActionPattern
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a>

action_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#action_pattern ActionExecutionPolicy#action_pattern}

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.effect"></a>

```python
effect: str
```

- *Type:* str

Whether the policy allows or denies the matched actions. Valid values are `allow`, `deny`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#effect ActionExecutionPolicy#effect}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the execution policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#name ActionExecutionPolicy#name}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.scope"></a>

```python
scope: ActionExecutionPolicyScope
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#scope ActionExecutionPolicy#scope}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.target"></a>

```python
target: IResolvable | typing.List[ActionExecutionPolicyTarget]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>]

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target ActionExecutionPolicy#target}

---

### ActionExecutionPolicyScope <a name="ActionExecutionPolicyScope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.Initializer"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicyScope(
  kubernetes: ActionExecutionPolicyScopeKubernetes = None,
  remote_action_rshell: ActionExecutionPolicyScopeRemoteActionRshell = None,
  scripts: ActionExecutionPolicyScopeScripts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.remoteActionRshell">remote_action_rshell</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a></code> | remote_action_rshell block. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.scripts">scripts</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a></code> | scripts block. |

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.kubernetes"></a>

```python
kubernetes: ActionExecutionPolicyScopeKubernetes
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#kubernetes ActionExecutionPolicy#kubernetes}

---

##### `remote_action_rshell`<sup>Optional</sup> <a name="remote_action_rshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.remoteActionRshell"></a>

```python
remote_action_rshell: ActionExecutionPolicyScopeRemoteActionRshell
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a>

remote_action_rshell block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#remote_action_rshell ActionExecutionPolicy#remote_action_rshell}

---

##### `scripts`<sup>Optional</sup> <a name="scripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.scripts"></a>

```python
scripts: ActionExecutionPolicyScopeScripts
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a>

scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#scripts ActionExecutionPolicy#scripts}

---

### ActionExecutionPolicyScopeKubernetes <a name="ActionExecutionPolicyScopeKubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes.Initializer"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes(
  rule: IResolvable | typing.List[ActionExecutionPolicyScopeKubernetesRule] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes.property.rule">rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>]</code> | rule block. |

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes.property.rule"></a>

```python
rule: IResolvable | typing.List[ActionExecutionPolicyScopeKubernetesRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#rule ActionExecutionPolicy#rule}

---

### ActionExecutionPolicyScopeKubernetesRule <a name="ActionExecutionPolicyScopeKubernetesRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule.Initializer"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule(
  target_namespaces: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule.property.targetNamespaces">target_namespaces</a></code> | <code>typing.List[str]</code> | The Kubernetes namespaces this rule applies to. |

---

##### `target_namespaces`<sup>Required</sup> <a name="target_namespaces" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule.property.targetNamespaces"></a>

```python
target_namespaces: typing.List[str]
```

- *Type:* typing.List[str]

The Kubernetes namespaces this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target_namespaces ActionExecutionPolicy#target_namespaces}

---

### ActionExecutionPolicyScopeRemoteActionRshell <a name="ActionExecutionPolicyScopeRemoteActionRshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell.Initializer"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell(
  rule: IResolvable | typing.List[ActionExecutionPolicyScopeRemoteActionRshellRule] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell.property.rule">rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>]</code> | rule block. |

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell.property.rule"></a>

```python
rule: IResolvable | typing.List[ActionExecutionPolicyScopeRemoteActionRshellRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#rule ActionExecutionPolicy#rule}

---

### ActionExecutionPolicyScopeRemoteActionRshellRule <a name="ActionExecutionPolicyScopeRemoteActionRshellRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule.Initializer"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule(
  access: str,
  target_paths: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule.property.access">access</a></code> | <code>str</code> | The level of remote shell access granted for the target paths. Valid values are `read_only`, `read_write`. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule.property.targetPaths">target_paths</a></code> | <code>typing.List[str]</code> | The filesystem paths this rule applies to. |

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule.property.access"></a>

```python
access: str
```

- *Type:* str

The level of remote shell access granted for the target paths. Valid values are `read_only`, `read_write`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#access ActionExecutionPolicy#access}

---

##### `target_paths`<sup>Required</sup> <a name="target_paths" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule.property.targetPaths"></a>

```python
target_paths: typing.List[str]
```

- *Type:* typing.List[str]

The filesystem paths this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target_paths ActionExecutionPolicy#target_paths}

---

### ActionExecutionPolicyScopeScripts <a name="ActionExecutionPolicyScopeScripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts.Initializer"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicyScopeScripts(
  rule: IResolvable | typing.List[ActionExecutionPolicyScopeScriptsRule] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts.property.rule">rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>]</code> | rule block. |

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts.property.rule"></a>

```python
rule: IResolvable | typing.List[ActionExecutionPolicyScopeScriptsRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#rule ActionExecutionPolicy#rule}

---

### ActionExecutionPolicyScopeScriptsRule <a name="ActionExecutionPolicyScopeScriptsRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule.Initializer"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule(
  target_script_names: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule.property.targetScriptNames">target_script_names</a></code> | <code>typing.List[str]</code> | The script names this rule applies to. |

---

##### `target_script_names`<sup>Required</sup> <a name="target_script_names" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule.property.targetScriptNames"></a>

```python
target_script_names: typing.List[str]
```

- *Type:* typing.List[str]

The script names this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target_script_names ActionExecutionPolicy#target_script_names}

---

### ActionExecutionPolicyTarget <a name="ActionExecutionPolicyTarget" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget.Initializer"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicyTarget(
  agent_tags: typing.List[str],
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget.property.agentTags">agent_tags</a></code> | <code>typing.List[str]</code> | The Agent tags identifying the target, for example `env:prod`. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget.property.name">name</a></code> | <code>str</code> | A human-readable name for the target. |

---

##### `agent_tags`<sup>Required</sup> <a name="agent_tags" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget.property.agentTags"></a>

```python
agent_tags: typing.List[str]
```

- *Type:* typing.List[str]

The Agent tags identifying the target, for example `env:prod`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#agent_tags ActionExecutionPolicy#agent_tags}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget.property.name"></a>

```python
name: str
```

- *Type:* str

A human-readable name for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#name ActionExecutionPolicy#name}

---

## Classes <a name="Classes" id="Classes"></a>

### ActionExecutionPolicyActionPatternOutputReference <a name="ActionExecutionPolicyActionPatternOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.actionFqnsInput">action_fqns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.integrationInput">integration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.actionFqns">action_fqns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.integration">integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_fqns_input`<sup>Optional</sup> <a name="action_fqns_input" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.actionFqnsInput"></a>

```python
action_fqns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `integration_input`<sup>Optional</sup> <a name="integration_input" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.integrationInput"></a>

```python
integration_input: str
```

- *Type:* str

---

##### `action_fqns`<sup>Required</sup> <a name="action_fqns" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.actionFqns"></a>

```python
action_fqns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.integration"></a>

```python
integration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ActionExecutionPolicyActionPattern
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a>

---


### ActionExecutionPolicyScopeKubernetesOutputReference <a name="ActionExecutionPolicyScopeKubernetesOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.resetRule">reset_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rule` <a name="put_rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.putRule"></a>

```python
def put_rule(
  value: IResolvable | typing.List[ActionExecutionPolicyScopeKubernetesRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.putRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>]

---

##### `reset_rule` <a name="reset_rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.resetRule"></a>

```python
def reset_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList">ActionExecutionPolicyScopeKubernetesRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.ruleInput">rule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.rule"></a>

```python
rule: ActionExecutionPolicyScopeKubernetesRuleList
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList">ActionExecutionPolicyScopeKubernetesRuleList</a>

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.ruleInput"></a>

```python
rule_input: IResolvable | typing.List[ActionExecutionPolicyScopeKubernetesRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ActionExecutionPolicyScopeKubernetes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a>

---


### ActionExecutionPolicyScopeKubernetesRuleList <a name="ActionExecutionPolicyScopeKubernetesRuleList" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ActionExecutionPolicyScopeKubernetesRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ActionExecutionPolicyScopeKubernetesRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>]

---


### ActionExecutionPolicyScopeKubernetesRuleOutputReference <a name="ActionExecutionPolicyScopeKubernetesRuleOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.targetNamespacesInput">target_namespaces_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.targetNamespaces">target_namespaces</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_namespaces_input`<sup>Optional</sup> <a name="target_namespaces_input" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.targetNamespacesInput"></a>

```python
target_namespaces_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_namespaces`<sup>Required</sup> <a name="target_namespaces" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.targetNamespaces"></a>

```python
target_namespaces: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ActionExecutionPolicyScopeKubernetesRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>

---


### ActionExecutionPolicyScopeOutputReference <a name="ActionExecutionPolicyScopeOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putKubernetes">put_kubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putRemoteActionRshell">put_remote_action_rshell</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putScripts">put_scripts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetKubernetes">reset_kubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetRemoteActionRshell">reset_remote_action_rshell</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetScripts">reset_scripts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_kubernetes` <a name="put_kubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putKubernetes"></a>

```python
def put_kubernetes(
  rule: IResolvable | typing.List[ActionExecutionPolicyScopeKubernetesRule] = None
) -> None
```

###### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putKubernetes.parameter.rule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#rule ActionExecutionPolicy#rule}

---

##### `put_remote_action_rshell` <a name="put_remote_action_rshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putRemoteActionRshell"></a>

```python
def put_remote_action_rshell(
  rule: IResolvable | typing.List[ActionExecutionPolicyScopeRemoteActionRshellRule] = None
) -> None
```

###### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putRemoteActionRshell.parameter.rule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#rule ActionExecutionPolicy#rule}

---

##### `put_scripts` <a name="put_scripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putScripts"></a>

```python
def put_scripts(
  rule: IResolvable | typing.List[ActionExecutionPolicyScopeScriptsRule] = None
) -> None
```

###### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putScripts.parameter.rule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#rule ActionExecutionPolicy#rule}

---

##### `reset_kubernetes` <a name="reset_kubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetKubernetes"></a>

```python
def reset_kubernetes() -> None
```

##### `reset_remote_action_rshell` <a name="reset_remote_action_rshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetRemoteActionRshell"></a>

```python
def reset_remote_action_rshell() -> None
```

##### `reset_scripts` <a name="reset_scripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetScripts"></a>

```python
def reset_scripts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference">ActionExecutionPolicyScopeKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.remoteActionRshell">remote_action_rshell</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference">ActionExecutionPolicyScopeRemoteActionRshellOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.scripts">scripts</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference">ActionExecutionPolicyScopeScriptsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.kubernetesInput">kubernetes_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.remoteActionRshellInput">remote_action_rshell_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.scriptsInput">scripts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kubernetes`<sup>Required</sup> <a name="kubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.kubernetes"></a>

```python
kubernetes: ActionExecutionPolicyScopeKubernetesOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference">ActionExecutionPolicyScopeKubernetesOutputReference</a>

---

##### `remote_action_rshell`<sup>Required</sup> <a name="remote_action_rshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.remoteActionRshell"></a>

```python
remote_action_rshell: ActionExecutionPolicyScopeRemoteActionRshellOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference">ActionExecutionPolicyScopeRemoteActionRshellOutputReference</a>

---

##### `scripts`<sup>Required</sup> <a name="scripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.scripts"></a>

```python
scripts: ActionExecutionPolicyScopeScriptsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference">ActionExecutionPolicyScopeScriptsOutputReference</a>

---

##### `kubernetes_input`<sup>Optional</sup> <a name="kubernetes_input" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.kubernetesInput"></a>

```python
kubernetes_input: IResolvable | ActionExecutionPolicyScopeKubernetes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a>

---

##### `remote_action_rshell_input`<sup>Optional</sup> <a name="remote_action_rshell_input" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.remoteActionRshellInput"></a>

```python
remote_action_rshell_input: IResolvable | ActionExecutionPolicyScopeRemoteActionRshell
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a>

---

##### `scripts_input`<sup>Optional</sup> <a name="scripts_input" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.scriptsInput"></a>

```python
scripts_input: IResolvable | ActionExecutionPolicyScopeScripts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ActionExecutionPolicyScope
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a>

---


### ActionExecutionPolicyScopeRemoteActionRshellOutputReference <a name="ActionExecutionPolicyScopeRemoteActionRshellOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.resetRule">reset_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rule` <a name="put_rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.putRule"></a>

```python
def put_rule(
  value: IResolvable | typing.List[ActionExecutionPolicyScopeRemoteActionRshellRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.putRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>]

---

##### `reset_rule` <a name="reset_rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.resetRule"></a>

```python
def reset_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList">ActionExecutionPolicyScopeRemoteActionRshellRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.ruleInput">rule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.rule"></a>

```python
rule: ActionExecutionPolicyScopeRemoteActionRshellRuleList
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList">ActionExecutionPolicyScopeRemoteActionRshellRuleList</a>

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.ruleInput"></a>

```python
rule_input: IResolvable | typing.List[ActionExecutionPolicyScopeRemoteActionRshellRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ActionExecutionPolicyScopeRemoteActionRshell
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a>

---


### ActionExecutionPolicyScopeRemoteActionRshellRuleList <a name="ActionExecutionPolicyScopeRemoteActionRshellRuleList" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ActionExecutionPolicyScopeRemoteActionRshellRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>]

---


### ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference <a name="ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.accessInput">access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.targetPathsInput">target_paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.access">access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.targetPaths">target_paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_input`<sup>Optional</sup> <a name="access_input" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.accessInput"></a>

```python
access_input: str
```

- *Type:* str

---

##### `target_paths_input`<sup>Optional</sup> <a name="target_paths_input" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.targetPathsInput"></a>

```python
target_paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.access"></a>

```python
access: str
```

- *Type:* str

---

##### `target_paths`<sup>Required</sup> <a name="target_paths" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.targetPaths"></a>

```python
target_paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ActionExecutionPolicyScopeRemoteActionRshellRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>

---


### ActionExecutionPolicyScopeScriptsOutputReference <a name="ActionExecutionPolicyScopeScriptsOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.resetRule">reset_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rule` <a name="put_rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.putRule"></a>

```python
def put_rule(
  value: IResolvable | typing.List[ActionExecutionPolicyScopeScriptsRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.putRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>]

---

##### `reset_rule` <a name="reset_rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.resetRule"></a>

```python
def reset_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList">ActionExecutionPolicyScopeScriptsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.ruleInput">rule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.rule"></a>

```python
rule: ActionExecutionPolicyScopeScriptsRuleList
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList">ActionExecutionPolicyScopeScriptsRuleList</a>

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.ruleInput"></a>

```python
rule_input: IResolvable | typing.List[ActionExecutionPolicyScopeScriptsRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ActionExecutionPolicyScopeScripts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a>

---


### ActionExecutionPolicyScopeScriptsRuleList <a name="ActionExecutionPolicyScopeScriptsRuleList" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ActionExecutionPolicyScopeScriptsRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ActionExecutionPolicyScopeScriptsRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>]

---


### ActionExecutionPolicyScopeScriptsRuleOutputReference <a name="ActionExecutionPolicyScopeScriptsRuleOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.targetScriptNamesInput">target_script_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.targetScriptNames">target_script_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_script_names_input`<sup>Optional</sup> <a name="target_script_names_input" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.targetScriptNamesInput"></a>

```python
target_script_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_script_names`<sup>Required</sup> <a name="target_script_names" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.targetScriptNames"></a>

```python
target_script_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ActionExecutionPolicyScopeScriptsRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>

---


### ActionExecutionPolicyTargetList <a name="ActionExecutionPolicyTargetList" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicyTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ActionExecutionPolicyTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ActionExecutionPolicyTarget]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>]

---


### ActionExecutionPolicyTargetOutputReference <a name="ActionExecutionPolicyTargetOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import action_execution_policy

actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.agentTagsInput">agent_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.agentTags">agent_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_tags_input`<sup>Optional</sup> <a name="agent_tags_input" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.agentTagsInput"></a>

```python
agent_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `agent_tags`<sup>Required</sup> <a name="agent_tags" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.agentTags"></a>

```python
agent_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ActionExecutionPolicyTarget
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>

---



