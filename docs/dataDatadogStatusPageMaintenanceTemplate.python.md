# `dataDatadogStatusPageMaintenanceTemplate` Submodule <a name="`dataDatadogStatusPageMaintenanceTemplate` Submodule" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogStatusPageMaintenanceTemplate <a name="DataDatadogStatusPageMaintenanceTemplate" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_template datadog_status_page_maintenance_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_status_page_maintenance_template

dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate(
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
  page_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The ID of the maintenance template. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.Initializer.parameter.pageId">page_id</a></code> | <code>str</code> | The ID of the status page this maintenance template belongs to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.Initializer.parameter.id"></a>

- *Type:* str

The ID of the maintenance template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_template#id DataDatadogStatusPageMaintenanceTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `page_id`<sup>Required</sup> <a name="page_id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.Initializer.parameter.pageId"></a>

- *Type:* str

The ID of the status page this maintenance template belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_template#page_id DataDatadogStatusPageMaintenanceTemplate#page_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatadogStatusPageMaintenanceTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.isConstruct"></a>

```python
from cdktn_provider_datadog import data_datadog_status_page_maintenance_template

dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.isTerraformElement"></a>

```python
from cdktn_provider_datadog import data_datadog_status_page_maintenance_template

dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.isTerraformDataSource"></a>

```python
from cdktn_provider_datadog import data_datadog_status_page_maintenance_template

dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import data_datadog_status_page_maintenance_template

dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatadogStatusPageMaintenanceTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogStatusPageMaintenanceTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogStatusPageMaintenanceTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogStatusPageMaintenanceTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.completedDescription">completed_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.componentIds">component_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.inProgressDescription">in_progress_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.maintenanceTitle">maintenance_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.scheduledDescription">scheduled_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.pageIdInput">page_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.pageId">page_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `completed_description`<sup>Required</sup> <a name="completed_description" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.completedDescription"></a>

```python
completed_description: str
```

- *Type:* str

---

##### `component_ids`<sup>Required</sup> <a name="component_ids" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.componentIds"></a>

```python
component_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `in_progress_description`<sup>Required</sup> <a name="in_progress_description" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.inProgressDescription"></a>

```python
in_progress_description: str
```

- *Type:* str

---

##### `maintenance_title`<sup>Required</sup> <a name="maintenance_title" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.maintenanceTitle"></a>

```python
maintenance_title: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scheduled_description`<sup>Required</sup> <a name="scheduled_description" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.scheduledDescription"></a>

```python
scheduled_description: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `page_id_input`<sup>Optional</sup> <a name="page_id_input" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.pageIdInput"></a>

```python
page_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `page_id`<sup>Required</sup> <a name="page_id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.pageId"></a>

```python
page_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogStatusPageMaintenanceTemplateConfig <a name="DataDatadogStatusPageMaintenanceTemplateConfig" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplateConfig.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_status_page_maintenance_template

dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str,
  page_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplateConfig.property.id">id</a></code> | <code>str</code> | The ID of the maintenance template. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplateConfig.property.pageId">page_id</a></code> | <code>str</code> | The ID of the status page this maintenance template belongs to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the maintenance template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_template#id DataDatadogStatusPageMaintenanceTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `page_id`<sup>Required</sup> <a name="page_id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplate.DataDatadogStatusPageMaintenanceTemplateConfig.property.pageId"></a>

```python
page_id: str
```

- *Type:* str

The ID of the status page this maintenance template belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_template#page_id DataDatadogStatusPageMaintenanceTemplate#page_id}

---



