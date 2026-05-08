# `dataDatadogCustomAllocationRule` Submodule <a name="`dataDatadogCustomAllocationRule` Submodule" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogCustomAllocationRule <a name="DataDatadogCustomAllocationRule" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/custom_allocation_rule datadog_custom_allocation_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  costs_to_allocate: IResolvable | typing.List[DataDatadogCustomAllocationRuleCostsToAllocate] = None,
  rule_id: typing.Union[int, float] = None,
  strategy: DataDatadogCustomAllocationRuleStrategy = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.costsToAllocate">costs_to_allocate</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>]</code> | costs_to_allocate block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.ruleId">rule_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the custom allocation rule to retrieve. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.strategy">strategy</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a></code> | strategy block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `costs_to_allocate`<sup>Optional</sup> <a name="costs_to_allocate" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.costsToAllocate"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>]

costs_to_allocate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/custom_allocation_rule#costs_to_allocate DataDatadogCustomAllocationRule#costs_to_allocate}

---

##### `rule_id`<sup>Optional</sup> <a name="rule_id" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.ruleId"></a>

- *Type:* typing.Union[int, float]

The ID of the custom allocation rule to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/custom_allocation_rule#rule_id DataDatadogCustomAllocationRule#rule_id}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.Initializer.parameter.strategy"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/custom_allocation_rule#strategy DataDatadogCustomAllocationRule#strategy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putCostsToAllocate">put_costs_to_allocate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putStrategy">put_strategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetCostsToAllocate">reset_costs_to_allocate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetRuleId">reset_rule_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetStrategy">reset_strategy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_costs_to_allocate` <a name="put_costs_to_allocate" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putCostsToAllocate"></a>

```python
def put_costs_to_allocate(
  value: IResolvable | typing.List[DataDatadogCustomAllocationRuleCostsToAllocate]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putCostsToAllocate.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>]

---

##### `put_strategy` <a name="put_strategy" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putStrategy"></a>

```python
def put_strategy(
  allocated_by: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyAllocatedBy] = None,
  allocated_by_filters: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyAllocatedByFilters] = None,
  based_on_costs: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyBasedOnCosts] = None,
  based_on_timeseries: DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries = None,
  evaluate_grouped_by_filters: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters] = None
) -> None
```

###### `allocated_by`<sup>Optional</sup> <a name="allocated_by" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putStrategy.parameter.allocatedBy"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a>]

allocated_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/custom_allocation_rule#allocated_by DataDatadogCustomAllocationRule#allocated_by}

---

###### `allocated_by_filters`<sup>Optional</sup> <a name="allocated_by_filters" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putStrategy.parameter.allocatedByFilters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a>]

allocated_by_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/custom_allocation_rule#allocated_by_filters DataDatadogCustomAllocationRule#allocated_by_filters}

---

###### `based_on_costs`<sup>Optional</sup> <a name="based_on_costs" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putStrategy.parameter.basedOnCosts"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a>]

based_on_costs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/custom_allocation_rule#based_on_costs DataDatadogCustomAllocationRule#based_on_costs}

---

###### `based_on_timeseries`<sup>Optional</sup> <a name="based_on_timeseries" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putStrategy.parameter.basedOnTimeseries"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries</a>

based_on_timeseries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/custom_allocation_rule#based_on_timeseries DataDatadogCustomAllocationRule#based_on_timeseries}

---

###### `evaluate_grouped_by_filters`<sup>Optional</sup> <a name="evaluate_grouped_by_filters" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.putStrategy.parameter.evaluateGroupedByFilters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a>]

evaluate_grouped_by_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/custom_allocation_rule#evaluate_grouped_by_filters DataDatadogCustomAllocationRule#evaluate_grouped_by_filters}

---

##### `reset_costs_to_allocate` <a name="reset_costs_to_allocate" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetCostsToAllocate"></a>

```python
def reset_costs_to_allocate() -> None
```

##### `reset_rule_id` <a name="reset_rule_id" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetRuleId"></a>

```python
def reset_rule_id() -> None
```

##### `reset_strategy` <a name="reset_strategy" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.resetStrategy"></a>

```python
def reset_strategy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatadogCustomAllocationRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isConstruct"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isTerraformElement"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isTerraformDataSource"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatadogCustomAllocationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogCustomAllocationRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogCustomAllocationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/custom_allocation_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogCustomAllocationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.costsToAllocate">costs_to_allocate</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList">DataDatadogCustomAllocationRuleCostsToAllocateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.lastModifiedUserUuid">last_modified_user_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.orderId">order_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.providernames">providernames</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.rejected">rejected</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.strategy">strategy</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference">DataDatadogCustomAllocationRuleStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.updated">updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.costsToAllocateInput">costs_to_allocate_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.ruleIdInput">rule_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.strategyInput">strategy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.ruleId">rule_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `costs_to_allocate`<sup>Required</sup> <a name="costs_to_allocate" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.costsToAllocate"></a>

```python
costs_to_allocate: DataDatadogCustomAllocationRuleCostsToAllocateList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList">DataDatadogCustomAllocationRuleCostsToAllocateList</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_user_uuid`<sup>Required</sup> <a name="last_modified_user_uuid" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.lastModifiedUserUuid"></a>

```python
last_modified_user_uuid: str
```

- *Type:* str

---

##### `order_id`<sup>Required</sup> <a name="order_id" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.orderId"></a>

```python
order_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `providernames`<sup>Required</sup> <a name="providernames" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.providernames"></a>

```python
providernames: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rejected`<sup>Required</sup> <a name="rejected" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.rejected"></a>

```python
rejected: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.strategy"></a>

```python
strategy: DataDatadogCustomAllocationRuleStrategyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference">DataDatadogCustomAllocationRuleStrategyOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.updated"></a>

```python
updated: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `costs_to_allocate_input`<sup>Optional</sup> <a name="costs_to_allocate_input" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.costsToAllocateInput"></a>

```python
costs_to_allocate_input: IResolvable | typing.List[DataDatadogCustomAllocationRuleCostsToAllocate]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>]

---

##### `rule_id_input`<sup>Optional</sup> <a name="rule_id_input" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.ruleIdInput"></a>

```python
rule_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `strategy_input`<sup>Optional</sup> <a name="strategy_input" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.strategyInput"></a>

```python
strategy_input: IResolvable | DataDatadogCustomAllocationRuleStrategy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a>

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.ruleId"></a>

```python
rule_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogCustomAllocationRuleConfig <a name="DataDatadogCustomAllocationRuleConfig" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  costs_to_allocate: IResolvable | typing.List[DataDatadogCustomAllocationRuleCostsToAllocate] = None,
  rule_id: typing.Union[int, float] = None,
  strategy: DataDatadogCustomAllocationRuleStrategy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.costsToAllocate">costs_to_allocate</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>]</code> | costs_to_allocate block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.ruleId">rule_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the custom allocation rule to retrieve. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.strategy">strategy</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a></code> | strategy block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `costs_to_allocate`<sup>Optional</sup> <a name="costs_to_allocate" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.costsToAllocate"></a>

```python
costs_to_allocate: IResolvable | typing.List[DataDatadogCustomAllocationRuleCostsToAllocate]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>]

costs_to_allocate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/custom_allocation_rule#costs_to_allocate DataDatadogCustomAllocationRule#costs_to_allocate}

---

##### `rule_id`<sup>Optional</sup> <a name="rule_id" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.ruleId"></a>

```python
rule_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the custom allocation rule to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/custom_allocation_rule#rule_id DataDatadogCustomAllocationRule#rule_id}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleConfig.property.strategy"></a>

```python
strategy: DataDatadogCustomAllocationRuleStrategy
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/custom_allocation_rule#strategy DataDatadogCustomAllocationRule#strategy}

---

### DataDatadogCustomAllocationRuleCostsToAllocate <a name="DataDatadogCustomAllocationRuleCostsToAllocate" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate()
```


### DataDatadogCustomAllocationRuleStrategy <a name="DataDatadogCustomAllocationRuleStrategy" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy(
  allocated_by: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyAllocatedBy] = None,
  allocated_by_filters: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyAllocatedByFilters] = None,
  based_on_costs: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyBasedOnCosts] = None,
  based_on_timeseries: DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries = None,
  evaluate_grouped_by_filters: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.allocatedBy">allocated_by</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a>]</code> | allocated_by block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.allocatedByFilters">allocated_by_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a>]</code> | allocated_by_filters block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.basedOnCosts">based_on_costs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a>]</code> | based_on_costs block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.basedOnTimeseries">based_on_timeseries</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries</a></code> | based_on_timeseries block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.evaluateGroupedByFilters">evaluate_grouped_by_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a>]</code> | evaluate_grouped_by_filters block. |

---

##### `allocated_by`<sup>Optional</sup> <a name="allocated_by" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.allocatedBy"></a>

```python
allocated_by: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyAllocatedBy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a>]

allocated_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/custom_allocation_rule#allocated_by DataDatadogCustomAllocationRule#allocated_by}

---

##### `allocated_by_filters`<sup>Optional</sup> <a name="allocated_by_filters" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.allocatedByFilters"></a>

```python
allocated_by_filters: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyAllocatedByFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a>]

allocated_by_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/custom_allocation_rule#allocated_by_filters DataDatadogCustomAllocationRule#allocated_by_filters}

---

##### `based_on_costs`<sup>Optional</sup> <a name="based_on_costs" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.basedOnCosts"></a>

```python
based_on_costs: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyBasedOnCosts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a>]

based_on_costs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/custom_allocation_rule#based_on_costs DataDatadogCustomAllocationRule#based_on_costs}

---

##### `based_on_timeseries`<sup>Optional</sup> <a name="based_on_timeseries" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.basedOnTimeseries"></a>

```python
based_on_timeseries: DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries</a>

based_on_timeseries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/custom_allocation_rule#based_on_timeseries DataDatadogCustomAllocationRule#based_on_timeseries}

---

##### `evaluate_grouped_by_filters`<sup>Optional</sup> <a name="evaluate_grouped_by_filters" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy.property.evaluateGroupedByFilters"></a>

```python
evaluate_grouped_by_filters: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a>]

evaluate_grouped_by_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/custom_allocation_rule#evaluate_grouped_by_filters DataDatadogCustomAllocationRule#evaluate_grouped_by_filters}

---

### DataDatadogCustomAllocationRuleStrategyAllocatedBy <a name="DataDatadogCustomAllocationRuleStrategyAllocatedBy" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy(
  allocated_tags: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy.property.allocatedTags">allocated_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a>]</code> | allocated_tags block. |

---

##### `allocated_tags`<sup>Optional</sup> <a name="allocated_tags" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy.property.allocatedTags"></a>

```python
allocated_tags: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a>]

allocated_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/custom_allocation_rule#allocated_tags DataDatadogCustomAllocationRule#allocated_tags}

---

### DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags()
```


### DataDatadogCustomAllocationRuleStrategyAllocatedByFilters <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByFilters" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters()
```


### DataDatadogCustomAllocationRuleStrategyBasedOnCosts <a name="DataDatadogCustomAllocationRuleStrategyBasedOnCosts" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts()
```


### DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries <a name="DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries()
```


### DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters <a name="DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogCustomAllocationRuleCostsToAllocateList <a name="DataDatadogCustomAllocationRuleCostsToAllocateList" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogCustomAllocationRuleCostsToAllocateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatadogCustomAllocationRuleCostsToAllocate]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>]

---


### DataDatadogCustomAllocationRuleCostsToAllocateOutputReference <a name="DataDatadogCustomAllocationRuleCostsToAllocateOutputReference" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogCustomAllocationRuleCostsToAllocate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleCostsToAllocate">DataDatadogCustomAllocationRuleCostsToAllocate</a>

---


### DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a>]

---


### DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a>

---


### DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyAllocatedByFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a>]

---


### DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogCustomAllocationRuleStrategyAllocatedByFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a>

---


### DataDatadogCustomAllocationRuleStrategyAllocatedByList <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByList" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyAllocatedBy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a>]

---


### DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference <a name="DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.putAllocatedTags">put_allocated_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.resetAllocatedTags">reset_allocated_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allocated_tags` <a name="put_allocated_tags" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.putAllocatedTags"></a>

```python
def put_allocated_tags(
  value: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.putAllocatedTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a>]

---

##### `reset_allocated_tags` <a name="reset_allocated_tags" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.resetAllocatedTags"></a>

```python
def reset_allocated_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTags">allocated_tags</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTagsInput">allocated_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocated_tags`<sup>Required</sup> <a name="allocated_tags" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTags"></a>

```python
allocated_tags: DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTagsList</a>

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocated_tags_input`<sup>Optional</sup> <a name="allocated_tags_input" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTagsInput"></a>

```python
allocated_tags_input: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags">DataDatadogCustomAllocationRuleStrategyAllocatedByAllocatedTags</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogCustomAllocationRuleStrategyAllocatedBy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a>

---


### DataDatadogCustomAllocationRuleStrategyBasedOnCostsList <a name="DataDatadogCustomAllocationRuleStrategyBasedOnCostsList" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyBasedOnCosts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a>]

---


### DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference <a name="DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogCustomAllocationRuleStrategyBasedOnCosts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a>

---


### DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference <a name="DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries</a>

---


### DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList <a name="DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a>]

---


### DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference <a name="DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a>

---


### DataDatadogCustomAllocationRuleStrategyOutputReference <a name="DataDatadogCustomAllocationRuleStrategyOutputReference" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_custom_allocation_rule

dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putAllocatedBy">put_allocated_by</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putAllocatedByFilters">put_allocated_by_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putBasedOnCosts">put_based_on_costs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putBasedOnTimeseries">put_based_on_timeseries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putEvaluateGroupedByFilters">put_evaluate_grouped_by_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetAllocatedBy">reset_allocated_by</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetAllocatedByFilters">reset_allocated_by_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetBasedOnCosts">reset_based_on_costs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetEvaluateGroupedByFilters">reset_evaluate_grouped_by_filters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allocated_by` <a name="put_allocated_by" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putAllocatedBy"></a>

```python
def put_allocated_by(
  value: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyAllocatedBy]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putAllocatedBy.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a>]

---

##### `put_allocated_by_filters` <a name="put_allocated_by_filters" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putAllocatedByFilters"></a>

```python
def put_allocated_by_filters(
  value: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyAllocatedByFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putAllocatedByFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a>]

---

##### `put_based_on_costs` <a name="put_based_on_costs" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putBasedOnCosts"></a>

```python
def put_based_on_costs(
  value: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyBasedOnCosts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putBasedOnCosts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a>]

---

##### `put_based_on_timeseries` <a name="put_based_on_timeseries" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putBasedOnTimeseries"></a>

```python
def put_based_on_timeseries() -> None
```

##### `put_evaluate_grouped_by_filters` <a name="put_evaluate_grouped_by_filters" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putEvaluateGroupedByFilters"></a>

```python
def put_evaluate_grouped_by_filters(
  value: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.putEvaluateGroupedByFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a>]

---

##### `reset_allocated_by` <a name="reset_allocated_by" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetAllocatedBy"></a>

```python
def reset_allocated_by() -> None
```

##### `reset_allocated_by_filters` <a name="reset_allocated_by_filters" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetAllocatedByFilters"></a>

```python
def reset_allocated_by_filters() -> None
```

##### `reset_based_on_costs` <a name="reset_based_on_costs" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetBasedOnCosts"></a>

```python
def reset_based_on_costs() -> None
```

##### `reset_evaluate_grouped_by_filters` <a name="reset_evaluate_grouped_by_filters" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.resetEvaluateGroupedByFilters"></a>

```python
def reset_evaluate_grouped_by_filters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedBy">allocated_by</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList">DataDatadogCustomAllocationRuleStrategyAllocatedByList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByFilters">allocated_by_filters</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList">DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByTagKeys">allocated_by_tag_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnCosts">based_on_costs</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList">DataDatadogCustomAllocationRuleStrategyBasedOnCostsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnTimeseries">based_on_timeseries</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFilters">evaluate_grouped_by_filters</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByTagKeys">evaluate_grouped_by_tag_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.granularity">granularity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByFiltersInput">allocated_by_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByInput">allocated_by_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnCostsInput">based_on_costs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnTimeseriesInput">based_on_timeseries_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFiltersInput">evaluate_grouped_by_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocated_by`<sup>Required</sup> <a name="allocated_by" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedBy"></a>

```python
allocated_by: DataDatadogCustomAllocationRuleStrategyAllocatedByList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByList">DataDatadogCustomAllocationRuleStrategyAllocatedByList</a>

---

##### `allocated_by_filters`<sup>Required</sup> <a name="allocated_by_filters" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByFilters"></a>

```python
allocated_by_filters: DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList">DataDatadogCustomAllocationRuleStrategyAllocatedByFiltersList</a>

---

##### `allocated_by_tag_keys`<sup>Required</sup> <a name="allocated_by_tag_keys" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByTagKeys"></a>

```python
allocated_by_tag_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `based_on_costs`<sup>Required</sup> <a name="based_on_costs" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnCosts"></a>

```python
based_on_costs: DataDatadogCustomAllocationRuleStrategyBasedOnCostsList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCostsList">DataDatadogCustomAllocationRuleStrategyBasedOnCostsList</a>

---

##### `based_on_timeseries`<sup>Required</sup> <a name="based_on_timeseries" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnTimeseries"></a>

```python
based_on_timeseries: DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseriesOutputReference</a>

---

##### `evaluate_grouped_by_filters`<sup>Required</sup> <a name="evaluate_grouped_by_filters" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFilters"></a>

```python
evaluate_grouped_by_filters: DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFiltersList</a>

---

##### `evaluate_grouped_by_tag_keys`<sup>Required</sup> <a name="evaluate_grouped_by_tag_keys" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByTagKeys"></a>

```python
evaluate_grouped_by_tag_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.granularity"></a>

```python
granularity: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `allocated_by_filters_input`<sup>Optional</sup> <a name="allocated_by_filters_input" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByFiltersInput"></a>

```python
allocated_by_filters_input: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyAllocatedByFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedByFilters">DataDatadogCustomAllocationRuleStrategyAllocatedByFilters</a>]

---

##### `allocated_by_input`<sup>Optional</sup> <a name="allocated_by_input" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.allocatedByInput"></a>

```python
allocated_by_input: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyAllocatedBy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyAllocatedBy">DataDatadogCustomAllocationRuleStrategyAllocatedBy</a>]

---

##### `based_on_costs_input`<sup>Optional</sup> <a name="based_on_costs_input" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnCostsInput"></a>

```python
based_on_costs_input: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyBasedOnCosts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnCosts">DataDatadogCustomAllocationRuleStrategyBasedOnCosts</a>]

---

##### `based_on_timeseries_input`<sup>Optional</sup> <a name="based_on_timeseries_input" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.basedOnTimeseriesInput"></a>

```python
based_on_timeseries_input: IResolvable | DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries">DataDatadogCustomAllocationRuleStrategyBasedOnTimeseries</a>

---

##### `evaluate_grouped_by_filters_input`<sup>Optional</sup> <a name="evaluate_grouped_by_filters_input" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFiltersInput"></a>

```python
evaluate_grouped_by_filters_input: IResolvable | typing.List[DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters">DataDatadogCustomAllocationRuleStrategyEvaluateGroupedByFilters</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogCustomAllocationRuleStrategy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogCustomAllocationRule.DataDatadogCustomAllocationRuleStrategy">DataDatadogCustomAllocationRuleStrategy</a>

---



