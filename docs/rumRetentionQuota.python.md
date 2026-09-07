# `rumRetentionQuota` Submodule <a name="`rumRetentionQuota` Submodule" id="@cdktn/provider-datadog.rumRetentionQuota"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RumRetentionQuota <a name="RumRetentionQuota" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota datadog_rum_retention_quota}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer"></a>

```python
from cdktn_provider_datadog import rum_retention_quota

rumRetentionQuota.RumRetentionQuota(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_id: str,
  custom: RumRetentionQuotaCustom,
  mode: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | RUM application ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.custom">custom</a></code> | <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a></code> | custom block. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.mode">mode</a></code> | <code>str</code> | The retention quota mode. Valid values are `custom`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.applicationId"></a>

- *Type:* str

RUM application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#application_id RumRetentionQuota#application_id}

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.custom"></a>

- *Type:* <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a>

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#custom RumRetentionQuota#custom}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.mode"></a>

- *Type:* str

The retention quota mode. Valid values are `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#mode RumRetentionQuota#mode}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.putCustom">put_custom</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom` <a name="put_custom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.putCustom"></a>

```python
def put_custom(
  daily_reset_time: str,
  daily_reset_timezone: str,
  quota_reached_action: str,
  session_limit: typing.Union[int, float],
  window_type: str
) -> None
```

###### `daily_reset_time`<sup>Required</sup> <a name="daily_reset_time" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.putCustom.parameter.dailyResetTime"></a>

- *Type:* str

The time of day the quota resets, in `HH:MM` format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#daily_reset_time RumRetentionQuota#daily_reset_time}

---

###### `daily_reset_timezone`<sup>Required</sup> <a name="daily_reset_timezone" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.putCustom.parameter.dailyResetTimezone"></a>

- *Type:* str

The UTC offset for `daily_reset_time`, in `±HH:MM` format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#daily_reset_timezone RumRetentionQuota#daily_reset_timezone}

---

###### `quota_reached_action`<sup>Required</sup> <a name="quota_reached_action" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.putCustom.parameter.quotaReachedAction"></a>

- *Type:* str

The action taken after the quota is reached. Valid values are `stop`, `slowdown`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#quota_reached_action RumRetentionQuota#quota_reached_action}

---

###### `session_limit`<sup>Required</sup> <a name="session_limit" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.putCustom.parameter.sessionLimit"></a>

- *Type:* typing.Union[int, float]

The maximum number of sessions to retain within the window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#session_limit RumRetentionQuota#session_limit}

---

###### `window_type`<sup>Required</sup> <a name="window_type" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.putCustom.parameter.windowType"></a>

- *Type:* str

The window over which the quota resets. Valid values are `daily`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#window_type RumRetentionQuota#window_type}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RumRetentionQuota resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isConstruct"></a>

```python
from cdktn_provider_datadog import rum_retention_quota

rumRetentionQuota.RumRetentionQuota.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformElement"></a>

```python
from cdktn_provider_datadog import rum_retention_quota

rumRetentionQuota.RumRetentionQuota.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformResource"></a>

```python
from cdktn_provider_datadog import rum_retention_quota

rumRetentionQuota.RumRetentionQuota.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import rum_retention_quota

rumRetentionQuota.RumRetentionQuota.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RumRetentionQuota resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RumRetentionQuota to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RumRetentionQuota that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RumRetentionQuota to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference">RumRetentionQuotaCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.customInput">custom_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.mode">mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.custom"></a>

```python
custom: RumRetentionQuotaCustomOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference">RumRetentionQuotaCustomOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `custom_input`<sup>Optional</sup> <a name="custom_input" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.customInput"></a>

```python
custom_input: IResolvable | RumRetentionQuotaCustom
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a>

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RumRetentionQuotaConfig <a name="RumRetentionQuotaConfig" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.Initializer"></a>

```python
from cdktn_provider_datadog import rum_retention_quota

rumRetentionQuota.RumRetentionQuotaConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_id: str,
  custom: RumRetentionQuotaCustom,
  mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.applicationId">application_id</a></code> | <code>str</code> | RUM application ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a></code> | custom block. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.mode">mode</a></code> | <code>str</code> | The retention quota mode. Valid values are `custom`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

RUM application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#application_id RumRetentionQuota#application_id}

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.custom"></a>

```python
custom: RumRetentionQuotaCustom
```

- *Type:* <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a>

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#custom RumRetentionQuota#custom}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

The retention quota mode. Valid values are `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#mode RumRetentionQuota#mode}

---

### RumRetentionQuotaCustom <a name="RumRetentionQuotaCustom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.Initializer"></a>

```python
from cdktn_provider_datadog import rum_retention_quota

rumRetentionQuota.RumRetentionQuotaCustom(
  daily_reset_time: str,
  daily_reset_timezone: str,
  quota_reached_action: str,
  session_limit: typing.Union[int, float],
  window_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.dailyResetTime">daily_reset_time</a></code> | <code>str</code> | The time of day the quota resets, in `HH:MM` format. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.dailyResetTimezone">daily_reset_timezone</a></code> | <code>str</code> | The UTC offset for `daily_reset_time`, in `±HH:MM` format. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.quotaReachedAction">quota_reached_action</a></code> | <code>str</code> | The action taken after the quota is reached. Valid values are `stop`, `slowdown`. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.sessionLimit">session_limit</a></code> | <code>typing.Union[int, float]</code> | The maximum number of sessions to retain within the window. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.windowType">window_type</a></code> | <code>str</code> | The window over which the quota resets. Valid values are `daily`. |

---

##### `daily_reset_time`<sup>Required</sup> <a name="daily_reset_time" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.dailyResetTime"></a>

```python
daily_reset_time: str
```

- *Type:* str

The time of day the quota resets, in `HH:MM` format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#daily_reset_time RumRetentionQuota#daily_reset_time}

---

##### `daily_reset_timezone`<sup>Required</sup> <a name="daily_reset_timezone" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.dailyResetTimezone"></a>

```python
daily_reset_timezone: str
```

- *Type:* str

The UTC offset for `daily_reset_time`, in `±HH:MM` format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#daily_reset_timezone RumRetentionQuota#daily_reset_timezone}

---

##### `quota_reached_action`<sup>Required</sup> <a name="quota_reached_action" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.quotaReachedAction"></a>

```python
quota_reached_action: str
```

- *Type:* str

The action taken after the quota is reached. Valid values are `stop`, `slowdown`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#quota_reached_action RumRetentionQuota#quota_reached_action}

---

##### `session_limit`<sup>Required</sup> <a name="session_limit" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.sessionLimit"></a>

```python
session_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of sessions to retain within the window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#session_limit RumRetentionQuota#session_limit}

---

##### `window_type`<sup>Required</sup> <a name="window_type" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.windowType"></a>

```python
window_type: str
```

- *Type:* str

The window over which the quota resets. Valid values are `daily`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#window_type RumRetentionQuota#window_type}

---

## Classes <a name="Classes" id="Classes"></a>

### RumRetentionQuotaCustomOutputReference <a name="RumRetentionQuotaCustomOutputReference" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import rum_retention_quota

rumRetentionQuota.RumRetentionQuotaCustomOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimeInput">daily_reset_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimezoneInput">daily_reset_timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.quotaReachedActionInput">quota_reached_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.sessionLimitInput">session_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.windowTypeInput">window_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTime">daily_reset_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimezone">daily_reset_timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.quotaReachedAction">quota_reached_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.sessionLimit">session_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.windowType">window_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `daily_reset_time_input`<sup>Optional</sup> <a name="daily_reset_time_input" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimeInput"></a>

```python
daily_reset_time_input: str
```

- *Type:* str

---

##### `daily_reset_timezone_input`<sup>Optional</sup> <a name="daily_reset_timezone_input" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimezoneInput"></a>

```python
daily_reset_timezone_input: str
```

- *Type:* str

---

##### `quota_reached_action_input`<sup>Optional</sup> <a name="quota_reached_action_input" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.quotaReachedActionInput"></a>

```python
quota_reached_action_input: str
```

- *Type:* str

---

##### `session_limit_input`<sup>Optional</sup> <a name="session_limit_input" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.sessionLimitInput"></a>

```python
session_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `window_type_input`<sup>Optional</sup> <a name="window_type_input" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.windowTypeInput"></a>

```python
window_type_input: str
```

- *Type:* str

---

##### `daily_reset_time`<sup>Required</sup> <a name="daily_reset_time" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTime"></a>

```python
daily_reset_time: str
```

- *Type:* str

---

##### `daily_reset_timezone`<sup>Required</sup> <a name="daily_reset_timezone" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimezone"></a>

```python
daily_reset_timezone: str
```

- *Type:* str

---

##### `quota_reached_action`<sup>Required</sup> <a name="quota_reached_action" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.quotaReachedAction"></a>

```python
quota_reached_action: str
```

- *Type:* str

---

##### `session_limit`<sup>Required</sup> <a name="session_limit" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.sessionLimit"></a>

```python
session_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `window_type`<sup>Required</sup> <a name="window_type" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.windowType"></a>

```python
window_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RumRetentionQuotaCustom
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a>

---



