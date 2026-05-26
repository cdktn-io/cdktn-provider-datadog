# `dataDatadogOrganizationSettings` Submodule <a name="`dataDatadogOrganizationSettings` Submodule" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogOrganizationSettings <a name="DataDatadogOrganizationSettings" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/organization_settings datadog_organization_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_organization_settings

dataDatadogOrganizationSettings.DataDatadogOrganizationSettings(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  settings: IResolvable | typing.List[DataDatadogOrganizationSettingsSettings] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.settings">settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>]</code> | settings block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.settings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>]

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/organization_settings#settings DataDatadogOrganizationSettings#settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.resetSettings">reset_settings</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_settings` <a name="put_settings" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.putSettings"></a>

```python
def put_settings(
  value: IResolvable | typing.List[DataDatadogOrganizationSettingsSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.putSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>]

---

##### `reset_settings` <a name="reset_settings" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.resetSettings"></a>

```python
def reset_settings() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatadogOrganizationSettings resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isConstruct"></a>

```python
from cdktn_provider_datadog import data_datadog_organization_settings

dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isTerraformElement"></a>

```python
from cdktn_provider_datadog import data_datadog_organization_settings

dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isTerraformDataSource"></a>

```python
from cdktn_provider_datadog import data_datadog_organization_settings

dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import data_datadog_organization_settings

dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatadogOrganizationSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogOrganizationSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogOrganizationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/organization_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogOrganizationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.publicId">public_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList">DataDatadogOrganizationSettingsSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.settingsInput">settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_id`<sup>Required</sup> <a name="public_id" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.publicId"></a>

```python
public_id: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.settings"></a>

```python
settings: DataDatadogOrganizationSettingsSettingsList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList">DataDatadogOrganizationSettingsSettingsList</a>

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.settingsInput"></a>

```python
settings_input: IResolvable | typing.List[DataDatadogOrganizationSettingsSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogOrganizationSettingsConfig <a name="DataDatadogOrganizationSettingsConfig" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_organization_settings

dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  settings: IResolvable | typing.List[DataDatadogOrganizationSettingsSettings] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.settings">settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>]</code> | settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.settings"></a>

```python
settings: IResolvable | typing.List[DataDatadogOrganizationSettingsSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>]

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/organization_settings#settings DataDatadogOrganizationSettings#settings}

---

### DataDatadogOrganizationSettingsSettings <a name="DataDatadogOrganizationSettingsSettings" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_organization_settings

dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings(
  saml: IResolvable | typing.List[DataDatadogOrganizationSettingsSettingsSaml] = None,
  saml_autocreate_users_domains: IResolvable | typing.List[DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains] = None,
  saml_idp_initiated_login: IResolvable | typing.List[DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin] = None,
  saml_strict_mode: IResolvable | typing.List[DataDatadogOrganizationSettingsSettingsSamlStrictMode] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.property.saml">saml</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a>]</code> | saml block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.property.samlAutocreateUsersDomains">saml_autocreate_users_domains</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a>]</code> | saml_autocreate_users_domains block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.property.samlIdpInitiatedLogin">saml_idp_initiated_login</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a>]</code> | saml_idp_initiated_login block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.property.samlStrictMode">saml_strict_mode</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a>]</code> | saml_strict_mode block. |

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.property.saml"></a>

```python
saml: IResolvable | typing.List[DataDatadogOrganizationSettingsSettingsSaml]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a>]

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/organization_settings#saml DataDatadogOrganizationSettings#saml}

---

##### `saml_autocreate_users_domains`<sup>Optional</sup> <a name="saml_autocreate_users_domains" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.property.samlAutocreateUsersDomains"></a>

```python
saml_autocreate_users_domains: IResolvable | typing.List[DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a>]

saml_autocreate_users_domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/organization_settings#saml_autocreate_users_domains DataDatadogOrganizationSettings#saml_autocreate_users_domains}

---

##### `saml_idp_initiated_login`<sup>Optional</sup> <a name="saml_idp_initiated_login" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.property.samlIdpInitiatedLogin"></a>

```python
saml_idp_initiated_login: IResolvable | typing.List[DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a>]

saml_idp_initiated_login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/organization_settings#saml_idp_initiated_login DataDatadogOrganizationSettings#saml_idp_initiated_login}

---

##### `saml_strict_mode`<sup>Optional</sup> <a name="saml_strict_mode" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.property.samlStrictMode"></a>

```python
saml_strict_mode: IResolvable | typing.List[DataDatadogOrganizationSettingsSettingsSamlStrictMode]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a>]

saml_strict_mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/organization_settings#saml_strict_mode DataDatadogOrganizationSettings#saml_strict_mode}

---

### DataDatadogOrganizationSettingsSettingsSaml <a name="DataDatadogOrganizationSettingsSettingsSaml" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_organization_settings

dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml()
```


### DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains <a name="DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_organization_settings

dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains()
```


### DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin <a name="DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_organization_settings

dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin()
```


### DataDatadogOrganizationSettingsSettingsSamlStrictMode <a name="DataDatadogOrganizationSettingsSettingsSamlStrictMode" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_organization_settings

dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogOrganizationSettingsSettingsList <a name="DataDatadogOrganizationSettingsSettingsList" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_organization_settings

dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogOrganizationSettingsSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatadogOrganizationSettingsSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>]

---


### DataDatadogOrganizationSettingsSettingsOutputReference <a name="DataDatadogOrganizationSettingsSettingsOutputReference" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_organization_settings

dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSaml">put_saml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlAutocreateUsersDomains">put_saml_autocreate_users_domains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlIdpInitiatedLogin">put_saml_idp_initiated_login</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlStrictMode">put_saml_strict_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resetSaml">reset_saml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resetSamlAutocreateUsersDomains">reset_saml_autocreate_users_domains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resetSamlIdpInitiatedLogin">reset_saml_idp_initiated_login</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resetSamlStrictMode">reset_saml_strict_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_saml` <a name="put_saml" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSaml"></a>

```python
def put_saml(
  value: IResolvable | typing.List[DataDatadogOrganizationSettingsSettingsSaml]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSaml.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a>]

---

##### `put_saml_autocreate_users_domains` <a name="put_saml_autocreate_users_domains" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlAutocreateUsersDomains"></a>

```python
def put_saml_autocreate_users_domains(
  value: IResolvable | typing.List[DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlAutocreateUsersDomains.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a>]

---

##### `put_saml_idp_initiated_login` <a name="put_saml_idp_initiated_login" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlIdpInitiatedLogin"></a>

```python
def put_saml_idp_initiated_login(
  value: IResolvable | typing.List[DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlIdpInitiatedLogin.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a>]

---

##### `put_saml_strict_mode` <a name="put_saml_strict_mode" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlStrictMode"></a>

```python
def put_saml_strict_mode(
  value: IResolvable | typing.List[DataDatadogOrganizationSettingsSettingsSamlStrictMode]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlStrictMode.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a>]

---

##### `reset_saml` <a name="reset_saml" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resetSaml"></a>

```python
def reset_saml() -> None
```

##### `reset_saml_autocreate_users_domains` <a name="reset_saml_autocreate_users_domains" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resetSamlAutocreateUsersDomains"></a>

```python
def reset_saml_autocreate_users_domains() -> None
```

##### `reset_saml_idp_initiated_login` <a name="reset_saml_idp_initiated_login" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resetSamlIdpInitiatedLogin"></a>

```python
def reset_saml_idp_initiated_login() -> None
```

##### `reset_saml_strict_mode` <a name="reset_saml_strict_mode" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resetSamlStrictMode"></a>

```python
def reset_saml_strict_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.privateWidgetShare">private_widget_share</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.saml">saml</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList">DataDatadogOrganizationSettingsSettingsSamlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlAutocreateAccessRole">saml_autocreate_access_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomains">saml_autocreate_users_domains</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlCanBeEnabled">saml_can_be_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlIdpEndpoint">saml_idp_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLogin">saml_idp_initiated_login</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlIdpMetadataUploaded">saml_idp_metadata_uploaded</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlLoginUrl">saml_login_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlStrictMode">saml_strict_mode</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList">DataDatadogOrganizationSettingsSettingsSamlStrictModeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomainsInput">saml_autocreate_users_domains_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLoginInput">saml_idp_initiated_login_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlInput">saml_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlStrictModeInput">saml_strict_mode_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `private_widget_share`<sup>Required</sup> <a name="private_widget_share" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.privateWidgetShare"></a>

```python
private_widget_share: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.saml"></a>

```python
saml: DataDatadogOrganizationSettingsSettingsSamlList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList">DataDatadogOrganizationSettingsSettingsSamlList</a>

---

##### `saml_autocreate_access_role`<sup>Required</sup> <a name="saml_autocreate_access_role" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlAutocreateAccessRole"></a>

```python
saml_autocreate_access_role: str
```

- *Type:* str

---

##### `saml_autocreate_users_domains`<sup>Required</sup> <a name="saml_autocreate_users_domains" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomains"></a>

```python
saml_autocreate_users_domains: DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList</a>

---

##### `saml_can_be_enabled`<sup>Required</sup> <a name="saml_can_be_enabled" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlCanBeEnabled"></a>

```python
saml_can_be_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `saml_idp_endpoint`<sup>Required</sup> <a name="saml_idp_endpoint" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlIdpEndpoint"></a>

```python
saml_idp_endpoint: str
```

- *Type:* str

---

##### `saml_idp_initiated_login`<sup>Required</sup> <a name="saml_idp_initiated_login" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLogin"></a>

```python
saml_idp_initiated_login: DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList</a>

---

##### `saml_idp_metadata_uploaded`<sup>Required</sup> <a name="saml_idp_metadata_uploaded" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlIdpMetadataUploaded"></a>

```python
saml_idp_metadata_uploaded: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `saml_login_url`<sup>Required</sup> <a name="saml_login_url" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlLoginUrl"></a>

```python
saml_login_url: str
```

- *Type:* str

---

##### `saml_strict_mode`<sup>Required</sup> <a name="saml_strict_mode" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlStrictMode"></a>

```python
saml_strict_mode: DataDatadogOrganizationSettingsSettingsSamlStrictModeList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList">DataDatadogOrganizationSettingsSettingsSamlStrictModeList</a>

---

##### `saml_autocreate_users_domains_input`<sup>Optional</sup> <a name="saml_autocreate_users_domains_input" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomainsInput"></a>

```python
saml_autocreate_users_domains_input: IResolvable | typing.List[DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a>]

---

##### `saml_idp_initiated_login_input`<sup>Optional</sup> <a name="saml_idp_initiated_login_input" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLoginInput"></a>

```python
saml_idp_initiated_login_input: IResolvable | typing.List[DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a>]

---

##### `saml_input`<sup>Optional</sup> <a name="saml_input" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlInput"></a>

```python
saml_input: IResolvable | typing.List[DataDatadogOrganizationSettingsSettingsSaml]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a>]

---

##### `saml_strict_mode_input`<sup>Optional</sup> <a name="saml_strict_mode_input" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlStrictModeInput"></a>

```python
saml_strict_mode_input: IResolvable | typing.List[DataDatadogOrganizationSettingsSettingsSamlStrictMode]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogOrganizationSettingsSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>

---


### DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList <a name="DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_organization_settings

dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a>]

---


### DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference <a name="DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_organization_settings

dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.domains">domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a>

---


### DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList <a name="DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_organization_settings

dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a>]

---


### DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference <a name="DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_organization_settings

dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a>

---


### DataDatadogOrganizationSettingsSettingsSamlList <a name="DataDatadogOrganizationSettingsSettingsSamlList" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_organization_settings

dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogOrganizationSettingsSettingsSamlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatadogOrganizationSettingsSettingsSaml]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a>]

---


### DataDatadogOrganizationSettingsSettingsSamlOutputReference <a name="DataDatadogOrganizationSettingsSettingsSamlOutputReference" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_organization_settings

dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogOrganizationSettingsSettingsSaml
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a>

---


### DataDatadogOrganizationSettingsSettingsSamlStrictModeList <a name="DataDatadogOrganizationSettingsSettingsSamlStrictModeList" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_organization_settings

dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatadogOrganizationSettingsSettingsSamlStrictMode]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a>]

---


### DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference <a name="DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_organization_settings

dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogOrganizationSettingsSettingsSamlStrictMode
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a>

---



