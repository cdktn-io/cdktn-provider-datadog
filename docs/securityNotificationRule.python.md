# `securityNotificationRule` Submodule <a name="`securityNotificationRule` Submodule" id="@cdktn/provider-datadog.securityNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityNotificationRule <a name="SecurityNotificationRule" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/security_notification_rule datadog_security_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer"></a>

```python
from cdktn_provider_datadog import security_notification_rule

securityNotificationRule.SecurityNotificationRule(
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
  targets: typing.List[str],
  enabled: bool | IResolvable = None,
  selectors: SecurityNotificationRuleSelectors = None,
  time_aggregation: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the rule (must be unique). |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.targets">targets</a></code> | <code>typing.List[str]</code> | The list of handle targets for the notifications. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the rule is enabled. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.selectors">selectors</a></code> | <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a></code> | selectors block. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.timeAggregation">time_aggregation</a></code> | <code>typing.Union[int, float]</code> | Specifies the time period, in seconds, used to aggregate the notification. Defaults to `0`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.name"></a>

- *Type:* str

The name of the rule (must be unique).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/security_notification_rule#name SecurityNotificationRule#name}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.targets"></a>

- *Type:* typing.List[str]

The list of handle targets for the notifications.

A target must be prefixed with an

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/security_notification_rule#enabled SecurityNotificationRule#enabled}

---

##### `selectors`<sup>Optional</sup> <a name="selectors" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.selectors"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a>

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/security_notification_rule#selectors SecurityNotificationRule#selectors}

---

##### `time_aggregation`<sup>Optional</sup> <a name="time_aggregation" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.Initializer.parameter.timeAggregation"></a>

- *Type:* typing.Union[int, float]

Specifies the time period, in seconds, used to aggregate the notification. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/security_notification_rule#time_aggregation SecurityNotificationRule#time_aggregation}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.putSelectors">put_selectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetSelectors">reset_selectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetTimeAggregation">reset_time_aggregation</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_selectors` <a name="put_selectors" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.putSelectors"></a>

```python
def put_selectors(
  rule_types: typing.List[str],
  trigger_source: str,
  query: str = None,
  severities: typing.List[str] = None
) -> None
```

###### `rule_types`<sup>Required</sup> <a name="rule_types" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.putSelectors.parameter.ruleTypes"></a>

- *Type:* typing.List[str]

Specifies security rule types for filtering signals and vulnerabilities that generate notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/security_notification_rule#rule_types SecurityNotificationRule#rule_types}

---

###### `trigger_source`<sup>Required</sup> <a name="trigger_source" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.putSelectors.parameter.triggerSource"></a>

- *Type:* str

The type of security issues the rule applies to.

Use `security_signals` for rules based on security signals and `security_findings` for those based on vulnerabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/security_notification_rule#trigger_source SecurityNotificationRule#trigger_source}

---

###### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.putSelectors.parameter.query"></a>

- *Type:* str

Comprises one or several key:value pairs for filtering security issues based on tags and attributes. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/security_notification_rule#query SecurityNotificationRule#query}

---

###### `severities`<sup>Optional</sup> <a name="severities" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.putSelectors.parameter.severities"></a>

- *Type:* typing.List[str]

The security rules severities to consider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/security_notification_rule#severities SecurityNotificationRule#severities}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_selectors` <a name="reset_selectors" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetSelectors"></a>

```python
def reset_selectors() -> None
```

##### `reset_time_aggregation` <a name="reset_time_aggregation" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.resetTimeAggregation"></a>

```python
def reset_time_aggregation() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SecurityNotificationRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.isConstruct"></a>

```python
from cdktn_provider_datadog import security_notification_rule

securityNotificationRule.SecurityNotificationRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.isTerraformElement"></a>

```python
from cdktn_provider_datadog import security_notification_rule

securityNotificationRule.SecurityNotificationRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.isTerraformResource"></a>

```python
from cdktn_provider_datadog import security_notification_rule

securityNotificationRule.SecurityNotificationRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import security_notification_rule

securityNotificationRule.SecurityNotificationRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SecurityNotificationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecurityNotificationRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecurityNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/security_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.createdByHandle">created_by_handle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.createdByName">created_by_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.modifiedAt">modified_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.modifiedByHandle">modified_by_handle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.modifiedByName">modified_by_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.selectors">selectors</a></code> | <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference">SecurityNotificationRuleSelectorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.selectorsInput">selectors_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.targetsInput">targets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.timeAggregationInput">time_aggregation_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.targets">targets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.timeAggregation">time_aggregation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by_handle`<sup>Required</sup> <a name="created_by_handle" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.createdByHandle"></a>

```python
created_by_handle: str
```

- *Type:* str

---

##### `created_by_name`<sup>Required</sup> <a name="created_by_name" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.createdByName"></a>

```python
created_by_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.modifiedAt"></a>

```python
modified_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `modified_by_handle`<sup>Required</sup> <a name="modified_by_handle" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.modifiedByHandle"></a>

```python
modified_by_handle: str
```

- *Type:* str

---

##### `modified_by_name`<sup>Required</sup> <a name="modified_by_name" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.modifiedByName"></a>

```python
modified_by_name: str
```

- *Type:* str

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.selectors"></a>

```python
selectors: SecurityNotificationRuleSelectorsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference">SecurityNotificationRuleSelectorsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `selectors_input`<sup>Optional</sup> <a name="selectors_input" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.selectorsInput"></a>

```python
selectors_input: IResolvable | SecurityNotificationRuleSelectors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a>

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.targetsInput"></a>

```python
targets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_aggregation_input`<sup>Optional</sup> <a name="time_aggregation_input" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.timeAggregationInput"></a>

```python
time_aggregation_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.targets"></a>

```python
targets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_aggregation`<sup>Required</sup> <a name="time_aggregation" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.timeAggregation"></a>

```python
time_aggregation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityNotificationRuleConfig <a name="SecurityNotificationRuleConfig" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.Initializer"></a>

```python
from cdktn_provider_datadog import security_notification_rule

securityNotificationRule.SecurityNotificationRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  targets: typing.List[str],
  enabled: bool | IResolvable = None,
  selectors: SecurityNotificationRuleSelectors = None,
  time_aggregation: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.name">name</a></code> | <code>str</code> | The name of the rule (must be unique). |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.targets">targets</a></code> | <code>typing.List[str]</code> | The list of handle targets for the notifications. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the rule is enabled. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.selectors">selectors</a></code> | <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a></code> | selectors block. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.timeAggregation">time_aggregation</a></code> | <code>typing.Union[int, float]</code> | Specifies the time period, in seconds, used to aggregate the notification. Defaults to `0`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the rule (must be unique).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/security_notification_rule#name SecurityNotificationRule#name}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.targets"></a>

```python
targets: typing.List[str]
```

- *Type:* typing.List[str]

The list of handle targets for the notifications.

A target must be prefixed with an

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/security_notification_rule#enabled SecurityNotificationRule#enabled}

---

##### `selectors`<sup>Optional</sup> <a name="selectors" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.selectors"></a>

```python
selectors: SecurityNotificationRuleSelectors
```

- *Type:* <a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a>

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/security_notification_rule#selectors SecurityNotificationRule#selectors}

---

##### `time_aggregation`<sup>Optional</sup> <a name="time_aggregation" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleConfig.property.timeAggregation"></a>

```python
time_aggregation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the time period, in seconds, used to aggregate the notification. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/security_notification_rule#time_aggregation SecurityNotificationRule#time_aggregation}

---

### SecurityNotificationRuleSelectors <a name="SecurityNotificationRuleSelectors" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.Initializer"></a>

```python
from cdktn_provider_datadog import security_notification_rule

securityNotificationRule.SecurityNotificationRuleSelectors(
  rule_types: typing.List[str],
  trigger_source: str,
  query: str = None,
  severities: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.ruleTypes">rule_types</a></code> | <code>typing.List[str]</code> | Specifies security rule types for filtering signals and vulnerabilities that generate notifications. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.triggerSource">trigger_source</a></code> | <code>str</code> | The type of security issues the rule applies to. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.query">query</a></code> | <code>str</code> | Comprises one or several key:value pairs for filtering security issues based on tags and attributes. Defaults to `""`. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.severities">severities</a></code> | <code>typing.List[str]</code> | The security rules severities to consider. |

---

##### `rule_types`<sup>Required</sup> <a name="rule_types" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.ruleTypes"></a>

```python
rule_types: typing.List[str]
```

- *Type:* typing.List[str]

Specifies security rule types for filtering signals and vulnerabilities that generate notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/security_notification_rule#rule_types SecurityNotificationRule#rule_types}

---

##### `trigger_source`<sup>Required</sup> <a name="trigger_source" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.triggerSource"></a>

```python
trigger_source: str
```

- *Type:* str

The type of security issues the rule applies to.

Use `security_signals` for rules based on security signals and `security_findings` for those based on vulnerabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/security_notification_rule#trigger_source SecurityNotificationRule#trigger_source}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.query"></a>

```python
query: str
```

- *Type:* str

Comprises one or several key:value pairs for filtering security issues based on tags and attributes. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/security_notification_rule#query SecurityNotificationRule#query}

---

##### `severities`<sup>Optional</sup> <a name="severities" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors.property.severities"></a>

```python
severities: typing.List[str]
```

- *Type:* typing.List[str]

The security rules severities to consider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/security_notification_rule#severities SecurityNotificationRule#severities}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityNotificationRuleSelectorsOutputReference <a name="SecurityNotificationRuleSelectorsOutputReference" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_notification_rule

securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resetQuery">reset_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resetSeverities">reset_severities</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_query` <a name="reset_query" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```

##### `reset_severities` <a name="reset_severities" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.resetSeverities"></a>

```python
def reset_severities() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.ruleTypesInput">rule_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.severitiesInput">severities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.triggerSourceInput">trigger_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.ruleTypes">rule_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.severities">severities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.triggerSource">trigger_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `rule_types_input`<sup>Optional</sup> <a name="rule_types_input" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.ruleTypesInput"></a>

```python
rule_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `severities_input`<sup>Optional</sup> <a name="severities_input" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.severitiesInput"></a>

```python
severities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trigger_source_input`<sup>Optional</sup> <a name="trigger_source_input" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.triggerSourceInput"></a>

```python
trigger_source_input: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `rule_types`<sup>Required</sup> <a name="rule_types" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.ruleTypes"></a>

```python
rule_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `severities`<sup>Required</sup> <a name="severities" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.severities"></a>

```python
severities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trigger_source`<sup>Required</sup> <a name="trigger_source" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.triggerSource"></a>

```python
trigger_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityNotificationRuleSelectors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityNotificationRule.SecurityNotificationRuleSelectors">SecurityNotificationRuleSelectors</a>

---



