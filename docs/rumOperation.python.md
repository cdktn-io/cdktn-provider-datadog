# `rumOperation` Submodule <a name="`rumOperation` Submodule" id="@cdktn/provider-datadog.rumOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RumOperation <a name="RumOperation" id="@cdktn/provider-datadog.rumOperation.RumOperation"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation datadog_rum_operation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumOperation.RumOperation.Initializer"></a>

```python
from cdktn_provider_datadog import rum_operation

rumOperation.RumOperation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_id: str,
  name: str,
  steps: IResolvable | typing.List[RumOperationSteps],
  category: str = None,
  description: str = None,
  display_name: str = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | ID of the RUM application the operation belongs to. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.name">name</a></code> | <code>str</code> | Unique name of the operation within the organization. Must not contain spaces. Changing it recreates the operation. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.steps">steps</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps">RumOperationSteps</a>]</code> | Ordered steps defining how RUM events drive the operation lifecycle. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.category">category</a></code> | <code>str</code> | Category of the operation. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the operation. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human readable name of the operation. Defaults to `name`. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Tags attached to the operation. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.applicationId"></a>

- *Type:* str

ID of the RUM application the operation belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#application_id RumOperation#application_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.name"></a>

- *Type:* str

Unique name of the operation within the organization. Must not contain spaces. Changing it recreates the operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#name RumOperation#name}

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.steps"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps">RumOperationSteps</a>]

Ordered steps defining how RUM events drive the operation lifecycle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#steps RumOperation#steps}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.category"></a>

- *Type:* str

Category of the operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#category RumOperation#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.description"></a>

- *Type:* str

Description of the operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#description RumOperation#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.displayName"></a>

- *Type:* str

Human readable name of the operation. Defaults to `name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#display_name RumOperation#display_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.rumOperation.RumOperation.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Tags attached to the operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#tags RumOperation#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.putSteps">put_steps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.resetCategory">reset_category</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.rumOperation.RumOperation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.rumOperation.RumOperation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.rumOperation.RumOperation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.rumOperation.RumOperation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.rumOperation.RumOperation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.rumOperation.RumOperation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.rumOperation.RumOperation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.rumOperation.RumOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.rumOperation.RumOperation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.rumOperation.RumOperation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.rumOperation.RumOperation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.rumOperation.RumOperation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.rumOperation.RumOperation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.rumOperation.RumOperation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.rumOperation.RumOperation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.rumOperation.RumOperation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumOperation.RumOperation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumOperation.RumOperation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.rumOperation.RumOperation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumOperation.RumOperation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.rumOperation.RumOperation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.rumOperation.RumOperation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.rumOperation.RumOperation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.rumOperation.RumOperation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumOperation.RumOperation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_steps` <a name="put_steps" id="@cdktn/provider-datadog.rumOperation.RumOperation.putSteps"></a>

```python
def put_steps(
  value: IResolvable | typing.List[RumOperationSteps]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.rumOperation.RumOperation.putSteps.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps">RumOperationSteps</a>]

---

##### `reset_category` <a name="reset_category" id="@cdktn/provider-datadog.rumOperation.RumOperation.resetCategory"></a>

```python
def reset_category() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-datadog.rumOperation.RumOperation.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-datadog.rumOperation.RumOperation.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-datadog.rumOperation.RumOperation.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RumOperation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.rumOperation.RumOperation.isConstruct"></a>

```python
from cdktn_provider_datadog import rum_operation

rumOperation.RumOperation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumOperation.RumOperation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.rumOperation.RumOperation.isTerraformElement"></a>

```python
from cdktn_provider_datadog import rum_operation

rumOperation.RumOperation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumOperation.RumOperation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.rumOperation.RumOperation.isTerraformResource"></a>

```python
from cdktn_provider_datadog import rum_operation

rumOperation.RumOperation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumOperation.RumOperation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.rumOperation.RumOperation.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import rum_operation

rumOperation.RumOperation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RumOperation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.rumOperation.RumOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.rumOperation.RumOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RumOperation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.rumOperation.RumOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RumOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumOperation.RumOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RumOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.steps">steps</a></code> | <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList">RumOperationStepsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.stepsInput">steps_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps">RumOperationSteps</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.steps"></a>

```python
steps: RumOperationStepsList
```

- *Type:* <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList">RumOperationStepsList</a>

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `steps_input`<sup>Optional</sup> <a name="steps_input" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.stepsInput"></a>

```python
steps_input: IResolvable | typing.List[RumOperationSteps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps">RumOperationSteps</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.rumOperation.RumOperation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RumOperationConfig <a name="RumOperationConfig" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.Initializer"></a>

```python
from cdktn_provider_datadog import rum_operation

rumOperation.RumOperationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_id: str,
  name: str,
  steps: IResolvable | typing.List[RumOperationSteps],
  category: str = None,
  description: str = None,
  display_name: str = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.applicationId">application_id</a></code> | <code>str</code> | ID of the RUM application the operation belongs to. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.name">name</a></code> | <code>str</code> | Unique name of the operation within the organization. Must not contain spaces. Changing it recreates the operation. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.steps">steps</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps">RumOperationSteps</a>]</code> | Ordered steps defining how RUM events drive the operation lifecycle. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.category">category</a></code> | <code>str</code> | Category of the operation. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.description">description</a></code> | <code>str</code> | Description of the operation. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.displayName">display_name</a></code> | <code>str</code> | Human readable name of the operation. Defaults to `name`. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Tags attached to the operation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

ID of the RUM application the operation belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#application_id RumOperation#application_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Unique name of the operation within the organization. Must not contain spaces. Changing it recreates the operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#name RumOperation#name}

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.steps"></a>

```python
steps: IResolvable | typing.List[RumOperationSteps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps">RumOperationSteps</a>]

Ordered steps defining how RUM events drive the operation lifecycle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#steps RumOperation#steps}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.category"></a>

```python
category: str
```

- *Type:* str

Category of the operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#category RumOperation#category}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#description RumOperation#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human readable name of the operation. Defaults to `name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#display_name RumOperation#display_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.rumOperation.RumOperationConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Tags attached to the operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#tags RumOperation#tags}

---

### RumOperationSteps <a name="RumOperationSteps" id="@cdktn/provider-datadog.rumOperation.RumOperationSteps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.rumOperation.RumOperationSteps.Initializer"></a>

```python
from cdktn_provider_datadog import rum_operation

rumOperation.RumOperationSteps(
  type: str,
  composite: RumOperationStepsComposite = None,
  nodes: IResolvable | typing.List[RumOperationStepsNodes] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps.property.type">type</a></code> | <code>str</code> | Lifecycle transition triggered by this step. Valid values are `start`, `update`, `stop`, `error`, `abandoned`. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps.property.composite">composite</a></code> | <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite">RumOperationStepsComposite</a></code> | Rule combining several predicates into this step. Exactly one of `nodes` or `composite` must be set. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps.property.nodes">nodes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes">RumOperationStepsNodes</a>]</code> | Queries matched by this step. Exactly one of `nodes` or `composite` must be set. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.rumOperation.RumOperationSteps.property.type"></a>

```python
type: str
```

- *Type:* str

Lifecycle transition triggered by this step. Valid values are `start`, `update`, `stop`, `error`, `abandoned`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#type RumOperation#type}

---

##### `composite`<sup>Optional</sup> <a name="composite" id="@cdktn/provider-datadog.rumOperation.RumOperationSteps.property.composite"></a>

```python
composite: RumOperationStepsComposite
```

- *Type:* <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite">RumOperationStepsComposite</a>

Rule combining several predicates into this step. Exactly one of `nodes` or `composite` must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#composite RumOperation#composite}

---

##### `nodes`<sup>Optional</sup> <a name="nodes" id="@cdktn/provider-datadog.rumOperation.RumOperationSteps.property.nodes"></a>

```python
nodes: IResolvable | typing.List[RumOperationStepsNodes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes">RumOperationStepsNodes</a>]

Queries matched by this step. Exactly one of `nodes` or `composite` must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#nodes RumOperation#nodes}

---

### RumOperationStepsComposite <a name="RumOperationStepsComposite" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite.Initializer"></a>

```python
from cdktn_provider_datadog import rum_operation

rumOperation.RumOperationStepsComposite(
  kind: str,
  predicates: IResolvable | typing.List[RumOperationStepsCompositePredicates],
  max_window_ms: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite.property.kind">kind</a></code> | <code>str</code> | How the predicates combine. Valid values are `all_of`, `in_order`. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite.property.predicates">predicates</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates">RumOperationStepsCompositePredicates</a>]</code> | Predicates combined by the rule. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite.property.maxWindowMs">max_window_ms</a></code> | <code>typing.Union[int, float]</code> | Maximum time window, in milliseconds, in which all predicates must match. Value must be between 0 and 1800000. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite.property.kind"></a>

```python
kind: str
```

- *Type:* str

How the predicates combine. Valid values are `all_of`, `in_order`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#kind RumOperation#kind}

---

##### `predicates`<sup>Required</sup> <a name="predicates" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite.property.predicates"></a>

```python
predicates: IResolvable | typing.List[RumOperationStepsCompositePredicates]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates">RumOperationStepsCompositePredicates</a>]

Predicates combined by the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#predicates RumOperation#predicates}

---

##### `max_window_ms`<sup>Optional</sup> <a name="max_window_ms" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite.property.maxWindowMs"></a>

```python
max_window_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum time window, in milliseconds, in which all predicates must match. Value must be between 0 and 1800000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#max_window_ms RumOperation#max_window_ms}

---

### RumOperationStepsCompositePredicates <a name="RumOperationStepsCompositePredicates" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates.Initializer"></a>

```python
from cdktn_provider_datadog import rum_operation

rumOperation.RumOperationStepsCompositePredicates(
  query: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates.property.query">query</a></code> | <code>str</code> | RUM event search query. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates.property.query"></a>

```python
query: str
```

- *Type:* str

RUM event search query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#query RumOperation#query}

---

### RumOperationStepsNodes <a name="RumOperationStepsNodes" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes.Initializer"></a>

```python
from cdktn_provider_datadog import rum_operation

rumOperation.RumOperationStepsNodes(
  query: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes.property.query">query</a></code> | <code>str</code> | RUM event search query. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes.property.query"></a>

```python
query: str
```

- *Type:* str

RUM event search query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#query RumOperation#query}

---

## Classes <a name="Classes" id="Classes"></a>

### RumOperationStepsCompositeOutputReference <a name="RumOperationStepsCompositeOutputReference" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import rum_operation

rumOperation.RumOperationStepsCompositeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.putPredicates">put_predicates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.resetMaxWindowMs">reset_max_window_ms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_predicates` <a name="put_predicates" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.putPredicates"></a>

```python
def put_predicates(
  value: IResolvable | typing.List[RumOperationStepsCompositePredicates]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.putPredicates.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates">RumOperationStepsCompositePredicates</a>]

---

##### `reset_max_window_ms` <a name="reset_max_window_ms" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.resetMaxWindowMs"></a>

```python
def reset_max_window_ms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.predicates">predicates</a></code> | <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList">RumOperationStepsCompositePredicatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.maxWindowMsInput">max_window_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.predicatesInput">predicates_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates">RumOperationStepsCompositePredicates</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.maxWindowMs">max_window_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite">RumOperationStepsComposite</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `predicates`<sup>Required</sup> <a name="predicates" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.predicates"></a>

```python
predicates: RumOperationStepsCompositePredicatesList
```

- *Type:* <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList">RumOperationStepsCompositePredicatesList</a>

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `max_window_ms_input`<sup>Optional</sup> <a name="max_window_ms_input" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.maxWindowMsInput"></a>

```python
max_window_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `predicates_input`<sup>Optional</sup> <a name="predicates_input" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.predicatesInput"></a>

```python
predicates_input: IResolvable | typing.List[RumOperationStepsCompositePredicates]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates">RumOperationStepsCompositePredicates</a>]

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `max_window_ms`<sup>Required</sup> <a name="max_window_ms" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.maxWindowMs"></a>

```python
max_window_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RumOperationStepsComposite
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite">RumOperationStepsComposite</a>

---


### RumOperationStepsCompositePredicatesList <a name="RumOperationStepsCompositePredicatesList" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.Initializer"></a>

```python
from cdktn_provider_datadog import rum_operation

rumOperation.RumOperationStepsCompositePredicatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RumOperationStepsCompositePredicatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates">RumOperationStepsCompositePredicates</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RumOperationStepsCompositePredicates]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates">RumOperationStepsCompositePredicates</a>]

---


### RumOperationStepsCompositePredicatesOutputReference <a name="RumOperationStepsCompositePredicatesOutputReference" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import rum_operation

rumOperation.RumOperationStepsCompositePredicatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates">RumOperationStepsCompositePredicates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicatesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RumOperationStepsCompositePredicates
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates">RumOperationStepsCompositePredicates</a>

---


### RumOperationStepsList <a name="RumOperationStepsList" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.Initializer"></a>

```python
from cdktn_provider_datadog import rum_operation

rumOperation.RumOperationStepsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RumOperationStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps">RumOperationSteps</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RumOperationSteps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps">RumOperationSteps</a>]

---


### RumOperationStepsNodesList <a name="RumOperationStepsNodesList" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.Initializer"></a>

```python
from cdktn_provider_datadog import rum_operation

rumOperation.RumOperationStepsNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RumOperationStepsNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes">RumOperationStepsNodes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RumOperationStepsNodes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes">RumOperationStepsNodes</a>]

---


### RumOperationStepsNodesOutputReference <a name="RumOperationStepsNodesOutputReference" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import rum_operation

rumOperation.RumOperationStepsNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes">RumOperationStepsNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RumOperationStepsNodes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes">RumOperationStepsNodes</a>

---


### RumOperationStepsOutputReference <a name="RumOperationStepsOutputReference" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import rum_operation

rumOperation.RumOperationStepsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.putComposite">put_composite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.putNodes">put_nodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.resetComposite">reset_composite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.resetNodes">reset_nodes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_composite` <a name="put_composite" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.putComposite"></a>

```python
def put_composite(
  kind: str,
  predicates: IResolvable | typing.List[RumOperationStepsCompositePredicates],
  max_window_ms: typing.Union[int, float] = None
) -> None
```

###### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.putComposite.parameter.kind"></a>

- *Type:* str

How the predicates combine. Valid values are `all_of`, `in_order`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#kind RumOperation#kind}

---

###### `predicates`<sup>Required</sup> <a name="predicates" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.putComposite.parameter.predicates"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositePredicates">RumOperationStepsCompositePredicates</a>]

Predicates combined by the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#predicates RumOperation#predicates}

---

###### `max_window_ms`<sup>Optional</sup> <a name="max_window_ms" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.putComposite.parameter.maxWindowMs"></a>

- *Type:* typing.Union[int, float]

Maximum time window, in milliseconds, in which all predicates must match. Value must be between 0 and 1800000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation#max_window_ms RumOperation#max_window_ms}

---

##### `put_nodes` <a name="put_nodes" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.putNodes"></a>

```python
def put_nodes(
  value: IResolvable | typing.List[RumOperationStepsNodes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.putNodes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes">RumOperationStepsNodes</a>]

---

##### `reset_composite` <a name="reset_composite" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.resetComposite"></a>

```python
def reset_composite() -> None
```

##### `reset_nodes` <a name="reset_nodes" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.resetNodes"></a>

```python
def reset_nodes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.composite">composite</a></code> | <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference">RumOperationStepsCompositeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.nodes">nodes</a></code> | <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList">RumOperationStepsNodesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.compositeInput">composite_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite">RumOperationStepsComposite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.nodesInput">nodes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes">RumOperationStepsNodes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps">RumOperationSteps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `composite`<sup>Required</sup> <a name="composite" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.composite"></a>

```python
composite: RumOperationStepsCompositeOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsCompositeOutputReference">RumOperationStepsCompositeOutputReference</a>

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.nodes"></a>

```python
nodes: RumOperationStepsNodesList
```

- *Type:* <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodesList">RumOperationStepsNodesList</a>

---

##### `composite_input`<sup>Optional</sup> <a name="composite_input" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.compositeInput"></a>

```python
composite_input: IResolvable | RumOperationStepsComposite
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsComposite">RumOperationStepsComposite</a>

---

##### `nodes_input`<sup>Optional</sup> <a name="nodes_input" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.nodesInput"></a>

```python
nodes_input: IResolvable | typing.List[RumOperationStepsNodes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.rumOperation.RumOperationStepsNodes">RumOperationStepsNodes</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.rumOperation.RumOperationStepsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RumOperationSteps
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumOperation.RumOperationSteps">RumOperationSteps</a>

---



