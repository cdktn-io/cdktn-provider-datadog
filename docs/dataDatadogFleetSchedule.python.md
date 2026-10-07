# `dataDatadogFleetSchedule` Submodule <a name="`dataDatadogFleetSchedule` Submodule" id="@cdktn/provider-datadog.dataDatadogFleetSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogFleetSchedule <a name="DataDatadogFleetSchedule" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/data-sources/fleet_schedule datadog_fleet_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_fleet_schedule

dataDatadogFleetSchedule.DataDatadogFleetSchedule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | Unique identifier of the Fleet Automation schedule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.id"></a>

- *Type:* str

Unique identifier of the Fleet Automation schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/data-sources/fleet_schedule#id DataDatadogFleetSchedule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatadogFleetSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.isConstruct"></a>

```python
from cdktn_provider_datadog import data_datadog_fleet_schedule

dataDatadogFleetSchedule.DataDatadogFleetSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.isTerraformElement"></a>

```python
from cdktn_provider_datadog import data_datadog_fleet_schedule

dataDatadogFleetSchedule.DataDatadogFleetSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.isTerraformDataSource"></a>

```python
from cdktn_provider_datadog import data_datadog_fleet_schedule

dataDatadogFleetSchedule.DataDatadogFleetSchedule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import data_datadog_fleet_schedule

dataDatadogFleetSchedule.DataDatadogFleetSchedule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatadogFleetSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogFleetSchedule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogFleetSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/data-sources/fleet_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogFleetSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.isDefault">is_default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.nextRun">next_run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.notificationRule">notification_rule</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference">DataDatadogFleetScheduleNotificationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference">DataDatadogFleetScheduleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.versionToLatest">version_to_latest</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next_run`<sup>Required</sup> <a name="next_run" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.nextRun"></a>

```python
next_run: str
```

- *Type:* str

---

##### `notification_rule`<sup>Required</sup> <a name="notification_rule" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.notificationRule"></a>

```python
notification_rule: DataDatadogFleetScheduleNotificationRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference">DataDatadogFleetScheduleNotificationRuleOutputReference</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.rule"></a>

```python
rule: DataDatadogFleetScheduleRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference">DataDatadogFleetScheduleRuleOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `version_to_latest`<sup>Required</sup> <a name="version_to_latest" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.versionToLatest"></a>

```python
version_to_latest: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogFleetScheduleConfig <a name="DataDatadogFleetScheduleConfig" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_fleet_schedule

dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.id">id</a></code> | <code>str</code> | Unique identifier of the Fleet Automation schedule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Unique identifier of the Fleet Automation schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/data-sources/fleet_schedule#id DataDatadogFleetSchedule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatadogFleetScheduleNotificationRule <a name="DataDatadogFleetScheduleNotificationRule" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRule.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_fleet_schedule

dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRule()
```


### DataDatadogFleetScheduleRule <a name="DataDatadogFleetScheduleRule" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRule.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_fleet_schedule

dataDatadogFleetSchedule.DataDatadogFleetScheduleRule()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogFleetScheduleNotificationRuleOutputReference <a name="DataDatadogFleetScheduleNotificationRuleOutputReference" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_fleet_schedule

dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.property.handles">handles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRule">DataDatadogFleetScheduleNotificationRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `handles`<sup>Required</sup> <a name="handles" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.property.handles"></a>

```python
handles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogFleetScheduleNotificationRule
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRule">DataDatadogFleetScheduleNotificationRule</a>

---


### DataDatadogFleetScheduleRuleOutputReference <a name="DataDatadogFleetScheduleRuleOutputReference" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_fleet_schedule

dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.maintenanceWindowDuration">maintenance_window_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.startMaintenanceWindow">start_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRule">DataDatadogFleetScheduleRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maintenance_window_duration`<sup>Required</sup> <a name="maintenance_window_duration" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.maintenanceWindowDuration"></a>

```python
maintenance_window_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_maintenance_window`<sup>Required</sup> <a name="start_maintenance_window" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.startMaintenanceWindow"></a>

```python
start_maintenance_window: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogFleetScheduleRule
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRule">DataDatadogFleetScheduleRule</a>

---



