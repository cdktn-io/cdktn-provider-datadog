# `incidentType` Submodule <a name="`incidentType` Submodule" id="@cdktn/provider-datadog.incidentType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentType <a name="IncidentType" id="@cdktn/provider-datadog.incidentType.IncidentType"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type datadog_incident_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer"></a>

```python
from cdktn_provider_datadog import incident_type

incidentType.IncidentType(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  configuration: IncidentTypeConfiguration = None,
  description: str = None,
  is_default: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the incident type. Must be between 1 and 50 characters. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a></code> | The incident type's behavior settings. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the incident type. The description can have a maximum of 512 characters. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.isDefault">is_default</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether this incident type is the default type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.name"></a>

- *Type:* str

Name of the incident type. Must be between 1 and 50 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#name IncidentType#name}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a>

The incident type's behavior settings.

Any field left unset takes its server-side default. This block is applied in a separate call after the incident type is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#configuration IncidentType#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.description"></a>

- *Type:* str

Description of the incident type. The description can have a maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#description IncidentType#description}

---

##### `is_default`<sup>Optional</sup> <a name="is_default" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.isDefault"></a>

- *Type:* bool | cdktn.IResolvable

Whether this incident type is the default type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#is_default IncidentType#is_default}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.resetIsDefault">reset_is_default</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.incidentType.IncidentType.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.incidentType.IncidentType.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.incidentType.IncidentType.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.incidentType.IncidentType.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.incidentType.IncidentType.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentType.IncidentType.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.incidentType.IncidentType.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.incidentType.IncidentType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.incidentType.IncidentType.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.incidentType.IncidentType.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.incidentType.IncidentType.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.incidentType.IncidentType.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.incidentType.IncidentType.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.incidentType.IncidentType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.incidentType.IncidentType.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.incidentType.IncidentType.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentType.IncidentType.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentType.IncidentType.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.incidentType.IncidentType.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentType.IncidentType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.incidentType.IncidentType.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentType.IncidentType.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.incidentType.IncidentType.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.incidentType.IncidentType.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.incidentType.IncidentType.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.incidentType.IncidentType.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentType.IncidentType.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration` <a name="put_configuration" id="@cdktn/provider-datadog.incidentType.IncidentType.putConfiguration"></a>

```python
def put_configuration(
  allow_incident_deletion: bool | IResolvable = None,
  allow_workflows: bool | IResolvable = None,
  create_message: str = None,
  editable_timestamps: bool | IResolvable = None,
  private_incidents: bool | IResolvable = None,
  private_incidents_by_default: bool | IResolvable = None,
  slug_source: str = None,
  test_incidents: bool | IResolvable = None
) -> None
```

###### `allow_incident_deletion`<sup>Optional</sup> <a name="allow_incident_deletion" id="@cdktn/provider-datadog.incidentType.IncidentType.putConfiguration.parameter.allowIncidentDeletion"></a>

- *Type:* bool | cdktn.IResolvable

Whether incidents of this type can be deleted. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#allow_incident_deletion IncidentType#allow_incident_deletion}

---

###### `allow_workflows`<sup>Optional</sup> <a name="allow_workflows" id="@cdktn/provider-datadog.incidentType.IncidentType.putConfiguration.parameter.allowWorkflows"></a>

- *Type:* bool | cdktn.IResolvable

Whether users can manually run a workflow from an incident of this type. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#allow_workflows IncidentType#allow_workflows}

---

###### `create_message`<sup>Optional</sup> <a name="create_message" id="@cdktn/provider-datadog.incidentType.IncidentType.putConfiguration.parameter.createMessage"></a>

- *Type:* str

An optional message shown to users when they declare an incident of this type. Defaults to an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#create_message IncidentType#create_message}

---

###### `editable_timestamps`<sup>Optional</sup> <a name="editable_timestamps" id="@cdktn/provider-datadog.incidentType.IncidentType.putConfiguration.parameter.editableTimestamps"></a>

- *Type:* bool | cdktn.IResolvable

Whether responders can edit incident timestamps for incidents of this type. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#editable_timestamps IncidentType#editable_timestamps}

---

###### `private_incidents`<sup>Optional</sup> <a name="private_incidents" id="@cdktn/provider-datadog.incidentType.IncidentType.putConfiguration.parameter.privateIncidents"></a>

- *Type:* bool | cdktn.IResolvable

Whether responders can create private incidents of this type. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#private_incidents IncidentType#private_incidents}

---

###### `private_incidents_by_default`<sup>Optional</sup> <a name="private_incidents_by_default" id="@cdktn/provider-datadog.incidentType.IncidentType.putConfiguration.parameter.privateIncidentsByDefault"></a>

- *Type:* bool | cdktn.IResolvable

Whether the private toggle is enabled by default in the incident creation modal for this type. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#private_incidents_by_default IncidentType#private_incidents_by_default}

---

###### `slug_source`<sup>Optional</sup> <a name="slug_source" id="@cdktn/provider-datadog.incidentType.IncidentType.putConfiguration.parameter.slugSource"></a>

- *Type:* str

The source used to derive the incident slug.

When set to `servicenow`, incidents display the ServiceNow record ID instead of the public ID. If no ServiceNow integration exists, the public ID is displayed. Defaults to `default`. Valid values are `default`, `servicenow`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#slug_source IncidentType#slug_source}

---

###### `test_incidents`<sup>Optional</sup> <a name="test_incidents" id="@cdktn/provider-datadog.incidentType.IncidentType.putConfiguration.parameter.testIncidents"></a>

- *Type:* bool | cdktn.IResolvable

Whether test incidents of this type can be created. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#test_incidents IncidentType#test_incidents}

---

##### `reset_configuration` <a name="reset_configuration" id="@cdktn/provider-datadog.incidentType.IncidentType.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-datadog.incidentType.IncidentType.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_is_default` <a name="reset_is_default" id="@cdktn/provider-datadog.incidentType.IncidentType.resetIsDefault"></a>

```python
def reset_is_default() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IncidentType resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.incidentType.IncidentType.isConstruct"></a>

```python
from cdktn_provider_datadog import incident_type

incidentType.IncidentType.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentType.IncidentType.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.incidentType.IncidentType.isTerraformElement"></a>

```python
from cdktn_provider_datadog import incident_type

incidentType.IncidentType.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentType.IncidentType.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.incidentType.IncidentType.isTerraformResource"></a>

```python
from cdktn_provider_datadog import incident_type

incidentType.IncidentType.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentType.IncidentType.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.incidentType.IncidentType.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import incident_type

incidentType.IncidentType.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IncidentType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.incidentType.IncidentType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.incidentType.IncidentType.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IncidentType to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.incidentType.IncidentType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IncidentType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentType.IncidentType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IncidentType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference">IncidentTypeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.configurationInput">configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.isDefaultInput">is_default_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.isDefault">is_default</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.incidentType.IncidentType.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.incidentType.IncidentType.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentType.IncidentType.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.incidentType.IncidentType.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.incidentType.IncidentType.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.incidentType.IncidentType.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.incidentType.IncidentType.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentType.IncidentType.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentType.IncidentType.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.incidentType.IncidentType.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.incidentType.IncidentType.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentType.IncidentType.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentType.IncidentType.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentType.IncidentType.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-datadog.incidentType.IncidentType.property.configuration"></a>

```python
configuration: IncidentTypeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference">IncidentTypeConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentType.IncidentType.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-datadog.incidentType.IncidentType.property.configurationInput"></a>

```python
configuration_input: IResolvable | IncidentTypeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-datadog.incidentType.IncidentType.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `is_default_input`<sup>Optional</sup> <a name="is_default_input" id="@cdktn/provider-datadog.incidentType.IncidentType.property.isDefaultInput"></a>

```python
is_default_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.incidentType.IncidentType.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.incidentType.IncidentType.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktn/provider-datadog.incidentType.IncidentType.property.isDefault"></a>

```python
is_default: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentType.IncidentType.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.incidentType.IncidentType.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentTypeConfig <a name="IncidentTypeConfig" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.Initializer"></a>

```python
from cdktn_provider_datadog import incident_type

incidentType.IncidentTypeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  configuration: IncidentTypeConfiguration = None,
  description: str = None,
  is_default: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.name">name</a></code> | <code>str</code> | Name of the incident type. Must be between 1 and 50 characters. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a></code> | The incident type's behavior settings. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.description">description</a></code> | <code>str</code> | Description of the incident type. The description can have a maximum of 512 characters. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.isDefault">is_default</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether this incident type is the default type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the incident type. Must be between 1 and 50 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#name IncidentType#name}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.configuration"></a>

```python
configuration: IncidentTypeConfiguration
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a>

The incident type's behavior settings.

Any field left unset takes its server-side default. This block is applied in a separate call after the incident type is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#configuration IncidentType#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the incident type. The description can have a maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#description IncidentType#description}

---

##### `is_default`<sup>Optional</sup> <a name="is_default" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.isDefault"></a>

```python
is_default: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether this incident type is the default type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#is_default IncidentType#is_default}

---

### IncidentTypeConfiguration <a name="IncidentTypeConfiguration" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.Initializer"></a>

```python
from cdktn_provider_datadog import incident_type

incidentType.IncidentTypeConfiguration(
  allow_incident_deletion: bool | IResolvable = None,
  allow_workflows: bool | IResolvable = None,
  create_message: str = None,
  editable_timestamps: bool | IResolvable = None,
  private_incidents: bool | IResolvable = None,
  private_incidents_by_default: bool | IResolvable = None,
  slug_source: str = None,
  test_incidents: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.allowIncidentDeletion">allow_incident_deletion</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether incidents of this type can be deleted. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.allowWorkflows">allow_workflows</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether users can manually run a workflow from an incident of this type. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.createMessage">create_message</a></code> | <code>str</code> | An optional message shown to users when they declare an incident of this type. Defaults to an empty string. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.editableTimestamps">editable_timestamps</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether responders can edit incident timestamps for incidents of this type. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.privateIncidents">private_incidents</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether responders can create private incidents of this type. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.privateIncidentsByDefault">private_incidents_by_default</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the private toggle is enabled by default in the incident creation modal for this type. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.slugSource">slug_source</a></code> | <code>str</code> | The source used to derive the incident slug. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.testIncidents">test_incidents</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether test incidents of this type can be created. Defaults to `true`. |

---

##### `allow_incident_deletion`<sup>Optional</sup> <a name="allow_incident_deletion" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.allowIncidentDeletion"></a>

```python
allow_incident_deletion: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether incidents of this type can be deleted. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#allow_incident_deletion IncidentType#allow_incident_deletion}

---

##### `allow_workflows`<sup>Optional</sup> <a name="allow_workflows" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.allowWorkflows"></a>

```python
allow_workflows: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether users can manually run a workflow from an incident of this type. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#allow_workflows IncidentType#allow_workflows}

---

##### `create_message`<sup>Optional</sup> <a name="create_message" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.createMessage"></a>

```python
create_message: str
```

- *Type:* str

An optional message shown to users when they declare an incident of this type. Defaults to an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#create_message IncidentType#create_message}

---

##### `editable_timestamps`<sup>Optional</sup> <a name="editable_timestamps" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.editableTimestamps"></a>

```python
editable_timestamps: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether responders can edit incident timestamps for incidents of this type. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#editable_timestamps IncidentType#editable_timestamps}

---

##### `private_incidents`<sup>Optional</sup> <a name="private_incidents" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.privateIncidents"></a>

```python
private_incidents: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether responders can create private incidents of this type. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#private_incidents IncidentType#private_incidents}

---

##### `private_incidents_by_default`<sup>Optional</sup> <a name="private_incidents_by_default" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.privateIncidentsByDefault"></a>

```python
private_incidents_by_default: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the private toggle is enabled by default in the incident creation modal for this type. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#private_incidents_by_default IncidentType#private_incidents_by_default}

---

##### `slug_source`<sup>Optional</sup> <a name="slug_source" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.slugSource"></a>

```python
slug_source: str
```

- *Type:* str

The source used to derive the incident slug.

When set to `servicenow`, incidents display the ServiceNow record ID instead of the public ID. If no ServiceNow integration exists, the public ID is displayed. Defaults to `default`. Valid values are `default`, `servicenow`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#slug_source IncidentType#slug_source}

---

##### `test_incidents`<sup>Optional</sup> <a name="test_incidents" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.testIncidents"></a>

```python
test_incidents: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether test incidents of this type can be created. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#test_incidents IncidentType#test_incidents}

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentTypeConfigurationOutputReference <a name="IncidentTypeConfigurationOutputReference" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import incident_type

incidentType.IncidentTypeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetAllowIncidentDeletion">reset_allow_incident_deletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetAllowWorkflows">reset_allow_workflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetCreateMessage">reset_create_message</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetEditableTimestamps">reset_editable_timestamps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetPrivateIncidents">reset_private_incidents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetPrivateIncidentsByDefault">reset_private_incidents_by_default</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetSlugSource">reset_slug_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetTestIncidents">reset_test_incidents</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_incident_deletion` <a name="reset_allow_incident_deletion" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetAllowIncidentDeletion"></a>

```python
def reset_allow_incident_deletion() -> None
```

##### `reset_allow_workflows` <a name="reset_allow_workflows" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetAllowWorkflows"></a>

```python
def reset_allow_workflows() -> None
```

##### `reset_create_message` <a name="reset_create_message" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetCreateMessage"></a>

```python
def reset_create_message() -> None
```

##### `reset_editable_timestamps` <a name="reset_editable_timestamps" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetEditableTimestamps"></a>

```python
def reset_editable_timestamps() -> None
```

##### `reset_private_incidents` <a name="reset_private_incidents" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetPrivateIncidents"></a>

```python
def reset_private_incidents() -> None
```

##### `reset_private_incidents_by_default` <a name="reset_private_incidents_by_default" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetPrivateIncidentsByDefault"></a>

```python
def reset_private_incidents_by_default() -> None
```

##### `reset_slug_source` <a name="reset_slug_source" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetSlugSource"></a>

```python
def reset_slug_source() -> None
```

##### `reset_test_incidents` <a name="reset_test_incidents" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetTestIncidents"></a>

```python
def reset_test_incidents() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowIncidentDeletionInput">allow_incident_deletion_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowWorkflowsInput">allow_workflows_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.createMessageInput">create_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.editableTimestampsInput">editable_timestamps_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidentsByDefaultInput">private_incidents_by_default_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidentsInput">private_incidents_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.slugSourceInput">slug_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.testIncidentsInput">test_incidents_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowIncidentDeletion">allow_incident_deletion</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowWorkflows">allow_workflows</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.createMessage">create_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.editableTimestamps">editable_timestamps</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidents">private_incidents</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidentsByDefault">private_incidents_by_default</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.slugSource">slug_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.testIncidents">test_incidents</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_incident_deletion_input`<sup>Optional</sup> <a name="allow_incident_deletion_input" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowIncidentDeletionInput"></a>

```python
allow_incident_deletion_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allow_workflows_input`<sup>Optional</sup> <a name="allow_workflows_input" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowWorkflowsInput"></a>

```python
allow_workflows_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `create_message_input`<sup>Optional</sup> <a name="create_message_input" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.createMessageInput"></a>

```python
create_message_input: str
```

- *Type:* str

---

##### `editable_timestamps_input`<sup>Optional</sup> <a name="editable_timestamps_input" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.editableTimestampsInput"></a>

```python
editable_timestamps_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `private_incidents_by_default_input`<sup>Optional</sup> <a name="private_incidents_by_default_input" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidentsByDefaultInput"></a>

```python
private_incidents_by_default_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `private_incidents_input`<sup>Optional</sup> <a name="private_incidents_input" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidentsInput"></a>

```python
private_incidents_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `slug_source_input`<sup>Optional</sup> <a name="slug_source_input" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.slugSourceInput"></a>

```python
slug_source_input: str
```

- *Type:* str

---

##### `test_incidents_input`<sup>Optional</sup> <a name="test_incidents_input" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.testIncidentsInput"></a>

```python
test_incidents_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allow_incident_deletion`<sup>Required</sup> <a name="allow_incident_deletion" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowIncidentDeletion"></a>

```python
allow_incident_deletion: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allow_workflows`<sup>Required</sup> <a name="allow_workflows" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowWorkflows"></a>

```python
allow_workflows: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `create_message`<sup>Required</sup> <a name="create_message" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.createMessage"></a>

```python
create_message: str
```

- *Type:* str

---

##### `editable_timestamps`<sup>Required</sup> <a name="editable_timestamps" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.editableTimestamps"></a>

```python
editable_timestamps: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `private_incidents`<sup>Required</sup> <a name="private_incidents" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidents"></a>

```python
private_incidents: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `private_incidents_by_default`<sup>Required</sup> <a name="private_incidents_by_default" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidentsByDefault"></a>

```python
private_incidents_by_default: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `slug_source`<sup>Required</sup> <a name="slug_source" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.slugSource"></a>

```python
slug_source: str
```

- *Type:* str

---

##### `test_incidents`<sup>Required</sup> <a name="test_incidents" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.testIncidents"></a>

```python
test_incidents: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IncidentTypeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a>

---



