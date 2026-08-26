# `dataDatadogSyntheticsTest` Submodule <a name="`dataDatadogSyntheticsTest` Submodule" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogSyntheticsTest <a name="DataDatadogSyntheticsTest" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/synthetics_test datadog_synthetics_test}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTest(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  test_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.testId">test_id</a></code> | <code>str</code> | The synthetic test id or URL to search for. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/synthetics_test#id DataDatadogSyntheticsTest#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `test_id`<sup>Required</sup> <a name="test_id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.testId"></a>

- *Type:* str

The synthetic test id or URL to search for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/synthetics_test#test_id DataDatadogSyntheticsTest#test_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/synthetics_test#id DataDatadogSyntheticsTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatadogSyntheticsTest resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isConstruct"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isTerraformElement"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isTerraformDataSource"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatadogSyntheticsTest resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogSyntheticsTest to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogSyntheticsTest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/synthetics_test#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogSyntheticsTest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.deviceIds">device_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.locations">locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.mobileOptionsList">mobile_options_list</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList">DataDatadogSyntheticsTestMobileOptionsListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.monitorId">monitor_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.optionsList">options_list</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList">DataDatadogSyntheticsTestOptionsListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.subtype">subtype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.testIdInput">test_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.testId">test_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `device_ids`<sup>Required</sup> <a name="device_ids" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.deviceIds"></a>

```python
device_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `mobile_options_list`<sup>Required</sup> <a name="mobile_options_list" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.mobileOptionsList"></a>

```python
mobile_options_list: DataDatadogSyntheticsTestMobileOptionsListStructList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList">DataDatadogSyntheticsTestMobileOptionsListStructList</a>

---

##### `monitor_id`<sup>Required</sup> <a name="monitor_id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.monitorId"></a>

```python
monitor_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `options_list`<sup>Required</sup> <a name="options_list" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.optionsList"></a>

```python
options_list: DataDatadogSyntheticsTestOptionsListStructList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList">DataDatadogSyntheticsTestOptionsListStructList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.subtype"></a>

```python
subtype: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `test_id_input`<sup>Optional</sup> <a name="test_id_input" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.testIdInput"></a>

```python
test_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `test_id`<sup>Required</sup> <a name="test_id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.testId"></a>

```python
test_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogSyntheticsTestConfig <a name="DataDatadogSyntheticsTestConfig" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  test_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.testId">test_id</a></code> | <code>str</code> | The synthetic test id or URL to search for. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/synthetics_test#id DataDatadogSyntheticsTest#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `test_id`<sup>Required</sup> <a name="test_id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.testId"></a>

```python
test_id: str
```

- *Type:* str

The synthetic test id or URL to search for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/synthetics_test#test_id DataDatadogSyntheticsTest#test_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/synthetics_test#id DataDatadogSyntheticsTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatadogSyntheticsTestMobileOptionsListBindings <a name="DataDatadogSyntheticsTestMobileOptionsListBindings" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindings.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindings()
```


### DataDatadogSyntheticsTestMobileOptionsListCi <a name="DataDatadogSyntheticsTestMobileOptionsListCi" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCi.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCi()
```


### DataDatadogSyntheticsTestMobileOptionsListMobileApplication <a name="DataDatadogSyntheticsTestMobileOptionsListMobileApplication" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplication.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplication()
```


### DataDatadogSyntheticsTestMobileOptionsListMonitorOptions <a name="DataDatadogSyntheticsTestMobileOptionsListMonitorOptions" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptions.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptions()
```


### DataDatadogSyntheticsTestMobileOptionsListRetry <a name="DataDatadogSyntheticsTestMobileOptionsListRetry" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetry.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetry()
```


### DataDatadogSyntheticsTestMobileOptionsListScheduling <a name="DataDatadogSyntheticsTestMobileOptionsListScheduling" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListScheduling.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListScheduling()
```


### DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes <a name="DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes()
```


### DataDatadogSyntheticsTestMobileOptionsListStruct <a name="DataDatadogSyntheticsTestMobileOptionsListStruct" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStruct.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStruct()
```


### DataDatadogSyntheticsTestOptionsListCi <a name="DataDatadogSyntheticsTestOptionsListCi" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCi.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCi()
```


### DataDatadogSyntheticsTestOptionsListMonitorOptions <a name="DataDatadogSyntheticsTestOptionsListMonitorOptions" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptions.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptions()
```


### DataDatadogSyntheticsTestOptionsListRetry <a name="DataDatadogSyntheticsTestOptionsListRetry" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetry.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetry()
```


### DataDatadogSyntheticsTestOptionsListRumSettings <a name="DataDatadogSyntheticsTestOptionsListRumSettings" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettings.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettings()
```


### DataDatadogSyntheticsTestOptionsListScheduling <a name="DataDatadogSyntheticsTestOptionsListScheduling" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListScheduling.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListScheduling()
```


### DataDatadogSyntheticsTestOptionsListSchedulingTimeframes <a name="DataDatadogSyntheticsTestOptionsListSchedulingTimeframes" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframes.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframes()
```


### DataDatadogSyntheticsTestOptionsListStruct <a name="DataDatadogSyntheticsTestOptionsListStruct" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStruct.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStruct()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogSyntheticsTestMobileOptionsListBindingsList <a name="DataDatadogSyntheticsTestMobileOptionsListBindingsList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference <a name="DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.principals">principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.relation">relation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindings">DataDatadogSyntheticsTestMobileOptionsListBindings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `relation`<sup>Required</sup> <a name="relation" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.relation"></a>

```python
relation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSyntheticsTestMobileOptionsListBindings
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindings">DataDatadogSyntheticsTestMobileOptionsListBindings</a>

---


### DataDatadogSyntheticsTestMobileOptionsListCiList <a name="DataDatadogSyntheticsTestMobileOptionsListCiList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSyntheticsTestMobileOptionsListCiOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSyntheticsTestMobileOptionsListCiOutputReference <a name="DataDatadogSyntheticsTestMobileOptionsListCiOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.property.executionRule">execution_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCi">DataDatadogSyntheticsTestMobileOptionsListCi</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_rule`<sup>Required</sup> <a name="execution_rule" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.property.executionRule"></a>

```python
execution_rule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSyntheticsTestMobileOptionsListCi
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCi">DataDatadogSyntheticsTestMobileOptionsListCi</a>

---


### DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList <a name="DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference <a name="DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.referenceId">reference_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.referenceType">reference_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplication">DataDatadogSyntheticsTestMobileOptionsListMobileApplication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `reference_id`<sup>Required</sup> <a name="reference_id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.referenceId"></a>

```python
reference_id: str
```

- *Type:* str

---

##### `reference_type`<sup>Required</sup> <a name="reference_type" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.referenceType"></a>

```python
reference_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSyntheticsTestMobileOptionsListMobileApplication
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplication">DataDatadogSyntheticsTestMobileOptionsListMobileApplication</a>

---


### DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList <a name="DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference <a name="DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.escalationMessage">escalation_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.notificationPresetName">notification_preset_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.renotifyInterval">renotify_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.renotifyOccurrences">renotify_occurrences</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptions">DataDatadogSyntheticsTestMobileOptionsListMonitorOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `escalation_message`<sup>Required</sup> <a name="escalation_message" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.escalationMessage"></a>

```python
escalation_message: str
```

- *Type:* str

---

##### `notification_preset_name`<sup>Required</sup> <a name="notification_preset_name" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.notificationPresetName"></a>

```python
notification_preset_name: str
```

- *Type:* str

---

##### `renotify_interval`<sup>Required</sup> <a name="renotify_interval" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.renotifyInterval"></a>

```python
renotify_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `renotify_occurrences`<sup>Required</sup> <a name="renotify_occurrences" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.renotifyOccurrences"></a>

```python
renotify_occurrences: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSyntheticsTestMobileOptionsListMonitorOptions
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptions">DataDatadogSyntheticsTestMobileOptionsListMonitorOptions</a>

---


### DataDatadogSyntheticsTestMobileOptionsListRetryList <a name="DataDatadogSyntheticsTestMobileOptionsListRetryList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference <a name="DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetry">DataDatadogSyntheticsTestMobileOptionsListRetry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSyntheticsTestMobileOptionsListRetry
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetry">DataDatadogSyntheticsTestMobileOptionsListRetry</a>

---


### DataDatadogSyntheticsTestMobileOptionsListSchedulingList <a name="DataDatadogSyntheticsTestMobileOptionsListSchedulingList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference <a name="DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.timeframes">timeframes</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList">DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListScheduling">DataDatadogSyntheticsTestMobileOptionsListScheduling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `timeframes`<sup>Required</sup> <a name="timeframes" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.timeframes"></a>

```python
timeframes: DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList">DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList</a>

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSyntheticsTestMobileOptionsListScheduling
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListScheduling">DataDatadogSyntheticsTestMobileOptionsListScheduling</a>

---


### DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList <a name="DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference <a name="DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.to">to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes">DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.to"></a>

```python
to: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes">DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes</a>

---


### DataDatadogSyntheticsTestMobileOptionsListStructList <a name="DataDatadogSyntheticsTestMobileOptionsListStructList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSyntheticsTestMobileOptionsListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSyntheticsTestMobileOptionsListStructOutputReference <a name="DataDatadogSyntheticsTestMobileOptionsListStructOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.allowApplicationCrash">allow_application_crash</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.bindings">bindings</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList">DataDatadogSyntheticsTestMobileOptionsListBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.ci">ci</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList">DataDatadogSyntheticsTestMobileOptionsListCiList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.defaultStepTimeout">default_step_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.deviceIds">device_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.disableAutoAcceptAlert">disable_auto_accept_alert</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.minFailureDuration">min_failure_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.mobileApplication">mobile_application</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList">DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.monitorName">monitor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.monitorOptions">monitor_options</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList">DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.monitorPriority">monitor_priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.noScreenshot">no_screenshot</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.restrictedRoles">restricted_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList">DataDatadogSyntheticsTestMobileOptionsListRetryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.scheduling">scheduling</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList">DataDatadogSyntheticsTestMobileOptionsListSchedulingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.tickEvery">tick_every</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStruct">DataDatadogSyntheticsTestMobileOptionsListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_application_crash`<sup>Required</sup> <a name="allow_application_crash" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.allowApplicationCrash"></a>

```python
allow_application_crash: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `bindings`<sup>Required</sup> <a name="bindings" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.bindings"></a>

```python
bindings: DataDatadogSyntheticsTestMobileOptionsListBindingsList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList">DataDatadogSyntheticsTestMobileOptionsListBindingsList</a>

---

##### `ci`<sup>Required</sup> <a name="ci" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.ci"></a>

```python
ci: DataDatadogSyntheticsTestMobileOptionsListCiList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList">DataDatadogSyntheticsTestMobileOptionsListCiList</a>

---

##### `default_step_timeout`<sup>Required</sup> <a name="default_step_timeout" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.defaultStepTimeout"></a>

```python
default_step_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `device_ids`<sup>Required</sup> <a name="device_ids" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.deviceIds"></a>

```python
device_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disable_auto_accept_alert`<sup>Required</sup> <a name="disable_auto_accept_alert" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.disableAutoAcceptAlert"></a>

```python
disable_auto_accept_alert: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `min_failure_duration`<sup>Required</sup> <a name="min_failure_duration" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.minFailureDuration"></a>

```python
min_failure_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mobile_application`<sup>Required</sup> <a name="mobile_application" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.mobileApplication"></a>

```python
mobile_application: DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList">DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList</a>

---

##### `monitor_name`<sup>Required</sup> <a name="monitor_name" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.monitorName"></a>

```python
monitor_name: str
```

- *Type:* str

---

##### `monitor_options`<sup>Required</sup> <a name="monitor_options" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.monitorOptions"></a>

```python
monitor_options: DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList">DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList</a>

---

##### `monitor_priority`<sup>Required</sup> <a name="monitor_priority" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.monitorPriority"></a>

```python
monitor_priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `no_screenshot`<sup>Required</sup> <a name="no_screenshot" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.noScreenshot"></a>

```python
no_screenshot: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `restricted_roles`<sup>Required</sup> <a name="restricted_roles" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.restrictedRoles"></a>

```python
restricted_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.retry"></a>

```python
retry: DataDatadogSyntheticsTestMobileOptionsListRetryList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList">DataDatadogSyntheticsTestMobileOptionsListRetryList</a>

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.scheduling"></a>

```python
scheduling: DataDatadogSyntheticsTestMobileOptionsListSchedulingList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList">DataDatadogSyntheticsTestMobileOptionsListSchedulingList</a>

---

##### `tick_every`<sup>Required</sup> <a name="tick_every" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.tickEvery"></a>

```python
tick_every: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSyntheticsTestMobileOptionsListStruct
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStruct">DataDatadogSyntheticsTestMobileOptionsListStruct</a>

---


### DataDatadogSyntheticsTestOptionsListCiList <a name="DataDatadogSyntheticsTestOptionsListCiList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSyntheticsTestOptionsListCiOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSyntheticsTestOptionsListCiOutputReference <a name="DataDatadogSyntheticsTestOptionsListCiOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.property.executionRule">execution_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCi">DataDatadogSyntheticsTestOptionsListCi</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_rule`<sup>Required</sup> <a name="execution_rule" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.property.executionRule"></a>

```python
execution_rule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSyntheticsTestOptionsListCi
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCi">DataDatadogSyntheticsTestOptionsListCi</a>

---


### DataDatadogSyntheticsTestOptionsListMonitorOptionsList <a name="DataDatadogSyntheticsTestOptionsListMonitorOptionsList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference <a name="DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.escalationMessage">escalation_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.notificationPresetName">notification_preset_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.renotifyInterval">renotify_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.renotifyOccurrences">renotify_occurrences</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptions">DataDatadogSyntheticsTestOptionsListMonitorOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `escalation_message`<sup>Required</sup> <a name="escalation_message" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.escalationMessage"></a>

```python
escalation_message: str
```

- *Type:* str

---

##### `notification_preset_name`<sup>Required</sup> <a name="notification_preset_name" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.notificationPresetName"></a>

```python
notification_preset_name: str
```

- *Type:* str

---

##### `renotify_interval`<sup>Required</sup> <a name="renotify_interval" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.renotifyInterval"></a>

```python
renotify_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `renotify_occurrences`<sup>Required</sup> <a name="renotify_occurrences" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.renotifyOccurrences"></a>

```python
renotify_occurrences: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSyntheticsTestOptionsListMonitorOptions
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptions">DataDatadogSyntheticsTestOptionsListMonitorOptions</a>

---


### DataDatadogSyntheticsTestOptionsListRetryList <a name="DataDatadogSyntheticsTestOptionsListRetryList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSyntheticsTestOptionsListRetryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSyntheticsTestOptionsListRetryOutputReference <a name="DataDatadogSyntheticsTestOptionsListRetryOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetry">DataDatadogSyntheticsTestOptionsListRetry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSyntheticsTestOptionsListRetry
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetry">DataDatadogSyntheticsTestOptionsListRetry</a>

---


### DataDatadogSyntheticsTestOptionsListRumSettingsList <a name="DataDatadogSyntheticsTestOptionsListRumSettingsList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference <a name="DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.clientTokenId">client_token_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettings">DataDatadogSyntheticsTestOptionsListRumSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `client_token_id`<sup>Required</sup> <a name="client_token_id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.clientTokenId"></a>

```python
client_token_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSyntheticsTestOptionsListRumSettings
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettings">DataDatadogSyntheticsTestOptionsListRumSettings</a>

---


### DataDatadogSyntheticsTestOptionsListSchedulingList <a name="DataDatadogSyntheticsTestOptionsListSchedulingList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSyntheticsTestOptionsListSchedulingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSyntheticsTestOptionsListSchedulingOutputReference <a name="DataDatadogSyntheticsTestOptionsListSchedulingOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.timeframes">timeframes</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList">DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListScheduling">DataDatadogSyntheticsTestOptionsListScheduling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `timeframes`<sup>Required</sup> <a name="timeframes" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.timeframes"></a>

```python
timeframes: DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList">DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList</a>

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSyntheticsTestOptionsListScheduling
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListScheduling">DataDatadogSyntheticsTestOptionsListScheduling</a>

---


### DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList <a name="DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference <a name="DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.to">to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframes">DataDatadogSyntheticsTestOptionsListSchedulingTimeframes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.to"></a>

```python
to: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSyntheticsTestOptionsListSchedulingTimeframes
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframes">DataDatadogSyntheticsTestOptionsListSchedulingTimeframes</a>

---


### DataDatadogSyntheticsTestOptionsListStructList <a name="DataDatadogSyntheticsTestOptionsListStructList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSyntheticsTestOptionsListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSyntheticsTestOptionsListStructOutputReference <a name="DataDatadogSyntheticsTestOptionsListStructOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_synthetics_test

dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.acceptSelfSigned">accept_self_signed</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.allowInsecure">allow_insecure</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.blockedRequestPatterns">blocked_request_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.captureNetworkPayloads">capture_network_payloads</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.checkCertificateRevocation">check_certificate_revocation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.ci">ci</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList">DataDatadogSyntheticsTestOptionsListCiList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.disableAiaIntermediateFetching">disable_aia_intermediate_fetching</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.disableCors">disable_cors</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.disableCsp">disable_csp</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.followRedirects">follow_redirects</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.httpVersion">http_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.ignoreCertificateValidation">ignore_certificate_validation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.ignoreServerCertificateError">ignore_server_certificate_error</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.initialNavigationTimeout">initial_navigation_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.minFailureDuration">min_failure_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.minLocationFailed">min_location_failed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.monitorName">monitor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.monitorOptions">monitor_options</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList">DataDatadogSyntheticsTestOptionsListMonitorOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.monitorPriority">monitor_priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.noScreenshot">no_screenshot</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.restrictedRoles">restricted_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList">DataDatadogSyntheticsTestOptionsListRetryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.rumSettings">rum_settings</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList">DataDatadogSyntheticsTestOptionsListRumSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.scheduling">scheduling</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList">DataDatadogSyntheticsTestOptionsListSchedulingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.tickEvery">tick_every</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStruct">DataDatadogSyntheticsTestOptionsListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accept_self_signed`<sup>Required</sup> <a name="accept_self_signed" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.acceptSelfSigned"></a>

```python
accept_self_signed: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `allow_insecure`<sup>Required</sup> <a name="allow_insecure" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.allowInsecure"></a>

```python
allow_insecure: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `blocked_request_patterns`<sup>Required</sup> <a name="blocked_request_patterns" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.blockedRequestPatterns"></a>

```python
blocked_request_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `capture_network_payloads`<sup>Required</sup> <a name="capture_network_payloads" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.captureNetworkPayloads"></a>

```python
capture_network_payloads: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `check_certificate_revocation`<sup>Required</sup> <a name="check_certificate_revocation" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.checkCertificateRevocation"></a>

```python
check_certificate_revocation: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `ci`<sup>Required</sup> <a name="ci" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.ci"></a>

```python
ci: DataDatadogSyntheticsTestOptionsListCiList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList">DataDatadogSyntheticsTestOptionsListCiList</a>

---

##### `disable_aia_intermediate_fetching`<sup>Required</sup> <a name="disable_aia_intermediate_fetching" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.disableAiaIntermediateFetching"></a>

```python
disable_aia_intermediate_fetching: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `disable_cors`<sup>Required</sup> <a name="disable_cors" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.disableCors"></a>

```python
disable_cors: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `disable_csp`<sup>Required</sup> <a name="disable_csp" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.disableCsp"></a>

```python
disable_csp: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `follow_redirects`<sup>Required</sup> <a name="follow_redirects" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.followRedirects"></a>

```python
follow_redirects: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `http_version`<sup>Required</sup> <a name="http_version" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.httpVersion"></a>

```python
http_version: str
```

- *Type:* str

---

##### `ignore_certificate_validation`<sup>Required</sup> <a name="ignore_certificate_validation" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.ignoreCertificateValidation"></a>

```python
ignore_certificate_validation: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `ignore_server_certificate_error`<sup>Required</sup> <a name="ignore_server_certificate_error" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.ignoreServerCertificateError"></a>

```python
ignore_server_certificate_error: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `initial_navigation_timeout`<sup>Required</sup> <a name="initial_navigation_timeout" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.initialNavigationTimeout"></a>

```python
initial_navigation_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_failure_duration`<sup>Required</sup> <a name="min_failure_duration" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.minFailureDuration"></a>

```python
min_failure_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_location_failed`<sup>Required</sup> <a name="min_location_failed" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.minLocationFailed"></a>

```python
min_location_failed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitor_name`<sup>Required</sup> <a name="monitor_name" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.monitorName"></a>

```python
monitor_name: str
```

- *Type:* str

---

##### `monitor_options`<sup>Required</sup> <a name="monitor_options" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.monitorOptions"></a>

```python
monitor_options: DataDatadogSyntheticsTestOptionsListMonitorOptionsList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList">DataDatadogSyntheticsTestOptionsListMonitorOptionsList</a>

---

##### `monitor_priority`<sup>Required</sup> <a name="monitor_priority" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.monitorPriority"></a>

```python
monitor_priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `no_screenshot`<sup>Required</sup> <a name="no_screenshot" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.noScreenshot"></a>

```python
no_screenshot: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `restricted_roles`<sup>Required</sup> <a name="restricted_roles" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.restrictedRoles"></a>

```python
restricted_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.retry"></a>

```python
retry: DataDatadogSyntheticsTestOptionsListRetryList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList">DataDatadogSyntheticsTestOptionsListRetryList</a>

---

##### `rum_settings`<sup>Required</sup> <a name="rum_settings" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.rumSettings"></a>

```python
rum_settings: DataDatadogSyntheticsTestOptionsListRumSettingsList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList">DataDatadogSyntheticsTestOptionsListRumSettingsList</a>

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.scheduling"></a>

```python
scheduling: DataDatadogSyntheticsTestOptionsListSchedulingList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList">DataDatadogSyntheticsTestOptionsListSchedulingList</a>

---

##### `tick_every`<sup>Required</sup> <a name="tick_every" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.tickEvery"></a>

```python
tick_every: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSyntheticsTestOptionsListStruct
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStruct">DataDatadogSyntheticsTestOptionsListStruct</a>

---



