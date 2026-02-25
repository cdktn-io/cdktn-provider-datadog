# `teamNotificationRule` Submodule <a name="`teamNotificationRule` Submodule" id="@cdktn/provider-datadog.teamNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamNotificationRule <a name="TeamNotificationRule" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/team_notification_rule datadog_team_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer"></a>

```python
from cdktn_provider_datadog import team_notification_rule

teamNotificationRule.TeamNotificationRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  team_id: str,
  email: TeamNotificationRuleEmail = None,
  ms_teams: TeamNotificationRuleMsTeams = None,
  pagerduty: TeamNotificationRulePagerduty = None,
  slack: TeamNotificationRuleSlack = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.teamId">team_id</a></code> | <code>str</code> | The ID of the team that this notification rule belongs to. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.email">email</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail">TeamNotificationRuleEmail</a></code> | email block. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.msTeams">ms_teams</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams">TeamNotificationRuleMsTeams</a></code> | ms_teams block. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.pagerduty">pagerduty</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty">TeamNotificationRulePagerduty</a></code> | pagerduty block. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.slack">slack</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack">TeamNotificationRuleSlack</a></code> | slack block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.teamId"></a>

- *Type:* str

The ID of the team that this notification rule belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/team_notification_rule#team_id TeamNotificationRule#team_id}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.email"></a>

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail">TeamNotificationRuleEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/team_notification_rule#email TeamNotificationRule#email}

---

##### `ms_teams`<sup>Optional</sup> <a name="ms_teams" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.msTeams"></a>

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams">TeamNotificationRuleMsTeams</a>

ms_teams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/team_notification_rule#ms_teams TeamNotificationRule#ms_teams}

---

##### `pagerduty`<sup>Optional</sup> <a name="pagerduty" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.pagerduty"></a>

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty">TeamNotificationRulePagerduty</a>

pagerduty block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/team_notification_rule#pagerduty TeamNotificationRule#pagerduty}

---

##### `slack`<sup>Optional</sup> <a name="slack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.slack"></a>

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack">TeamNotificationRuleSlack</a>

slack block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/team_notification_rule#slack TeamNotificationRule#slack}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putEmail">put_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putMsTeams">put_ms_teams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putPagerduty">put_pagerduty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putSlack">put_slack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetMsTeams">reset_ms_teams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetPagerduty">reset_pagerduty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetSlack">reset_slack</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_email` <a name="put_email" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putEmail"></a>

```python
def put_email(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putEmail.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether to send email notifications to team members when alerts are triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/team_notification_rule#enabled TeamNotificationRule#enabled}

---

##### `put_ms_teams` <a name="put_ms_teams" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putMsTeams"></a>

```python
def put_ms_teams(
  connector_name: str = None
) -> None
```

###### `connector_name`<sup>Optional</sup> <a name="connector_name" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putMsTeams.parameter.connectorName"></a>

- *Type:* str

MS Teams connector name used to route notifications to the appropriate channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/team_notification_rule#connector_name TeamNotificationRule#connector_name}

---

##### `put_pagerduty` <a name="put_pagerduty" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putPagerduty"></a>

```python
def put_pagerduty(
  service_name: str = None
) -> None
```

###### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putPagerduty.parameter.serviceName"></a>

- *Type:* str

PagerDuty service name to send incident notifications to. The service name can be found in your PagerDuty service settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/team_notification_rule#service_name TeamNotificationRule#service_name}

---

##### `put_slack` <a name="put_slack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putSlack"></a>

```python
def put_slack(
  channel: str = None,
  workspace: str = None
) -> None
```

###### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putSlack.parameter.channel"></a>

- *Type:* str

Slack channel name for notifications (for example, #alerts or #team-notifications).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/team_notification_rule#channel TeamNotificationRule#channel}

---

###### `workspace`<sup>Optional</sup> <a name="workspace" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putSlack.parameter.workspace"></a>

- *Type:* str

Slack workspace name where the channel is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/team_notification_rule#workspace TeamNotificationRule#workspace}

---

##### `reset_email` <a name="reset_email" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_ms_teams` <a name="reset_ms_teams" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetMsTeams"></a>

```python
def reset_ms_teams() -> None
```

##### `reset_pagerduty` <a name="reset_pagerduty" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetPagerduty"></a>

```python
def reset_pagerduty() -> None
```

##### `reset_slack` <a name="reset_slack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetSlack"></a>

```python
def reset_slack() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a TeamNotificationRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isConstruct"></a>

```python
from cdktn_provider_datadog import team_notification_rule

teamNotificationRule.TeamNotificationRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isTerraformElement"></a>

```python
from cdktn_provider_datadog import team_notification_rule

teamNotificationRule.TeamNotificationRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isTerraformResource"></a>

```python
from cdktn_provider_datadog import team_notification_rule

teamNotificationRule.TeamNotificationRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import team_notification_rule

teamNotificationRule.TeamNotificationRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a TeamNotificationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TeamNotificationRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TeamNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/team_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TeamNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.email">email</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference">TeamNotificationRuleEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.msTeams">ms_teams</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference">TeamNotificationRuleMsTeamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.pagerduty">pagerduty</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference">TeamNotificationRulePagerdutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference">TeamNotificationRuleSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.emailInput">email_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail">TeamNotificationRuleEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.msTeamsInput">ms_teams_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams">TeamNotificationRuleMsTeams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.pagerdutyInput">pagerduty_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty">TeamNotificationRulePagerduty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.slackInput">slack_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack">TeamNotificationRuleSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.teamIdInput">team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.email"></a>

```python
email: TeamNotificationRuleEmailOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference">TeamNotificationRuleEmailOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ms_teams`<sup>Required</sup> <a name="ms_teams" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.msTeams"></a>

```python
ms_teams: TeamNotificationRuleMsTeamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference">TeamNotificationRuleMsTeamsOutputReference</a>

---

##### `pagerduty`<sup>Required</sup> <a name="pagerduty" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.pagerduty"></a>

```python
pagerduty: TeamNotificationRulePagerdutyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference">TeamNotificationRulePagerdutyOutputReference</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.slack"></a>

```python
slack: TeamNotificationRuleSlackOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference">TeamNotificationRuleSlackOutputReference</a>

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.emailInput"></a>

```python
email_input: IResolvable | TeamNotificationRuleEmail
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail">TeamNotificationRuleEmail</a>

---

##### `ms_teams_input`<sup>Optional</sup> <a name="ms_teams_input" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.msTeamsInput"></a>

```python
ms_teams_input: IResolvable | TeamNotificationRuleMsTeams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams">TeamNotificationRuleMsTeams</a>

---

##### `pagerduty_input`<sup>Optional</sup> <a name="pagerduty_input" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.pagerdutyInput"></a>

```python
pagerduty_input: IResolvable | TeamNotificationRulePagerduty
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty">TeamNotificationRulePagerduty</a>

---

##### `slack_input`<sup>Optional</sup> <a name="slack_input" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.slackInput"></a>

```python
slack_input: IResolvable | TeamNotificationRuleSlack
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack">TeamNotificationRuleSlack</a>

---

##### `team_id_input`<sup>Optional</sup> <a name="team_id_input" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.teamIdInput"></a>

```python
team_id_input: str
```

- *Type:* str

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TeamNotificationRuleConfig <a name="TeamNotificationRuleConfig" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.Initializer"></a>

```python
from cdktn_provider_datadog import team_notification_rule

teamNotificationRule.TeamNotificationRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  team_id: str,
  email: TeamNotificationRuleEmail = None,
  ms_teams: TeamNotificationRuleMsTeams = None,
  pagerduty: TeamNotificationRulePagerduty = None,
  slack: TeamNotificationRuleSlack = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.teamId">team_id</a></code> | <code>str</code> | The ID of the team that this notification rule belongs to. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.email">email</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail">TeamNotificationRuleEmail</a></code> | email block. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.msTeams">ms_teams</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams">TeamNotificationRuleMsTeams</a></code> | ms_teams block. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.pagerduty">pagerduty</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty">TeamNotificationRulePagerduty</a></code> | pagerduty block. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack">TeamNotificationRuleSlack</a></code> | slack block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

The ID of the team that this notification rule belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/team_notification_rule#team_id TeamNotificationRule#team_id}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.email"></a>

```python
email: TeamNotificationRuleEmail
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail">TeamNotificationRuleEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/team_notification_rule#email TeamNotificationRule#email}

---

##### `ms_teams`<sup>Optional</sup> <a name="ms_teams" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.msTeams"></a>

```python
ms_teams: TeamNotificationRuleMsTeams
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams">TeamNotificationRuleMsTeams</a>

ms_teams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/team_notification_rule#ms_teams TeamNotificationRule#ms_teams}

---

##### `pagerduty`<sup>Optional</sup> <a name="pagerduty" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.pagerduty"></a>

```python
pagerduty: TeamNotificationRulePagerduty
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty">TeamNotificationRulePagerduty</a>

pagerduty block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/team_notification_rule#pagerduty TeamNotificationRule#pagerduty}

---

##### `slack`<sup>Optional</sup> <a name="slack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.slack"></a>

```python
slack: TeamNotificationRuleSlack
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack">TeamNotificationRuleSlack</a>

slack block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/team_notification_rule#slack TeamNotificationRule#slack}

---

### TeamNotificationRuleEmail <a name="TeamNotificationRuleEmail" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail.Initializer"></a>

```python
from cdktn_provider_datadog import team_notification_rule

teamNotificationRule.TeamNotificationRuleEmail(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to send email notifications to team members when alerts are triggered. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to send email notifications to team members when alerts are triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/team_notification_rule#enabled TeamNotificationRule#enabled}

---

### TeamNotificationRuleMsTeams <a name="TeamNotificationRuleMsTeams" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams.Initializer"></a>

```python
from cdktn_provider_datadog import team_notification_rule

teamNotificationRule.TeamNotificationRuleMsTeams(
  connector_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams.property.connectorName">connector_name</a></code> | <code>str</code> | MS Teams connector name used to route notifications to the appropriate channel. |

---

##### `connector_name`<sup>Optional</sup> <a name="connector_name" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams.property.connectorName"></a>

```python
connector_name: str
```

- *Type:* str

MS Teams connector name used to route notifications to the appropriate channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/team_notification_rule#connector_name TeamNotificationRule#connector_name}

---

### TeamNotificationRulePagerduty <a name="TeamNotificationRulePagerduty" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty.Initializer"></a>

```python
from cdktn_provider_datadog import team_notification_rule

teamNotificationRule.TeamNotificationRulePagerduty(
  service_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty.property.serviceName">service_name</a></code> | <code>str</code> | PagerDuty service name to send incident notifications to. The service name can be found in your PagerDuty service settings. |

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

PagerDuty service name to send incident notifications to. The service name can be found in your PagerDuty service settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/team_notification_rule#service_name TeamNotificationRule#service_name}

---

### TeamNotificationRuleSlack <a name="TeamNotificationRuleSlack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack.Initializer"></a>

```python
from cdktn_provider_datadog import team_notification_rule

teamNotificationRule.TeamNotificationRuleSlack(
  channel: str = None,
  workspace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack.property.channel">channel</a></code> | <code>str</code> | Slack channel name for notifications (for example, #alerts or #team-notifications). |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack.property.workspace">workspace</a></code> | <code>str</code> | Slack workspace name where the channel is located. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack.property.channel"></a>

```python
channel: str
```

- *Type:* str

Slack channel name for notifications (for example, #alerts or #team-notifications).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/team_notification_rule#channel TeamNotificationRule#channel}

---

##### `workspace`<sup>Optional</sup> <a name="workspace" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack.property.workspace"></a>

```python
workspace: str
```

- *Type:* str

Slack workspace name where the channel is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/team_notification_rule#workspace TeamNotificationRule#workspace}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamNotificationRuleEmailOutputReference <a name="TeamNotificationRuleEmailOutputReference" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import team_notification_rule

teamNotificationRule.TeamNotificationRuleEmailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail">TeamNotificationRuleEmail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TeamNotificationRuleEmail
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail">TeamNotificationRuleEmail</a>

---


### TeamNotificationRuleMsTeamsOutputReference <a name="TeamNotificationRuleMsTeamsOutputReference" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import team_notification_rule

teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.resetConnectorName">reset_connector_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connector_name` <a name="reset_connector_name" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.resetConnectorName"></a>

```python
def reset_connector_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.connectorNameInput">connector_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.connectorName">connector_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams">TeamNotificationRuleMsTeams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_name_input`<sup>Optional</sup> <a name="connector_name_input" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.connectorNameInput"></a>

```python
connector_name_input: str
```

- *Type:* str

---

##### `connector_name`<sup>Required</sup> <a name="connector_name" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.connectorName"></a>

```python
connector_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TeamNotificationRuleMsTeams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams">TeamNotificationRuleMsTeams</a>

---


### TeamNotificationRulePagerdutyOutputReference <a name="TeamNotificationRulePagerdutyOutputReference" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import team_notification_rule

teamNotificationRule.TeamNotificationRulePagerdutyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.resetServiceName">reset_service_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_name` <a name="reset_service_name" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.resetServiceName"></a>

```python
def reset_service_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty">TeamNotificationRulePagerduty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TeamNotificationRulePagerduty
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty">TeamNotificationRulePagerduty</a>

---


### TeamNotificationRuleSlackOutputReference <a name="TeamNotificationRuleSlackOutputReference" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import team_notification_rule

teamNotificationRule.TeamNotificationRuleSlackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resetChannel">reset_channel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resetWorkspace">reset_workspace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_channel` <a name="reset_channel" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resetChannel"></a>

```python
def reset_channel() -> None
```

##### `reset_workspace` <a name="reset_workspace" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resetWorkspace"></a>

```python
def reset_workspace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.workspaceInput">workspace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.workspace">workspace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack">TeamNotificationRuleSlack</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `workspace_input`<sup>Optional</sup> <a name="workspace_input" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.workspaceInput"></a>

```python
workspace_input: str
```

- *Type:* str

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.workspace"></a>

```python
workspace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TeamNotificationRuleSlack
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack">TeamNotificationRuleSlack</a>

---



