# `integrationSnowflakeAccount` Submodule <a name="`integrationSnowflakeAccount` Submodule" id="@cdktn/provider-datadog.integrationSnowflakeAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationSnowflakeAccount <a name="IntegrationSnowflakeAccount" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account datadog_integration_snowflake_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccount(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authentication: IntegrationSnowflakeAccountAuthentication,
  name: str,
  settings: IntegrationSnowflakeAccountSettings,
  dataflows: IntegrationSnowflakeAccountDataflows = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a></code> | Authentication configured on the Snowflake integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.name">name</a></code> | <code>str</code> | Human-readable name of the Snowflake integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a></code> | Settings configured on the Snowflake integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.dataflows">dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a></code> | Data Datadog collects from Snowflake, keyed by dataflow id. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.authentication"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a>

Authentication configured on the Snowflake integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#authentication IntegrationSnowflakeAccount#authentication}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.name"></a>

- *Type:* str

Human-readable name of the Snowflake integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#name IntegrationSnowflakeAccount#name}

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.settings"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a>

Settings configured on the Snowflake integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

##### `dataflows`<sup>Optional</sup> <a name="dataflows" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.Initializer.parameter.dataflows"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a>

Data Datadog collects from Snowflake, keyed by dataflow id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#dataflows IntegrationSnowflakeAccount#dataflows}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putAuthentication">put_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putDataflows">put_dataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.resetDataflows">reset_dataflows</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authentication` <a name="put_authentication" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putAuthentication"></a>

```python
def put_authentication(
  snowflake_integration_account_private_key_auth: IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth = None
) -> None
```

###### `snowflake_integration_account_private_key_auth`<sup>Optional</sup> <a name="snowflake_integration_account_private_key_auth" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putAuthentication.parameter.snowflakeIntegrationAccountPrivateKeyAuth"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a>

The RSA key pair authentication method configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_integration_account_private_key_auth IntegrationSnowflakeAccount#snowflake_integration_account_private_key_auth}

---

##### `put_dataflows` <a name="put_dataflows" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putDataflows"></a>

```python
def put_dataflows(
  snowflake_account_usage_metrics: IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics = None,
  snowflake_cloud_cost_metrics: IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics = None,
  snowflake_data_observability_quality_monitoring: IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring = None,
  snowflake_event_table_logs: IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs = None,
  snowflake_organization_usage_metrics: IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics = None,
  snowflake_query_history_logs: IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs = None,
  snowflake_security_logs: IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs = None,
  snowflake_task_history_logs: IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs = None
) -> None
```

###### `snowflake_account_usage_metrics`<sup>Optional</sup> <a name="snowflake_account_usage_metrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putDataflows.parameter.snowflakeAccountUsageMetrics"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a>

Account-level usage metrics read from the Snowflake `ACCOUNT_USAGE` schema, covering storage usage, credit consumption, and query activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_account_usage_metrics IntegrationSnowflakeAccount#snowflake_account_usage_metrics}

---

###### `snowflake_cloud_cost_metrics`<sup>Optional</sup> <a name="snowflake_cloud_cost_metrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putDataflows.parameter.snowflakeCloudCostMetrics"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a>

Cost data aggregated from the Snowflake `ORGANIZATION_USAGE` schema.

Requires [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/) to be set up for your organization, and the ORGANIZATION_BILLING_VIEWER database role on the Snowflake role; without both this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_cloud_cost_metrics IntegrationSnowflakeAccount#snowflake_cloud_cost_metrics}

---

###### `snowflake_data_observability_quality_monitoring`<sup>Optional</sup> <a name="snowflake_data_observability_quality_monitoring" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putDataflows.parameter.snowflakeDataObservabilityQualityMonitoring"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a>

Data Observability, which collects lineage and data quality information from your Snowflake databases so you can explore how data flows and detect and resolve quality issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_data_observability_quality_monitoring IntegrationSnowflakeAccount#snowflake_data_observability_quality_monitoring}

---

###### `snowflake_event_table_logs`<sup>Optional</sup> <a name="snowflake_event_table_logs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putDataflows.parameter.snowflakeEventTableLogs"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a>

Records from your Snowflake event tables, used to monitor application behavior and identify issues.

`enabled` turns the dataflow on and off as a whole, and the per-record-type toggles in `settings` select which kinds of record it collects while it is on. The Snowflake role needs usage granted on the database, the schema, and the event table itself; without those grants this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_event_table_logs IntegrationSnowflakeAccount#snowflake_event_table_logs}

---

###### `snowflake_organization_usage_metrics`<sup>Optional</sup> <a name="snowflake_organization_usage_metrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putDataflows.parameter.snowflakeOrganizationUsageMetrics"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a>

Organization-level usage metrics read from the Snowflake `ORGANIZATION_USAGE` schema, covering the credit consumption of every account in the organization and the history of data transferred out of Snowflake.

Reading that schema requires the ORGADMIN role; without it this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_organization_usage_metrics IntegrationSnowflakeAccount#snowflake_organization_usage_metrics}

---

###### `snowflake_query_history_logs`<sup>Optional</sup> <a name="snowflake_query_history_logs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putDataflows.parameter.snowflakeQueryHistoryLogs"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a>

Per-query logs that let you identify long-running, poorly performing, and expensive queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_query_history_logs IntegrationSnowflakeAccount#snowflake_query_history_logs}

---

###### `snowflake_security_logs`<sup>Optional</sup> <a name="snowflake_security_logs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putDataflows.parameter.snowflakeSecurityLogs"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a>

Security logs from the Snowflake `ACCOUNT_USAGE` schema, for analyzing the security of your Snowflake account and running threat detection with [Cloud SIEM](https://docs.datadoghq.com/security/cloud_siem/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_security_logs IntegrationSnowflakeAccount#snowflake_security_logs}

---

###### `snowflake_task_history_logs`<sup>Optional</sup> <a name="snowflake_task_history_logs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putDataflows.parameter.snowflakeTaskHistoryLogs"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a>

Execution logs for your scheduled Snowflake tasks, covering start time, end time, status, and any error message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_task_history_logs IntegrationSnowflakeAccount#snowflake_task_history_logs}

---

##### `put_settings` <a name="put_settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putSettings"></a>

```python
def put_settings(
  snowflake_account_identifier: str,
  username: str
) -> None
```

###### `snowflake_account_identifier`<sup>Required</sup> <a name="snowflake_account_identifier" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putSettings.parameter.snowflakeAccountIdentifier"></a>

- *Type:* str

Identifier of the Snowflake account being monitored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_account_identifier IntegrationSnowflakeAccount#snowflake_account_identifier}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.putSettings.parameter.username"></a>

- *Type:* str

Snowflake user Datadog authenticates as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#username IntegrationSnowflakeAccount#username}

---

##### `reset_dataflows` <a name="reset_dataflows" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.resetDataflows"></a>

```python
def reset_dataflows() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IntegrationSnowflakeAccount resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isConstruct"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformElement"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformResource"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IntegrationSnowflakeAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationSnowflakeAccount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationSnowflakeAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationSnowflakeAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference">IntegrationSnowflakeAccountAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.dataflows">dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference">IntegrationSnowflakeAccountDataflowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference">IntegrationSnowflakeAccountSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.authenticationInput">authentication_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.dataflowsInput">dataflows_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.settingsInput">settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.authentication"></a>

```python
authentication: IntegrationSnowflakeAccountAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference">IntegrationSnowflakeAccountAuthenticationOutputReference</a>

---

##### `dataflows`<sup>Required</sup> <a name="dataflows" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.dataflows"></a>

```python
dataflows: IntegrationSnowflakeAccountDataflowsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference">IntegrationSnowflakeAccountDataflowsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.settings"></a>

```python
settings: IntegrationSnowflakeAccountSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference">IntegrationSnowflakeAccountSettingsOutputReference</a>

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.authenticationInput"></a>

```python
authentication_input: IResolvable | IntegrationSnowflakeAccountAuthentication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a>

---

##### `dataflows_input`<sup>Optional</sup> <a name="dataflows_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.dataflowsInput"></a>

```python
dataflows_input: IResolvable | IntegrationSnowflakeAccountDataflows
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.settingsInput"></a>

```python
settings_input: IResolvable | IntegrationSnowflakeAccountSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationSnowflakeAccountAuthentication <a name="IntegrationSnowflakeAccountAuthentication" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication(
  snowflake_integration_account_private_key_auth: IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication.property.snowflakeIntegrationAccountPrivateKeyAuth">snowflake_integration_account_private_key_auth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a></code> | The RSA key pair authentication method configured on the account. |

---

##### `snowflake_integration_account_private_key_auth`<sup>Optional</sup> <a name="snowflake_integration_account_private_key_auth" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication.property.snowflakeIntegrationAccountPrivateKeyAuth"></a>

```python
snowflake_integration_account_private_key_auth: IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a>

The RSA key pair authentication method configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_integration_account_private_key_auth IntegrationSnowflakeAccount#snowflake_integration_account_private_key_auth}

---

### IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth <a name="IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth(
  private_key_name: str,
  private_key_wo: str,
  private_key_wo_version: str,
  auth_type: str = None,
  private_key_passphrase_wo: str = None,
  private_key_passphrase_wo_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyName">private_key_name</a></code> | <code>str</code> | Name that distinguishes this private key from other keys in Datadog. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyWo">private_key_wo</a></code> | <code>str</code> | The private key, in PEM format. This write-only value is not stored in Terraform state. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyWoVersion">private_key_wo_version</a></code> | <code>str</code> | Version trigger for private_key_wo rotation. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.authType">auth_type</a></code> | <code>str</code> | The authentication method type. Valid values are `snowflake_private_key`. Defaults to `"snowflake_private_key"`. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyPassphraseWo">private_key_passphrase_wo</a></code> | <code>str</code> | Passphrase that decrypts the private key. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyPassphraseWoVersion">private_key_passphrase_wo_version</a></code> | <code>str</code> | Version trigger for private_key_passphrase_wo rotation. String length must be at least 1. |

---

##### `private_key_name`<sup>Required</sup> <a name="private_key_name" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyName"></a>

```python
private_key_name: str
```

- *Type:* str

Name that distinguishes this private key from other keys in Datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#private_key_name IntegrationSnowflakeAccount#private_key_name}

---

##### `private_key_wo`<sup>Required</sup> <a name="private_key_wo" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyWo"></a>

```python
private_key_wo: str
```

- *Type:* str

The private key, in PEM format. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#private_key_wo IntegrationSnowflakeAccount#private_key_wo}

---

##### `private_key_wo_version`<sup>Required</sup> <a name="private_key_wo_version" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyWoVersion"></a>

```python
private_key_wo_version: str
```

- *Type:* str

Version trigger for private_key_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#private_key_wo_version IntegrationSnowflakeAccount#private_key_wo_version}

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

The authentication method type. Valid values are `snowflake_private_key`. Defaults to `"snowflake_private_key"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#auth_type IntegrationSnowflakeAccount#auth_type}

---

##### `private_key_passphrase_wo`<sup>Optional</sup> <a name="private_key_passphrase_wo" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyPassphraseWo"></a>

```python
private_key_passphrase_wo: str
```

- *Type:* str

Passphrase that decrypts the private key.

Provide it only when the key is encrypted. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#private_key_passphrase_wo IntegrationSnowflakeAccount#private_key_passphrase_wo}

---

##### `private_key_passphrase_wo_version`<sup>Optional</sup> <a name="private_key_passphrase_wo_version" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth.property.privateKeyPassphraseWoVersion"></a>

```python
private_key_passphrase_wo_version: str
```

- *Type:* str

Version trigger for private_key_passphrase_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#private_key_passphrase_wo_version IntegrationSnowflakeAccount#private_key_passphrase_wo_version}

---

### IntegrationSnowflakeAccountConfig <a name="IntegrationSnowflakeAccountConfig" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authentication: IntegrationSnowflakeAccountAuthentication,
  name: str,
  settings: IntegrationSnowflakeAccountSettings,
  dataflows: IntegrationSnowflakeAccountDataflows = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a></code> | Authentication configured on the Snowflake integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.name">name</a></code> | <code>str</code> | Human-readable name of the Snowflake integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a></code> | Settings configured on the Snowflake integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.dataflows">dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a></code> | Data Datadog collects from Snowflake, keyed by dataflow id. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.authentication"></a>

```python
authentication: IntegrationSnowflakeAccountAuthentication
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a>

Authentication configured on the Snowflake integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#authentication IntegrationSnowflakeAccount#authentication}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Human-readable name of the Snowflake integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#name IntegrationSnowflakeAccount#name}

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.settings"></a>

```python
settings: IntegrationSnowflakeAccountSettings
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a>

Settings configured on the Snowflake integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

##### `dataflows`<sup>Optional</sup> <a name="dataflows" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountConfig.property.dataflows"></a>

```python
dataflows: IntegrationSnowflakeAccountDataflows
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a>

Data Datadog collects from Snowflake, keyed by dataflow id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#dataflows IntegrationSnowflakeAccount#dataflows}

---

### IntegrationSnowflakeAccountDataflows <a name="IntegrationSnowflakeAccountDataflows" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows(
  snowflake_account_usage_metrics: IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics = None,
  snowflake_cloud_cost_metrics: IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics = None,
  snowflake_data_observability_quality_monitoring: IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring = None,
  snowflake_event_table_logs: IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs = None,
  snowflake_organization_usage_metrics: IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics = None,
  snowflake_query_history_logs: IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs = None,
  snowflake_security_logs: IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs = None,
  snowflake_task_history_logs: IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeAccountUsageMetrics">snowflake_account_usage_metrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a></code> | Account-level usage metrics read from the Snowflake `ACCOUNT_USAGE` schema, covering storage usage, credit consumption, and query activity. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeCloudCostMetrics">snowflake_cloud_cost_metrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a></code> | Cost data aggregated from the Snowflake `ORGANIZATION_USAGE` schema. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeDataObservabilityQualityMonitoring">snowflake_data_observability_quality_monitoring</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a></code> | Data Observability, which collects lineage and data quality information from your Snowflake databases so you can explore how data flows and detect and resolve quality issues. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeEventTableLogs">snowflake_event_table_logs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a></code> | Records from your Snowflake event tables, used to monitor application behavior and identify issues. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeOrganizationUsageMetrics">snowflake_organization_usage_metrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a></code> | Organization-level usage metrics read from the Snowflake `ORGANIZATION_USAGE` schema, covering the credit consumption of every account in the organization and the history of data transferred out of Snowflake. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeQueryHistoryLogs">snowflake_query_history_logs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a></code> | Per-query logs that let you identify long-running, poorly performing, and expensive queries. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeSecurityLogs">snowflake_security_logs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a></code> | Security logs from the Snowflake `ACCOUNT_USAGE` schema, for analyzing the security of your Snowflake account and running threat detection with [Cloud SIEM](https://docs.datadoghq.com/security/cloud_siem/). |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeTaskHistoryLogs">snowflake_task_history_logs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a></code> | Execution logs for your scheduled Snowflake tasks, covering start time, end time, status, and any error message. |

---

##### `snowflake_account_usage_metrics`<sup>Optional</sup> <a name="snowflake_account_usage_metrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeAccountUsageMetrics"></a>

```python
snowflake_account_usage_metrics: IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a>

Account-level usage metrics read from the Snowflake `ACCOUNT_USAGE` schema, covering storage usage, credit consumption, and query activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_account_usage_metrics IntegrationSnowflakeAccount#snowflake_account_usage_metrics}

---

##### `snowflake_cloud_cost_metrics`<sup>Optional</sup> <a name="snowflake_cloud_cost_metrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeCloudCostMetrics"></a>

```python
snowflake_cloud_cost_metrics: IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a>

Cost data aggregated from the Snowflake `ORGANIZATION_USAGE` schema.

Requires [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/) to be set up for your organization, and the ORGANIZATION_BILLING_VIEWER database role on the Snowflake role; without both this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_cloud_cost_metrics IntegrationSnowflakeAccount#snowflake_cloud_cost_metrics}

---

##### `snowflake_data_observability_quality_monitoring`<sup>Optional</sup> <a name="snowflake_data_observability_quality_monitoring" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeDataObservabilityQualityMonitoring"></a>

```python
snowflake_data_observability_quality_monitoring: IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a>

Data Observability, which collects lineage and data quality information from your Snowflake databases so you can explore how data flows and detect and resolve quality issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_data_observability_quality_monitoring IntegrationSnowflakeAccount#snowflake_data_observability_quality_monitoring}

---

##### `snowflake_event_table_logs`<sup>Optional</sup> <a name="snowflake_event_table_logs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeEventTableLogs"></a>

```python
snowflake_event_table_logs: IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a>

Records from your Snowflake event tables, used to monitor application behavior and identify issues.

`enabled` turns the dataflow on and off as a whole, and the per-record-type toggles in `settings` select which kinds of record it collects while it is on. The Snowflake role needs usage granted on the database, the schema, and the event table itself; without those grants this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_event_table_logs IntegrationSnowflakeAccount#snowflake_event_table_logs}

---

##### `snowflake_organization_usage_metrics`<sup>Optional</sup> <a name="snowflake_organization_usage_metrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeOrganizationUsageMetrics"></a>

```python
snowflake_organization_usage_metrics: IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a>

Organization-level usage metrics read from the Snowflake `ORGANIZATION_USAGE` schema, covering the credit consumption of every account in the organization and the history of data transferred out of Snowflake.

Reading that schema requires the ORGADMIN role; without it this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_organization_usage_metrics IntegrationSnowflakeAccount#snowflake_organization_usage_metrics}

---

##### `snowflake_query_history_logs`<sup>Optional</sup> <a name="snowflake_query_history_logs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeQueryHistoryLogs"></a>

```python
snowflake_query_history_logs: IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a>

Per-query logs that let you identify long-running, poorly performing, and expensive queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_query_history_logs IntegrationSnowflakeAccount#snowflake_query_history_logs}

---

##### `snowflake_security_logs`<sup>Optional</sup> <a name="snowflake_security_logs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeSecurityLogs"></a>

```python
snowflake_security_logs: IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a>

Security logs from the Snowflake `ACCOUNT_USAGE` schema, for analyzing the security of your Snowflake account and running threat detection with [Cloud SIEM](https://docs.datadoghq.com/security/cloud_siem/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_security_logs IntegrationSnowflakeAccount#snowflake_security_logs}

---

##### `snowflake_task_history_logs`<sup>Optional</sup> <a name="snowflake_task_history_logs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows.property.snowflakeTaskHistoryLogs"></a>

```python
snowflake_task_history_logs: IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a>

Execution logs for your scheduled Snowflake tasks, covering start time, end time, status, and any error message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_task_history_logs IntegrationSnowflakeAccount#snowflake_task_history_logs}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics <a name="IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics(
  enabled: bool | IResolvable = None,
  settings: IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a></code> | Settings of the account usage metrics dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics.property.settings"></a>

```python
settings: IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a>

Settings of the account usage metrics dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings(
  account_usage_metrics_aggregate_last24_h: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings.property.accountUsageMetricsAggregateLast24H">account_usage_metrics_aggregate_last24_h</a></code> | <code>bool \| cdktn.IResolvable</code> | The period each metric aggregates over. |

---

##### `account_usage_metrics_aggregate_last24_h`<sup>Optional</sup> <a name="account_usage_metrics_aggregate_last24_h" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings.property.accountUsageMetricsAggregateLast24H"></a>

```python
account_usage_metrics_aggregate_last24_h: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The period each metric aggregates over.

When `true`, metrics aggregate the past 24 hours on a rolling basis; when `false`, they aggregate the current day so far.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#account_usage_metrics_aggregate_last_24h IntegrationSnowflakeAccount#account_usage_metrics_aggregate_last_24h}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics <a name="IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics(
  enabled: bool | IResolvable = None,
  settings: IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a></code> | Settings of the Cloud Cost Management dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics.property.settings"></a>

```python
settings: IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a>

Settings of the Cloud Cost Management dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings(
  query_tags: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings.property.queryTags">query_tags</a></code> | <code>str</code> | Snowflake query tags ingested as a comma-separated list of tag names, so that cost data can be broken down by them in Cloud Cost Management. |

---

##### `query_tags`<sup>Optional</sup> <a name="query_tags" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings.property.queryTags"></a>

```python
query_tags: str
```

- *Type:* str

Snowflake query tags ingested as a comma-separated list of tag names, so that cost data can be broken down by them in Cloud Cost Management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#query_tags IntegrationSnowflakeAccount#query_tags}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring <a name="IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring(
  enabled: bool | IResolvable = None,
  settings: IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a></code> | Settings of the Data Observability dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring.property.settings"></a>

```python
settings: IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a>

Settings of the Data Observability dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings(
  do_table_crawler_cron: str = None,
  sync_snowflake_system_database: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings.property.doTableCrawlerCron">do_table_crawler_cron</a></code> | <code>str</code> | Cron expression setting how often Datadog crawls your Snowflake table metadata. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings.property.syncSnowflakeSystemDatabase">sync_snowflake_system_database</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether metadata from the Snowflake `SNOWFLAKE` system database is included in Data Observability alongside your own databases. |

---

##### `do_table_crawler_cron`<sup>Optional</sup> <a name="do_table_crawler_cron" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings.property.doTableCrawlerCron"></a>

```python
do_table_crawler_cron: str
```

- *Type:* str

Cron expression setting how often Datadog crawls your Snowflake table metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#do_table_crawler_cron IntegrationSnowflakeAccount#do_table_crawler_cron}

---

##### `sync_snowflake_system_database`<sup>Optional</sup> <a name="sync_snowflake_system_database" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings.property.syncSnowflakeSystemDatabase"></a>

```python
sync_snowflake_system_database: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether metadata from the Snowflake `SNOWFLAKE` system database is included in Data Observability alongside your own databases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#sync_snowflake_system_database IntegrationSnowflakeAccount#sync_snowflake_system_database}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs <a name="IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs(
  enabled: bool | IResolvable = None,
  settings: IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a></code> | Settings of the event table dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs.property.settings"></a>

```python
settings: IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a>

Settings of the event table dataflow.

Each record type is collected independently so that you can control ingestion costs, and every record type is ingested into Datadog as logs tagged with its `record_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings(
  event_table_events_enabled: bool | IResolvable = None,
  event_table_logs_enabled: bool | IResolvable = None,
  event_table_logs_interval_min: typing.Union[int, float] = None,
  event_table_span_events_enabled: bool | IResolvable = None,
  event_table_spans_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableEventsEnabled">event_table_events_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether records with a `record_type` of `event` are collected. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableLogsEnabled">event_table_logs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether records with a `record_type` of `log` are collected. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableLogsIntervalMin">event_table_logs_interval_min</a></code> | <code>typing.Union[int, float]</code> | How often event table records are collected, in minutes. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableSpanEventsEnabled">event_table_span_events_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether records with a `record_type` of `span_event` are collected. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableSpansEnabled">event_table_spans_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether records with a `record_type` of `span` are collected. |

---

##### `event_table_events_enabled`<sup>Optional</sup> <a name="event_table_events_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableEventsEnabled"></a>

```python
event_table_events_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether records with a `record_type` of `event` are collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#event_table_events_enabled IntegrationSnowflakeAccount#event_table_events_enabled}

---

##### `event_table_logs_enabled`<sup>Optional</sup> <a name="event_table_logs_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableLogsEnabled"></a>

```python
event_table_logs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether records with a `record_type` of `log` are collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#event_table_logs_enabled IntegrationSnowflakeAccount#event_table_logs_enabled}

---

##### `event_table_logs_interval_min`<sup>Optional</sup> <a name="event_table_logs_interval_min" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableLogsIntervalMin"></a>

```python
event_table_logs_interval_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often event table records are collected, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#event_table_logs_interval_min IntegrationSnowflakeAccount#event_table_logs_interval_min}

---

##### `event_table_span_events_enabled`<sup>Optional</sup> <a name="event_table_span_events_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableSpanEventsEnabled"></a>

```python
event_table_span_events_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether records with a `record_type` of `span_event` are collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#event_table_span_events_enabled IntegrationSnowflakeAccount#event_table_span_events_enabled}

---

##### `event_table_spans_enabled`<sup>Optional</sup> <a name="event_table_spans_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings.property.eventTableSpansEnabled"></a>

```python
event_table_spans_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether records with a `record_type` of `span` are collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#event_table_spans_enabled IntegrationSnowflakeAccount#event_table_spans_enabled}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics <a name="IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics(
  enabled: bool | IResolvable = None,
  settings: IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a></code> | Settings of the organization usage metrics dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics.property.settings"></a>

```python
settings: IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a>

Settings of the organization usage metrics dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings(
  organization_usage_metrics_aggregate_last24_h: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings.property.organizationUsageMetricsAggregateLast24H">organization_usage_metrics_aggregate_last24_h</a></code> | <code>bool \| cdktn.IResolvable</code> | The period each metric aggregates over. |

---

##### `organization_usage_metrics_aggregate_last24_h`<sup>Optional</sup> <a name="organization_usage_metrics_aggregate_last24_h" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings.property.organizationUsageMetricsAggregateLast24H"></a>

```python
organization_usage_metrics_aggregate_last24_h: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The period each metric aggregates over.

When `true`, metrics aggregate the past 24 hours on a rolling basis; when `false`, they aggregate the current day so far.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#organization_usage_metrics_aggregate_last_24h IntegrationSnowflakeAccount#organization_usage_metrics_aggregate_last_24h}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs <a name="IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs(
  enabled: bool | IResolvable = None,
  settings: IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a></code> | Settings of the query history logs dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs.property.settings"></a>

```python
settings: IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a>

Settings of the query history logs dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings(
  join_query_history_with_access_history_enabled: bool | IResolvable = None,
  query_history_logs_interval_min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings.property.joinQueryHistoryWithAccessHistoryEnabled">join_query_history_with_access_history_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether query logs are joined with Snowflake access history, which adds the objects each query read and wrote so you can follow how data is used and where it came from. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings.property.queryHistoryLogsIntervalMin">query_history_logs_interval_min</a></code> | <code>typing.Union[int, float]</code> | How often query history logs are collected, in minutes. |

---

##### `join_query_history_with_access_history_enabled`<sup>Optional</sup> <a name="join_query_history_with_access_history_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings.property.joinQueryHistoryWithAccessHistoryEnabled"></a>

```python
join_query_history_with_access_history_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether query logs are joined with Snowflake access history, which adds the objects each query read and wrote so you can follow how data is used and where it came from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#join_query_history_with_access_history_enabled IntegrationSnowflakeAccount#join_query_history_with_access_history_enabled}

---

##### `query_history_logs_interval_min`<sup>Optional</sup> <a name="query_history_logs_interval_min" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings.property.queryHistoryLogsIntervalMin"></a>

```python
query_history_logs_interval_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often query history logs are collected, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#query_history_logs_interval_min IntegrationSnowflakeAccount#query_history_logs_interval_min}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs <a name="IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs(
  enabled: bool | IResolvable = None,
  settings: IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a></code> | Settings of the security logs dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs.property.settings"></a>

```python
settings: IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a>

Settings of the security logs dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings(
  security_logs_interval_min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings.property.securityLogsIntervalMin">security_logs_interval_min</a></code> | <code>typing.Union[int, float]</code> | How often security logs are collected, in minutes. |

---

##### `security_logs_interval_min`<sup>Optional</sup> <a name="security_logs_interval_min" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings.property.securityLogsIntervalMin"></a>

```python
security_logs_interval_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often security logs are collected, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#security_logs_interval_min IntegrationSnowflakeAccount#security_logs_interval_min}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs <a name="IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs(
  enabled: bool | IResolvable = None,
  settings: IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a></code> | Settings of the task history logs dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs.property.settings"></a>

```python
settings: IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a>

Settings of the task history logs dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

### IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings <a name="IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings(
  task_history_logs_interval_min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings.property.taskHistoryLogsIntervalMin">task_history_logs_interval_min</a></code> | <code>typing.Union[int, float]</code> | How often task history logs are collected, in minutes. |

---

##### `task_history_logs_interval_min`<sup>Optional</sup> <a name="task_history_logs_interval_min" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings.property.taskHistoryLogsIntervalMin"></a>

```python
task_history_logs_interval_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often task history logs are collected, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#task_history_logs_interval_min IntegrationSnowflakeAccount#task_history_logs_interval_min}

---

### IntegrationSnowflakeAccountSettings <a name="IntegrationSnowflakeAccountSettings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings(
  snowflake_account_identifier: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings.property.snowflakeAccountIdentifier">snowflake_account_identifier</a></code> | <code>str</code> | Identifier of the Snowflake account being monitored. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings.property.username">username</a></code> | <code>str</code> | Snowflake user Datadog authenticates as. |

---

##### `snowflake_account_identifier`<sup>Required</sup> <a name="snowflake_account_identifier" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings.property.snowflakeAccountIdentifier"></a>

```python
snowflake_account_identifier: str
```

- *Type:* str

Identifier of the Snowflake account being monitored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#snowflake_account_identifier IntegrationSnowflakeAccount#snowflake_account_identifier}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings.property.username"></a>

```python
username: str
```

- *Type:* str

Snowflake user Datadog authenticates as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#username IntegrationSnowflakeAccount#username}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationSnowflakeAccountAuthenticationOutputReference <a name="IntegrationSnowflakeAccountAuthenticationOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.putSnowflakeIntegrationAccountPrivateKeyAuth">put_snowflake_integration_account_private_key_auth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.resetSnowflakeIntegrationAccountPrivateKeyAuth">reset_snowflake_integration_account_private_key_auth</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_snowflake_integration_account_private_key_auth` <a name="put_snowflake_integration_account_private_key_auth" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.putSnowflakeIntegrationAccountPrivateKeyAuth"></a>

```python
def put_snowflake_integration_account_private_key_auth(
  private_key_name: str,
  private_key_wo: str,
  private_key_wo_version: str,
  auth_type: str = None,
  private_key_passphrase_wo: str = None,
  private_key_passphrase_wo_version: str = None
) -> None
```

###### `private_key_name`<sup>Required</sup> <a name="private_key_name" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.putSnowflakeIntegrationAccountPrivateKeyAuth.parameter.privateKeyName"></a>

- *Type:* str

Name that distinguishes this private key from other keys in Datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#private_key_name IntegrationSnowflakeAccount#private_key_name}

---

###### `private_key_wo`<sup>Required</sup> <a name="private_key_wo" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.putSnowflakeIntegrationAccountPrivateKeyAuth.parameter.privateKeyWo"></a>

- *Type:* str

The private key, in PEM format. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#private_key_wo IntegrationSnowflakeAccount#private_key_wo}

---

###### `private_key_wo_version`<sup>Required</sup> <a name="private_key_wo_version" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.putSnowflakeIntegrationAccountPrivateKeyAuth.parameter.privateKeyWoVersion"></a>

- *Type:* str

Version trigger for private_key_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#private_key_wo_version IntegrationSnowflakeAccount#private_key_wo_version}

---

###### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.putSnowflakeIntegrationAccountPrivateKeyAuth.parameter.authType"></a>

- *Type:* str

The authentication method type. Valid values are `snowflake_private_key`. Defaults to `"snowflake_private_key"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#auth_type IntegrationSnowflakeAccount#auth_type}

---

###### `private_key_passphrase_wo`<sup>Optional</sup> <a name="private_key_passphrase_wo" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.putSnowflakeIntegrationAccountPrivateKeyAuth.parameter.privateKeyPassphraseWo"></a>

- *Type:* str

Passphrase that decrypts the private key.

Provide it only when the key is encrypted. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#private_key_passphrase_wo IntegrationSnowflakeAccount#private_key_passphrase_wo}

---

###### `private_key_passphrase_wo_version`<sup>Optional</sup> <a name="private_key_passphrase_wo_version" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.putSnowflakeIntegrationAccountPrivateKeyAuth.parameter.privateKeyPassphraseWoVersion"></a>

- *Type:* str

Version trigger for private_key_passphrase_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#private_key_passphrase_wo_version IntegrationSnowflakeAccount#private_key_passphrase_wo_version}

---

##### `reset_snowflake_integration_account_private_key_auth` <a name="reset_snowflake_integration_account_private_key_auth" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.resetSnowflakeIntegrationAccountPrivateKeyAuth"></a>

```python
def reset_snowflake_integration_account_private_key_auth() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.snowflakeIntegrationAccountPrivateKeyAuth">snowflake_integration_account_private_key_auth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.snowflakeIntegrationAccountPrivateKeyAuthInput">snowflake_integration_account_private_key_auth_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `snowflake_integration_account_private_key_auth`<sup>Required</sup> <a name="snowflake_integration_account_private_key_auth" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.snowflakeIntegrationAccountPrivateKeyAuth"></a>

```python
snowflake_integration_account_private_key_auth: IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference</a>

---

##### `snowflake_integration_account_private_key_auth_input`<sup>Optional</sup> <a name="snowflake_integration_account_private_key_auth_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.snowflakeIntegrationAccountPrivateKeyAuthInput"></a>

```python
snowflake_integration_account_private_key_auth_input: IResolvable | IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationSnowflakeAccountAuthentication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthentication">IntegrationSnowflakeAccountAuthentication</a>

---


### IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference <a name="IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resetAuthType">reset_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resetPrivateKeyPassphraseWo">reset_private_key_passphrase_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resetPrivateKeyPassphraseWoVersion">reset_private_key_passphrase_wo_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resetAuthType"></a>

```python
def reset_auth_type() -> None
```

##### `reset_private_key_passphrase_wo` <a name="reset_private_key_passphrase_wo" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resetPrivateKeyPassphraseWo"></a>

```python
def reset_private_key_passphrase_wo() -> None
```

##### `reset_private_key_passphrase_wo_version` <a name="reset_private_key_passphrase_wo_version" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.resetPrivateKeyPassphraseWoVersion"></a>

```python
def reset_private_key_passphrase_wo_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyNameInput">private_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWoInput">private_key_passphrase_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWoVersionInput">private_key_passphrase_wo_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWoInput">private_key_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWoVersionInput">private_key_wo_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyName">private_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWo">private_key_passphrase_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWoVersion">private_key_passphrase_wo_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWo">private_key_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWoVersion">private_key_wo_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `private_key_name_input`<sup>Optional</sup> <a name="private_key_name_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyNameInput"></a>

```python
private_key_name_input: str
```

- *Type:* str

---

##### `private_key_passphrase_wo_input`<sup>Optional</sup> <a name="private_key_passphrase_wo_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWoInput"></a>

```python
private_key_passphrase_wo_input: str
```

- *Type:* str

---

##### `private_key_passphrase_wo_version_input`<sup>Optional</sup> <a name="private_key_passphrase_wo_version_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWoVersionInput"></a>

```python
private_key_passphrase_wo_version_input: str
```

- *Type:* str

---

##### `private_key_wo_input`<sup>Optional</sup> <a name="private_key_wo_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWoInput"></a>

```python
private_key_wo_input: str
```

- *Type:* str

---

##### `private_key_wo_version_input`<sup>Optional</sup> <a name="private_key_wo_version_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWoVersionInput"></a>

```python
private_key_wo_version_input: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `private_key_name`<sup>Required</sup> <a name="private_key_name" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyName"></a>

```python
private_key_name: str
```

- *Type:* str

---

##### ~~`private_key_passphrase_wo`~~<sup>Required</sup> <a name="private_key_passphrase_wo" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
private_key_passphrase_wo: str
```

- *Type:* str

---

##### `private_key_passphrase_wo_version`<sup>Required</sup> <a name="private_key_passphrase_wo_version" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyPassphraseWoVersion"></a>

```python
private_key_passphrase_wo_version: str
```

- *Type:* str

---

##### ~~`private_key_wo`~~<sup>Required</sup> <a name="private_key_wo" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
private_key_wo: str
```

- *Type:* str

---

##### `private_key_wo_version`<sup>Required</sup> <a name="private_key_wo_version" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.privateKeyWoVersion"></a>

```python
private_key_wo_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuthOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth">IntegrationSnowflakeAccountAuthenticationSnowflakeIntegrationAccountPrivateKeyAuth</a>

---


### IntegrationSnowflakeAccountDataflowsOutputReference <a name="IntegrationSnowflakeAccountDataflowsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeAccountUsageMetrics">put_snowflake_account_usage_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeCloudCostMetrics">put_snowflake_cloud_cost_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeDataObservabilityQualityMonitoring">put_snowflake_data_observability_quality_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeEventTableLogs">put_snowflake_event_table_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeOrganizationUsageMetrics">put_snowflake_organization_usage_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeQueryHistoryLogs">put_snowflake_query_history_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeSecurityLogs">put_snowflake_security_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeTaskHistoryLogs">put_snowflake_task_history_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeAccountUsageMetrics">reset_snowflake_account_usage_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeCloudCostMetrics">reset_snowflake_cloud_cost_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeDataObservabilityQualityMonitoring">reset_snowflake_data_observability_quality_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeEventTableLogs">reset_snowflake_event_table_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeOrganizationUsageMetrics">reset_snowflake_organization_usage_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeQueryHistoryLogs">reset_snowflake_query_history_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeSecurityLogs">reset_snowflake_security_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeTaskHistoryLogs">reset_snowflake_task_history_logs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_snowflake_account_usage_metrics` <a name="put_snowflake_account_usage_metrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeAccountUsageMetrics"></a>

```python
def put_snowflake_account_usage_metrics(
  enabled: bool | IResolvable = None,
  settings: IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeAccountUsageMetrics.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

###### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeAccountUsageMetrics.parameter.settings"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a>

Settings of the account usage metrics dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

##### `put_snowflake_cloud_cost_metrics` <a name="put_snowflake_cloud_cost_metrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeCloudCostMetrics"></a>

```python
def put_snowflake_cloud_cost_metrics(
  enabled: bool | IResolvable = None,
  settings: IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeCloudCostMetrics.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

###### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeCloudCostMetrics.parameter.settings"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a>

Settings of the Cloud Cost Management dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

##### `put_snowflake_data_observability_quality_monitoring` <a name="put_snowflake_data_observability_quality_monitoring" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeDataObservabilityQualityMonitoring"></a>

```python
def put_snowflake_data_observability_quality_monitoring(
  enabled: bool | IResolvable = None,
  settings: IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeDataObservabilityQualityMonitoring.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

###### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeDataObservabilityQualityMonitoring.parameter.settings"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a>

Settings of the Data Observability dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

##### `put_snowflake_event_table_logs` <a name="put_snowflake_event_table_logs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeEventTableLogs"></a>

```python
def put_snowflake_event_table_logs(
  enabled: bool | IResolvable = None,
  settings: IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeEventTableLogs.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

###### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeEventTableLogs.parameter.settings"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a>

Settings of the event table dataflow.

Each record type is collected independently so that you can control ingestion costs, and every record type is ingested into Datadog as logs tagged with its `record_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

##### `put_snowflake_organization_usage_metrics` <a name="put_snowflake_organization_usage_metrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeOrganizationUsageMetrics"></a>

```python
def put_snowflake_organization_usage_metrics(
  enabled: bool | IResolvable = None,
  settings: IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeOrganizationUsageMetrics.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

###### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeOrganizationUsageMetrics.parameter.settings"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a>

Settings of the organization usage metrics dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

##### `put_snowflake_query_history_logs` <a name="put_snowflake_query_history_logs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeQueryHistoryLogs"></a>

```python
def put_snowflake_query_history_logs(
  enabled: bool | IResolvable = None,
  settings: IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeQueryHistoryLogs.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

###### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeQueryHistoryLogs.parameter.settings"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a>

Settings of the query history logs dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

##### `put_snowflake_security_logs` <a name="put_snowflake_security_logs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeSecurityLogs"></a>

```python
def put_snowflake_security_logs(
  enabled: bool | IResolvable = None,
  settings: IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeSecurityLogs.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

###### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeSecurityLogs.parameter.settings"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a>

Settings of the security logs dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

##### `put_snowflake_task_history_logs` <a name="put_snowflake_task_history_logs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeTaskHistoryLogs"></a>

```python
def put_snowflake_task_history_logs(
  enabled: bool | IResolvable = None,
  settings: IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeTaskHistoryLogs.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#enabled IntegrationSnowflakeAccount#enabled}

---

###### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.putSnowflakeTaskHistoryLogs.parameter.settings"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a>

Settings of the task history logs dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#settings IntegrationSnowflakeAccount#settings}

---

##### `reset_snowflake_account_usage_metrics` <a name="reset_snowflake_account_usage_metrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeAccountUsageMetrics"></a>

```python
def reset_snowflake_account_usage_metrics() -> None
```

##### `reset_snowflake_cloud_cost_metrics` <a name="reset_snowflake_cloud_cost_metrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeCloudCostMetrics"></a>

```python
def reset_snowflake_cloud_cost_metrics() -> None
```

##### `reset_snowflake_data_observability_quality_monitoring` <a name="reset_snowflake_data_observability_quality_monitoring" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeDataObservabilityQualityMonitoring"></a>

```python
def reset_snowflake_data_observability_quality_monitoring() -> None
```

##### `reset_snowflake_event_table_logs` <a name="reset_snowflake_event_table_logs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeEventTableLogs"></a>

```python
def reset_snowflake_event_table_logs() -> None
```

##### `reset_snowflake_organization_usage_metrics` <a name="reset_snowflake_organization_usage_metrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeOrganizationUsageMetrics"></a>

```python
def reset_snowflake_organization_usage_metrics() -> None
```

##### `reset_snowflake_query_history_logs` <a name="reset_snowflake_query_history_logs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeQueryHistoryLogs"></a>

```python
def reset_snowflake_query_history_logs() -> None
```

##### `reset_snowflake_security_logs` <a name="reset_snowflake_security_logs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeSecurityLogs"></a>

```python
def reset_snowflake_security_logs() -> None
```

##### `reset_snowflake_task_history_logs` <a name="reset_snowflake_task_history_logs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.resetSnowflakeTaskHistoryLogs"></a>

```python
def reset_snowflake_task_history_logs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeAccountUsageMetrics">snowflake_account_usage_metrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeCloudCostMetrics">snowflake_cloud_cost_metrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeDataObservabilityQualityMonitoring">snowflake_data_observability_quality_monitoring</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeEventTableLogs">snowflake_event_table_logs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeOrganizationUsageMetrics">snowflake_organization_usage_metrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeQueryHistoryLogs">snowflake_query_history_logs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeSecurityLogs">snowflake_security_logs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeTaskHistoryLogs">snowflake_task_history_logs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeAccountUsageMetricsInput">snowflake_account_usage_metrics_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeCloudCostMetricsInput">snowflake_cloud_cost_metrics_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeDataObservabilityQualityMonitoringInput">snowflake_data_observability_quality_monitoring_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeEventTableLogsInput">snowflake_event_table_logs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeOrganizationUsageMetricsInput">snowflake_organization_usage_metrics_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeQueryHistoryLogsInput">snowflake_query_history_logs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeSecurityLogsInput">snowflake_security_logs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeTaskHistoryLogsInput">snowflake_task_history_logs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `snowflake_account_usage_metrics`<sup>Required</sup> <a name="snowflake_account_usage_metrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeAccountUsageMetrics"></a>

```python
snowflake_account_usage_metrics: IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference</a>

---

##### `snowflake_cloud_cost_metrics`<sup>Required</sup> <a name="snowflake_cloud_cost_metrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeCloudCostMetrics"></a>

```python
snowflake_cloud_cost_metrics: IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference</a>

---

##### `snowflake_data_observability_quality_monitoring`<sup>Required</sup> <a name="snowflake_data_observability_quality_monitoring" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeDataObservabilityQualityMonitoring"></a>

```python
snowflake_data_observability_quality_monitoring: IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference</a>

---

##### `snowflake_event_table_logs`<sup>Required</sup> <a name="snowflake_event_table_logs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeEventTableLogs"></a>

```python
snowflake_event_table_logs: IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference</a>

---

##### `snowflake_organization_usage_metrics`<sup>Required</sup> <a name="snowflake_organization_usage_metrics" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeOrganizationUsageMetrics"></a>

```python
snowflake_organization_usage_metrics: IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference</a>

---

##### `snowflake_query_history_logs`<sup>Required</sup> <a name="snowflake_query_history_logs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeQueryHistoryLogs"></a>

```python
snowflake_query_history_logs: IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference</a>

---

##### `snowflake_security_logs`<sup>Required</sup> <a name="snowflake_security_logs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeSecurityLogs"></a>

```python
snowflake_security_logs: IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference</a>

---

##### `snowflake_task_history_logs`<sup>Required</sup> <a name="snowflake_task_history_logs" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeTaskHistoryLogs"></a>

```python
snowflake_task_history_logs: IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference</a>

---

##### `snowflake_account_usage_metrics_input`<sup>Optional</sup> <a name="snowflake_account_usage_metrics_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeAccountUsageMetricsInput"></a>

```python
snowflake_account_usage_metrics_input: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a>

---

##### `snowflake_cloud_cost_metrics_input`<sup>Optional</sup> <a name="snowflake_cloud_cost_metrics_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeCloudCostMetricsInput"></a>

```python
snowflake_cloud_cost_metrics_input: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a>

---

##### `snowflake_data_observability_quality_monitoring_input`<sup>Optional</sup> <a name="snowflake_data_observability_quality_monitoring_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeDataObservabilityQualityMonitoringInput"></a>

```python
snowflake_data_observability_quality_monitoring_input: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a>

---

##### `snowflake_event_table_logs_input`<sup>Optional</sup> <a name="snowflake_event_table_logs_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeEventTableLogsInput"></a>

```python
snowflake_event_table_logs_input: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a>

---

##### `snowflake_organization_usage_metrics_input`<sup>Optional</sup> <a name="snowflake_organization_usage_metrics_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeOrganizationUsageMetricsInput"></a>

```python
snowflake_organization_usage_metrics_input: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a>

---

##### `snowflake_query_history_logs_input`<sup>Optional</sup> <a name="snowflake_query_history_logs_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeQueryHistoryLogsInput"></a>

```python
snowflake_query_history_logs_input: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a>

---

##### `snowflake_security_logs_input`<sup>Optional</sup> <a name="snowflake_security_logs_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeSecurityLogsInput"></a>

```python
snowflake_security_logs_input: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a>

---

##### `snowflake_task_history_logs_input`<sup>Optional</sup> <a name="snowflake_task_history_logs_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.snowflakeTaskHistoryLogsInput"></a>

```python
snowflake_task_history_logs_input: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationSnowflakeAccountDataflows
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflows">IntegrationSnowflakeAccountDataflows</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resetSettings">reset_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_settings` <a name="put_settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.putSettings"></a>

```python
def put_settings(
  account_usage_metrics_aggregate_last24_h: bool | IResolvable = None
) -> None
```

###### `account_usage_metrics_aggregate_last24_h`<sup>Optional</sup> <a name="account_usage_metrics_aggregate_last24_h" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.putSettings.parameter.accountUsageMetricsAggregateLast24H"></a>

- *Type:* bool | cdktn.IResolvable

The period each metric aggregates over.

When `true`, metrics aggregate the past 24 hours on a rolling basis; when `false`, they aggregate the current day so far.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#account_usage_metrics_aggregate_last_24h IntegrationSnowflakeAccount#account_usage_metrics_aggregate_last_24h}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.resetSettings"></a>

```python
def reset_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.settingsInput">settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.settings"></a>

```python
settings: IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.settingsInput"></a>

```python
settings_input: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetrics</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.resetAccountUsageMetricsAggregateLast24H">reset_account_usage_metrics_aggregate_last24_h</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account_usage_metrics_aggregate_last24_h` <a name="reset_account_usage_metrics_aggregate_last24_h" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.resetAccountUsageMetricsAggregateLast24H"></a>

```python
def reset_account_usage_metrics_aggregate_last24_h() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.accountUsageMetricsAggregateLast24HInput">account_usage_metrics_aggregate_last24_h_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.accountUsageMetricsAggregateLast24H">account_usage_metrics_aggregate_last24_h</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_usage_metrics_aggregate_last24_h_input`<sup>Optional</sup> <a name="account_usage_metrics_aggregate_last24_h_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.accountUsageMetricsAggregateLast24HInput"></a>

```python
account_usage_metrics_aggregate_last24_h_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `account_usage_metrics_aggregate_last24_h`<sup>Required</sup> <a name="account_usage_metrics_aggregate_last24_h" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.accountUsageMetricsAggregateLast24H"></a>

```python
account_usage_metrics_aggregate_last24_h: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeAccountUsageMetricsSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resetSettings">reset_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_settings` <a name="put_settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.putSettings"></a>

```python
def put_settings(
  query_tags: str = None
) -> None
```

###### `query_tags`<sup>Optional</sup> <a name="query_tags" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.putSettings.parameter.queryTags"></a>

- *Type:* str

Snowflake query tags ingested as a comma-separated list of tag names, so that cost data can be broken down by them in Cloud Cost Management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#query_tags IntegrationSnowflakeAccount#query_tags}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.resetSettings"></a>

```python
def reset_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.settingsInput">settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.settings"></a>

```python
settings: IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.settingsInput"></a>

```python
settings_input: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetrics</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.resetQueryTags">reset_query_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_query_tags` <a name="reset_query_tags" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.resetQueryTags"></a>

```python
def reset_query_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.queryTagsInput">query_tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.queryTags">query_tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_tags_input`<sup>Optional</sup> <a name="query_tags_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.queryTagsInput"></a>

```python
query_tags_input: str
```

- *Type:* str

---

##### `query_tags`<sup>Required</sup> <a name="query_tags" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.queryTags"></a>

```python
query_tags: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeCloudCostMetricsSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resetSettings">reset_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_settings` <a name="put_settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.putSettings"></a>

```python
def put_settings(
  do_table_crawler_cron: str = None,
  sync_snowflake_system_database: bool | IResolvable = None
) -> None
```

###### `do_table_crawler_cron`<sup>Optional</sup> <a name="do_table_crawler_cron" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.putSettings.parameter.doTableCrawlerCron"></a>

- *Type:* str

Cron expression setting how often Datadog crawls your Snowflake table metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#do_table_crawler_cron IntegrationSnowflakeAccount#do_table_crawler_cron}

---

###### `sync_snowflake_system_database`<sup>Optional</sup> <a name="sync_snowflake_system_database" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.putSettings.parameter.syncSnowflakeSystemDatabase"></a>

- *Type:* bool | cdktn.IResolvable

Whether metadata from the Snowflake `SNOWFLAKE` system database is included in Data Observability alongside your own databases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#sync_snowflake_system_database IntegrationSnowflakeAccount#sync_snowflake_system_database}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.resetSettings"></a>

```python
def reset_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.settingsInput">settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.settings"></a>

```python
settings: IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.settingsInput"></a>

```python
settings_input: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoring</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resetDoTableCrawlerCron">reset_do_table_crawler_cron</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resetSyncSnowflakeSystemDatabase">reset_sync_snowflake_system_database</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_do_table_crawler_cron` <a name="reset_do_table_crawler_cron" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resetDoTableCrawlerCron"></a>

```python
def reset_do_table_crawler_cron() -> None
```

##### `reset_sync_snowflake_system_database` <a name="reset_sync_snowflake_system_database" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.resetSyncSnowflakeSystemDatabase"></a>

```python
def reset_sync_snowflake_system_database() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.doTableCrawlerCronInput">do_table_crawler_cron_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSnowflakeSystemDatabaseInput">sync_snowflake_system_database_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.doTableCrawlerCron">do_table_crawler_cron</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSnowflakeSystemDatabase">sync_snowflake_system_database</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `do_table_crawler_cron_input`<sup>Optional</sup> <a name="do_table_crawler_cron_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.doTableCrawlerCronInput"></a>

```python
do_table_crawler_cron_input: str
```

- *Type:* str

---

##### `sync_snowflake_system_database_input`<sup>Optional</sup> <a name="sync_snowflake_system_database_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSnowflakeSystemDatabaseInput"></a>

```python
sync_snowflake_system_database_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `do_table_crawler_cron`<sup>Required</sup> <a name="do_table_crawler_cron" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.doTableCrawlerCron"></a>

```python
do_table_crawler_cron: str
```

- *Type:* str

---

##### `sync_snowflake_system_database`<sup>Required</sup> <a name="sync_snowflake_system_database" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSnowflakeSystemDatabase"></a>

```python
sync_snowflake_system_database: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings">IntegrationSnowflakeAccountDataflowsSnowflakeDataObservabilityQualityMonitoringSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resetSettings">reset_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_settings` <a name="put_settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.putSettings"></a>

```python
def put_settings(
  event_table_events_enabled: bool | IResolvable = None,
  event_table_logs_enabled: bool | IResolvable = None,
  event_table_logs_interval_min: typing.Union[int, float] = None,
  event_table_span_events_enabled: bool | IResolvable = None,
  event_table_spans_enabled: bool | IResolvable = None
) -> None
```

###### `event_table_events_enabled`<sup>Optional</sup> <a name="event_table_events_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.putSettings.parameter.eventTableEventsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether records with a `record_type` of `event` are collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#event_table_events_enabled IntegrationSnowflakeAccount#event_table_events_enabled}

---

###### `event_table_logs_enabled`<sup>Optional</sup> <a name="event_table_logs_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.putSettings.parameter.eventTableLogsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether records with a `record_type` of `log` are collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#event_table_logs_enabled IntegrationSnowflakeAccount#event_table_logs_enabled}

---

###### `event_table_logs_interval_min`<sup>Optional</sup> <a name="event_table_logs_interval_min" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.putSettings.parameter.eventTableLogsIntervalMin"></a>

- *Type:* typing.Union[int, float]

How often event table records are collected, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#event_table_logs_interval_min IntegrationSnowflakeAccount#event_table_logs_interval_min}

---

###### `event_table_span_events_enabled`<sup>Optional</sup> <a name="event_table_span_events_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.putSettings.parameter.eventTableSpanEventsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether records with a `record_type` of `span_event` are collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#event_table_span_events_enabled IntegrationSnowflakeAccount#event_table_span_events_enabled}

---

###### `event_table_spans_enabled`<sup>Optional</sup> <a name="event_table_spans_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.putSettings.parameter.eventTableSpansEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether records with a `record_type` of `span` are collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#event_table_spans_enabled IntegrationSnowflakeAccount#event_table_spans_enabled}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.resetSettings"></a>

```python
def reset_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.settingsInput">settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.settings"></a>

```python
settings: IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.settingsInput"></a>

```python
settings_input: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogs</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableEventsEnabled">reset_event_table_events_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableLogsEnabled">reset_event_table_logs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableLogsIntervalMin">reset_event_table_logs_interval_min</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableSpanEventsEnabled">reset_event_table_span_events_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableSpansEnabled">reset_event_table_spans_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_event_table_events_enabled` <a name="reset_event_table_events_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableEventsEnabled"></a>

```python
def reset_event_table_events_enabled() -> None
```

##### `reset_event_table_logs_enabled` <a name="reset_event_table_logs_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableLogsEnabled"></a>

```python
def reset_event_table_logs_enabled() -> None
```

##### `reset_event_table_logs_interval_min` <a name="reset_event_table_logs_interval_min" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableLogsIntervalMin"></a>

```python
def reset_event_table_logs_interval_min() -> None
```

##### `reset_event_table_span_events_enabled` <a name="reset_event_table_span_events_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableSpanEventsEnabled"></a>

```python
def reset_event_table_span_events_enabled() -> None
```

##### `reset_event_table_spans_enabled` <a name="reset_event_table_spans_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.resetEventTableSpansEnabled"></a>

```python
def reset_event_table_spans_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableEventsEnabledInput">event_table_events_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsEnabledInput">event_table_logs_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsIntervalMinInput">event_table_logs_interval_min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpanEventsEnabledInput">event_table_span_events_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpansEnabledInput">event_table_spans_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableEventsEnabled">event_table_events_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsEnabled">event_table_logs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsIntervalMin">event_table_logs_interval_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpanEventsEnabled">event_table_span_events_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpansEnabled">event_table_spans_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_table_events_enabled_input`<sup>Optional</sup> <a name="event_table_events_enabled_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableEventsEnabledInput"></a>

```python
event_table_events_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_table_logs_enabled_input`<sup>Optional</sup> <a name="event_table_logs_enabled_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsEnabledInput"></a>

```python
event_table_logs_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_table_logs_interval_min_input`<sup>Optional</sup> <a name="event_table_logs_interval_min_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsIntervalMinInput"></a>

```python
event_table_logs_interval_min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `event_table_span_events_enabled_input`<sup>Optional</sup> <a name="event_table_span_events_enabled_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpanEventsEnabledInput"></a>

```python
event_table_span_events_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_table_spans_enabled_input`<sup>Optional</sup> <a name="event_table_spans_enabled_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpansEnabledInput"></a>

```python
event_table_spans_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_table_events_enabled`<sup>Required</sup> <a name="event_table_events_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableEventsEnabled"></a>

```python
event_table_events_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_table_logs_enabled`<sup>Required</sup> <a name="event_table_logs_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsEnabled"></a>

```python
event_table_logs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_table_logs_interval_min`<sup>Required</sup> <a name="event_table_logs_interval_min" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableLogsIntervalMin"></a>

```python
event_table_logs_interval_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `event_table_span_events_enabled`<sup>Required</sup> <a name="event_table_span_events_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpanEventsEnabled"></a>

```python
event_table_span_events_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_table_spans_enabled`<sup>Required</sup> <a name="event_table_spans_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.eventTableSpansEnabled"></a>

```python
event_table_spans_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeEventTableLogsSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resetSettings">reset_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_settings` <a name="put_settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.putSettings"></a>

```python
def put_settings(
  organization_usage_metrics_aggregate_last24_h: bool | IResolvable = None
) -> None
```

###### `organization_usage_metrics_aggregate_last24_h`<sup>Optional</sup> <a name="organization_usage_metrics_aggregate_last24_h" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.putSettings.parameter.organizationUsageMetricsAggregateLast24H"></a>

- *Type:* bool | cdktn.IResolvable

The period each metric aggregates over.

When `true`, metrics aggregate the past 24 hours on a rolling basis; when `false`, they aggregate the current day so far.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#organization_usage_metrics_aggregate_last_24h IntegrationSnowflakeAccount#organization_usage_metrics_aggregate_last_24h}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.resetSettings"></a>

```python
def reset_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.settingsInput">settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.settings"></a>

```python
settings: IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.settingsInput"></a>

```python
settings_input: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetrics</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.resetOrganizationUsageMetricsAggregateLast24H">reset_organization_usage_metrics_aggregate_last24_h</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_organization_usage_metrics_aggregate_last24_h` <a name="reset_organization_usage_metrics_aggregate_last24_h" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.resetOrganizationUsageMetricsAggregateLast24H"></a>

```python
def reset_organization_usage_metrics_aggregate_last24_h() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.organizationUsageMetricsAggregateLast24HInput">organization_usage_metrics_aggregate_last24_h_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.organizationUsageMetricsAggregateLast24H">organization_usage_metrics_aggregate_last24_h</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `organization_usage_metrics_aggregate_last24_h_input`<sup>Optional</sup> <a name="organization_usage_metrics_aggregate_last24_h_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.organizationUsageMetricsAggregateLast24HInput"></a>

```python
organization_usage_metrics_aggregate_last24_h_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `organization_usage_metrics_aggregate_last24_h`<sup>Required</sup> <a name="organization_usage_metrics_aggregate_last24_h" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.organizationUsageMetricsAggregateLast24H"></a>

```python
organization_usage_metrics_aggregate_last24_h: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeOrganizationUsageMetricsSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resetSettings">reset_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_settings` <a name="put_settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.putSettings"></a>

```python
def put_settings(
  join_query_history_with_access_history_enabled: bool | IResolvable = None,
  query_history_logs_interval_min: typing.Union[int, float] = None
) -> None
```

###### `join_query_history_with_access_history_enabled`<sup>Optional</sup> <a name="join_query_history_with_access_history_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.putSettings.parameter.joinQueryHistoryWithAccessHistoryEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether query logs are joined with Snowflake access history, which adds the objects each query read and wrote so you can follow how data is used and where it came from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#join_query_history_with_access_history_enabled IntegrationSnowflakeAccount#join_query_history_with_access_history_enabled}

---

###### `query_history_logs_interval_min`<sup>Optional</sup> <a name="query_history_logs_interval_min" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.putSettings.parameter.queryHistoryLogsIntervalMin"></a>

- *Type:* typing.Union[int, float]

How often query history logs are collected, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#query_history_logs_interval_min IntegrationSnowflakeAccount#query_history_logs_interval_min}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.resetSettings"></a>

```python
def reset_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.settingsInput">settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.settings"></a>

```python
settings: IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.settingsInput"></a>

```python
settings_input: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogs</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resetJoinQueryHistoryWithAccessHistoryEnabled">reset_join_query_history_with_access_history_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resetQueryHistoryLogsIntervalMin">reset_query_history_logs_interval_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_join_query_history_with_access_history_enabled` <a name="reset_join_query_history_with_access_history_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resetJoinQueryHistoryWithAccessHistoryEnabled"></a>

```python
def reset_join_query_history_with_access_history_enabled() -> None
```

##### `reset_query_history_logs_interval_min` <a name="reset_query_history_logs_interval_min" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.resetQueryHistoryLogsIntervalMin"></a>

```python
def reset_query_history_logs_interval_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.joinQueryHistoryWithAccessHistoryEnabledInput">join_query_history_with_access_history_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.queryHistoryLogsIntervalMinInput">query_history_logs_interval_min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.joinQueryHistoryWithAccessHistoryEnabled">join_query_history_with_access_history_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.queryHistoryLogsIntervalMin">query_history_logs_interval_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `join_query_history_with_access_history_enabled_input`<sup>Optional</sup> <a name="join_query_history_with_access_history_enabled_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.joinQueryHistoryWithAccessHistoryEnabledInput"></a>

```python
join_query_history_with_access_history_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `query_history_logs_interval_min_input`<sup>Optional</sup> <a name="query_history_logs_interval_min_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.queryHistoryLogsIntervalMinInput"></a>

```python
query_history_logs_interval_min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `join_query_history_with_access_history_enabled`<sup>Required</sup> <a name="join_query_history_with_access_history_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.joinQueryHistoryWithAccessHistoryEnabled"></a>

```python
join_query_history_with_access_history_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `query_history_logs_interval_min`<sup>Required</sup> <a name="query_history_logs_interval_min" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.queryHistoryLogsIntervalMin"></a>

```python
query_history_logs_interval_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeQueryHistoryLogsSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resetSettings">reset_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_settings` <a name="put_settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.putSettings"></a>

```python
def put_settings(
  security_logs_interval_min: typing.Union[int, float] = None
) -> None
```

###### `security_logs_interval_min`<sup>Optional</sup> <a name="security_logs_interval_min" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.putSettings.parameter.securityLogsIntervalMin"></a>

- *Type:* typing.Union[int, float]

How often security logs are collected, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#security_logs_interval_min IntegrationSnowflakeAccount#security_logs_interval_min}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.resetSettings"></a>

```python
def reset_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.settingsInput">settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.settings"></a>

```python
settings: IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.settingsInput"></a>

```python
settings_input: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogs</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.resetSecurityLogsIntervalMin">reset_security_logs_interval_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_logs_interval_min` <a name="reset_security_logs_interval_min" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.resetSecurityLogsIntervalMin"></a>

```python
def reset_security_logs_interval_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.securityLogsIntervalMinInput">security_logs_interval_min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.securityLogsIntervalMin">security_logs_interval_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_logs_interval_min_input`<sup>Optional</sup> <a name="security_logs_interval_min_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.securityLogsIntervalMinInput"></a>

```python
security_logs_interval_min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_logs_interval_min`<sup>Required</sup> <a name="security_logs_interval_min" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.securityLogsIntervalMin"></a>

```python
security_logs_interval_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeSecurityLogsSettings</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resetSettings">reset_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_settings` <a name="put_settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.putSettings"></a>

```python
def put_settings(
  task_history_logs_interval_min: typing.Union[int, float] = None
) -> None
```

###### `task_history_logs_interval_min`<sup>Optional</sup> <a name="task_history_logs_interval_min" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.putSettings.parameter.taskHistoryLogsIntervalMin"></a>

- *Type:* typing.Union[int, float]

How often task history logs are collected, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_snowflake_account#task_history_logs_interval_min IntegrationSnowflakeAccount#task_history_logs_interval_min}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.resetSettings"></a>

```python
def reset_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.settingsInput">settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.settings"></a>

```python
settings: IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.settingsInput"></a>

```python
settings_input: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogs</a>

---


### IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference <a name="IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.resetTaskHistoryLogsIntervalMin">reset_task_history_logs_interval_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_task_history_logs_interval_min` <a name="reset_task_history_logs_interval_min" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.resetTaskHistoryLogsIntervalMin"></a>

```python
def reset_task_history_logs_interval_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.taskHistoryLogsIntervalMinInput">task_history_logs_interval_min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.taskHistoryLogsIntervalMin">task_history_logs_interval_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `task_history_logs_interval_min_input`<sup>Optional</sup> <a name="task_history_logs_interval_min_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.taskHistoryLogsIntervalMinInput"></a>

```python
task_history_logs_interval_min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_history_logs_interval_min`<sup>Required</sup> <a name="task_history_logs_interval_min" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.taskHistoryLogsIntervalMin"></a>

```python
task_history_logs_interval_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings">IntegrationSnowflakeAccountDataflowsSnowflakeTaskHistoryLogsSettings</a>

---


### IntegrationSnowflakeAccountSettingsOutputReference <a name="IntegrationSnowflakeAccountSettingsOutputReference" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_snowflake_account

integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.snowflakeAccountIdentifierInput">snowflake_account_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.snowflakeAccountIdentifier">snowflake_account_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `snowflake_account_identifier_input`<sup>Optional</sup> <a name="snowflake_account_identifier_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.snowflakeAccountIdentifierInput"></a>

```python
snowflake_account_identifier_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `snowflake_account_identifier`<sup>Required</sup> <a name="snowflake_account_identifier" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.snowflakeAccountIdentifier"></a>

```python
snowflake_account_identifier: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationSnowflakeAccountSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationSnowflakeAccount.IntegrationSnowflakeAccountSettings">IntegrationSnowflakeAccountSettings</a>

---



