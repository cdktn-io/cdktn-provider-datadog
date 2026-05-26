# `teamSync` Submodule <a name="`teamSync` Submodule" id="@cdktn/provider-datadog.teamSync"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamSync <a name="TeamSync" id="@cdktn/provider-datadog.teamSync.TeamSync"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/team_sync datadog_team_sync}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer"></a>

```python
from cdktn_provider_datadog import team_sync

teamSync.TeamSync(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  source: str,
  type: str,
  frequency: str = None,
  selection_state: IResolvable | typing.List[TeamSyncSelectionState] = None,
  sync_membership: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.source">source</a></code> | <code>str</code> | The external source platform for team synchronization. Valid values are `github`. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of synchronization operation. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.frequency">frequency</a></code> | <code>str</code> | How often the sync process should run. Valid values are `once`, `continuously`, `paused`. Defaults to `"once"`. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.selectionState">selection_state</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>]</code> | selection_state block. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.syncMembership">sync_membership</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to sync members from the external team to the Datadog team. Defaults to `false`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.source"></a>

- *Type:* str

The external source platform for team synchronization. Valid values are `github`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/team_sync#source TeamSync#source}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.type"></a>

- *Type:* str

The type of synchronization operation.

`link` connects teams by matching names. `provision` creates new teams when no match is found. Valid values are `link`, `provision`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/team_sync#type TeamSync#type}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.frequency"></a>

- *Type:* str

How often the sync process should run. Valid values are `once`, `continuously`, `paused`. Defaults to `"once"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/team_sync#frequency TeamSync#frequency}

---

##### `selection_state`<sup>Optional</sup> <a name="selection_state" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.selectionState"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>]

selection_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/team_sync#selection_state TeamSync#selection_state}

---

##### `sync_membership`<sup>Optional</sup> <a name="sync_membership" id="@cdktn/provider-datadog.teamSync.TeamSync.Initializer.parameter.syncMembership"></a>

- *Type:* bool | cdktn.IResolvable

Whether to sync members from the external team to the Datadog team. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/team_sync#sync_membership TeamSync#sync_membership}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.putSelectionState">put_selection_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.resetFrequency">reset_frequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.resetSelectionState">reset_selection_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.resetSyncMembership">reset_sync_membership</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.teamSync.TeamSync.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.teamSync.TeamSync.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.teamSync.TeamSync.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.teamSync.TeamSync.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.teamSync.TeamSync.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamSync.TeamSync.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.teamSync.TeamSync.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.teamSync.TeamSync.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.teamSync.TeamSync.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.teamSync.TeamSync.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.teamSync.TeamSync.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.teamSync.TeamSync.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.teamSync.TeamSync.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.teamSync.TeamSync.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSync.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.teamSync.TeamSync.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.teamSync.TeamSync.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamSync.TeamSync.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.teamSync.TeamSync.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.teamSync.TeamSync.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSync.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.teamSync.TeamSync.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamSync.TeamSync.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.teamSync.TeamSync.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.teamSync.TeamSync.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.teamSync.TeamSync.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.teamSync.TeamSync.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamSync.TeamSync.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_selection_state` <a name="put_selection_state" id="@cdktn/provider-datadog.teamSync.TeamSync.putSelectionState"></a>

```python
def put_selection_state(
  value: IResolvable | typing.List[TeamSyncSelectionState]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamSync.TeamSync.putSelectionState.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>]

---

##### `reset_frequency` <a name="reset_frequency" id="@cdktn/provider-datadog.teamSync.TeamSync.resetFrequency"></a>

```python
def reset_frequency() -> None
```

##### `reset_selection_state` <a name="reset_selection_state" id="@cdktn/provider-datadog.teamSync.TeamSync.resetSelectionState"></a>

```python
def reset_selection_state() -> None
```

##### `reset_sync_membership` <a name="reset_sync_membership" id="@cdktn/provider-datadog.teamSync.TeamSync.resetSyncMembership"></a>

```python
def reset_sync_membership() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a TeamSync resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.teamSync.TeamSync.isConstruct"></a>

```python
from cdktn_provider_datadog import team_sync

teamSync.TeamSync.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.teamSync.TeamSync.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.teamSync.TeamSync.isTerraformElement"></a>

```python
from cdktn_provider_datadog import team_sync

teamSync.TeamSync.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.teamSync.TeamSync.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.teamSync.TeamSync.isTerraformResource"></a>

```python
from cdktn_provider_datadog import team_sync

teamSync.TeamSync.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.teamSync.TeamSync.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.teamSync.TeamSync.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import team_sync

teamSync.TeamSync.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a TeamSync resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.teamSync.TeamSync.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.teamSync.TeamSync.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TeamSync to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.teamSync.TeamSync.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TeamSync that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/team_sync#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.teamSync.TeamSync.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TeamSync to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.selectionState">selection_state</a></code> | <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList">TeamSyncSelectionStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.frequencyInput">frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.selectionStateInput">selection_state_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.syncMembershipInput">sync_membership_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.syncMembership">sync_membership</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.teamSync.TeamSync.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.teamSync.TeamSync.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.teamSync.TeamSync.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.teamSync.TeamSync.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.teamSync.TeamSync.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.teamSync.TeamSync.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.teamSync.TeamSync.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.teamSync.TeamSync.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.teamSync.TeamSync.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.teamSync.TeamSync.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.teamSync.TeamSync.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.teamSync.TeamSync.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.teamSync.TeamSync.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.teamSync.TeamSync.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamSync.TeamSync.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `selection_state`<sup>Required</sup> <a name="selection_state" id="@cdktn/provider-datadog.teamSync.TeamSync.property.selectionState"></a>

```python
selection_state: TeamSyncSelectionStateList
```

- *Type:* <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList">TeamSyncSelectionStateList</a>

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktn/provider-datadog.teamSync.TeamSync.property.frequencyInput"></a>

```python
frequency_input: str
```

- *Type:* str

---

##### `selection_state_input`<sup>Optional</sup> <a name="selection_state_input" id="@cdktn/provider-datadog.teamSync.TeamSync.property.selectionStateInput"></a>

```python
selection_state_input: IResolvable | typing.List[TeamSyncSelectionState]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-datadog.teamSync.TeamSync.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `sync_membership_input`<sup>Optional</sup> <a name="sync_membership_input" id="@cdktn/provider-datadog.teamSync.TeamSync.property.syncMembershipInput"></a>

```python
sync_membership_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-datadog.teamSync.TeamSync.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktn/provider-datadog.teamSync.TeamSync.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-datadog.teamSync.TeamSync.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `sync_membership`<sup>Required</sup> <a name="sync_membership" id="@cdktn/provider-datadog.teamSync.TeamSync.property.syncMembership"></a>

```python
sync_membership: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.teamSync.TeamSync.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSync.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.teamSync.TeamSync.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TeamSyncConfig <a name="TeamSyncConfig" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.Initializer"></a>

```python
from cdktn_provider_datadog import team_sync

teamSync.TeamSyncConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  source: str,
  type: str,
  frequency: str = None,
  selection_state: IResolvable | typing.List[TeamSyncSelectionState] = None,
  sync_membership: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.source">source</a></code> | <code>str</code> | The external source platform for team synchronization. Valid values are `github`. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.type">type</a></code> | <code>str</code> | The type of synchronization operation. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.frequency">frequency</a></code> | <code>str</code> | How often the sync process should run. Valid values are `once`, `continuously`, `paused`. Defaults to `"once"`. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.selectionState">selection_state</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>]</code> | selection_state block. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.syncMembership">sync_membership</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to sync members from the external team to the Datadog team. Defaults to `false`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.source"></a>

```python
source: str
```

- *Type:* str

The external source platform for team synchronization. Valid values are `github`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/team_sync#source TeamSync#source}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of synchronization operation.

`link` connects teams by matching names. `provision` creates new teams when no match is found. Valid values are `link`, `provision`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/team_sync#type TeamSync#type}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

How often the sync process should run. Valid values are `once`, `continuously`, `paused`. Defaults to `"once"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/team_sync#frequency TeamSync#frequency}

---

##### `selection_state`<sup>Optional</sup> <a name="selection_state" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.selectionState"></a>

```python
selection_state: IResolvable | typing.List[TeamSyncSelectionState]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>]

selection_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/team_sync#selection_state TeamSync#selection_state}

---

##### `sync_membership`<sup>Optional</sup> <a name="sync_membership" id="@cdktn/provider-datadog.teamSync.TeamSyncConfig.property.syncMembership"></a>

```python
sync_membership: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to sync members from the external team to the Datadog team. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/team_sync#sync_membership TeamSync#sync_membership}

---

### TeamSyncSelectionState <a name="TeamSyncSelectionState" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionState.Initializer"></a>

```python
from cdktn_provider_datadog import team_sync

teamSync.TeamSyncSelectionState(
  external_id: TeamSyncSelectionStateExternalId,
  operation: str = None,
  scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState.property.externalId">external_id</a></code> | <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId">TeamSyncSelectionStateExternalId</a></code> | external_id block. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState.property.operation">operation</a></code> | <code>str</code> | The operation to perform on the selected hierarchy. Valid values are `include`. Defaults to `"include"`. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState.property.scope">scope</a></code> | <code>str</code> | The scope of the selection. Valid values are `subtree`. Defaults to `"subtree"`. |

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionState.property.externalId"></a>

```python
external_id: TeamSyncSelectionStateExternalId
```

- *Type:* <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId">TeamSyncSelectionStateExternalId</a>

external_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/team_sync#external_id TeamSync#external_id}

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionState.property.operation"></a>

```python
operation: str
```

- *Type:* str

The operation to perform on the selected hierarchy. Valid values are `include`. Defaults to `"include"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/team_sync#operation TeamSync#operation}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionState.property.scope"></a>

```python
scope: str
```

- *Type:* str

The scope of the selection. Valid values are `subtree`. Defaults to `"subtree"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/team_sync#scope TeamSync#scope}

---

### TeamSyncSelectionStateExternalId <a name="TeamSyncSelectionStateExternalId" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId.Initializer"></a>

```python
from cdktn_provider_datadog import team_sync

teamSync.TeamSyncSelectionStateExternalId(
  type: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId.property.type">type</a></code> | <code>str</code> | The type of external identifier. Valid values are `team`, `organization`. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId.property.value">value</a></code> | <code>str</code> | The external identifier value from the source platform (e.g. a GitHub organization ID or team ID). |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId.property.type"></a>

```python
type: str
```

- *Type:* str

The type of external identifier. Valid values are `team`, `organization`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/team_sync#type TeamSync#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId.property.value"></a>

```python
value: str
```

- *Type:* str

The external identifier value from the source platform (e.g. a GitHub organization ID or team ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/team_sync#value TeamSync#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamSyncSelectionStateExternalIdOutputReference <a name="TeamSyncSelectionStateExternalIdOutputReference" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import team_sync

teamSync.TeamSyncSelectionStateExternalIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId">TeamSyncSelectionStateExternalId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TeamSyncSelectionStateExternalId
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId">TeamSyncSelectionStateExternalId</a>

---


### TeamSyncSelectionStateList <a name="TeamSyncSelectionStateList" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.Initializer"></a>

```python
from cdktn_provider_datadog import team_sync

teamSync.TeamSyncSelectionStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TeamSyncSelectionStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TeamSyncSelectionState]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>]

---


### TeamSyncSelectionStateOutputReference <a name="TeamSyncSelectionStateOutputReference" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import team_sync

teamSync.TeamSyncSelectionStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.putExternalId">put_external_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.resetOperation">reset_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.resetScope">reset_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_external_id` <a name="put_external_id" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.putExternalId"></a>

```python
def put_external_id(
  type: str,
  value: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.putExternalId.parameter.type"></a>

- *Type:* str

The type of external identifier. Valid values are `team`, `organization`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/team_sync#type TeamSync#type}

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.putExternalId.parameter.value"></a>

- *Type:* str

The external identifier value from the source platform (e.g. a GitHub organization ID or team ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/team_sync#value TeamSync#value}

---

##### `reset_operation` <a name="reset_operation" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.resetOperation"></a>

```python
def reset_operation() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.externalId">external_id</a></code> | <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference">TeamSyncSelectionStateExternalIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.externalIdInput">external_id_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId">TeamSyncSelectionStateExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.operationInput">operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.externalId"></a>

```python
external_id: TeamSyncSelectionStateExternalIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalIdOutputReference">TeamSyncSelectionStateExternalIdOutputReference</a>

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.externalIdInput"></a>

```python
external_id_input: IResolvable | TeamSyncSelectionStateExternalId
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateExternalId">TeamSyncSelectionStateExternalId</a>

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.operationInput"></a>

```python
operation_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.teamSync.TeamSyncSelectionStateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TeamSyncSelectionState
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamSync.TeamSyncSelectionState">TeamSyncSelectionState</a>

---



