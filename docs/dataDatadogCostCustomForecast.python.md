# `dataDatadogCostCustomForecast` Submodule <a name="`dataDatadogCostCustomForecast` Submodule" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogCostCustomForecast <a name="DataDatadogCostCustomForecast" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/cost_custom_forecast datadog_cost_custom_forecast}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_custom_forecast

dataDatadogCostCustomForecast.DataDatadogCostCustomForecast(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  budget_uid: str,
  entries: IResolvable | typing.List[DataDatadogCostCustomForecastEntries] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.budgetUid">budget_uid</a></code> | <code>str</code> | The UUID of the budget that this custom forecast belongs to. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.entries">entries</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries">DataDatadogCostCustomForecastEntries</a>]</code> | entries block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `budget_uid`<sup>Required</sup> <a name="budget_uid" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.budgetUid"></a>

- *Type:* str

The UUID of the budget that this custom forecast belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/cost_custom_forecast#budget_uid DataDatadogCostCustomForecast#budget_uid}

---

##### `entries`<sup>Optional</sup> <a name="entries" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.entries"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries">DataDatadogCostCustomForecastEntries</a>]

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/cost_custom_forecast#entries DataDatadogCostCustomForecast#entries}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.putEntries">put_entries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.resetEntries">reset_entries</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_entries` <a name="put_entries" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.putEntries"></a>

```python
def put_entries(
  value: IResolvable | typing.List[DataDatadogCostCustomForecastEntries]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.putEntries.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries">DataDatadogCostCustomForecastEntries</a>]

---

##### `reset_entries` <a name="reset_entries" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.resetEntries"></a>

```python
def reset_entries() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatadogCostCustomForecast resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isConstruct"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_custom_forecast

dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isTerraformElement"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_custom_forecast

dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isTerraformDataSource"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_custom_forecast

dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_custom_forecast

dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatadogCostCustomForecast resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogCostCustomForecast to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogCostCustomForecast that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/cost_custom_forecast#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogCostCustomForecast to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList">DataDatadogCostCustomForecastEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.budgetUidInput">budget_uid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.entriesInput">entries_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries">DataDatadogCostCustomForecastEntries</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.budgetUid">budget_uid</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.entries"></a>

```python
entries: DataDatadogCostCustomForecastEntriesList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList">DataDatadogCostCustomForecastEntriesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `budget_uid_input`<sup>Optional</sup> <a name="budget_uid_input" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.budgetUidInput"></a>

```python
budget_uid_input: str
```

- *Type:* str

---

##### `entries_input`<sup>Optional</sup> <a name="entries_input" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.entriesInput"></a>

```python
entries_input: IResolvable | typing.List[DataDatadogCostCustomForecastEntries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries">DataDatadogCostCustomForecastEntries</a>]

---

##### `budget_uid`<sup>Required</sup> <a name="budget_uid" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.budgetUid"></a>

```python
budget_uid: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogCostCustomForecastConfig <a name="DataDatadogCostCustomForecastConfig" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_custom_forecast

dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  budget_uid: str,
  entries: IResolvable | typing.List[DataDatadogCostCustomForecastEntries] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.budgetUid">budget_uid</a></code> | <code>str</code> | The UUID of the budget that this custom forecast belongs to. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.entries">entries</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries">DataDatadogCostCustomForecastEntries</a>]</code> | entries block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `budget_uid`<sup>Required</sup> <a name="budget_uid" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.budgetUid"></a>

```python
budget_uid: str
```

- *Type:* str

The UUID of the budget that this custom forecast belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/cost_custom_forecast#budget_uid DataDatadogCostCustomForecast#budget_uid}

---

##### `entries`<sup>Optional</sup> <a name="entries" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.entries"></a>

```python
entries: IResolvable | typing.List[DataDatadogCostCustomForecastEntries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries">DataDatadogCostCustomForecastEntries</a>]

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/cost_custom_forecast#entries DataDatadogCostCustomForecast#entries}

---

### DataDatadogCostCustomForecastEntries <a name="DataDatadogCostCustomForecastEntries" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_custom_forecast

dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries(
  tag_filters: IResolvable | typing.List[DataDatadogCostCustomForecastEntriesTagFilters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries.property.tagFilters">tag_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFilters">DataDatadogCostCustomForecastEntriesTagFilters</a>]</code> | tag_filters block. |

---

##### `tag_filters`<sup>Optional</sup> <a name="tag_filters" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries.property.tagFilters"></a>

```python
tag_filters: IResolvable | typing.List[DataDatadogCostCustomForecastEntriesTagFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFilters">DataDatadogCostCustomForecastEntriesTagFilters</a>]

tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/cost_custom_forecast#tag_filters DataDatadogCostCustomForecast#tag_filters}

---

### DataDatadogCostCustomForecastEntriesTagFilters <a name="DataDatadogCostCustomForecastEntriesTagFilters" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFilters.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_custom_forecast

dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFilters()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogCostCustomForecastEntriesList <a name="DataDatadogCostCustomForecastEntriesList" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_custom_forecast

dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogCostCustomForecastEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries">DataDatadogCostCustomForecastEntries</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatadogCostCustomForecastEntries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries">DataDatadogCostCustomForecastEntries</a>]

---


### DataDatadogCostCustomForecastEntriesOutputReference <a name="DataDatadogCostCustomForecastEntriesOutputReference" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_custom_forecast

dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.putTagFilters">put_tag_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.resetTagFilters">reset_tag_filters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tag_filters` <a name="put_tag_filters" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.putTagFilters"></a>

```python
def put_tag_filters(
  value: IResolvable | typing.List[DataDatadogCostCustomForecastEntriesTagFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.putTagFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFilters">DataDatadogCostCustomForecastEntriesTagFilters</a>]

---

##### `reset_tag_filters` <a name="reset_tag_filters" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.resetTagFilters"></a>

```python
def reset_tag_filters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.amount">amount</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.month">month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.tagFilters">tag_filters</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList">DataDatadogCostCustomForecastEntriesTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.tagFiltersInput">tag_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFilters">DataDatadogCostCustomForecastEntriesTagFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries">DataDatadogCostCustomForecastEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.amount"></a>

```python
amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag_filters`<sup>Required</sup> <a name="tag_filters" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.tagFilters"></a>

```python
tag_filters: DataDatadogCostCustomForecastEntriesTagFiltersList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList">DataDatadogCostCustomForecastEntriesTagFiltersList</a>

---

##### `tag_filters_input`<sup>Optional</sup> <a name="tag_filters_input" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.tagFiltersInput"></a>

```python
tag_filters_input: IResolvable | typing.List[DataDatadogCostCustomForecastEntriesTagFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFilters">DataDatadogCostCustomForecastEntriesTagFilters</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogCostCustomForecastEntries
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries">DataDatadogCostCustomForecastEntries</a>

---


### DataDatadogCostCustomForecastEntriesTagFiltersList <a name="DataDatadogCostCustomForecastEntriesTagFiltersList" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_custom_forecast

dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogCostCustomForecastEntriesTagFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFilters">DataDatadogCostCustomForecastEntriesTagFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatadogCostCustomForecastEntriesTagFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFilters">DataDatadogCostCustomForecastEntriesTagFilters</a>]

---


### DataDatadogCostCustomForecastEntriesTagFiltersOutputReference <a name="DataDatadogCostCustomForecastEntriesTagFiltersOutputReference" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_custom_forecast

dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFilters">DataDatadogCostCustomForecastEntriesTagFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogCostCustomForecastEntriesTagFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFilters">DataDatadogCostCustomForecastEntriesTagFilters</a>

---



