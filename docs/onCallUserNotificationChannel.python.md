# `onCallUserNotificationChannel` Submodule <a name="`onCallUserNotificationChannel` Submodule" id="@cdktn/provider-datadog.onCallUserNotificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnCallUserNotificationChannel <a name="OnCallUserNotificationChannel" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_channel datadog_on_call_user_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer"></a>

```python
from cdktn_provider_datadog import on_call_user_notification_channel

onCallUserNotificationChannel.OnCallUserNotificationChannel(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  user_id: str,
  email: OnCallUserNotificationChannelEmail = None,
  phone: OnCallUserNotificationChannelPhone = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.userId">user_id</a></code> | <code>str</code> | ID of the user to associate the notification channel with. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.email">email</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a></code> | email block. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.phone">phone</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a></code> | phone block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.userId"></a>

- *Type:* str

ID of the user to associate the notification channel with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_channel#user_id OnCallUserNotificationChannel#user_id}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.email"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_channel#email OnCallUserNotificationChannel#email}

---

##### `phone`<sup>Optional</sup> <a name="phone" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.phone"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a>

phone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_channel#phone OnCallUserNotificationChannel#phone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.putEmail">put_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.putPhone">put_phone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.resetPhone">reset_phone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_email` <a name="put_email" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.putEmail"></a>

```python
def put_email(
  address: str = None,
  formats: typing.List[str] = None
) -> None
```

###### `address`<sup>Optional</sup> <a name="address" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.putEmail.parameter.address"></a>

- *Type:* str

The e-mail address to be notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_channel#address OnCallUserNotificationChannel#address}

---

###### `formats`<sup>Optional</sup> <a name="formats" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.putEmail.parameter.formats"></a>

- *Type:* typing.List[str]

Preferred content formats for notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_channel#formats OnCallUserNotificationChannel#formats}

---

##### `put_phone` <a name="put_phone" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.putPhone"></a>

```python
def put_phone(
  number: str = None
) -> None
```

###### `number`<sup>Optional</sup> <a name="number" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.putPhone.parameter.number"></a>

- *Type:* str

The E-164 formatted phone number (for example, +3371234567).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_channel#number OnCallUserNotificationChannel#number}

---

##### `reset_email` <a name="reset_email" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_phone` <a name="reset_phone" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.resetPhone"></a>

```python
def reset_phone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OnCallUserNotificationChannel resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isConstruct"></a>

```python
from cdktn_provider_datadog import on_call_user_notification_channel

onCallUserNotificationChannel.OnCallUserNotificationChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformElement"></a>

```python
from cdktn_provider_datadog import on_call_user_notification_channel

onCallUserNotificationChannel.OnCallUserNotificationChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformResource"></a>

```python
from cdktn_provider_datadog import on_call_user_notification_channel

onCallUserNotificationChannel.OnCallUserNotificationChannel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import on_call_user_notification_channel

onCallUserNotificationChannel.OnCallUserNotificationChannel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OnCallUserNotificationChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OnCallUserNotificationChannel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OnCallUserNotificationChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OnCallUserNotificationChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.email">email</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference">OnCallUserNotificationChannelEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.phone">phone</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference">OnCallUserNotificationChannelPhoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.emailInput">email_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.phoneInput">phone_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.userId">user_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.email"></a>

```python
email: OnCallUserNotificationChannelEmailOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference">OnCallUserNotificationChannelEmailOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.phone"></a>

```python
phone: OnCallUserNotificationChannelPhoneOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference">OnCallUserNotificationChannelPhoneOutputReference</a>

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.emailInput"></a>

```python
email_input: IResolvable | OnCallUserNotificationChannelEmail
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a>

---

##### `phone_input`<sup>Optional</sup> <a name="phone_input" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.phoneInput"></a>

```python
phone_input: IResolvable | OnCallUserNotificationChannelPhone
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a>

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OnCallUserNotificationChannelConfig <a name="OnCallUserNotificationChannelConfig" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.Initializer"></a>

```python
from cdktn_provider_datadog import on_call_user_notification_channel

onCallUserNotificationChannel.OnCallUserNotificationChannelConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  user_id: str,
  email: OnCallUserNotificationChannelEmail = None,
  phone: OnCallUserNotificationChannelPhone = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.userId">user_id</a></code> | <code>str</code> | ID of the user to associate the notification channel with. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.email">email</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a></code> | email block. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.phone">phone</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a></code> | phone block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.userId"></a>

```python
user_id: str
```

- *Type:* str

ID of the user to associate the notification channel with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_channel#user_id OnCallUserNotificationChannel#user_id}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.email"></a>

```python
email: OnCallUserNotificationChannelEmail
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_channel#email OnCallUserNotificationChannel#email}

---

##### `phone`<sup>Optional</sup> <a name="phone" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.phone"></a>

```python
phone: OnCallUserNotificationChannelPhone
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a>

phone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_channel#phone OnCallUserNotificationChannel#phone}

---

### OnCallUserNotificationChannelEmail <a name="OnCallUserNotificationChannelEmail" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail.Initializer"></a>

```python
from cdktn_provider_datadog import on_call_user_notification_channel

onCallUserNotificationChannel.OnCallUserNotificationChannelEmail(
  address: str = None,
  formats: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail.property.address">address</a></code> | <code>str</code> | The e-mail address to be notified. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail.property.formats">formats</a></code> | <code>typing.List[str]</code> | Preferred content formats for notifications. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail.property.address"></a>

```python
address: str
```

- *Type:* str

The e-mail address to be notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_channel#address OnCallUserNotificationChannel#address}

---

##### `formats`<sup>Optional</sup> <a name="formats" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail.property.formats"></a>

```python
formats: typing.List[str]
```

- *Type:* typing.List[str]

Preferred content formats for notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_channel#formats OnCallUserNotificationChannel#formats}

---

### OnCallUserNotificationChannelPhone <a name="OnCallUserNotificationChannelPhone" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone.Initializer"></a>

```python
from cdktn_provider_datadog import on_call_user_notification_channel

onCallUserNotificationChannel.OnCallUserNotificationChannelPhone(
  number: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone.property.number">number</a></code> | <code>str</code> | The E-164 formatted phone number (for example, +3371234567). |

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone.property.number"></a>

```python
number: str
```

- *Type:* str

The E-164 formatted phone number (for example, +3371234567).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_channel#number OnCallUserNotificationChannel#number}

---

## Classes <a name="Classes" id="Classes"></a>

### OnCallUserNotificationChannelEmailOutputReference <a name="OnCallUserNotificationChannelEmailOutputReference" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import on_call_user_notification_channel

onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resetFormats">reset_formats</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address` <a name="reset_address" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_formats` <a name="reset_formats" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resetFormats"></a>

```python
def reset_formats() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.formatsInput">formats_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.formats">formats</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `formats_input`<sup>Optional</sup> <a name="formats_input" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.formatsInput"></a>

```python
formats_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `formats`<sup>Required</sup> <a name="formats" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.formats"></a>

```python
formats: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OnCallUserNotificationChannelEmail
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a>

---


### OnCallUserNotificationChannelPhoneOutputReference <a name="OnCallUserNotificationChannelPhoneOutputReference" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import on_call_user_notification_channel

onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.resetNumber">reset_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_number` <a name="reset_number" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.resetNumber"></a>

```python
def reset_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.numberInput">number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.number">number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `number_input`<sup>Optional</sup> <a name="number_input" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.numberInput"></a>

```python
number_input: str
```

- *Type:* str

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.number"></a>

```python
number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OnCallUserNotificationChannelPhone
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a>

---



