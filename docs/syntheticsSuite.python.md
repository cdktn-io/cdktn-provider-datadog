# `syntheticsSuite` Submodule <a name="`syntheticsSuite` Submodule" id="@cdktn/provider-datadog.syntheticsSuite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsSuite <a name="SyntheticsSuite" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/synthetics_suite datadog_synthetics_suite}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer"></a>

```python
from cdktn_provider_datadog import synthetics_suite

syntheticsSuite.SyntheticsSuite(
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
  message: str = None,
  options: IResolvable | typing.List[SyntheticsSuiteOptions] = None,
  tags: typing.List[str] = None,
  tests: IResolvable | typing.List[SyntheticsSuiteTests] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the Synthetics suite. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.message">message</a></code> | <code>str</code> | Message of the Synthetics suite. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.options">options</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>]</code> | options block. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | A set of tags to associate with your synthetics suite. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.tests">tests</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>]</code> | tests block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.name"></a>

- *Type:* str

Name of the Synthetics suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/synthetics_suite#name SyntheticsSuite#name}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.message"></a>

- *Type:* str

Message of the Synthetics suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/synthetics_suite#message SyntheticsSuite#message}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.options"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>]

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/synthetics_suite#options SyntheticsSuite#options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

A set of tags to associate with your synthetics suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/synthetics_suite#tags SyntheticsSuite#tags}

---

##### `tests`<sup>Optional</sup> <a name="tests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.tests"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>]

tests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/synthetics_suite#tests SyntheticsSuite#tests}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putOptions">put_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putTests">put_tests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetMessage">reset_message</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetTests">reset_tests</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_options` <a name="put_options" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putOptions"></a>

```python
def put_options(
  value: IResolvable | typing.List[SyntheticsSuiteOptions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putOptions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>]

---

##### `put_tests` <a name="put_tests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putTests"></a>

```python
def put_tests(
  value: IResolvable | typing.List[SyntheticsSuiteTests]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putTests.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>]

---

##### `reset_message` <a name="reset_message" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetMessage"></a>

```python
def reset_message() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tests` <a name="reset_tests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetTests"></a>

```python
def reset_tests() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SyntheticsSuite resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isConstruct"></a>

```python
from cdktn_provider_datadog import synthetics_suite

syntheticsSuite.SyntheticsSuite.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformElement"></a>

```python
from cdktn_provider_datadog import synthetics_suite

syntheticsSuite.SyntheticsSuite.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformResource"></a>

```python
from cdktn_provider_datadog import synthetics_suite

syntheticsSuite.SyntheticsSuite.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import synthetics_suite

syntheticsSuite.SyntheticsSuite.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SyntheticsSuite resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SyntheticsSuite to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SyntheticsSuite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/synthetics_suite#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SyntheticsSuite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.options">options</a></code> | <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList">SyntheticsSuiteOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tests">tests</a></code> | <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList">SyntheticsSuiteTestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.optionsInput">options_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.testsInput">tests_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.options"></a>

```python
options: SyntheticsSuiteOptionsList
```

- *Type:* <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList">SyntheticsSuiteOptionsList</a>

---

##### `tests`<sup>Required</sup> <a name="tests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tests"></a>

```python
tests: SyntheticsSuiteTestsList
```

- *Type:* <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList">SyntheticsSuiteTestsList</a>

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.optionsInput"></a>

```python
options_input: IResolvable | typing.List[SyntheticsSuiteOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tests_input`<sup>Optional</sup> <a name="tests_input" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.testsInput"></a>

```python
tests_input: IResolvable | typing.List[SyntheticsSuiteTests]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsSuiteConfig <a name="SyntheticsSuiteConfig" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.Initializer"></a>

```python
from cdktn_provider_datadog import synthetics_suite

syntheticsSuite.SyntheticsSuiteConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  message: str = None,
  options: IResolvable | typing.List[SyntheticsSuiteOptions] = None,
  tags: typing.List[str] = None,
  tests: IResolvable | typing.List[SyntheticsSuiteTests] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.name">name</a></code> | <code>str</code> | Name of the Synthetics suite. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.message">message</a></code> | <code>str</code> | Message of the Synthetics suite. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.options">options</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>]</code> | options block. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | A set of tags to associate with your synthetics suite. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.tests">tests</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>]</code> | tests block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Synthetics suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/synthetics_suite#name SyntheticsSuite#name}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.message"></a>

```python
message: str
```

- *Type:* str

Message of the Synthetics suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/synthetics_suite#message SyntheticsSuite#message}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.options"></a>

```python
options: IResolvable | typing.List[SyntheticsSuiteOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>]

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/synthetics_suite#options SyntheticsSuite#options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A set of tags to associate with your synthetics suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/synthetics_suite#tags SyntheticsSuite#tags}

---

##### `tests`<sup>Optional</sup> <a name="tests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.tests"></a>

```python
tests: IResolvable | typing.List[SyntheticsSuiteTests]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>]

tests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/synthetics_suite#tests SyntheticsSuite#tests}

---

### SyntheticsSuiteOptions <a name="SyntheticsSuiteOptions" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions.Initializer"></a>

```python
from cdktn_provider_datadog import synthetics_suite

syntheticsSuite.SyntheticsSuiteOptions(
  alerting_threshold: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions.property.alertingThreshold">alerting_threshold</a></code> | <code>typing.Union[int, float]</code> | Alerting threshold for the suite. Value must be between 0.000000 and 1.000000. |

---

##### `alerting_threshold`<sup>Required</sup> <a name="alerting_threshold" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions.property.alertingThreshold"></a>

```python
alerting_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Alerting threshold for the suite. Value must be between 0.000000 and 1.000000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/synthetics_suite#alerting_threshold SyntheticsSuite#alerting_threshold}

---

### SyntheticsSuiteTests <a name="SyntheticsSuiteTests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests.Initializer"></a>

```python
from cdktn_provider_datadog import synthetics_suite

syntheticsSuite.SyntheticsSuiteTests(
  public_id: str,
  alerting_criticality: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests.property.publicId">public_id</a></code> | <code>str</code> | Public ID of the test. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests.property.alertingCriticality">alerting_criticality</a></code> | <code>str</code> | Alerting criticality for the test. Valid values are `ignore`, `critical`. |

---

##### `public_id`<sup>Required</sup> <a name="public_id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests.property.publicId"></a>

```python
public_id: str
```

- *Type:* str

Public ID of the test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/synthetics_suite#public_id SyntheticsSuite#public_id}

---

##### `alerting_criticality`<sup>Optional</sup> <a name="alerting_criticality" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests.property.alertingCriticality"></a>

```python
alerting_criticality: str
```

- *Type:* str

Alerting criticality for the test. Valid values are `ignore`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/synthetics_suite#alerting_criticality SyntheticsSuite#alerting_criticality}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsSuiteOptionsList <a name="SyntheticsSuiteOptionsList" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer"></a>

```python
from cdktn_provider_datadog import synthetics_suite

syntheticsSuite.SyntheticsSuiteOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SyntheticsSuiteOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SyntheticsSuiteOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>]

---


### SyntheticsSuiteOptionsOutputReference <a name="SyntheticsSuiteOptionsOutputReference" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import synthetics_suite

syntheticsSuite.SyntheticsSuiteOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.alertingThresholdInput">alerting_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.alertingThreshold">alerting_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alerting_threshold_input`<sup>Optional</sup> <a name="alerting_threshold_input" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.alertingThresholdInput"></a>

```python
alerting_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alerting_threshold`<sup>Required</sup> <a name="alerting_threshold" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.alertingThreshold"></a>

```python
alerting_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SyntheticsSuiteOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>

---


### SyntheticsSuiteTestsList <a name="SyntheticsSuiteTestsList" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer"></a>

```python
from cdktn_provider_datadog import synthetics_suite

syntheticsSuite.SyntheticsSuiteTestsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SyntheticsSuiteTestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SyntheticsSuiteTests]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>]

---


### SyntheticsSuiteTestsOutputReference <a name="SyntheticsSuiteTestsOutputReference" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import synthetics_suite

syntheticsSuite.SyntheticsSuiteTestsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.resetAlertingCriticality">reset_alerting_criticality</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alerting_criticality` <a name="reset_alerting_criticality" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.resetAlertingCriticality"></a>

```python
def reset_alerting_criticality() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.alertingCriticalityInput">alerting_criticality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.publicIdInput">public_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.alertingCriticality">alerting_criticality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.publicId">public_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alerting_criticality_input`<sup>Optional</sup> <a name="alerting_criticality_input" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.alertingCriticalityInput"></a>

```python
alerting_criticality_input: str
```

- *Type:* str

---

##### `public_id_input`<sup>Optional</sup> <a name="public_id_input" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.publicIdInput"></a>

```python
public_id_input: str
```

- *Type:* str

---

##### `alerting_criticality`<sup>Required</sup> <a name="alerting_criticality" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.alertingCriticality"></a>

```python
alerting_criticality: str
```

- *Type:* str

---

##### `public_id`<sup>Required</sup> <a name="public_id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.publicId"></a>

```python
public_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SyntheticsSuiteTests
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>

---



