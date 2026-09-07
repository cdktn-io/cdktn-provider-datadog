# `statusPageComponent` Submodule <a name="`statusPageComponent` Submodule" id="@cdktn/provider-datadog.statusPageComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StatusPageComponent <a name="StatusPageComponent" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_component datadog_status_page_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer"></a>

```python
from cdktn_provider_datadog import status_page_component

statusPageComponent.StatusPageComponent(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  page_id: str,
  position: typing.Union[int, float],
  type: str,
  components: IResolvable | typing.List[StatusPageComponentComponents] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the component. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.pageId">page_id</a></code> | <code>str</code> | The ID of the status page this component belongs to. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.position">position</a></code> | <code>typing.Union[int, float]</code> | The position of the component on the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the component. Valid values are: component, group. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.components">components</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponents">StatusPageComponentComponents</a>]</code> | The sub-components of a component of type `group`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.name"></a>

- *Type:* str

The name of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_component#name StatusPageComponent#name}

---

##### `page_id`<sup>Required</sup> <a name="page_id" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.pageId"></a>

- *Type:* str

The ID of the status page this component belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_component#page_id StatusPageComponent#page_id}

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.position"></a>

- *Type:* typing.Union[int, float]

The position of the component on the status page.

Must be between `0` and the current number of existing components on the page, inclusive (that is, it can append one past the current highest position, but cannot skip ahead further or be negative). A `position` value that depends on a sibling component being created first requires an explicit `depends_on` on that sibling to guarantee creation order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_component#position StatusPageComponent#position}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.type"></a>

- *Type:* str

The type of the component. Valid values are: component, group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_component#type StatusPageComponent#type}

---

##### `components`<sup>Optional</sup> <a name="components" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.Initializer.parameter.components"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponents">StatusPageComponentComponents</a>]

The sub-components of a component of type `group`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_component#components StatusPageComponent#components}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.putComponents">put_components</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.resetComponents">reset_components</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_components` <a name="put_components" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.putComponents"></a>

```python
def put_components(
  value: IResolvable | typing.List[StatusPageComponentComponents]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.putComponents.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponents">StatusPageComponentComponents</a>]

---

##### `reset_components` <a name="reset_components" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.resetComponents"></a>

```python
def reset_components() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a StatusPageComponent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.isConstruct"></a>

```python
from cdktn_provider_datadog import status_page_component

statusPageComponent.StatusPageComponent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.isTerraformElement"></a>

```python
from cdktn_provider_datadog import status_page_component

statusPageComponent.StatusPageComponent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.isTerraformResource"></a>

```python
from cdktn_provider_datadog import status_page_component

statusPageComponent.StatusPageComponent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import status_page_component

statusPageComponent.StatusPageComponent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a StatusPageComponent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StatusPageComponent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StatusPageComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_component#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StatusPageComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.components">components</a></code> | <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList">StatusPageComponentComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.componentsInput">components_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponents">StatusPageComponentComponents</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.pageIdInput">page_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.pageId">page_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.components"></a>

```python
components: StatusPageComponentComponentsList
```

- *Type:* <a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList">StatusPageComponentComponentsList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `components_input`<sup>Optional</sup> <a name="components_input" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.componentsInput"></a>

```python
components_input: IResolvable | typing.List[StatusPageComponentComponents]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponents">StatusPageComponentComponents</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `page_id_input`<sup>Optional</sup> <a name="page_id_input" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.pageIdInput"></a>

```python
page_id_input: str
```

- *Type:* str

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `page_id`<sup>Required</sup> <a name="page_id" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.pageId"></a>

```python
page_id: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StatusPageComponentComponents <a name="StatusPageComponentComponents" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponents.Initializer"></a>

```python
from cdktn_provider_datadog import status_page_component

statusPageComponent.StatusPageComponentComponents(
  name: str,
  type: str,
  position: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponents.property.name">name</a></code> | <code>str</code> | The name of the sub-component. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponents.property.type">type</a></code> | <code>str</code> | The type of the sub-component. Valid value is: component. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponents.property.position">position</a></code> | <code>typing.Union[int, float]</code> | The position of the sub-component within the group. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponents.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the sub-component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_component#name StatusPageComponent#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponents.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the sub-component. Valid value is: component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_component#type StatusPageComponent#type}

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponents.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The position of the sub-component within the group.

Either every sub-component in the group must set this, or none of them should - if all are omitted, position is inferred from declaration order for a new group, or defaults to `0` (i.e. the front of the group, shifting existing siblings back) when adding a single new child to an existing group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_component#position StatusPageComponent#position}

---

### StatusPageComponentConfig <a name="StatusPageComponentConfig" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig.Initializer"></a>

```python
from cdktn_provider_datadog import status_page_component

statusPageComponent.StatusPageComponentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  page_id: str,
  position: typing.Union[int, float],
  type: str,
  components: IResolvable | typing.List[StatusPageComponentComponents] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig.property.name">name</a></code> | <code>str</code> | The name of the component. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig.property.pageId">page_id</a></code> | <code>str</code> | The ID of the status page this component belongs to. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig.property.position">position</a></code> | <code>typing.Union[int, float]</code> | The position of the component on the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig.property.type">type</a></code> | <code>str</code> | The type of the component. Valid values are: component, group. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig.property.components">components</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponents">StatusPageComponentComponents</a>]</code> | The sub-components of a component of type `group`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_component#name StatusPageComponent#name}

---

##### `page_id`<sup>Required</sup> <a name="page_id" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig.property.pageId"></a>

```python
page_id: str
```

- *Type:* str

The ID of the status page this component belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_component#page_id StatusPageComponent#page_id}

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The position of the component on the status page.

Must be between `0` and the current number of existing components on the page, inclusive (that is, it can append one past the current highest position, but cannot skip ahead further or be negative). A `position` value that depends on a sibling component being created first requires an explicit `depends_on` on that sibling to guarantee creation order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_component#position StatusPageComponent#position}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the component. Valid values are: component, group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_component#type StatusPageComponent#type}

---

##### `components`<sup>Optional</sup> <a name="components" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentConfig.property.components"></a>

```python
components: IResolvable | typing.List[StatusPageComponentComponents]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponents">StatusPageComponentComponents</a>]

The sub-components of a component of type `group`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_component#components StatusPageComponent#components}

---

## Classes <a name="Classes" id="Classes"></a>

### StatusPageComponentComponentsList <a name="StatusPageComponentComponentsList" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.Initializer"></a>

```python
from cdktn_provider_datadog import status_page_component

statusPageComponent.StatusPageComponentComponentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatusPageComponentComponentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponents">StatusPageComponentComponents</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[StatusPageComponentComponents]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponents">StatusPageComponentComponents</a>]

---


### StatusPageComponentComponentsOutputReference <a name="StatusPageComponentComponentsOutputReference" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import status_page_component

statusPageComponent.StatusPageComponentComponentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.resetPosition">reset_position</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_position` <a name="reset_position" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.resetPosition"></a>

```python
def reset_position() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponents">StatusPageComponentComponents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponentsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StatusPageComponentComponents
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.statusPageComponent.StatusPageComponentComponents">StatusPageComponentComponents</a>

---



