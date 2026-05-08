# `dataDatadogOrgGroupPolicyOverrides` Submodule <a name="`dataDatadogOrgGroupPolicyOverrides` Submodule" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogOrgGroupPolicyOverrides <a name="DataDatadogOrgGroupPolicyOverrides" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/org_group_policy_overrides datadog_org_group_policy_overrides}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_org_group_policy_overrides

dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  org_group_id: str,
  org_uuid: str = None,
  policy_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.orgGroupId">org_group_id</a></code> | <code>str</code> | The UUID of the org group whose overrides to list. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.orgUuid">org_uuid</a></code> | <code>str</code> | Filter overrides to those for the given organization. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | Filter overrides to those on the given policy. Must be a valid UUID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `org_group_id`<sup>Required</sup> <a name="org_group_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.orgGroupId"></a>

- *Type:* str

The UUID of the org group whose overrides to list. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/org_group_policy_overrides#org_group_id DataDatadogOrgGroupPolicyOverrides#org_group_id}

---

##### `org_uuid`<sup>Optional</sup> <a name="org_uuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.orgUuid"></a>

- *Type:* str

Filter overrides to those for the given organization.

Applied client-side after the List call because the API does not accept an `org_uuid` filter on this endpoint. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/org_group_policy_overrides#org_uuid DataDatadogOrgGroupPolicyOverrides#org_uuid}

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.policyId"></a>

- *Type:* str

Filter overrides to those on the given policy. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/org_group_policy_overrides#policy_id DataDatadogOrgGroupPolicyOverrides#policy_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.resetOrgUuid">reset_org_uuid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.resetPolicyId">reset_policy_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_org_uuid` <a name="reset_org_uuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.resetOrgUuid"></a>

```python
def reset_org_uuid() -> None
```

##### `reset_policy_id` <a name="reset_policy_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.resetPolicyId"></a>

```python
def reset_policy_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatadogOrgGroupPolicyOverrides resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isConstruct"></a>

```python
from cdktn_provider_datadog import data_datadog_org_group_policy_overrides

dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformElement"></a>

```python
from cdktn_provider_datadog import data_datadog_org_group_policy_overrides

dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformDataSource"></a>

```python
from cdktn_provider_datadog import data_datadog_org_group_policy_overrides

dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import data_datadog_org_group_policy_overrides

dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatadogOrgGroupPolicyOverrides resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogOrgGroupPolicyOverrides to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogOrgGroupPolicyOverrides that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/org_group_policy_overrides#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogOrgGroupPolicyOverrides to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList">DataDatadogOrgGroupPolicyOverridesOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgGroupIdInput">org_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgUuidInput">org_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgGroupId">org_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgUuid">org_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.overrides"></a>

```python
overrides: DataDatadogOrgGroupPolicyOverridesOverridesList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList">DataDatadogOrgGroupPolicyOverridesOverridesList</a>

---

##### `org_group_id_input`<sup>Optional</sup> <a name="org_group_id_input" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgGroupIdInput"></a>

```python
org_group_id_input: str
```

- *Type:* str

---

##### `org_uuid_input`<sup>Optional</sup> <a name="org_uuid_input" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgUuidInput"></a>

```python
org_uuid_input: str
```

- *Type:* str

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `org_group_id`<sup>Required</sup> <a name="org_group_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgGroupId"></a>

```python
org_group_id: str
```

- *Type:* str

---

##### `org_uuid`<sup>Required</sup> <a name="org_uuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgUuid"></a>

```python
org_uuid: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogOrgGroupPolicyOverridesConfig <a name="DataDatadogOrgGroupPolicyOverridesConfig" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_org_group_policy_overrides

dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  org_group_id: str,
  org_uuid: str = None,
  policy_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.orgGroupId">org_group_id</a></code> | <code>str</code> | The UUID of the org group whose overrides to list. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.orgUuid">org_uuid</a></code> | <code>str</code> | Filter overrides to those for the given organization. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.policyId">policy_id</a></code> | <code>str</code> | Filter overrides to those on the given policy. Must be a valid UUID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `org_group_id`<sup>Required</sup> <a name="org_group_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.orgGroupId"></a>

```python
org_group_id: str
```

- *Type:* str

The UUID of the org group whose overrides to list. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/org_group_policy_overrides#org_group_id DataDatadogOrgGroupPolicyOverrides#org_group_id}

---

##### `org_uuid`<sup>Optional</sup> <a name="org_uuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.orgUuid"></a>

```python
org_uuid: str
```

- *Type:* str

Filter overrides to those for the given organization.

Applied client-side after the List call because the API does not accept an `org_uuid` filter on this endpoint. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/org_group_policy_overrides#org_uuid DataDatadogOrgGroupPolicyOverrides#org_uuid}

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Filter overrides to those on the given policy. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/org_group_policy_overrides#policy_id DataDatadogOrgGroupPolicyOverrides#policy_id}

---

### DataDatadogOrgGroupPolicyOverridesOverrides <a name="DataDatadogOrgGroupPolicyOverridesOverrides" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverrides.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_org_group_policy_overrides

dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverrides()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogOrgGroupPolicyOverridesOverridesList <a name="DataDatadogOrgGroupPolicyOverridesOverridesList" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_org_group_policy_overrides

dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogOrgGroupPolicyOverridesOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogOrgGroupPolicyOverridesOverridesOutputReference <a name="DataDatadogOrgGroupPolicyOverridesOverridesOutputReference" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_org_group_policy_overrides

dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.orgGroupId">org_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.orgSite">org_site</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.orgUuid">org_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverrides">DataDatadogOrgGroupPolicyOverridesOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `org_group_id`<sup>Required</sup> <a name="org_group_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.orgGroupId"></a>

```python
org_group_id: str
```

- *Type:* str

---

##### `org_site`<sup>Required</sup> <a name="org_site" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.orgSite"></a>

```python
org_site: str
```

- *Type:* str

---

##### `org_uuid`<sup>Required</sup> <a name="org_uuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.orgUuid"></a>

```python
org_uuid: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogOrgGroupPolicyOverridesOverrides
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverrides">DataDatadogOrgGroupPolicyOverridesOverrides</a>

---



