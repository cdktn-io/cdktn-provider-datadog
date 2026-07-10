# `dataDatadogOrgGroupMemberships` Submodule <a name="`dataDatadogOrgGroupMemberships` Submodule" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogOrgGroupMemberships <a name="DataDatadogOrgGroupMemberships" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/org_group_memberships datadog_org_group_memberships}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_org_group_memberships

dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  org_group_id: str = None,
  org_uuid: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.orgGroupId">org_group_id</a></code> | <code>str</code> | Filter memberships to those within the given org group. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.orgUuid">org_uuid</a></code> | <code>str</code> | Filter memberships to those for the given organization. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `org_group_id`<sup>Optional</sup> <a name="org_group_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.orgGroupId"></a>

- *Type:* str

Filter memberships to those within the given org group.

At least one filter (`org_group_id` or `org_uuid`) is required. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/org_group_memberships#org_group_id DataDatadogOrgGroupMemberships#org_group_id}

---

##### `org_uuid`<sup>Optional</sup> <a name="org_uuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.orgUuid"></a>

- *Type:* str

Filter memberships to those for the given organization.

At least one filter (`org_group_id` or `org_uuid`) is required. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/org_group_memberships#org_uuid DataDatadogOrgGroupMemberships#org_uuid}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.resetOrgGroupId">reset_org_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.resetOrgUuid">reset_org_uuid</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_org_group_id` <a name="reset_org_group_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.resetOrgGroupId"></a>

```python
def reset_org_group_id() -> None
```

##### `reset_org_uuid` <a name="reset_org_uuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.resetOrgUuid"></a>

```python
def reset_org_uuid() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatadogOrgGroupMemberships resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isConstruct"></a>

```python
from cdktn_provider_datadog import data_datadog_org_group_memberships

dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isTerraformElement"></a>

```python
from cdktn_provider_datadog import data_datadog_org_group_memberships

dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isTerraformDataSource"></a>

```python
from cdktn_provider_datadog import data_datadog_org_group_memberships

dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import data_datadog_org_group_memberships

dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatadogOrgGroupMemberships resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogOrgGroupMemberships to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogOrgGroupMemberships that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/org_group_memberships#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogOrgGroupMemberships to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.memberships">memberships</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList">DataDatadogOrgGroupMembershipsMembershipsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.orgGroupIdInput">org_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.orgUuidInput">org_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.orgGroupId">org_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.orgUuid">org_uuid</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `memberships`<sup>Required</sup> <a name="memberships" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.memberships"></a>

```python
memberships: DataDatadogOrgGroupMembershipsMembershipsList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList">DataDatadogOrgGroupMembershipsMembershipsList</a>

---

##### `org_group_id_input`<sup>Optional</sup> <a name="org_group_id_input" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.orgGroupIdInput"></a>

```python
org_group_id_input: str
```

- *Type:* str

---

##### `org_uuid_input`<sup>Optional</sup> <a name="org_uuid_input" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.orgUuidInput"></a>

```python
org_uuid_input: str
```

- *Type:* str

---

##### `org_group_id`<sup>Required</sup> <a name="org_group_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.orgGroupId"></a>

```python
org_group_id: str
```

- *Type:* str

---

##### `org_uuid`<sup>Required</sup> <a name="org_uuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.orgUuid"></a>

```python
org_uuid: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogOrgGroupMembershipsConfig <a name="DataDatadogOrgGroupMembershipsConfig" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_org_group_memberships

dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  org_group_id: str = None,
  org_uuid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.orgGroupId">org_group_id</a></code> | <code>str</code> | Filter memberships to those within the given org group. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.orgUuid">org_uuid</a></code> | <code>str</code> | Filter memberships to those for the given organization. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `org_group_id`<sup>Optional</sup> <a name="org_group_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.orgGroupId"></a>

```python
org_group_id: str
```

- *Type:* str

Filter memberships to those within the given org group.

At least one filter (`org_group_id` or `org_uuid`) is required. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/org_group_memberships#org_group_id DataDatadogOrgGroupMemberships#org_group_id}

---

##### `org_uuid`<sup>Optional</sup> <a name="org_uuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.orgUuid"></a>

```python
org_uuid: str
```

- *Type:* str

Filter memberships to those for the given organization.

At least one filter (`org_group_id` or `org_uuid`) is required. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/org_group_memberships#org_uuid DataDatadogOrgGroupMemberships#org_uuid}

---

### DataDatadogOrgGroupMembershipsMemberships <a name="DataDatadogOrgGroupMembershipsMemberships" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMemberships"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMemberships.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_org_group_memberships

dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMemberships()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogOrgGroupMembershipsMembershipsList <a name="DataDatadogOrgGroupMembershipsMembershipsList" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_org_group_memberships

dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogOrgGroupMembershipsMembershipsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogOrgGroupMembershipsMembershipsOutputReference <a name="DataDatadogOrgGroupMembershipsMembershipsOutputReference" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_org_group_memberships

dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.orgGroupId">org_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.orgName">org_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.orgSite">org_site</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.orgUuid">org_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMemberships">DataDatadogOrgGroupMembershipsMemberships</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `org_group_id`<sup>Required</sup> <a name="org_group_id" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.orgGroupId"></a>

```python
org_group_id: str
```

- *Type:* str

---

##### `org_name`<sup>Required</sup> <a name="org_name" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.orgName"></a>

```python
org_name: str
```

- *Type:* str

---

##### `org_site`<sup>Required</sup> <a name="org_site" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.orgSite"></a>

```python
org_site: str
```

- *Type:* str

---

##### `org_uuid`<sup>Required</sup> <a name="org_uuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.orgUuid"></a>

```python
org_uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogOrgGroupMembershipsMemberships
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMemberships">DataDatadogOrgGroupMembershipsMemberships</a>

---



