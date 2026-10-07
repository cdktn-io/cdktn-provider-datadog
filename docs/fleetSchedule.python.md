# `fleetSchedule` Submodule <a name="`fleetSchedule` Submodule" id="@cdktn/provider-datadog.fleetSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetSchedule <a name="FleetSchedule" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule datadog_fleet_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer"></a>

```python
from cdktn_provider_datadog import fleet_schedule

fleetSchedule.FleetSchedule(
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
  query: str,
  rule: FleetScheduleRule,
  status: str = None,
  version_to_latest: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.name">name</a></code> | <code>str</code> | Human-readable name for the schedule. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.query">query</a></code> | <code>str</code> | Datadog host query used to select the Agent upgrade targets. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule">FleetScheduleRule</a></code> | Weekly recurrence and maintenance-window configuration for the schedule. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.status">status</a></code> | <code>str</code> | Whether the schedule creates deployments. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.versionToLatest">version_to_latest</a></code> | <code>typing.Union[int, float]</code> | Number of major Agent versions behind the latest version to target: `0`, `1`, or `2`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.name"></a>

- *Type:* str

Human-readable name for the schedule. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#name FleetSchedule#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.query"></a>

- *Type:* str

Datadog host query used to select the Agent upgrade targets. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#query FleetSchedule#query}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.rule"></a>

- *Type:* <a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule">FleetScheduleRule</a>

Weekly recurrence and maintenance-window configuration for the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#rule FleetSchedule#rule}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.status"></a>

- *Type:* str

Whether the schedule creates deployments.

Valid values are `active` and `inactive`. The API default is used when omitted. Valid values are `active`, `inactive`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#status FleetSchedule#status}

---

##### `version_to_latest`<sup>Optional</sup> <a name="version_to_latest" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.Initializer.parameter.versionToLatest"></a>

- *Type:* typing.Union[int, float]

Number of major Agent versions behind the latest version to target: `0`, `1`, or `2`.

The API default is used when omitted. Value must be between 0 and 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#version_to_latest FleetSchedule#version_to_latest}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.resetVersionToLatest">reset_version_to_latest</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rule` <a name="put_rule" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.putRule"></a>

```python
def put_rule(
  days_of_week: typing.List[str],
  maintenance_window_duration: typing.Union[int, float],
  start_maintenance_window: str,
  timezone: str
) -> None
```

###### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.putRule.parameter.daysOfWeek"></a>

- *Type:* typing.List[str]

Days when the schedule may run. Valid values are `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, and `Sun`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#days_of_week FleetSchedule#days_of_week}

---

###### `maintenance_window_duration`<sup>Required</sup> <a name="maintenance_window_duration" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.putRule.parameter.maintenanceWindowDuration"></a>

- *Type:* typing.Union[int, float]

Duration of the maintenance window in minutes. Value must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#maintenance_window_duration FleetSchedule#maintenance_window_duration}

---

###### `start_maintenance_window`<sup>Required</sup> <a name="start_maintenance_window" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.putRule.parameter.startMaintenanceWindow"></a>

- *Type:* str

Start of the maintenance window in 24-hour `HH:MM` format. Must use HH:MM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#start_maintenance_window FleetSchedule#start_maintenance_window}

---

###### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.putRule.parameter.timezone"></a>

- *Type:* str

IANA time zone used to interpret the maintenance window, for example `America/New_York` or `UTC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#timezone FleetSchedule#timezone}

---

##### `reset_status` <a name="reset_status" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_version_to_latest` <a name="reset_version_to_latest" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.resetVersionToLatest"></a>

```python
def reset_version_to_latest() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a FleetSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.isConstruct"></a>

```python
from cdktn_provider_datadog import fleet_schedule

fleetSchedule.FleetSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.isTerraformElement"></a>

```python
from cdktn_provider_datadog import fleet_schedule

fleetSchedule.FleetSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.isTerraformResource"></a>

```python
from cdktn_provider_datadog import fleet_schedule

fleetSchedule.FleetSchedule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import fleet_schedule

fleetSchedule.FleetSchedule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a FleetSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FleetSchedule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FleetSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FleetSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference">FleetScheduleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.ruleInput">rule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule">FleetScheduleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.versionToLatestInput">version_to_latest_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.versionToLatest">version_to_latest</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.rule"></a>

```python
rule: FleetScheduleRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference">FleetScheduleRuleOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.ruleInput"></a>

```python
rule_input: IResolvable | FleetScheduleRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule">FleetScheduleRule</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `version_to_latest_input`<sup>Optional</sup> <a name="version_to_latest_input" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.versionToLatestInput"></a>

```python
version_to_latest_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `version_to_latest`<sup>Required</sup> <a name="version_to_latest" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.versionToLatest"></a>

```python
version_to_latest: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.fleetSchedule.FleetSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FleetScheduleConfig <a name="FleetScheduleConfig" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.Initializer"></a>

```python
from cdktn_provider_datadog import fleet_schedule

fleetSchedule.FleetScheduleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  query: str,
  rule: FleetScheduleRule,
  status: str = None,
  version_to_latest: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.name">name</a></code> | <code>str</code> | Human-readable name for the schedule. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.query">query</a></code> | <code>str</code> | Datadog host query used to select the Agent upgrade targets. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule">FleetScheduleRule</a></code> | Weekly recurrence and maintenance-window configuration for the schedule. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.status">status</a></code> | <code>str</code> | Whether the schedule creates deployments. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.versionToLatest">version_to_latest</a></code> | <code>typing.Union[int, float]</code> | Number of major Agent versions behind the latest version to target: `0`, `1`, or `2`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Human-readable name for the schedule. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#name FleetSchedule#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.query"></a>

```python
query: str
```

- *Type:* str

Datadog host query used to select the Agent upgrade targets. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#query FleetSchedule#query}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.rule"></a>

```python
rule: FleetScheduleRule
```

- *Type:* <a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule">FleetScheduleRule</a>

Weekly recurrence and maintenance-window configuration for the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#rule FleetSchedule#rule}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Whether the schedule creates deployments.

Valid values are `active` and `inactive`. The API default is used when omitted. Valid values are `active`, `inactive`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#status FleetSchedule#status}

---

##### `version_to_latest`<sup>Optional</sup> <a name="version_to_latest" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleConfig.property.versionToLatest"></a>

```python
version_to_latest: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of major Agent versions behind the latest version to target: `0`, `1`, or `2`.

The API default is used when omitted. Value must be between 0 and 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#version_to_latest FleetSchedule#version_to_latest}

---

### FleetScheduleRule <a name="FleetScheduleRule" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule.Initializer"></a>

```python
from cdktn_provider_datadog import fleet_schedule

fleetSchedule.FleetScheduleRule(
  days_of_week: typing.List[str],
  maintenance_window_duration: typing.Union[int, float],
  start_maintenance_window: str,
  timezone: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | Days when the schedule may run. Valid values are `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, and `Sun`. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule.property.maintenanceWindowDuration">maintenance_window_duration</a></code> | <code>typing.Union[int, float]</code> | Duration of the maintenance window in minutes. Value must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule.property.startMaintenanceWindow">start_maintenance_window</a></code> | <code>str</code> | Start of the maintenance window in 24-hour `HH:MM` format. Must use HH:MM format. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule.property.timezone">timezone</a></code> | <code>str</code> | IANA time zone used to interpret the maintenance window, for example `America/New_York` or `UTC`. |

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

Days when the schedule may run. Valid values are `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, and `Sun`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#days_of_week FleetSchedule#days_of_week}

---

##### `maintenance_window_duration`<sup>Required</sup> <a name="maintenance_window_duration" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule.property.maintenanceWindowDuration"></a>

```python
maintenance_window_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Duration of the maintenance window in minutes. Value must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#maintenance_window_duration FleetSchedule#maintenance_window_duration}

---

##### `start_maintenance_window`<sup>Required</sup> <a name="start_maintenance_window" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule.property.startMaintenanceWindow"></a>

```python
start_maintenance_window: str
```

- *Type:* str

Start of the maintenance window in 24-hour `HH:MM` format. Must use HH:MM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#start_maintenance_window FleetSchedule#start_maintenance_window}

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

IANA time zone used to interpret the maintenance window, for example `America/New_York` or `UTC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/fleet_schedule#timezone FleetSchedule#timezone}

---

## Classes <a name="Classes" id="Classes"></a>

### FleetScheduleRuleOutputReference <a name="FleetScheduleRuleOutputReference" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import fleet_schedule

fleetSchedule.FleetScheduleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.daysOfWeekInput">days_of_week_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.maintenanceWindowDurationInput">maintenance_window_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.startMaintenanceWindowInput">start_maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.maintenanceWindowDuration">maintenance_window_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.startMaintenanceWindow">start_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule">FleetScheduleRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_of_week_input`<sup>Optional</sup> <a name="days_of_week_input" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.daysOfWeekInput"></a>

```python
days_of_week_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `maintenance_window_duration_input`<sup>Optional</sup> <a name="maintenance_window_duration_input" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.maintenanceWindowDurationInput"></a>

```python
maintenance_window_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_maintenance_window_input`<sup>Optional</sup> <a name="start_maintenance_window_input" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.startMaintenanceWindowInput"></a>

```python
start_maintenance_window_input: str
```

- *Type:* str

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `maintenance_window_duration`<sup>Required</sup> <a name="maintenance_window_duration" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.maintenanceWindowDuration"></a>

```python
maintenance_window_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_maintenance_window`<sup>Required</sup> <a name="start_maintenance_window" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.startMaintenanceWindow"></a>

```python
start_maintenance_window: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.fleetSchedule.FleetScheduleRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FleetScheduleRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.fleetSchedule.FleetScheduleRule">FleetScheduleRule</a>

---



