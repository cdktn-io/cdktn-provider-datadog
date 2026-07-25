# `incidentUserDefinedField` Submodule <a name="`incidentUserDefinedField` Submodule" id="@cdktn/provider-datadog.incidentUserDefinedField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentUserDefinedField <a name="IncidentUserDefinedField" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field datadog_incident_user_defined_field}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer"></a>

```python
from cdktn_provider_datadog import incident_user_defined_field

incidentUserDefinedField.IncidentUserDefinedField(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  incident_type: str,
  name: str,
  type: str,
  category: str = None,
  default_value: str = None,
  display_name: str = None,
  ordinal: str = None,
  required: bool | IResolvable = None,
  tag_key: str = None,
  valid_value: IResolvable | typing.List[IncidentUserDefinedFieldValidValue] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.incidentType">incident_type</a></code> | <code>str</code> | The ID of the incident type this field is associated with. Changing the incident type forces a new resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.name">name</a></code> | <code>str</code> | The unique identifier of the field. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.type">type</a></code> | <code>str</code> | The data type of the field. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.category">category</a></code> | <code>str</code> | The section in which the field appears: `what_happened` or `why_it_happened`. When unset, the field appears in the Attributes section. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.defaultValue">default_value</a></code> | <code>str</code> | The default value for the field. Must be one of the valid values when `valid_values` is set. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The human-readable name shown in the UI. Defaults to a formatted version of the name if not provided. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.ordinal">ordinal</a></code> | <code>str</code> | A decimal string representing the field's display order in the UI. Assigned by the server when not provided. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.required">required</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, users must fill out this field on incidents. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.tagKey">tag_key</a></code> | <code>str</code> | For metric tag-type fields only, the metric tag key that powers the autocomplete options. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.validValue">valid_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>]</code> | valid_value block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `incident_type`<sup>Required</sup> <a name="incident_type" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.incidentType"></a>

- *Type:* str

The ID of the incident type this field is associated with. Changing the incident type forces a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#incident_type IncidentUserDefinedField#incident_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.name"></a>

- *Type:* str

The unique identifier of the field.

Must start with a letter or digit and contain only letters, digits, underscores, or periods. Changing the name forces a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#name IncidentUserDefinedField#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.type"></a>

- *Type:* str

The data type of the field.

Changing the type forces a new resource. Valid values are `dropdown`, `multiselect`, `textbox`, `textarray`, `metrictag`, `autocomplete`, `number`, `datetime`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#type IncidentUserDefinedField#type}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.category"></a>

- *Type:* str

The section in which the field appears: `what_happened` or `why_it_happened`. When unset, the field appears in the Attributes section.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#category IncidentUserDefinedField#category}

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.defaultValue"></a>

- *Type:* str

The default value for the field. Must be one of the valid values when `valid_values` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#default_value IncidentUserDefinedField#default_value}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.displayName"></a>

- *Type:* str

The human-readable name shown in the UI. Defaults to a formatted version of the name if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#display_name IncidentUserDefinedField#display_name}

---

##### `ordinal`<sup>Optional</sup> <a name="ordinal" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.ordinal"></a>

- *Type:* str

A decimal string representing the field's display order in the UI. Assigned by the server when not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#ordinal IncidentUserDefinedField#ordinal}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.required"></a>

- *Type:* bool | cdktn.IResolvable

When true, users must fill out this field on incidents. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#required IncidentUserDefinedField#required}

---

##### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.tagKey"></a>

- *Type:* str

For metric tag-type fields only, the metric tag key that powers the autocomplete options.

Changing the tag key forces a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#tag_key IncidentUserDefinedField#tag_key}

---

##### `valid_value`<sup>Optional</sup> <a name="valid_value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.validValue"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>]

valid_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#valid_value IncidentUserDefinedField#valid_value}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.putValidValue">put_valid_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetCategory">reset_category</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetOrdinal">reset_ordinal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetTagKey">reset_tag_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetValidValue">reset_valid_value</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_valid_value` <a name="put_valid_value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.putValidValue"></a>

```python
def put_valid_value(
  value: IResolvable | typing.List[IncidentUserDefinedFieldValidValue]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.putValidValue.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>]

---

##### `reset_category` <a name="reset_category" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetCategory"></a>

```python
def reset_category() -> None
```

##### `reset_default_value` <a name="reset_default_value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_ordinal` <a name="reset_ordinal" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetOrdinal"></a>

```python
def reset_ordinal() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_tag_key` <a name="reset_tag_key" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetTagKey"></a>

```python
def reset_tag_key() -> None
```

##### `reset_valid_value` <a name="reset_valid_value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetValidValue"></a>

```python
def reset_valid_value() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IncidentUserDefinedField resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isConstruct"></a>

```python
from cdktn_provider_datadog import incident_user_defined_field

incidentUserDefinedField.IncidentUserDefinedField.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformElement"></a>

```python
from cdktn_provider_datadog import incident_user_defined_field

incidentUserDefinedField.IncidentUserDefinedField.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformResource"></a>

```python
from cdktn_provider_datadog import incident_user_defined_field

incidentUserDefinedField.IncidentUserDefinedField.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import incident_user_defined_field

incidentUserDefinedField.IncidentUserDefinedField.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IncidentUserDefinedField resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IncidentUserDefinedField to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IncidentUserDefinedField that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IncidentUserDefinedField to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.deleted">deleted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference">IncidentUserDefinedFieldMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.modified">modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.reserved">reserved</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.validValue">valid_value</a></code> | <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList">IncidentUserDefinedFieldValidValueList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.defaultValueInput">default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.incidentTypeInput">incident_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.ordinalInput">ordinal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.requiredInput">required_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.validValueInput">valid_value_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.incidentType">incident_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.ordinal">ordinal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.required">required</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.deleted"></a>

```python
deleted: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.metadata"></a>

```python
metadata: IncidentUserDefinedFieldMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference">IncidentUserDefinedFieldMetadataOutputReference</a>

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.modified"></a>

```python
modified: str
```

- *Type:* str

---

##### `reserved`<sup>Required</sup> <a name="reserved" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.reserved"></a>

```python
reserved: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `valid_value`<sup>Required</sup> <a name="valid_value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.validValue"></a>

```python
valid_value: IncidentUserDefinedFieldValidValueList
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList">IncidentUserDefinedFieldValidValueList</a>

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.defaultValueInput"></a>

```python
default_value_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `incident_type_input`<sup>Optional</sup> <a name="incident_type_input" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.incidentTypeInput"></a>

```python
incident_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ordinal_input`<sup>Optional</sup> <a name="ordinal_input" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.ordinalInput"></a>

```python
ordinal_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.requiredInput"></a>

```python
required_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `valid_value_input`<sup>Optional</sup> <a name="valid_value_input" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.validValueInput"></a>

```python
valid_value_input: IResolvable | typing.List[IncidentUserDefinedFieldValidValue]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `incident_type`<sup>Required</sup> <a name="incident_type" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.incidentType"></a>

```python
incident_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ordinal`<sup>Required</sup> <a name="ordinal" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.ordinal"></a>

```python
ordinal: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentUserDefinedFieldConfig <a name="IncidentUserDefinedFieldConfig" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.Initializer"></a>

```python
from cdktn_provider_datadog import incident_user_defined_field

incidentUserDefinedField.IncidentUserDefinedFieldConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  incident_type: str,
  name: str,
  type: str,
  category: str = None,
  default_value: str = None,
  display_name: str = None,
  ordinal: str = None,
  required: bool | IResolvable = None,
  tag_key: str = None,
  valid_value: IResolvable | typing.List[IncidentUserDefinedFieldValidValue] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.incidentType">incident_type</a></code> | <code>str</code> | The ID of the incident type this field is associated with. Changing the incident type forces a new resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.name">name</a></code> | <code>str</code> | The unique identifier of the field. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.type">type</a></code> | <code>str</code> | The data type of the field. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.category">category</a></code> | <code>str</code> | The section in which the field appears: `what_happened` or `why_it_happened`. When unset, the field appears in the Attributes section. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.defaultValue">default_value</a></code> | <code>str</code> | The default value for the field. Must be one of the valid values when `valid_values` is set. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.displayName">display_name</a></code> | <code>str</code> | The human-readable name shown in the UI. Defaults to a formatted version of the name if not provided. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.ordinal">ordinal</a></code> | <code>str</code> | A decimal string representing the field's display order in the UI. Assigned by the server when not provided. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.required">required</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, users must fill out this field on incidents. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.tagKey">tag_key</a></code> | <code>str</code> | For metric tag-type fields only, the metric tag key that powers the autocomplete options. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.validValue">valid_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>]</code> | valid_value block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `incident_type`<sup>Required</sup> <a name="incident_type" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.incidentType"></a>

```python
incident_type: str
```

- *Type:* str

The ID of the incident type this field is associated with. Changing the incident type forces a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#incident_type IncidentUserDefinedField#incident_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The unique identifier of the field.

Must start with a letter or digit and contain only letters, digits, underscores, or periods. Changing the name forces a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#name IncidentUserDefinedField#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The data type of the field.

Changing the type forces a new resource. Valid values are `dropdown`, `multiselect`, `textbox`, `textarray`, `metrictag`, `autocomplete`, `number`, `datetime`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#type IncidentUserDefinedField#type}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.category"></a>

```python
category: str
```

- *Type:* str

The section in which the field appears: `what_happened` or `why_it_happened`. When unset, the field appears in the Attributes section.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#category IncidentUserDefinedField#category}

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

The default value for the field. Must be one of the valid values when `valid_values` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#default_value IncidentUserDefinedField#default_value}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The human-readable name shown in the UI. Defaults to a formatted version of the name if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#display_name IncidentUserDefinedField#display_name}

---

##### `ordinal`<sup>Optional</sup> <a name="ordinal" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.ordinal"></a>

```python
ordinal: str
```

- *Type:* str

A decimal string representing the field's display order in the UI. Assigned by the server when not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#ordinal IncidentUserDefinedField#ordinal}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, users must fill out this field on incidents. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#required IncidentUserDefinedField#required}

---

##### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

For metric tag-type fields only, the metric tag key that powers the autocomplete options.

Changing the tag key forces a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#tag_key IncidentUserDefinedField#tag_key}

---

##### `valid_value`<sup>Optional</sup> <a name="valid_value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.validValue"></a>

```python
valid_value: IResolvable | typing.List[IncidentUserDefinedFieldValidValue]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>]

valid_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#valid_value IncidentUserDefinedField#valid_value}

---

### IncidentUserDefinedFieldMetadata <a name="IncidentUserDefinedFieldMetadata" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadata.Initializer"></a>

```python
from cdktn_provider_datadog import incident_user_defined_field

incidentUserDefinedField.IncidentUserDefinedFieldMetadata()
```


### IncidentUserDefinedFieldValidValue <a name="IncidentUserDefinedFieldValidValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.Initializer"></a>

```python
from cdktn_provider_datadog import incident_user_defined_field

incidentUserDefinedField.IncidentUserDefinedFieldValidValue(
  display_name: str,
  value: str,
  description: str = None,
  short_description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.displayName">display_name</a></code> | <code>str</code> | The human-readable display name for this value. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.value">value</a></code> | <code>str</code> | The identifier that is stored when this option is selected. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.description">description</a></code> | <code>str</code> | A detailed description of the valid value. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.shortDescription">short_description</a></code> | <code>str</code> | A short description of the valid value. |

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The human-readable display name for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#display_name IncidentUserDefinedField#display_name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.value"></a>

```python
value: str
```

- *Type:* str

The identifier that is stored when this option is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#value IncidentUserDefinedField#value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.description"></a>

```python
description: str
```

- *Type:* str

A detailed description of the valid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#description IncidentUserDefinedField#description}

---

##### `short_description`<sup>Optional</sup> <a name="short_description" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.shortDescription"></a>

```python
short_description: str
```

- *Type:* str

A short description of the valid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#short_description IncidentUserDefinedField#short_description}

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentUserDefinedFieldMetadataOutputReference <a name="IncidentUserDefinedFieldMetadataOutputReference" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import incident_user_defined_field

incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchLimitParam">search_limit_param</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchParams">search_params</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchQueryParam">search_query_param</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchResultPath">search_result_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchUrl">search_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadata">IncidentUserDefinedFieldMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `search_limit_param`<sup>Required</sup> <a name="search_limit_param" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchLimitParam"></a>

```python
search_limit_param: str
```

- *Type:* str

---

##### `search_params`<sup>Required</sup> <a name="search_params" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchParams"></a>

```python
search_params: StringMap
```

- *Type:* cdktn.StringMap

---

##### `search_query_param`<sup>Required</sup> <a name="search_query_param" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchQueryParam"></a>

```python
search_query_param: str
```

- *Type:* str

---

##### `search_result_path`<sup>Required</sup> <a name="search_result_path" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchResultPath"></a>

```python
search_result_path: str
```

- *Type:* str

---

##### `search_url`<sup>Required</sup> <a name="search_url" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchUrl"></a>

```python
search_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IncidentUserDefinedFieldMetadata
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadata">IncidentUserDefinedFieldMetadata</a>

---


### IncidentUserDefinedFieldValidValueList <a name="IncidentUserDefinedFieldValidValueList" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer"></a>

```python
from cdktn_provider_datadog import incident_user_defined_field

incidentUserDefinedField.IncidentUserDefinedFieldValidValueList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IncidentUserDefinedFieldValidValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IncidentUserDefinedFieldValidValue]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>]

---


### IncidentUserDefinedFieldValidValueOutputReference <a name="IncidentUserDefinedFieldValidValueOutputReference" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import incident_user_defined_field

incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resetShortDescription">reset_short_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_short_description` <a name="reset_short_description" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resetShortDescription"></a>

```python
def reset_short_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.shortDescriptionInput">short_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.shortDescription">short_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `short_description_input`<sup>Optional</sup> <a name="short_description_input" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.shortDescriptionInput"></a>

```python
short_description_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `short_description`<sup>Required</sup> <a name="short_description" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.shortDescription"></a>

```python
short_description: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IncidentUserDefinedFieldValidValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>

---



