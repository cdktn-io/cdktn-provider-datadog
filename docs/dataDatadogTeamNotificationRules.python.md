# `dataDatadogTeamNotificationRules` Submodule <a name="`dataDatadogTeamNotificationRules` Submodule" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogTeamNotificationRules <a name="DataDatadogTeamNotificationRules" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/team_notification_rules datadog_team_notification_rules}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_team_notification_rules

dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules(
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
  notification_rules: IResolvable | typing.List[DataDatadogTeamNotificationRulesNotificationRules] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.teamId">team_id</a></code> | <code>str</code> | The team ID to fetch notification rules for. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.notificationRules">notification_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules">DataDatadogTeamNotificationRulesNotificationRules</a>]</code> | notification_rules block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.teamId"></a>

- *Type:* str

The team ID to fetch notification rules for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/team_notification_rules#team_id DataDatadogTeamNotificationRules#team_id}

---

##### `notification_rules`<sup>Optional</sup> <a name="notification_rules" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.Initializer.parameter.notificationRules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules">DataDatadogTeamNotificationRulesNotificationRules</a>]

notification_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/team_notification_rules#notification_rules DataDatadogTeamNotificationRules#notification_rules}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.putNotificationRules">put_notification_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.resetNotificationRules">reset_notification_rules</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_notification_rules` <a name="put_notification_rules" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.putNotificationRules"></a>

```python
def put_notification_rules(
  value: IResolvable | typing.List[DataDatadogTeamNotificationRulesNotificationRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.putNotificationRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules">DataDatadogTeamNotificationRulesNotificationRules</a>]

---

##### `reset_notification_rules` <a name="reset_notification_rules" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.resetNotificationRules"></a>

```python
def reset_notification_rules() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatadogTeamNotificationRules resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.isConstruct"></a>

```python
from cdktn_provider_datadog import data_datadog_team_notification_rules

dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.isTerraformElement"></a>

```python
from cdktn_provider_datadog import data_datadog_team_notification_rules

dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.isTerraformDataSource"></a>

```python
from cdktn_provider_datadog import data_datadog_team_notification_rules

dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import data_datadog_team_notification_rules

dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatadogTeamNotificationRules resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogTeamNotificationRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogTeamNotificationRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/team_notification_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogTeamNotificationRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.notificationRules">notification_rules</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList">DataDatadogTeamNotificationRulesNotificationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.notificationRulesInput">notification_rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules">DataDatadogTeamNotificationRulesNotificationRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.teamIdInput">team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `notification_rules`<sup>Required</sup> <a name="notification_rules" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.notificationRules"></a>

```python
notification_rules: DataDatadogTeamNotificationRulesNotificationRulesList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList">DataDatadogTeamNotificationRulesNotificationRulesList</a>

---

##### `notification_rules_input`<sup>Optional</sup> <a name="notification_rules_input" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.notificationRulesInput"></a>

```python
notification_rules_input: IResolvable | typing.List[DataDatadogTeamNotificationRulesNotificationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules">DataDatadogTeamNotificationRulesNotificationRules</a>]

---

##### `team_id_input`<sup>Optional</sup> <a name="team_id_input" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.teamIdInput"></a>

```python
team_id_input: str
```

- *Type:* str

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogTeamNotificationRulesConfig <a name="DataDatadogTeamNotificationRulesConfig" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_team_notification_rules

dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  team_id: str,
  notification_rules: IResolvable | typing.List[DataDatadogTeamNotificationRulesNotificationRules] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.teamId">team_id</a></code> | <code>str</code> | The team ID to fetch notification rules for. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.notificationRules">notification_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules">DataDatadogTeamNotificationRulesNotificationRules</a>]</code> | notification_rules block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

The team ID to fetch notification rules for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/team_notification_rules#team_id DataDatadogTeamNotificationRules#team_id}

---

##### `notification_rules`<sup>Optional</sup> <a name="notification_rules" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesConfig.property.notificationRules"></a>

```python
notification_rules: IResolvable | typing.List[DataDatadogTeamNotificationRulesNotificationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules">DataDatadogTeamNotificationRulesNotificationRules</a>]

notification_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/team_notification_rules#notification_rules DataDatadogTeamNotificationRules#notification_rules}

---

### DataDatadogTeamNotificationRulesNotificationRules <a name="DataDatadogTeamNotificationRulesNotificationRules" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_team_notification_rules

dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules()
```


### DataDatadogTeamNotificationRulesNotificationRulesEmail <a name="DataDatadogTeamNotificationRulesNotificationRulesEmail" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmail.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_team_notification_rules

dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmail()
```


### DataDatadogTeamNotificationRulesNotificationRulesMsTeams <a name="DataDatadogTeamNotificationRulesNotificationRulesMsTeams" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeams.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_team_notification_rules

dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeams()
```


### DataDatadogTeamNotificationRulesNotificationRulesPagerduty <a name="DataDatadogTeamNotificationRulesNotificationRulesPagerduty" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerduty.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_team_notification_rules

dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerduty()
```


### DataDatadogTeamNotificationRulesNotificationRulesSlack <a name="DataDatadogTeamNotificationRulesNotificationRulesSlack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlack.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_team_notification_rules

dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlack()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference <a name="DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_team_notification_rules

dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmail">DataDatadogTeamNotificationRulesNotificationRulesEmail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogTeamNotificationRulesNotificationRulesEmail
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmail">DataDatadogTeamNotificationRulesNotificationRulesEmail</a>

---


### DataDatadogTeamNotificationRulesNotificationRulesList <a name="DataDatadogTeamNotificationRulesNotificationRulesList" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_team_notification_rules

dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogTeamNotificationRulesNotificationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules">DataDatadogTeamNotificationRulesNotificationRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatadogTeamNotificationRulesNotificationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules">DataDatadogTeamNotificationRulesNotificationRules</a>]

---


### DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference <a name="DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_team_notification_rules

dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.property.connectorName">connector_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeams">DataDatadogTeamNotificationRulesNotificationRulesMsTeams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_name`<sup>Required</sup> <a name="connector_name" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.property.connectorName"></a>

```python
connector_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogTeamNotificationRulesNotificationRulesMsTeams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeams">DataDatadogTeamNotificationRulesNotificationRulesMsTeams</a>

---


### DataDatadogTeamNotificationRulesNotificationRulesOutputReference <a name="DataDatadogTeamNotificationRulesNotificationRulesOutputReference" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_team_notification_rules

dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.email">email</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference">DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.msTeams">ms_teams</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference">DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.pagerduty">pagerduty</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference">DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference">DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules">DataDatadogTeamNotificationRulesNotificationRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.email"></a>

```python
email: DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference">DataDatadogTeamNotificationRulesNotificationRulesEmailOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ms_teams`<sup>Required</sup> <a name="ms_teams" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.msTeams"></a>

```python
ms_teams: DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference">DataDatadogTeamNotificationRulesNotificationRulesMsTeamsOutputReference</a>

---

##### `pagerduty`<sup>Required</sup> <a name="pagerduty" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.pagerduty"></a>

```python
pagerduty: DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference">DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.slack"></a>

```python
slack: DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference">DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogTeamNotificationRulesNotificationRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRules">DataDatadogTeamNotificationRulesNotificationRules</a>

---


### DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference <a name="DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_team_notification_rules

dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerduty">DataDatadogTeamNotificationRulesNotificationRulesPagerduty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerdutyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogTeamNotificationRulesNotificationRulesPagerduty
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesPagerduty">DataDatadogTeamNotificationRulesNotificationRulesPagerduty</a>

---


### DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference <a name="DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import data_datadog_team_notification_rules

dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.property.workspace">workspace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlack">DataDatadogTeamNotificationRulesNotificationRulesSlack</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.property.workspace"></a>

```python
workspace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlackOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogTeamNotificationRulesNotificationRulesSlack
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogTeamNotificationRules.DataDatadogTeamNotificationRulesNotificationRulesSlack">DataDatadogTeamNotificationRulesNotificationRulesSlack</a>

---



