# `dataDatadogCostBudget` Submodule <a name="`dataDatadogCostBudget` Submodule" id="@cdktn/provider-datadog.dataDatadogCostBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogCostBudget <a name="DataDatadogCostBudget" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/cost_budget datadog_cost_budget}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_budget

dataDatadogCostBudget.DataDatadogCostBudget(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str,
  budget_line: IResolvable | typing.List[DataDatadogCostBudgetBudgetLine] = None,
  entries: IResolvable | typing.List[DataDatadogCostBudgetEntries] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.id">id</a></code> | <code>str</code> | The ID of the budget. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.budgetLine">budget_line</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine">DataDatadogCostBudgetBudgetLine</a>]</code> | budget_line block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.entries">entries</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries">DataDatadogCostBudgetEntries</a>]</code> | entries block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.id"></a>

- *Type:* str

The ID of the budget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/cost_budget#id DataDatadogCostBudget#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `budget_line`<sup>Optional</sup> <a name="budget_line" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.budgetLine"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine">DataDatadogCostBudgetBudgetLine</a>]

budget_line block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/cost_budget#budget_line DataDatadogCostBudget#budget_line}

---

##### `entries`<sup>Optional</sup> <a name="entries" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.entries"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries">DataDatadogCostBudgetEntries</a>]

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/cost_budget#entries DataDatadogCostBudget#entries}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.putBudgetLine">put_budget_line</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.putEntries">put_entries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.resetBudgetLine">reset_budget_line</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.resetEntries">reset_entries</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_budget_line` <a name="put_budget_line" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.putBudgetLine"></a>

```python
def put_budget_line(
  value: IResolvable | typing.List[DataDatadogCostBudgetBudgetLine]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.putBudgetLine.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine">DataDatadogCostBudgetBudgetLine</a>]

---

##### `put_entries` <a name="put_entries" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.putEntries"></a>

```python
def put_entries(
  value: IResolvable | typing.List[DataDatadogCostBudgetEntries]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.putEntries.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries">DataDatadogCostBudgetEntries</a>]

---

##### `reset_budget_line` <a name="reset_budget_line" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.resetBudgetLine"></a>

```python
def reset_budget_line() -> None
```

##### `reset_entries` <a name="reset_entries" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.resetEntries"></a>

```python
def reset_entries() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatadogCostBudget resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.isConstruct"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_budget

dataDatadogCostBudget.DataDatadogCostBudget.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.isTerraformElement"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_budget

dataDatadogCostBudget.DataDatadogCostBudget.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.isTerraformDataSource"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_budget

dataDatadogCostBudget.DataDatadogCostBudget.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_budget

dataDatadogCostBudget.DataDatadogCostBudget.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatadogCostBudget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogCostBudget to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogCostBudget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/cost_budget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogCostBudget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.budgetLine">budget_line</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList">DataDatadogCostBudgetBudgetLineList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.endMonth">end_month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList">DataDatadogCostBudgetEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.metricsQuery">metrics_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.startMonth">start_month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.totalAmount">total_amount</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.budgetLineInput">budget_line_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine">DataDatadogCostBudgetBudgetLine</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.entriesInput">entries_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries">DataDatadogCostBudgetEntries</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `budget_line`<sup>Required</sup> <a name="budget_line" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.budgetLine"></a>

```python
budget_line: DataDatadogCostBudgetBudgetLineList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList">DataDatadogCostBudgetBudgetLineList</a>

---

##### `end_month`<sup>Required</sup> <a name="end_month" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.endMonth"></a>

```python
end_month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.entries"></a>

```python
entries: DataDatadogCostBudgetEntriesList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList">DataDatadogCostBudgetEntriesList</a>

---

##### `metrics_query`<sup>Required</sup> <a name="metrics_query" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.metricsQuery"></a>

```python
metrics_query: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `start_month`<sup>Required</sup> <a name="start_month" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.startMonth"></a>

```python
start_month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_amount`<sup>Required</sup> <a name="total_amount" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.totalAmount"></a>

```python
total_amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `budget_line_input`<sup>Optional</sup> <a name="budget_line_input" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.budgetLineInput"></a>

```python
budget_line_input: IResolvable | typing.List[DataDatadogCostBudgetBudgetLine]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine">DataDatadogCostBudgetBudgetLine</a>]

---

##### `entries_input`<sup>Optional</sup> <a name="entries_input" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.entriesInput"></a>

```python
entries_input: IResolvable | typing.List[DataDatadogCostBudgetEntries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries">DataDatadogCostBudgetEntries</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogCostBudgetBudgetLine <a name="DataDatadogCostBudgetBudgetLine" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_budget

dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine(
  child_tag_filters: IResolvable | typing.List[DataDatadogCostBudgetBudgetLineChildTagFilters] = None,
  parent_tag_filters: IResolvable | typing.List[DataDatadogCostBudgetBudgetLineParentTagFilters] = None,
  tag_filters: IResolvable | typing.List[DataDatadogCostBudgetBudgetLineTagFilters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine.property.childTagFilters">child_tag_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFilters">DataDatadogCostBudgetBudgetLineChildTagFilters</a>]</code> | child_tag_filters block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine.property.parentTagFilters">parent_tag_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFilters">DataDatadogCostBudgetBudgetLineParentTagFilters</a>]</code> | parent_tag_filters block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine.property.tagFilters">tag_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFilters">DataDatadogCostBudgetBudgetLineTagFilters</a>]</code> | tag_filters block. |

---

##### `child_tag_filters`<sup>Optional</sup> <a name="child_tag_filters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine.property.childTagFilters"></a>

```python
child_tag_filters: IResolvable | typing.List[DataDatadogCostBudgetBudgetLineChildTagFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFilters">DataDatadogCostBudgetBudgetLineChildTagFilters</a>]

child_tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/cost_budget#child_tag_filters DataDatadogCostBudget#child_tag_filters}

---

##### `parent_tag_filters`<sup>Optional</sup> <a name="parent_tag_filters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine.property.parentTagFilters"></a>

```python
parent_tag_filters: IResolvable | typing.List[DataDatadogCostBudgetBudgetLineParentTagFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFilters">DataDatadogCostBudgetBudgetLineParentTagFilters</a>]

parent_tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/cost_budget#parent_tag_filters DataDatadogCostBudget#parent_tag_filters}

---

##### `tag_filters`<sup>Optional</sup> <a name="tag_filters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine.property.tagFilters"></a>

```python
tag_filters: IResolvable | typing.List[DataDatadogCostBudgetBudgetLineTagFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFilters">DataDatadogCostBudgetBudgetLineTagFilters</a>]

tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/cost_budget#tag_filters DataDatadogCostBudget#tag_filters}

---

### DataDatadogCostBudgetBudgetLineChildTagFilters <a name="DataDatadogCostBudgetBudgetLineChildTagFilters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFilters.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_budget

dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFilters()
```


### DataDatadogCostBudgetBudgetLineParentTagFilters <a name="DataDatadogCostBudgetBudgetLineParentTagFilters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFilters.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_budget

dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFilters()
```


### DataDatadogCostBudgetBudgetLineTagFilters <a name="DataDatadogCostBudgetBudgetLineTagFilters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFilters.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_budget

dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFilters()
```


### DataDatadogCostBudgetConfig <a name="DataDatadogCostBudgetConfig" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_budget

dataDatadogCostBudget.DataDatadogCostBudgetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str,
  budget_line: IResolvable | typing.List[DataDatadogCostBudgetBudgetLine] = None,
  entries: IResolvable | typing.List[DataDatadogCostBudgetEntries] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.id">id</a></code> | <code>str</code> | The ID of the budget. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.budgetLine">budget_line</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine">DataDatadogCostBudgetBudgetLine</a>]</code> | budget_line block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.entries">entries</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries">DataDatadogCostBudgetEntries</a>]</code> | entries block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the budget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/cost_budget#id DataDatadogCostBudget#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `budget_line`<sup>Optional</sup> <a name="budget_line" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.budgetLine"></a>

```python
budget_line: IResolvable | typing.List[DataDatadogCostBudgetBudgetLine]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine">DataDatadogCostBudgetBudgetLine</a>]

budget_line block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/cost_budget#budget_line DataDatadogCostBudget#budget_line}

---

##### `entries`<sup>Optional</sup> <a name="entries" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.entries"></a>

```python
entries: IResolvable | typing.List[DataDatadogCostBudgetEntries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries">DataDatadogCostBudgetEntries</a>]

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/cost_budget#entries DataDatadogCostBudget#entries}

---

### DataDatadogCostBudgetEntries <a name="DataDatadogCostBudgetEntries" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_budget

dataDatadogCostBudget.DataDatadogCostBudgetEntries(
  tag_filters: IResolvable | typing.List[DataDatadogCostBudgetEntriesTagFilters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries.property.tagFilters">tag_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFilters">DataDatadogCostBudgetEntriesTagFilters</a>]</code> | tag_filters block. |

---

##### `tag_filters`<sup>Optional</sup> <a name="tag_filters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries.property.tagFilters"></a>

```python
tag_filters: IResolvable | typing.List[DataDatadogCostBudgetEntriesTagFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFilters">DataDatadogCostBudgetEntriesTagFilters</a>]

tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/cost_budget#tag_filters DataDatadogCostBudget#tag_filters}

---

### DataDatadogCostBudgetEntriesTagFilters <a name="DataDatadogCostBudgetEntriesTagFilters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFilters.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_budget

dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFilters()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogCostBudgetBudgetLineChildTagFiltersList <a name="DataDatadogCostBudgetBudgetLineChildTagFiltersList" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_budget

dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFilters">DataDatadogCostBudgetBudgetLineChildTagFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatadogCostBudgetBudgetLineChildTagFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFilters">DataDatadogCostBudgetBudgetLineChildTagFilters</a>]

---


### DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference <a name="DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_budget

dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFilters">DataDatadogCostBudgetBudgetLineChildTagFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogCostBudgetBudgetLineChildTagFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFilters">DataDatadogCostBudgetBudgetLineChildTagFilters</a>

---


### DataDatadogCostBudgetBudgetLineList <a name="DataDatadogCostBudgetBudgetLineList" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_budget

dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogCostBudgetBudgetLineOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine">DataDatadogCostBudgetBudgetLine</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatadogCostBudgetBudgetLine]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine">DataDatadogCostBudgetBudgetLine</a>]

---


### DataDatadogCostBudgetBudgetLineOutputReference <a name="DataDatadogCostBudgetBudgetLineOutputReference" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_budget

dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.putChildTagFilters">put_child_tag_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.putParentTagFilters">put_parent_tag_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.putTagFilters">put_tag_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.resetChildTagFilters">reset_child_tag_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.resetParentTagFilters">reset_parent_tag_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.resetTagFilters">reset_tag_filters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_child_tag_filters` <a name="put_child_tag_filters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.putChildTagFilters"></a>

```python
def put_child_tag_filters(
  value: IResolvable | typing.List[DataDatadogCostBudgetBudgetLineChildTagFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.putChildTagFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFilters">DataDatadogCostBudgetBudgetLineChildTagFilters</a>]

---

##### `put_parent_tag_filters` <a name="put_parent_tag_filters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.putParentTagFilters"></a>

```python
def put_parent_tag_filters(
  value: IResolvable | typing.List[DataDatadogCostBudgetBudgetLineParentTagFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.putParentTagFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFilters">DataDatadogCostBudgetBudgetLineParentTagFilters</a>]

---

##### `put_tag_filters` <a name="put_tag_filters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.putTagFilters"></a>

```python
def put_tag_filters(
  value: IResolvable | typing.List[DataDatadogCostBudgetBudgetLineTagFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.putTagFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFilters">DataDatadogCostBudgetBudgetLineTagFilters</a>]

---

##### `reset_child_tag_filters` <a name="reset_child_tag_filters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.resetChildTagFilters"></a>

```python
def reset_child_tag_filters() -> None
```

##### `reset_parent_tag_filters` <a name="reset_parent_tag_filters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.resetParentTagFilters"></a>

```python
def reset_parent_tag_filters() -> None
```

##### `reset_tag_filters` <a name="reset_tag_filters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.resetTagFilters"></a>

```python
def reset_tag_filters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.amounts">amounts</a></code> | <code>cdktn.NumberMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.childTagFilters">child_tag_filters</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList">DataDatadogCostBudgetBudgetLineChildTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.parentTagFilters">parent_tag_filters</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList">DataDatadogCostBudgetBudgetLineParentTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.tagFilters">tag_filters</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList">DataDatadogCostBudgetBudgetLineTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.childTagFiltersInput">child_tag_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFilters">DataDatadogCostBudgetBudgetLineChildTagFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.parentTagFiltersInput">parent_tag_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFilters">DataDatadogCostBudgetBudgetLineParentTagFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.tagFiltersInput">tag_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFilters">DataDatadogCostBudgetBudgetLineTagFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine">DataDatadogCostBudgetBudgetLine</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amounts`<sup>Required</sup> <a name="amounts" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.amounts"></a>

```python
amounts: NumberMap
```

- *Type:* cdktn.NumberMap

---

##### `child_tag_filters`<sup>Required</sup> <a name="child_tag_filters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.childTagFilters"></a>

```python
child_tag_filters: DataDatadogCostBudgetBudgetLineChildTagFiltersList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList">DataDatadogCostBudgetBudgetLineChildTagFiltersList</a>

---

##### `parent_tag_filters`<sup>Required</sup> <a name="parent_tag_filters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.parentTagFilters"></a>

```python
parent_tag_filters: DataDatadogCostBudgetBudgetLineParentTagFiltersList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList">DataDatadogCostBudgetBudgetLineParentTagFiltersList</a>

---

##### `tag_filters`<sup>Required</sup> <a name="tag_filters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.tagFilters"></a>

```python
tag_filters: DataDatadogCostBudgetBudgetLineTagFiltersList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList">DataDatadogCostBudgetBudgetLineTagFiltersList</a>

---

##### `child_tag_filters_input`<sup>Optional</sup> <a name="child_tag_filters_input" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.childTagFiltersInput"></a>

```python
child_tag_filters_input: IResolvable | typing.List[DataDatadogCostBudgetBudgetLineChildTagFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFilters">DataDatadogCostBudgetBudgetLineChildTagFilters</a>]

---

##### `parent_tag_filters_input`<sup>Optional</sup> <a name="parent_tag_filters_input" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.parentTagFiltersInput"></a>

```python
parent_tag_filters_input: IResolvable | typing.List[DataDatadogCostBudgetBudgetLineParentTagFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFilters">DataDatadogCostBudgetBudgetLineParentTagFilters</a>]

---

##### `tag_filters_input`<sup>Optional</sup> <a name="tag_filters_input" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.tagFiltersInput"></a>

```python
tag_filters_input: IResolvable | typing.List[DataDatadogCostBudgetBudgetLineTagFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFilters">DataDatadogCostBudgetBudgetLineTagFilters</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogCostBudgetBudgetLine
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine">DataDatadogCostBudgetBudgetLine</a>

---


### DataDatadogCostBudgetBudgetLineParentTagFiltersList <a name="DataDatadogCostBudgetBudgetLineParentTagFiltersList" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_budget

dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFilters">DataDatadogCostBudgetBudgetLineParentTagFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatadogCostBudgetBudgetLineParentTagFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFilters">DataDatadogCostBudgetBudgetLineParentTagFilters</a>]

---


### DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference <a name="DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_budget

dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFilters">DataDatadogCostBudgetBudgetLineParentTagFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogCostBudgetBudgetLineParentTagFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFilters">DataDatadogCostBudgetBudgetLineParentTagFilters</a>

---


### DataDatadogCostBudgetBudgetLineTagFiltersList <a name="DataDatadogCostBudgetBudgetLineTagFiltersList" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_budget

dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogCostBudgetBudgetLineTagFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFilters">DataDatadogCostBudgetBudgetLineTagFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatadogCostBudgetBudgetLineTagFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFilters">DataDatadogCostBudgetBudgetLineTagFilters</a>]

---


### DataDatadogCostBudgetBudgetLineTagFiltersOutputReference <a name="DataDatadogCostBudgetBudgetLineTagFiltersOutputReference" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_budget

dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFilters">DataDatadogCostBudgetBudgetLineTagFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogCostBudgetBudgetLineTagFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFilters">DataDatadogCostBudgetBudgetLineTagFilters</a>

---


### DataDatadogCostBudgetEntriesList <a name="DataDatadogCostBudgetEntriesList" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_budget

dataDatadogCostBudget.DataDatadogCostBudgetEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogCostBudgetEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries">DataDatadogCostBudgetEntries</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatadogCostBudgetEntries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries">DataDatadogCostBudgetEntries</a>]

---


### DataDatadogCostBudgetEntriesOutputReference <a name="DataDatadogCostBudgetEntriesOutputReference" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_budget

dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.putTagFilters">put_tag_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.resetTagFilters">reset_tag_filters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tag_filters` <a name="put_tag_filters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.putTagFilters"></a>

```python
def put_tag_filters(
  value: IResolvable | typing.List[DataDatadogCostBudgetEntriesTagFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.putTagFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFilters">DataDatadogCostBudgetEntriesTagFilters</a>]

---

##### `reset_tag_filters` <a name="reset_tag_filters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.resetTagFilters"></a>

```python
def reset_tag_filters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.amount">amount</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.month">month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.tagFilters">tag_filters</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList">DataDatadogCostBudgetEntriesTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.tagFiltersInput">tag_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFilters">DataDatadogCostBudgetEntriesTagFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries">DataDatadogCostBudgetEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.amount"></a>

```python
amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag_filters`<sup>Required</sup> <a name="tag_filters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.tagFilters"></a>

```python
tag_filters: DataDatadogCostBudgetEntriesTagFiltersList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList">DataDatadogCostBudgetEntriesTagFiltersList</a>

---

##### `tag_filters_input`<sup>Optional</sup> <a name="tag_filters_input" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.tagFiltersInput"></a>

```python
tag_filters_input: IResolvable | typing.List[DataDatadogCostBudgetEntriesTagFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFilters">DataDatadogCostBudgetEntriesTagFilters</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogCostBudgetEntries
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries">DataDatadogCostBudgetEntries</a>

---


### DataDatadogCostBudgetEntriesTagFiltersList <a name="DataDatadogCostBudgetEntriesTagFiltersList" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_budget

dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogCostBudgetEntriesTagFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFilters">DataDatadogCostBudgetEntriesTagFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatadogCostBudgetEntriesTagFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFilters">DataDatadogCostBudgetEntriesTagFilters</a>]

---


### DataDatadogCostBudgetEntriesTagFiltersOutputReference <a name="DataDatadogCostBudgetEntriesTagFiltersOutputReference" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_cost_budget

dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFilters">DataDatadogCostBudgetEntriesTagFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogCostBudgetEntriesTagFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFilters">DataDatadogCostBudgetEntriesTagFilters</a>

---



