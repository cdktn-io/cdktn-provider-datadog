# `dataDatadogFleetSchedules` Submodule <a name="`dataDatadogFleetSchedules` Submodule" id="@cdktn/provider-datadog.dataDatadogFleetSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogFleetSchedules <a name="DataDatadogFleetSchedules" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/data-sources/fleet_schedules datadog_fleet_schedules}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_fleet_schedules

dataDatadogFleetSchedules.DataDatadogFleetSchedules(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatadogFleetSchedules resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.isConstruct"></a>

```python
from cdktn_provider_datadog import data_datadog_fleet_schedules

dataDatadogFleetSchedules.DataDatadogFleetSchedules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.isTerraformElement"></a>

```python
from cdktn_provider_datadog import data_datadog_fleet_schedules

dataDatadogFleetSchedules.DataDatadogFleetSchedules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.isTerraformDataSource"></a>

```python
from cdktn_provider_datadog import data_datadog_fleet_schedules

dataDatadogFleetSchedules.DataDatadogFleetSchedules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import data_datadog_fleet_schedules

dataDatadogFleetSchedules.DataDatadogFleetSchedules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatadogFleetSchedules resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogFleetSchedules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogFleetSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/data-sources/fleet_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogFleetSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.schedules">schedules</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList">DataDatadogFleetSchedulesSchedulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.totalCount">total_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `schedules`<sup>Required</sup> <a name="schedules" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.schedules"></a>

```python
schedules: DataDatadogFleetSchedulesSchedulesList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList">DataDatadogFleetSchedulesSchedulesList</a>

---

##### `total_count`<sup>Required</sup> <a name="total_count" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.totalCount"></a>

```python
total_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogFleetSchedulesConfig <a name="DataDatadogFleetSchedulesConfig" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesConfig.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_fleet_schedules

dataDatadogFleetSchedules.DataDatadogFleetSchedulesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

### DataDatadogFleetSchedulesSchedules <a name="DataDatadogFleetSchedulesSchedules" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedules.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_fleet_schedules

dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedules()
```


### DataDatadogFleetSchedulesSchedulesNotificationRule <a name="DataDatadogFleetSchedulesSchedulesNotificationRule" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRule.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_fleet_schedules

dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRule()
```


### DataDatadogFleetSchedulesSchedulesRule <a name="DataDatadogFleetSchedulesSchedulesRule" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRule.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_fleet_schedules

dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRule()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogFleetSchedulesSchedulesList <a name="DataDatadogFleetSchedulesSchedulesList" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_fleet_schedules

dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogFleetSchedulesSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference <a name="DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_fleet_schedules

dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.property.handles">handles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRule">DataDatadogFleetSchedulesSchedulesNotificationRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `handles`<sup>Required</sup> <a name="handles" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.property.handles"></a>

```python
handles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogFleetSchedulesSchedulesNotificationRule
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRule">DataDatadogFleetSchedulesSchedulesNotificationRule</a>

---


### DataDatadogFleetSchedulesSchedulesOutputReference <a name="DataDatadogFleetSchedulesSchedulesOutputReference" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_fleet_schedules

dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.isDefault">is_default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.nextRun">next_run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.notificationRule">notification_rule</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference">DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference">DataDatadogFleetSchedulesSchedulesRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.versionToLatest">version_to_latest</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedules">DataDatadogFleetSchedulesSchedules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next_run`<sup>Required</sup> <a name="next_run" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.nextRun"></a>

```python
next_run: str
```

- *Type:* str

---

##### `notification_rule`<sup>Required</sup> <a name="notification_rule" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.notificationRule"></a>

```python
notification_rule: DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference">DataDatadogFleetSchedulesSchedulesNotificationRuleOutputReference</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.rule"></a>

```python
rule: DataDatadogFleetSchedulesSchedulesRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference">DataDatadogFleetSchedulesSchedulesRuleOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `version_to_latest`<sup>Required</sup> <a name="version_to_latest" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.versionToLatest"></a>

```python
version_to_latest: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogFleetSchedulesSchedules
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedules">DataDatadogFleetSchedulesSchedules</a>

---


### DataDatadogFleetSchedulesSchedulesRuleOutputReference <a name="DataDatadogFleetSchedulesSchedulesRuleOutputReference" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_fleet_schedules

dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.property.maintenanceWindowDuration">maintenance_window_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.property.startMaintenanceWindow">start_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRule">DataDatadogFleetSchedulesSchedulesRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maintenance_window_duration`<sup>Required</sup> <a name="maintenance_window_duration" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.property.maintenanceWindowDuration"></a>

```python
maintenance_window_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_maintenance_window`<sup>Required</sup> <a name="start_maintenance_window" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.property.startMaintenanceWindow"></a>

```python
start_maintenance_window: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogFleetSchedulesSchedulesRule
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogFleetSchedules.DataDatadogFleetSchedulesSchedulesRule">DataDatadogFleetSchedulesSchedulesRule</a>

---



