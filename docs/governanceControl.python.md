# `governanceControl` Submodule <a name="`governanceControl` Submodule" id="@cdktn/provider-datadog.governanceControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GovernanceControl <a name="GovernanceControl" id="@cdktn/provider-datadog.governanceControl.GovernanceControl"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control datadog_governance_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer"></a>

```python
from cdktn_provider_datadog import governance_control

governanceControl.GovernanceControl(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  detection_type: str,
  detection_parameters: str = None,
  mitigation_parameters: str = None,
  mitigation_type: str = None,
  notification_settings: IResolvable | typing.List[GovernanceControlNotificationSettings] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.detectionType">detection_type</a></code> | <code>str</code> | The detection type that uniquely identifies the control, for example `unused_api_keys`. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.detectionParameters">detection_parameters</a></code> | <code>str</code> | Detection parameters for the control, as a JSON-encoded map of parameter names to their configured values. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.mitigationParameters">mitigation_parameters</a></code> | <code>str</code> | Mitigation parameters for the control, as a JSON-encoded map of parameter names to their configured values. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.mitigationType">mitigation_type</a></code> | <code>str</code> | The mitigation type configured for the control. Empty when not configured. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.notificationSettings">notification_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>]</code> | The notification settings for the control, one entry per event type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `detection_type`<sup>Required</sup> <a name="detection_type" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.detectionType"></a>

- *Type:* str

The detection type that uniquely identifies the control, for example `unused_api_keys`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#detection_type GovernanceControl#detection_type}

---

##### `detection_parameters`<sup>Optional</sup> <a name="detection_parameters" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.detectionParameters"></a>

- *Type:* str

Detection parameters for the control, as a JSON-encoded map of parameter names to their configured values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#detection_parameters GovernanceControl#detection_parameters}

---

##### `mitigation_parameters`<sup>Optional</sup> <a name="mitigation_parameters" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.mitigationParameters"></a>

- *Type:* str

Mitigation parameters for the control, as a JSON-encoded map of parameter names to their configured values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#mitigation_parameters GovernanceControl#mitigation_parameters}

---

##### `mitigation_type`<sup>Optional</sup> <a name="mitigation_type" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.mitigationType"></a>

- *Type:* str

The mitigation type configured for the control. Empty when not configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#mitigation_type GovernanceControl#mitigation_type}

---

##### `notification_settings`<sup>Optional</sup> <a name="notification_settings" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.Initializer.parameter.notificationSettings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>]

The notification settings for the control, one entry per event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#notification_settings GovernanceControl#notification_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.putNotificationSettings">put_notification_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.resetDetectionParameters">reset_detection_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.resetMitigationParameters">reset_mitigation_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.resetMitigationType">reset_mitigation_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.resetNotificationSettings">reset_notification_settings</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_notification_settings` <a name="put_notification_settings" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.putNotificationSettings"></a>

```python
def put_notification_settings(
  value: IResolvable | typing.List[GovernanceControlNotificationSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.putNotificationSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>]

---

##### `reset_detection_parameters` <a name="reset_detection_parameters" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.resetDetectionParameters"></a>

```python
def reset_detection_parameters() -> None
```

##### `reset_mitigation_parameters` <a name="reset_mitigation_parameters" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.resetMitigationParameters"></a>

```python
def reset_mitigation_parameters() -> None
```

##### `reset_mitigation_type` <a name="reset_mitigation_type" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.resetMitigationType"></a>

```python
def reset_mitigation_type() -> None
```

##### `reset_notification_settings` <a name="reset_notification_settings" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.resetNotificationSettings"></a>

```python
def reset_notification_settings() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GovernanceControl resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.isConstruct"></a>

```python
from cdktn_provider_datadog import governance_control

governanceControl.GovernanceControl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.isTerraformElement"></a>

```python
from cdktn_provider_datadog import governance_control

governanceControl.GovernanceControl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.isTerraformResource"></a>

```python
from cdktn_provider_datadog import governance_control

governanceControl.GovernanceControl.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import governance_control

governanceControl.GovernanceControl.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GovernanceControl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GovernanceControl to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GovernanceControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GovernanceControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.notificationSettings">notification_settings</a></code> | <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList">GovernanceControlNotificationSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.detectionParametersInput">detection_parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.detectionTypeInput">detection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.mitigationParametersInput">mitigation_parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.mitigationTypeInput">mitigation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.notificationSettingsInput">notification_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.detectionParameters">detection_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.detectionType">detection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.mitigationParameters">mitigation_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.mitigationType">mitigation_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notification_settings`<sup>Required</sup> <a name="notification_settings" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.notificationSettings"></a>

```python
notification_settings: GovernanceControlNotificationSettingsList
```

- *Type:* <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList">GovernanceControlNotificationSettingsList</a>

---

##### `detection_parameters_input`<sup>Optional</sup> <a name="detection_parameters_input" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.detectionParametersInput"></a>

```python
detection_parameters_input: str
```

- *Type:* str

---

##### `detection_type_input`<sup>Optional</sup> <a name="detection_type_input" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.detectionTypeInput"></a>

```python
detection_type_input: str
```

- *Type:* str

---

##### `mitigation_parameters_input`<sup>Optional</sup> <a name="mitigation_parameters_input" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.mitigationParametersInput"></a>

```python
mitigation_parameters_input: str
```

- *Type:* str

---

##### `mitigation_type_input`<sup>Optional</sup> <a name="mitigation_type_input" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.mitigationTypeInput"></a>

```python
mitigation_type_input: str
```

- *Type:* str

---

##### `notification_settings_input`<sup>Optional</sup> <a name="notification_settings_input" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.notificationSettingsInput"></a>

```python
notification_settings_input: IResolvable | typing.List[GovernanceControlNotificationSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>]

---

##### `detection_parameters`<sup>Required</sup> <a name="detection_parameters" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.detectionParameters"></a>

```python
detection_parameters: str
```

- *Type:* str

---

##### `detection_type`<sup>Required</sup> <a name="detection_type" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.detectionType"></a>

```python
detection_type: str
```

- *Type:* str

---

##### `mitigation_parameters`<sup>Required</sup> <a name="mitigation_parameters" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.mitigationParameters"></a>

```python
mitigation_parameters: str
```

- *Type:* str

---

##### `mitigation_type`<sup>Required</sup> <a name="mitigation_type" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.mitigationType"></a>

```python
mitigation_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.governanceControl.GovernanceControl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GovernanceControlConfig <a name="GovernanceControlConfig" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.Initializer"></a>

```python
from cdktn_provider_datadog import governance_control

governanceControl.GovernanceControlConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  detection_type: str,
  detection_parameters: str = None,
  mitigation_parameters: str = None,
  mitigation_type: str = None,
  notification_settings: IResolvable | typing.List[GovernanceControlNotificationSettings] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.detectionType">detection_type</a></code> | <code>str</code> | The detection type that uniquely identifies the control, for example `unused_api_keys`. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.detectionParameters">detection_parameters</a></code> | <code>str</code> | Detection parameters for the control, as a JSON-encoded map of parameter names to their configured values. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.mitigationParameters">mitigation_parameters</a></code> | <code>str</code> | Mitigation parameters for the control, as a JSON-encoded map of parameter names to their configured values. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.mitigationType">mitigation_type</a></code> | <code>str</code> | The mitigation type configured for the control. Empty when not configured. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.notificationSettings">notification_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>]</code> | The notification settings for the control, one entry per event type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `detection_type`<sup>Required</sup> <a name="detection_type" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.detectionType"></a>

```python
detection_type: str
```

- *Type:* str

The detection type that uniquely identifies the control, for example `unused_api_keys`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#detection_type GovernanceControl#detection_type}

---

##### `detection_parameters`<sup>Optional</sup> <a name="detection_parameters" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.detectionParameters"></a>

```python
detection_parameters: str
```

- *Type:* str

Detection parameters for the control, as a JSON-encoded map of parameter names to their configured values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#detection_parameters GovernanceControl#detection_parameters}

---

##### `mitigation_parameters`<sup>Optional</sup> <a name="mitigation_parameters" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.mitigationParameters"></a>

```python
mitigation_parameters: str
```

- *Type:* str

Mitigation parameters for the control, as a JSON-encoded map of parameter names to their configured values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#mitigation_parameters GovernanceControl#mitigation_parameters}

---

##### `mitigation_type`<sup>Optional</sup> <a name="mitigation_type" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.mitigationType"></a>

```python
mitigation_type: str
```

- *Type:* str

The mitigation type configured for the control. Empty when not configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#mitigation_type GovernanceControl#mitigation_type}

---

##### `notification_settings`<sup>Optional</sup> <a name="notification_settings" id="@cdktn/provider-datadog.governanceControl.GovernanceControlConfig.property.notificationSettings"></a>

```python
notification_settings: IResolvable | typing.List[GovernanceControlNotificationSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>]

The notification settings for the control, one entry per event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#notification_settings GovernanceControl#notification_settings}

---

### GovernanceControlNotificationSettings <a name="GovernanceControlNotificationSettings" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings.Initializer"></a>

```python
from cdktn_provider_datadog import governance_control

governanceControl.GovernanceControlNotificationSettings(
  enabled: bool | IResolvable,
  event_type: str,
  targets: IResolvable | typing.List[GovernanceControlNotificationSettingsTargets]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether notifications are enabled for this event type. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings.property.eventType">event_type</a></code> | <code>str</code> | The event type the notification settings apply to, such as `new_detection`. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings.property.targets">targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a>]</code> | The destinations that receive notifications for this event type. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether notifications are enabled for this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#enabled GovernanceControl#enabled}

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

The event type the notification settings apply to, such as `new_detection`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#event_type GovernanceControl#event_type}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings.property.targets"></a>

```python
targets: IResolvable | typing.List[GovernanceControlNotificationSettingsTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a>]

The destinations that receive notifications for this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#targets GovernanceControl#targets}

---

### GovernanceControlNotificationSettingsTargets <a name="GovernanceControlNotificationSettingsTargets" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets.Initializer"></a>

```python
from cdktn_provider_datadog import governance_control

governanceControl.GovernanceControlNotificationSettingsTargets(
  handle: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets.property.handle">handle</a></code> | <code>str</code> | The handle of the notification target. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets.property.type">type</a></code> | <code>str</code> | The type of notification target: `email`, `slack`, `at_mention`, or `case`. |

---

##### `handle`<sup>Required</sup> <a name="handle" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets.property.handle"></a>

```python
handle: str
```

- *Type:* str

The handle of the notification target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#handle GovernanceControl#handle}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets.property.type"></a>

```python
type: str
```

- *Type:* str

The type of notification target: `email`, `slack`, `at_mention`, or `case`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/governance_control#type GovernanceControl#type}

---

## Classes <a name="Classes" id="Classes"></a>

### GovernanceControlNotificationSettingsList <a name="GovernanceControlNotificationSettingsList" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.Initializer"></a>

```python
from cdktn_provider_datadog import governance_control

governanceControl.GovernanceControlNotificationSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GovernanceControlNotificationSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GovernanceControlNotificationSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>]

---


### GovernanceControlNotificationSettingsOutputReference <a name="GovernanceControlNotificationSettingsOutputReference" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import governance_control

governanceControl.GovernanceControlNotificationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.putTargets">put_targets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_targets` <a name="put_targets" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.putTargets"></a>

```python
def put_targets(
  value: IResolvable | typing.List[GovernanceControlNotificationSettingsTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.putTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList">GovernanceControlNotificationSettingsTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.eventTypeInput">event_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.targetsInput">targets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.targets"></a>

```python
targets: GovernanceControlNotificationSettingsTargetsList
```

- *Type:* <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList">GovernanceControlNotificationSettingsTargetsList</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_type_input`<sup>Optional</sup> <a name="event_type_input" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.eventTypeInput"></a>

```python
event_type_input: str
```

- *Type:* str

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.targetsInput"></a>

```python
targets_input: IResolvable | typing.List[GovernanceControlNotificationSettingsTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a>]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GovernanceControlNotificationSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettings">GovernanceControlNotificationSettings</a>

---


### GovernanceControlNotificationSettingsTargetsList <a name="GovernanceControlNotificationSettingsTargetsList" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.Initializer"></a>

```python
from cdktn_provider_datadog import governance_control

governanceControl.GovernanceControlNotificationSettingsTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GovernanceControlNotificationSettingsTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GovernanceControlNotificationSettingsTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a>]

---


### GovernanceControlNotificationSettingsTargetsOutputReference <a name="GovernanceControlNotificationSettingsTargetsOutputReference" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import governance_control

governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.handleInput">handle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.handle">handle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `handle_input`<sup>Optional</sup> <a name="handle_input" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.handleInput"></a>

```python
handle_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `handle`<sup>Required</sup> <a name="handle" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.handle"></a>

```python
handle: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargetsOutputReference.property.internalValue"></a>

```python
internal_value: GovernanceControlNotificationSettingsTargets
```

- *Type:* <a href="#@cdktn/provider-datadog.governanceControl.GovernanceControlNotificationSettingsTargets">GovernanceControlNotificationSettingsTargets</a>

---



