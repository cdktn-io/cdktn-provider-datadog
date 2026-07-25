# `onCallUserNotificationRule` Submodule <a name="`onCallUserNotificationRule` Submodule" id="@cdktn/provider-datadog.onCallUserNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnCallUserNotificationRule <a name="OnCallUserNotificationRule" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/on_call_user_notification_rule datadog_on_call_user_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer"></a>

```python
from cdktn_provider_datadog import on_call_user_notification_rule

onCallUserNotificationRule.OnCallUserNotificationRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  category: str,
  channel_id: str,
  delay_minutes: typing.Union[int, float],
  user_id: str,
  phone: OnCallUserNotificationRulePhone = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.category">category</a></code> | <code>str</code> | Notification category to associate the rule with. Valid values are `high_urgency`, `low_urgency`. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.channelId">channel_id</a></code> | <code>str</code> | ID of the notification channel to associate the notification rule with. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.delayMinutes">delay_minutes</a></code> | <code>typing.Union[int, float]</code> | Number of minutes to elapse before this rule is evaluated.  `0` indicates immediate evaluation. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.userId">user_id</a></code> | <code>str</code> | ID of the user to associate the notification rule with. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.phone">phone</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a></code> | phone block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.category"></a>

- *Type:* str

Notification category to associate the rule with. Valid values are `high_urgency`, `low_urgency`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/on_call_user_notification_rule#category OnCallUserNotificationRule#category}

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.channelId"></a>

- *Type:* str

ID of the notification channel to associate the notification rule with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/on_call_user_notification_rule#channel_id OnCallUserNotificationRule#channel_id}

---

##### `delay_minutes`<sup>Required</sup> <a name="delay_minutes" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.delayMinutes"></a>

- *Type:* typing.Union[int, float]

Number of minutes to elapse before this rule is evaluated.  `0` indicates immediate evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/on_call_user_notification_rule#delay_minutes OnCallUserNotificationRule#delay_minutes}

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.userId"></a>

- *Type:* str

ID of the user to associate the notification rule with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/on_call_user_notification_rule#user_id OnCallUserNotificationRule#user_id}

---

##### `phone`<sup>Optional</sup> <a name="phone" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.phone"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a>

phone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/on_call_user_notification_rule#phone OnCallUserNotificationRule#phone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.putPhone">put_phone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.resetPhone">reset_phone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_phone` <a name="put_phone" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.putPhone"></a>

```python
def put_phone(
  method: str = None
) -> None
```

###### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.putPhone.parameter.method"></a>

- *Type:* str

Specifies the method in which a phone is used in a notification rule. Valid values are `sms`, `voice`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/on_call_user_notification_rule#method OnCallUserNotificationRule#method}

---

##### `reset_phone` <a name="reset_phone" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.resetPhone"></a>

```python
def reset_phone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OnCallUserNotificationRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isConstruct"></a>

```python
from cdktn_provider_datadog import on_call_user_notification_rule

onCallUserNotificationRule.OnCallUserNotificationRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformElement"></a>

```python
from cdktn_provider_datadog import on_call_user_notification_rule

onCallUserNotificationRule.OnCallUserNotificationRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformResource"></a>

```python
from cdktn_provider_datadog import on_call_user_notification_rule

onCallUserNotificationRule.OnCallUserNotificationRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import on_call_user_notification_rule

onCallUserNotificationRule.OnCallUserNotificationRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OnCallUserNotificationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OnCallUserNotificationRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OnCallUserNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/on_call_user_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OnCallUserNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.phone">phone</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference">OnCallUserNotificationRulePhoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.channelIdInput">channel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.delayMinutesInput">delay_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.phoneInput">phone_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.channelId">channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.delayMinutes">delay_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.userId">user_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.phone"></a>

```python
phone: OnCallUserNotificationRulePhoneOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference">OnCallUserNotificationRulePhoneOutputReference</a>

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `channel_id_input`<sup>Optional</sup> <a name="channel_id_input" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.channelIdInput"></a>

```python
channel_id_input: str
```

- *Type:* str

---

##### `delay_minutes_input`<sup>Optional</sup> <a name="delay_minutes_input" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.delayMinutesInput"></a>

```python
delay_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `phone_input`<sup>Optional</sup> <a name="phone_input" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.phoneInput"></a>

```python
phone_input: IResolvable | OnCallUserNotificationRulePhone
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a>

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

---

##### `delay_minutes`<sup>Required</sup> <a name="delay_minutes" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.delayMinutes"></a>

```python
delay_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OnCallUserNotificationRuleConfig <a name="OnCallUserNotificationRuleConfig" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.Initializer"></a>

```python
from cdktn_provider_datadog import on_call_user_notification_rule

onCallUserNotificationRule.OnCallUserNotificationRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  category: str,
  channel_id: str,
  delay_minutes: typing.Union[int, float],
  user_id: str,
  phone: OnCallUserNotificationRulePhone = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.category">category</a></code> | <code>str</code> | Notification category to associate the rule with. Valid values are `high_urgency`, `low_urgency`. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.channelId">channel_id</a></code> | <code>str</code> | ID of the notification channel to associate the notification rule with. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.delayMinutes">delay_minutes</a></code> | <code>typing.Union[int, float]</code> | Number of minutes to elapse before this rule is evaluated.  `0` indicates immediate evaluation. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.userId">user_id</a></code> | <code>str</code> | ID of the user to associate the notification rule with. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.phone">phone</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a></code> | phone block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.category"></a>

```python
category: str
```

- *Type:* str

Notification category to associate the rule with. Valid values are `high_urgency`, `low_urgency`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/on_call_user_notification_rule#category OnCallUserNotificationRule#category}

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

ID of the notification channel to associate the notification rule with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/on_call_user_notification_rule#channel_id OnCallUserNotificationRule#channel_id}

---

##### `delay_minutes`<sup>Required</sup> <a name="delay_minutes" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.delayMinutes"></a>

```python
delay_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of minutes to elapse before this rule is evaluated.  `0` indicates immediate evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/on_call_user_notification_rule#delay_minutes OnCallUserNotificationRule#delay_minutes}

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.userId"></a>

```python
user_id: str
```

- *Type:* str

ID of the user to associate the notification rule with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/on_call_user_notification_rule#user_id OnCallUserNotificationRule#user_id}

---

##### `phone`<sup>Optional</sup> <a name="phone" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.phone"></a>

```python
phone: OnCallUserNotificationRulePhone
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a>

phone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/on_call_user_notification_rule#phone OnCallUserNotificationRule#phone}

---

### OnCallUserNotificationRulePhone <a name="OnCallUserNotificationRulePhone" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone.Initializer"></a>

```python
from cdktn_provider_datadog import on_call_user_notification_rule

onCallUserNotificationRule.OnCallUserNotificationRulePhone(
  method: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone.property.method">method</a></code> | <code>str</code> | Specifies the method in which a phone is used in a notification rule. Valid values are `sms`, `voice`. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone.property.method"></a>

```python
method: str
```

- *Type:* str

Specifies the method in which a phone is used in a notification rule. Valid values are `sms`, `voice`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/on_call_user_notification_rule#method OnCallUserNotificationRule#method}

---

## Classes <a name="Classes" id="Classes"></a>

### OnCallUserNotificationRulePhoneOutputReference <a name="OnCallUserNotificationRulePhoneOutputReference" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import on_call_user_notification_rule

onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.resetMethod">reset_method</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_method` <a name="reset_method" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OnCallUserNotificationRulePhone
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a>

---



