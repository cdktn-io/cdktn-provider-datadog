# `monitorNotificationRule` Submodule <a name="`monitorNotificationRule` Submodule" id="@cdktn/provider-datadog.monitorNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorNotificationRule <a name="MonitorNotificationRule" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/monitor_notification_rule datadog_monitor_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer"></a>

```python
from cdktn_provider_datadog import monitor_notification_rule

monitorNotificationRule.MonitorNotificationRule(
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
  conditional_recipients: MonitorNotificationRuleConditionalRecipients = None,
  filter: MonitorNotificationRuleFilter = None,
  recipients: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the monitor notification rule. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.conditionalRecipients">conditional_recipients</a></code> | <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients">MonitorNotificationRuleConditionalRecipients</a></code> | conditional_recipients block. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter">MonitorNotificationRuleFilter</a></code> | filter block. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.recipients">recipients</a></code> | <code>typing.List[str]</code> | List of recipients to notify. Cannot be used with `conditional_recipients`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.name"></a>

- *Type:* str

The name of the monitor notification rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/monitor_notification_rule#name MonitorNotificationRule#name}

---

##### `conditional_recipients`<sup>Optional</sup> <a name="conditional_recipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.conditionalRecipients"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients">MonitorNotificationRuleConditionalRecipients</a>

conditional_recipients block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/monitor_notification_rule#conditional_recipients MonitorNotificationRule#conditional_recipients}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter">MonitorNotificationRuleFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/monitor_notification_rule#filter MonitorNotificationRule#filter}

---

##### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.recipients"></a>

- *Type:* typing.List[str]

List of recipients to notify. Cannot be used with `conditional_recipients`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/monitor_notification_rule#recipients MonitorNotificationRule#recipients}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.putConditionalRecipients">put_conditional_recipients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.resetConditionalRecipients">reset_conditional_recipients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.resetRecipients">reset_recipients</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_conditional_recipients` <a name="put_conditional_recipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.putConditionalRecipients"></a>

```python
def put_conditional_recipients(
  conditions: IResolvable | typing.List[MonitorNotificationRuleConditionalRecipientsConditions] = None,
  fallback_recipients: typing.List[str] = None
) -> None
```

###### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.putConditionalRecipients.parameter.conditions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions">MonitorNotificationRuleConditionalRecipientsConditions</a>]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/monitor_notification_rule#conditions MonitorNotificationRule#conditions}

---

###### `fallback_recipients`<sup>Optional</sup> <a name="fallback_recipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.putConditionalRecipients.parameter.fallbackRecipients"></a>

- *Type:* typing.List[str]

If none of the `conditions` applied, `fallback_recipients` will get notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/monitor_notification_rule#fallback_recipients MonitorNotificationRule#fallback_recipients}

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.putFilter"></a>

```python
def put_filter(
  scope: str = None,
  tags: typing.List[str] = None
) -> None
```

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.putFilter.parameter.scope"></a>

- *Type:* str

A scope expression composed of `key:value` pairs (such as `env:prod`) with boolean operators (AND, OR, NOT) and parentheses for grouping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/monitor_notification_rule#scope MonitorNotificationRule#scope}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.putFilter.parameter.tags"></a>

- *Type:* typing.List[str]

A list of tag key:value pairs (e.g. team:product). All tags must match (AND semantics).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/monitor_notification_rule#tags MonitorNotificationRule#tags}

---

##### `reset_conditional_recipients` <a name="reset_conditional_recipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.resetConditionalRecipients"></a>

```python
def reset_conditional_recipients() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_recipients` <a name="reset_recipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.resetRecipients"></a>

```python
def reset_recipients() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MonitorNotificationRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isConstruct"></a>

```python
from cdktn_provider_datadog import monitor_notification_rule

monitorNotificationRule.MonitorNotificationRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isTerraformElement"></a>

```python
from cdktn_provider_datadog import monitor_notification_rule

monitorNotificationRule.MonitorNotificationRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isTerraformResource"></a>

```python
from cdktn_provider_datadog import monitor_notification_rule

monitorNotificationRule.MonitorNotificationRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import monitor_notification_rule

monitorNotificationRule.MonitorNotificationRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MonitorNotificationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MonitorNotificationRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MonitorNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/monitor_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MonitorNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.conditionalRecipients">conditional_recipients</a></code> | <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference">MonitorNotificationRuleConditionalRecipientsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference">MonitorNotificationRuleFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.conditionalRecipientsInput">conditional_recipients_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients">MonitorNotificationRuleConditionalRecipients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter">MonitorNotificationRuleFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.recipientsInput">recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.recipients">recipients</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `conditional_recipients`<sup>Required</sup> <a name="conditional_recipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.conditionalRecipients"></a>

```python
conditional_recipients: MonitorNotificationRuleConditionalRecipientsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference">MonitorNotificationRuleConditionalRecipientsOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.filter"></a>

```python
filter: MonitorNotificationRuleFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference">MonitorNotificationRuleFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `conditional_recipients_input`<sup>Optional</sup> <a name="conditional_recipients_input" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.conditionalRecipientsInput"></a>

```python
conditional_recipients_input: IResolvable | MonitorNotificationRuleConditionalRecipients
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients">MonitorNotificationRuleConditionalRecipients</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.filterInput"></a>

```python
filter_input: IResolvable | MonitorNotificationRuleFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter">MonitorNotificationRuleFilter</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `recipients_input`<sup>Optional</sup> <a name="recipients_input" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.recipientsInput"></a>

```python
recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.recipients"></a>

```python
recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorNotificationRuleConditionalRecipients <a name="MonitorNotificationRuleConditionalRecipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients.Initializer"></a>

```python
from cdktn_provider_datadog import monitor_notification_rule

monitorNotificationRule.MonitorNotificationRuleConditionalRecipients(
  conditions: IResolvable | typing.List[MonitorNotificationRuleConditionalRecipientsConditions] = None,
  fallback_recipients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions">MonitorNotificationRuleConditionalRecipientsConditions</a>]</code> | conditions block. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients.property.fallbackRecipients">fallback_recipients</a></code> | <code>typing.List[str]</code> | If none of the `conditions` applied, `fallback_recipients` will get notified. |

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients.property.conditions"></a>

```python
conditions: IResolvable | typing.List[MonitorNotificationRuleConditionalRecipientsConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions">MonitorNotificationRuleConditionalRecipientsConditions</a>]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/monitor_notification_rule#conditions MonitorNotificationRule#conditions}

---

##### `fallback_recipients`<sup>Optional</sup> <a name="fallback_recipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients.property.fallbackRecipients"></a>

```python
fallback_recipients: typing.List[str]
```

- *Type:* typing.List[str]

If none of the `conditions` applied, `fallback_recipients` will get notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/monitor_notification_rule#fallback_recipients MonitorNotificationRule#fallback_recipients}

---

### MonitorNotificationRuleConditionalRecipientsConditions <a name="MonitorNotificationRuleConditionalRecipientsConditions" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions.Initializer"></a>

```python
from cdktn_provider_datadog import monitor_notification_rule

monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions(
  recipients: typing.List[str],
  scope: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions.property.recipients">recipients</a></code> | <code>typing.List[str]</code> | A list of recipients to notify. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions.property.scope">scope</a></code> | <code>str</code> | Defines the condition under which the recipients are notified. |

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions.property.recipients"></a>

```python
recipients: typing.List[str]
```

- *Type:* typing.List[str]

A list of recipients to notify.

Uses the same format as the monitor message field. Must not start with an '@'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/monitor_notification_rule#recipients MonitorNotificationRule#recipients}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions.property.scope"></a>

```python
scope: str
```

- *Type:* str

Defines the condition under which the recipients are notified.

Supported formats: Monitor status condition using `transition_type:<status>` (for example `transition_type:is_alert`) or a single tag `key:value pair` (for example `env:prod`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/monitor_notification_rule#scope MonitorNotificationRule#scope}

---

### MonitorNotificationRuleConfig <a name="MonitorNotificationRuleConfig" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.Initializer"></a>

```python
from cdktn_provider_datadog import monitor_notification_rule

monitorNotificationRule.MonitorNotificationRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  conditional_recipients: MonitorNotificationRuleConditionalRecipients = None,
  filter: MonitorNotificationRuleFilter = None,
  recipients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.name">name</a></code> | <code>str</code> | The name of the monitor notification rule. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.conditionalRecipients">conditional_recipients</a></code> | <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients">MonitorNotificationRuleConditionalRecipients</a></code> | conditional_recipients block. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter">MonitorNotificationRuleFilter</a></code> | filter block. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.recipients">recipients</a></code> | <code>typing.List[str]</code> | List of recipients to notify. Cannot be used with `conditional_recipients`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the monitor notification rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/monitor_notification_rule#name MonitorNotificationRule#name}

---

##### `conditional_recipients`<sup>Optional</sup> <a name="conditional_recipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.conditionalRecipients"></a>

```python
conditional_recipients: MonitorNotificationRuleConditionalRecipients
```

- *Type:* <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients">MonitorNotificationRuleConditionalRecipients</a>

conditional_recipients block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/monitor_notification_rule#conditional_recipients MonitorNotificationRule#conditional_recipients}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.filter"></a>

```python
filter: MonitorNotificationRuleFilter
```

- *Type:* <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter">MonitorNotificationRuleFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/monitor_notification_rule#filter MonitorNotificationRule#filter}

---

##### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.recipients"></a>

```python
recipients: typing.List[str]
```

- *Type:* typing.List[str]

List of recipients to notify. Cannot be used with `conditional_recipients`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/monitor_notification_rule#recipients MonitorNotificationRule#recipients}

---

### MonitorNotificationRuleFilter <a name="MonitorNotificationRuleFilter" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter.Initializer"></a>

```python
from cdktn_provider_datadog import monitor_notification_rule

monitorNotificationRule.MonitorNotificationRuleFilter(
  scope: str = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter.property.scope">scope</a></code> | <code>str</code> | A scope expression composed of `key:value` pairs (such as `env:prod`) with boolean operators (AND, OR, NOT) and parentheses for grouping. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter.property.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tag key:value pairs (e.g. team:product). All tags must match (AND semantics). |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter.property.scope"></a>

```python
scope: str
```

- *Type:* str

A scope expression composed of `key:value` pairs (such as `env:prod`) with boolean operators (AND, OR, NOT) and parentheses for grouping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/monitor_notification_rule#scope MonitorNotificationRule#scope}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of tag key:value pairs (e.g. team:product). All tags must match (AND semantics).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/monitor_notification_rule#tags MonitorNotificationRule#tags}

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorNotificationRuleConditionalRecipientsConditionsList <a name="MonitorNotificationRuleConditionalRecipientsConditionsList" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.Initializer"></a>

```python
from cdktn_provider_datadog import monitor_notification_rule

monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorNotificationRuleConditionalRecipientsConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions">MonitorNotificationRuleConditionalRecipientsConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MonitorNotificationRuleConditionalRecipientsConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions">MonitorNotificationRuleConditionalRecipientsConditions</a>]

---


### MonitorNotificationRuleConditionalRecipientsConditionsOutputReference <a name="MonitorNotificationRuleConditionalRecipientsConditionsOutputReference" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import monitor_notification_rule

monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.recipientsInput">recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.recipients">recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions">MonitorNotificationRuleConditionalRecipientsConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `recipients_input`<sup>Optional</sup> <a name="recipients_input" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.recipientsInput"></a>

```python
recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.recipients"></a>

```python
recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MonitorNotificationRuleConditionalRecipientsConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions">MonitorNotificationRuleConditionalRecipientsConditions</a>

---


### MonitorNotificationRuleConditionalRecipientsOutputReference <a name="MonitorNotificationRuleConditionalRecipientsOutputReference" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import monitor_notification_rule

monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.resetConditions">reset_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.resetFallbackRecipients">reset_fallback_recipients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conditions` <a name="put_conditions" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.putConditions"></a>

```python
def put_conditions(
  value: IResolvable | typing.List[MonitorNotificationRuleConditionalRecipientsConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions">MonitorNotificationRuleConditionalRecipientsConditions</a>]

---

##### `reset_conditions` <a name="reset_conditions" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.resetConditions"></a>

```python
def reset_conditions() -> None
```

##### `reset_fallback_recipients` <a name="reset_fallback_recipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.resetFallbackRecipients"></a>

```python
def reset_fallback_recipients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList">MonitorNotificationRuleConditionalRecipientsConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.conditionsInput">conditions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions">MonitorNotificationRuleConditionalRecipientsConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.fallbackRecipientsInput">fallback_recipients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.fallbackRecipients">fallback_recipients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients">MonitorNotificationRuleConditionalRecipients</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.conditions"></a>

```python
conditions: MonitorNotificationRuleConditionalRecipientsConditionsList
```

- *Type:* <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList">MonitorNotificationRuleConditionalRecipientsConditionsList</a>

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.conditionsInput"></a>

```python
conditions_input: IResolvable | typing.List[MonitorNotificationRuleConditionalRecipientsConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions">MonitorNotificationRuleConditionalRecipientsConditions</a>]

---

##### `fallback_recipients_input`<sup>Optional</sup> <a name="fallback_recipients_input" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.fallbackRecipientsInput"></a>

```python
fallback_recipients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fallback_recipients`<sup>Required</sup> <a name="fallback_recipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.fallbackRecipients"></a>

```python
fallback_recipients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MonitorNotificationRuleConditionalRecipients
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients">MonitorNotificationRuleConditionalRecipients</a>

---


### MonitorNotificationRuleFilterOutputReference <a name="MonitorNotificationRuleFilterOutputReference" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import monitor_notification_rule

monitorNotificationRule.MonitorNotificationRuleFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scope` <a name="reset_scope" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter">MonitorNotificationRuleFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MonitorNotificationRuleFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter">MonitorNotificationRuleFilter</a>

---



