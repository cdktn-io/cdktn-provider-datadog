# `incidentUserDefinedRole` Submodule <a name="`incidentUserDefinedRole` Submodule" id="@cdktn/provider-datadog.incidentUserDefinedRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentUserDefinedRole <a name="IncidentUserDefinedRole" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_role datadog_incident_user_defined_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer"></a>

```python
from cdktn_provider_datadog import incident_user_defined_role

incidentUserDefinedRole.IncidentUserDefinedRole(
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
  description: str = None,
  policy: IncidentUserDefinedRolePolicy = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.incidentType">incident_type</a></code> | <code>str</code> | The ID of the incident type this user-defined role is associated with. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the user-defined role. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the user-defined role. At most 1024 characters. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.policy">policy</a></code> | <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicy">IncidentUserDefinedRolePolicy</a></code> | Policy configuration for the user-defined role. Defaults to a multi-assignee policy when omitted. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `incident_type`<sup>Required</sup> <a name="incident_type" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.incidentType"></a>

- *Type:* str

The ID of the incident type this user-defined role is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_role#incident_type IncidentUserDefinedRole#incident_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.name"></a>

- *Type:* str

The name of the user-defined role.

Cannot be a reserved name ("Incident Commander" or "Responder") and must be at most 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_role#name IncidentUserDefinedRole#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.description"></a>

- *Type:* str

A description of the user-defined role. At most 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_role#description IncidentUserDefinedRole#description}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.policy"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicy">IncidentUserDefinedRolePolicy</a>

Policy configuration for the user-defined role. Defaults to a multi-assignee policy when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_role#policy IncidentUserDefinedRole#policy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.putPolicy">put_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.resetPolicy">reset_policy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_policy` <a name="put_policy" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.putPolicy"></a>

```python
def put_policy(
  is_single: bool | IResolvable = None
) -> None
```

###### `is_single`<sup>Optional</sup> <a name="is_single" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.putPolicy.parameter.isSingle"></a>

- *Type:* bool | cdktn.IResolvable

Whether this role can only be assigned to one responder at a time. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_role#is_single IncidentUserDefinedRole#is_single}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_policy` <a name="reset_policy" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.resetPolicy"></a>

```python
def reset_policy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IncidentUserDefinedRole resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.isConstruct"></a>

```python
from cdktn_provider_datadog import incident_user_defined_role

incidentUserDefinedRole.IncidentUserDefinedRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.isTerraformElement"></a>

```python
from cdktn_provider_datadog import incident_user_defined_role

incidentUserDefinedRole.IncidentUserDefinedRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.isTerraformResource"></a>

```python
from cdktn_provider_datadog import incident_user_defined_role

incidentUserDefinedRole.IncidentUserDefinedRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import incident_user_defined_role

incidentUserDefinedRole.IncidentUserDefinedRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IncidentUserDefinedRole resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IncidentUserDefinedRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IncidentUserDefinedRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IncidentUserDefinedRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.modified">modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.policy">policy</a></code> | <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference">IncidentUserDefinedRolePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.incidentTypeInput">incident_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.policyInput">policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicy">IncidentUserDefinedRolePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.incidentType">incident_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.modified"></a>

```python
modified: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.policy"></a>

```python
policy: IncidentUserDefinedRolePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference">IncidentUserDefinedRolePolicyOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `incident_type_input`<sup>Optional</sup> <a name="incident_type_input" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.incidentTypeInput"></a>

```python
incident_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.policyInput"></a>

```python
policy_input: IResolvable | IncidentUserDefinedRolePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicy">IncidentUserDefinedRolePolicy</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `incident_type`<sup>Required</sup> <a name="incident_type" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.incidentType"></a>

```python
incident_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentUserDefinedRoleConfig <a name="IncidentUserDefinedRoleConfig" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.Initializer"></a>

```python
from cdktn_provider_datadog import incident_user_defined_role

incidentUserDefinedRole.IncidentUserDefinedRoleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  incident_type: str,
  name: str,
  description: str = None,
  policy: IncidentUserDefinedRolePolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.incidentType">incident_type</a></code> | <code>str</code> | The ID of the incident type this user-defined role is associated with. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.name">name</a></code> | <code>str</code> | The name of the user-defined role. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.description">description</a></code> | <code>str</code> | A description of the user-defined role. At most 1024 characters. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.policy">policy</a></code> | <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicy">IncidentUserDefinedRolePolicy</a></code> | Policy configuration for the user-defined role. Defaults to a multi-assignee policy when omitted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `incident_type`<sup>Required</sup> <a name="incident_type" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.incidentType"></a>

```python
incident_type: str
```

- *Type:* str

The ID of the incident type this user-defined role is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_role#incident_type IncidentUserDefinedRole#incident_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the user-defined role.

Cannot be a reserved name ("Incident Commander" or "Responder") and must be at most 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_role#name IncidentUserDefinedRole#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the user-defined role. At most 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_role#description IncidentUserDefinedRole#description}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.policy"></a>

```python
policy: IncidentUserDefinedRolePolicy
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicy">IncidentUserDefinedRolePolicy</a>

Policy configuration for the user-defined role. Defaults to a multi-assignee policy when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_role#policy IncidentUserDefinedRole#policy}

---

### IncidentUserDefinedRolePolicy <a name="IncidentUserDefinedRolePolicy" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicy.Initializer"></a>

```python
from cdktn_provider_datadog import incident_user_defined_role

incidentUserDefinedRole.IncidentUserDefinedRolePolicy(
  is_single: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicy.property.isSingle">is_single</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether this role can only be assigned to one responder at a time. Defaults to `false`. |

---

##### `is_single`<sup>Optional</sup> <a name="is_single" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicy.property.isSingle"></a>

```python
is_single: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether this role can only be assigned to one responder at a time. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_role#is_single IncidentUserDefinedRole#is_single}

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentUserDefinedRolePolicyOutputReference <a name="IncidentUserDefinedRolePolicyOutputReference" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import incident_user_defined_role

incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.resetIsSingle">reset_is_single</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_single` <a name="reset_is_single" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.resetIsSingle"></a>

```python
def reset_is_single() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.property.isSingleInput">is_single_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.property.isSingle">is_single</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicy">IncidentUserDefinedRolePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_single_input`<sup>Optional</sup> <a name="is_single_input" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.property.isSingleInput"></a>

```python
is_single_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_single`<sup>Required</sup> <a name="is_single" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.property.isSingle"></a>

```python
is_single: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IncidentUserDefinedRolePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicy">IncidentUserDefinedRolePolicy</a>

---



