# `dataDatadogStatusPageMaintenanceTemplates` Submodule <a name="`dataDatadogStatusPageMaintenanceTemplates` Submodule" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogStatusPageMaintenanceTemplates <a name="DataDatadogStatusPageMaintenanceTemplates" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_templates datadog_status_page_maintenance_templates}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_status_page_maintenance_templates

dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  page_id: str,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.pageId">page_id</a></code> | <code>str</code> | The ID of the status page whose maintenance templates to list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.name">name</a></code> | <code>str</code> | Filter the results to templates with this exact name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_id`<sup>Required</sup> <a name="page_id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.pageId"></a>

- *Type:* str

The ID of the status page whose maintenance templates to list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_templates#page_id DataDatadogStatusPageMaintenanceTemplates#page_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.name"></a>

- *Type:* str

Filter the results to templates with this exact name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_templates#name DataDatadogStatusPageMaintenanceTemplates#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatadogStatusPageMaintenanceTemplates resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isConstruct"></a>

```python
from cdktn_provider_datadog import data_datadog_status_page_maintenance_templates

dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isTerraformElement"></a>

```python
from cdktn_provider_datadog import data_datadog_status_page_maintenance_templates

dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isTerraformDataSource"></a>

```python
from cdktn_provider_datadog import data_datadog_status_page_maintenance_templates

dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import data_datadog_status_page_maintenance_templates

dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatadogStatusPageMaintenanceTemplates resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogStatusPageMaintenanceTemplates to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogStatusPageMaintenanceTemplates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_templates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogStatusPageMaintenanceTemplates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.maintenanceTemplates">maintenance_templates</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList">DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.pageIdInput">page_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.pageId">page_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maintenance_templates`<sup>Required</sup> <a name="maintenance_templates" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.maintenanceTemplates"></a>

```python
maintenance_templates: DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList">DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `page_id_input`<sup>Optional</sup> <a name="page_id_input" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.pageIdInput"></a>

```python
page_id_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `page_id`<sup>Required</sup> <a name="page_id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.pageId"></a>

```python
page_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogStatusPageMaintenanceTemplatesConfig <a name="DataDatadogStatusPageMaintenanceTemplatesConfig" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_status_page_maintenance_templates

dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  page_id: str,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.pageId">page_id</a></code> | <code>str</code> | The ID of the status page whose maintenance templates to list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.name">name</a></code> | <code>str</code> | Filter the results to templates with this exact name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_id`<sup>Required</sup> <a name="page_id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.pageId"></a>

```python
page_id: str
```

- *Type:* str

The ID of the status page whose maintenance templates to list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_templates#page_id DataDatadogStatusPageMaintenanceTemplates#page_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Filter the results to templates with this exact name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_templates#name DataDatadogStatusPageMaintenanceTemplates#name}

---

### DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates <a name="DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_status_page_maintenance_templates

dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList <a name="DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_status_page_maintenance_templates

dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference <a name="DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_status_page_maintenance_templates

dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.maintenanceTitle">maintenance_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates">DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maintenance_title`<sup>Required</sup> <a name="maintenance_title" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.maintenanceTitle"></a>

```python
maintenance_title: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates">DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates</a>

---



