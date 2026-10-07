# `integrationDatabricksAccount` Submodule <a name="`integrationDatabricksAccount` Submodule" id="@cdktn/provider-datadog.integrationDatabricksAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationDatabricksAccount <a name="IntegrationDatabricksAccount" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account datadog_integration_databricks_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccount(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authentication: IntegrationDatabricksAccountAuthentication,
  name: str,
  settings: IntegrationDatabricksAccountSettings,
  dataflows: IntegrationDatabricksAccountDataflows = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication">IntegrationDatabricksAccountAuthentication</a></code> | Authentication configured on the Databricks integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.name">name</a></code> | <code>str</code> | Human-readable name of the Databricks integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings">IntegrationDatabricksAccountSettings</a></code> | Settings configured on the Databricks integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.dataflows">dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows">IntegrationDatabricksAccountDataflows</a></code> | Data Datadog collects from Databricks, keyed by dataflow id. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.authentication"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication">IntegrationDatabricksAccountAuthentication</a>

Authentication configured on the Databricks integration account.

A `bearer_token` method indicates an account still on token authentication, which Databricks accepts only on accounts that already use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#authentication IntegrationDatabricksAccount#authentication}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.name"></a>

- *Type:* str

Human-readable name of the Databricks integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#name IntegrationDatabricksAccount#name}

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.settings"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings">IntegrationDatabricksAccountSettings</a>

Settings configured on the Databricks integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#settings IntegrationDatabricksAccount#settings}

---

##### `dataflows`<sup>Optional</sup> <a name="dataflows" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.dataflows"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows">IntegrationDatabricksAccountDataflows</a>

Data Datadog collects from Databricks, keyed by dataflow id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#dataflows IntegrationDatabricksAccount#dataflows}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthentication">put_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putDataflows">put_dataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDataflows">reset_dataflows</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authentication` <a name="put_authentication" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthentication"></a>

```python
def put_authentication(
  databricks_integration_account_bearer_token_auth: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth = None,
  databricks_integration_account_o_auth_auth: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth = None,
  databricks_integration_account_private_action_runner_auth: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth = None
) -> None
```

###### `databricks_integration_account_bearer_token_auth`<sup>Optional</sup> <a name="databricks_integration_account_bearer_token_auth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthentication.parameter.databricksIntegrationAccountBearerTokenAuth"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth</a>

The bearer token authentication method configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_integration_account_bearer_token_auth IntegrationDatabricksAccount#databricks_integration_account_bearer_token_auth}

---

###### `databricks_integration_account_o_auth_auth`<sup>Optional</sup> <a name="databricks_integration_account_o_auth_auth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthentication.parameter.databricksIntegrationAccountOAuthAuth"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth</a>

The Databricks OAuth authentication method and service principal configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_integration_account_o_auth_auth IntegrationDatabricksAccount#databricks_integration_account_o_auth_auth}

---

###### `databricks_integration_account_private_action_runner_auth`<sup>Optional</sup> <a name="databricks_integration_account_private_action_runner_auth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthentication.parameter.databricksIntegrationAccountPrivateActionRunnerAuth"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth</a>

The Private Action Runner authentication method configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_integration_account_private_action_runner_auth IntegrationDatabricksAccount#databricks_integration_account_private_action_runner_auth}

---

##### `put_dataflows` <a name="put_dataflows" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putDataflows"></a>

```python
def put_dataflows(
  databricks_cloud_cost_metrics: IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics = None,
  databricks_data_observability_jobs_monitoring: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring = None,
  databricks_data_observability_quality_monitoring: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring = None,
  databricks_model_serving_metrics: IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics = None
) -> None
```

###### `databricks_cloud_cost_metrics`<sup>Optional</sup> <a name="databricks_cloud_cost_metrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putDataflows.parameter.databricksCloudCostMetrics"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics</a>

Cost data collected from your Databricks system tables. Requires [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/) to be set up for your organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_cloud_cost_metrics IntegrationDatabricksAccount#databricks_cloud_cost_metrics}

---

###### `databricks_data_observability_jobs_monitoring`<sup>Optional</sup> <a name="databricks_data_observability_jobs_monitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putDataflows.parameter.databricksDataObservabilityJobsMonitoring"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring</a>

Data Jobs Monitoring, which collects performance, reliability, and cost data for your Databricks jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_data_observability_jobs_monitoring IntegrationDatabricksAccount#databricks_data_observability_jobs_monitoring}

---

###### `databricks_data_observability_quality_monitoring`<sup>Optional</sup> <a name="databricks_data_observability_quality_monitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putDataflows.parameter.databricksDataObservabilityQualityMonitoring"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring</a>

Data Observability, which collects lineage and data quality information from your Databricks catalogs so you can explore how data flows and detect, resolve, and prevent quality issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_data_observability_quality_monitoring IntegrationDatabricksAccount#databricks_data_observability_quality_monitoring}

---

###### `databricks_model_serving_metrics`<sup>Optional</sup> <a name="databricks_model_serving_metrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putDataflows.parameter.databricksModelServingMetrics"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics</a>

Health and usage metrics for your Databricks model serving endpoints.

Not supported on accounts that authenticate with `private_action_runner`; on those accounts this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_model_serving_metrics IntegrationDatabricksAccount#databricks_model_serving_metrics}

---

##### `put_settings` <a name="put_settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putSettings"></a>

```python
def put_settings(
  workspace_url: str,
  system_tables_sql_warehouse_id: str = None
) -> None
```

###### `workspace_url`<sup>Required</sup> <a name="workspace_url" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putSettings.parameter.workspaceUrl"></a>

- *Type:* str

URL of the Databricks workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#workspace_url IntegrationDatabricksAccount#workspace_url}

---

###### `system_tables_sql_warehouse_id`<sup>Optional</sup> <a name="system_tables_sql_warehouse_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putSettings.parameter.systemTablesSqlWarehouseId"></a>

- *Type:* str

ID of the SQL warehouse used to query the Databricks system tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#system_tables_sql_warehouse_id IntegrationDatabricksAccount#system_tables_sql_warehouse_id}

---

##### `reset_dataflows` <a name="reset_dataflows" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDataflows"></a>

```python
def reset_dataflows() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IntegrationDatabricksAccount resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IntegrationDatabricksAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationDatabricksAccount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationDatabricksAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationDatabricksAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference">IntegrationDatabricksAccountAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dataflows">dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference">IntegrationDatabricksAccountDataflowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference">IntegrationDatabricksAccountSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authenticationInput">authentication_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication">IntegrationDatabricksAccountAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dataflowsInput">dataflows_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows">IntegrationDatabricksAccountDataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.settingsInput">settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings">IntegrationDatabricksAccountSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authentication"></a>

```python
authentication: IntegrationDatabricksAccountAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference">IntegrationDatabricksAccountAuthenticationOutputReference</a>

---

##### `dataflows`<sup>Required</sup> <a name="dataflows" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dataflows"></a>

```python
dataflows: IntegrationDatabricksAccountDataflowsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference">IntegrationDatabricksAccountDataflowsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.settings"></a>

```python
settings: IntegrationDatabricksAccountSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference">IntegrationDatabricksAccountSettingsOutputReference</a>

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authenticationInput"></a>

```python
authentication_input: IResolvable | IntegrationDatabricksAccountAuthentication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication">IntegrationDatabricksAccountAuthentication</a>

---

##### `dataflows_input`<sup>Optional</sup> <a name="dataflows_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dataflowsInput"></a>

```python
dataflows_input: IResolvable | IntegrationDatabricksAccountDataflows
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows">IntegrationDatabricksAccountDataflows</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.settingsInput"></a>

```python
settings_input: IResolvable | IntegrationDatabricksAccountSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings">IntegrationDatabricksAccountSettings</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationDatabricksAccountAuthentication <a name="IntegrationDatabricksAccountAuthentication" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication(
  databricks_integration_account_bearer_token_auth: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth = None,
  databricks_integration_account_o_auth_auth: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth = None,
  databricks_integration_account_private_action_runner_auth: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.property.databricksIntegrationAccountBearerTokenAuth">databricks_integration_account_bearer_token_auth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth</a></code> | The bearer token authentication method configured on the account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.property.databricksIntegrationAccountOAuthAuth">databricks_integration_account_o_auth_auth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth</a></code> | The Databricks OAuth authentication method and service principal configured on the account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.property.databricksIntegrationAccountPrivateActionRunnerAuth">databricks_integration_account_private_action_runner_auth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth</a></code> | The Private Action Runner authentication method configured on the account. |

---

##### `databricks_integration_account_bearer_token_auth`<sup>Optional</sup> <a name="databricks_integration_account_bearer_token_auth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.property.databricksIntegrationAccountBearerTokenAuth"></a>

```python
databricks_integration_account_bearer_token_auth: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth</a>

The bearer token authentication method configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_integration_account_bearer_token_auth IntegrationDatabricksAccount#databricks_integration_account_bearer_token_auth}

---

##### `databricks_integration_account_o_auth_auth`<sup>Optional</sup> <a name="databricks_integration_account_o_auth_auth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.property.databricksIntegrationAccountOAuthAuth"></a>

```python
databricks_integration_account_o_auth_auth: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth</a>

The Databricks OAuth authentication method and service principal configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_integration_account_o_auth_auth IntegrationDatabricksAccount#databricks_integration_account_o_auth_auth}

---

##### `databricks_integration_account_private_action_runner_auth`<sup>Optional</sup> <a name="databricks_integration_account_private_action_runner_auth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication.property.databricksIntegrationAccountPrivateActionRunnerAuth"></a>

```python
databricks_integration_account_private_action_runner_auth: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth</a>

The Private Action Runner authentication method configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_integration_account_private_action_runner_auth IntegrationDatabricksAccount#databricks_integration_account_private_action_runner_auth}

---

### IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth <a name="IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth(
  auth_type: str = None,
  token_wo: str = None,
  token_wo_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.property.authType">auth_type</a></code> | <code>str</code> | The authentication method type. Valid values are `bearer_token`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.property.tokenWo">token_wo</a></code> | <code>str</code> | Secret token used to authenticate with Databricks. This write-only value is not stored in Terraform state. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.property.tokenWoVersion">token_wo_version</a></code> | <code>str</code> | Version trigger for token_wo rotation. String length must be at least 1. |

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

The authentication method type. Valid values are `bearer_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#auth_type IntegrationDatabricksAccount#auth_type}

---

##### `token_wo`<sup>Optional</sup> <a name="token_wo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.property.tokenWo"></a>

```python
token_wo: str
```

- *Type:* str

Secret token used to authenticate with Databricks. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#token_wo IntegrationDatabricksAccount#token_wo}

---

##### `token_wo_version`<sup>Optional</sup> <a name="token_wo_version" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth.property.tokenWoVersion"></a>

```python
token_wo_version: str
```

- *Type:* str

Version trigger for token_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#token_wo_version IntegrationDatabricksAccount#token_wo_version}

---

### IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth <a name="IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth(
  client_id: str,
  client_secret_wo: str,
  client_secret_wo_version: str,
  auth_type: str = None,
  azure_tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.clientId">client_id</a></code> | <code>str</code> | Client ID of the Databricks service principal. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.clientSecretWo">client_secret_wo</a></code> | <code>str</code> | Secret of the Databricks service principal. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.clientSecretWoVersion">client_secret_wo_version</a></code> | <code>str</code> | Version trigger for client_secret_wo rotation. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.authType">auth_type</a></code> | <code>str</code> | The authentication method type. Valid values are `databricks_oauth`. Defaults to `"databricks_oauth"`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | Microsoft Entra ID tenant of the service principal, for Azure Databricks workspaces. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Client ID of the Databricks service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#client_id IntegrationDatabricksAccount#client_id}

---

##### `client_secret_wo`<sup>Required</sup> <a name="client_secret_wo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.clientSecretWo"></a>

```python
client_secret_wo: str
```

- *Type:* str

Secret of the Databricks service principal.

Generate it under User management > Service principals > Credentials & secrets in Databricks. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#client_secret_wo IntegrationDatabricksAccount#client_secret_wo}

---

##### `client_secret_wo_version`<sup>Required</sup> <a name="client_secret_wo_version" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.clientSecretWoVersion"></a>

```python
client_secret_wo_version: str
```

- *Type:* str

Version trigger for client_secret_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#client_secret_wo_version IntegrationDatabricksAccount#client_secret_wo_version}

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

The authentication method type. Valid values are `databricks_oauth`. Defaults to `"databricks_oauth"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#auth_type IntegrationDatabricksAccount#auth_type}

---

##### `azure_tenant_id`<sup>Optional</sup> <a name="azure_tenant_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth.property.azureTenantId"></a>

```python
azure_tenant_id: str
```

- *Type:* str

Microsoft Entra ID tenant of the service principal, for Azure Databricks workspaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#azure_tenant_id IntegrationDatabricksAccount#azure_tenant_id}

---

### IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth <a name="IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth(
  connection_id: str,
  user_uuid: str,
  auth_type: str = None,
  secret_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.connectionId">connection_id</a></code> | <code>str</code> | Unique identifier of the Private Action Runner connection holding the credentials. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.userUuid">user_uuid</a></code> | <code>str</code> | Unique identifier of the user the Private Action Runner connection belongs to. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.authType">auth_type</a></code> | <code>str</code> | The authentication method type. Valid values are `private_action_runner`. Defaults to `"private_action_runner"`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.secretPath">secret_path</a></code> | <code>str</code> | Path of the credential inside the secret backend configured on the runner. |

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

Unique identifier of the Private Action Runner connection holding the credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#connection_id IntegrationDatabricksAccount#connection_id}

---

##### `user_uuid`<sup>Required</sup> <a name="user_uuid" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.userUuid"></a>

```python
user_uuid: str
```

- *Type:* str

Unique identifier of the user the Private Action Runner connection belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#user_uuid IntegrationDatabricksAccount#user_uuid}

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

The authentication method type. Valid values are `private_action_runner`. Defaults to `"private_action_runner"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#auth_type IntegrationDatabricksAccount#auth_type}

---

##### `secret_path`<sup>Optional</sup> <a name="secret_path" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth.property.secretPath"></a>

```python
secret_path: str
```

- *Type:* str

Path of the credential inside the secret backend configured on the runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#secret_path IntegrationDatabricksAccount#secret_path}

---

### IntegrationDatabricksAccountConfig <a name="IntegrationDatabricksAccountConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authentication: IntegrationDatabricksAccountAuthentication,
  name: str,
  settings: IntegrationDatabricksAccountSettings,
  dataflows: IntegrationDatabricksAccountDataflows = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication">IntegrationDatabricksAccountAuthentication</a></code> | Authentication configured on the Databricks integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.name">name</a></code> | <code>str</code> | Human-readable name of the Databricks integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings">IntegrationDatabricksAccountSettings</a></code> | Settings configured on the Databricks integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dataflows">dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows">IntegrationDatabricksAccountDataflows</a></code> | Data Datadog collects from Databricks, keyed by dataflow id. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.authentication"></a>

```python
authentication: IntegrationDatabricksAccountAuthentication
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication">IntegrationDatabricksAccountAuthentication</a>

Authentication configured on the Databricks integration account.

A `bearer_token` method indicates an account still on token authentication, which Databricks accepts only on accounts that already use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#authentication IntegrationDatabricksAccount#authentication}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Human-readable name of the Databricks integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#name IntegrationDatabricksAccount#name}

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.settings"></a>

```python
settings: IntegrationDatabricksAccountSettings
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings">IntegrationDatabricksAccountSettings</a>

Settings configured on the Databricks integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#settings IntegrationDatabricksAccount#settings}

---

##### `dataflows`<sup>Optional</sup> <a name="dataflows" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dataflows"></a>

```python
dataflows: IntegrationDatabricksAccountDataflows
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows">IntegrationDatabricksAccountDataflows</a>

Data Datadog collects from Databricks, keyed by dataflow id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#dataflows IntegrationDatabricksAccount#dataflows}

---

### IntegrationDatabricksAccountDataflows <a name="IntegrationDatabricksAccountDataflows" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountDataflows(
  databricks_cloud_cost_metrics: IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics = None,
  databricks_data_observability_jobs_monitoring: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring = None,
  databricks_data_observability_quality_monitoring: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring = None,
  databricks_model_serving_metrics: IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksCloudCostMetrics">databricks_cloud_cost_metrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics</a></code> | Cost data collected from your Databricks system tables. Requires [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/) to be set up for your organization. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksDataObservabilityJobsMonitoring">databricks_data_observability_jobs_monitoring</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring</a></code> | Data Jobs Monitoring, which collects performance, reliability, and cost data for your Databricks jobs. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksDataObservabilityQualityMonitoring">databricks_data_observability_quality_monitoring</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring</a></code> | Data Observability, which collects lineage and data quality information from your Databricks catalogs so you can explore how data flows and detect, resolve, and prevent quality issues. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksModelServingMetrics">databricks_model_serving_metrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics</a></code> | Health and usage metrics for your Databricks model serving endpoints. |

---

##### `databricks_cloud_cost_metrics`<sup>Optional</sup> <a name="databricks_cloud_cost_metrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksCloudCostMetrics"></a>

```python
databricks_cloud_cost_metrics: IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics</a>

Cost data collected from your Databricks system tables. Requires [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/) to be set up for your organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_cloud_cost_metrics IntegrationDatabricksAccount#databricks_cloud_cost_metrics}

---

##### `databricks_data_observability_jobs_monitoring`<sup>Optional</sup> <a name="databricks_data_observability_jobs_monitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksDataObservabilityJobsMonitoring"></a>

```python
databricks_data_observability_jobs_monitoring: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring</a>

Data Jobs Monitoring, which collects performance, reliability, and cost data for your Databricks jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_data_observability_jobs_monitoring IntegrationDatabricksAccount#databricks_data_observability_jobs_monitoring}

---

##### `databricks_data_observability_quality_monitoring`<sup>Optional</sup> <a name="databricks_data_observability_quality_monitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksDataObservabilityQualityMonitoring"></a>

```python
databricks_data_observability_quality_monitoring: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring</a>

Data Observability, which collects lineage and data quality information from your Databricks catalogs so you can explore how data flows and detect, resolve, and prevent quality issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_data_observability_quality_monitoring IntegrationDatabricksAccount#databricks_data_observability_quality_monitoring}

---

##### `databricks_model_serving_metrics`<sup>Optional</sup> <a name="databricks_model_serving_metrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows.property.databricksModelServingMetrics"></a>

```python
databricks_model_serving_metrics: IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics</a>

Health and usage metrics for your Databricks model serving endpoints.

Not supported on accounts that authenticate with `private_action_runner`; on those accounts this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#databricks_model_serving_metrics IntegrationDatabricksAccount#databricks_model_serving_metrics}

---

### IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics <a name="IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics(
  enabled: bool | IResolvable = None,
  settings: IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings</a></code> | Settings of the Cloud Cost Management dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#enabled IntegrationDatabricksAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics.property.settings"></a>

```python
settings: IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings</a>

Settings of the Cloud Cost Management dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#settings IntegrationDatabricksAccount#settings}

---

### IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings <a name="IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings(
  ccm_collect_all_workspaces: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings.property.ccmCollectAllWorkspaces">ccm_collect_all_workspaces</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether cost data is collected for every workspace in the Databricks account rather than this workspace only. |

---

##### `ccm_collect_all_workspaces`<sup>Optional</sup> <a name="ccm_collect_all_workspaces" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings.property.ccmCollectAllWorkspaces"></a>

```python
ccm_collect_all_workspaces: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether cost data is collected for every workspace in the Databricks account rather than this workspace only.

This takes effect across the Databricks account: if any one workspace enables it, Datadog collects cost data for all of them regardless of their individual settings, and every covered workspace incurs Cloud Cost Management charges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#ccm_collect_all_workspaces IntegrationDatabricksAccount#ccm_collect_all_workspaces}

---

### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring(
  enabled: bool | IResolvable = None,
  settings: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings</a></code> | Settings of the Data Jobs Monitoring dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#enabled IntegrationDatabricksAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring.property.settings"></a>

```python
settings: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings</a>

Settings of the Data Jobs Monitoring dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#settings IntegrationDatabricksAccount#settings}

---

### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings(
  dd_api_key_id: str = None,
  dd_api_key_secret_wo: str = None,
  dd_api_key_secret_wo_version: str = None,
  djm_global_init_script_enabled: bool | IResolvable = None,
  script_gpum_enabled: bool | IResolvable = None,
  script_logs_enabled: bool | IResolvable = None,
  serverless_jobs_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.ddApiKeyId">dd_api_key_id</a></code> | <code>str</code> | ID of the Datadog API key the global init script uses to submit data. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.ddApiKeySecretWo">dd_api_key_secret_wo</a></code> | <code>str</code> | Secret value of the Datadog API key identified by `dd_api_key_id`. This write-only value is not stored in Terraform state. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.ddApiKeySecretWoVersion">dd_api_key_secret_wo_version</a></code> | <code>str</code> | Version trigger for dd_api_key_secret_wo rotation. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.djmGlobalInitScriptEnabled">djm_global_init_script_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Datadog installs and manages the Agent on your Databricks clusters through a global init script. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.scriptGpumEnabled">script_gpum_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether GPU metrics are collected from your Databricks clusters. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.scriptLogsEnabled">script_logs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether driver and worker logs are collected from your Databricks clusters. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.serverlessJobsEnabled">serverless_jobs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether health and cost data is collected for jobs running on Serverless or SQL Warehouse compute. |

---

##### `dd_api_key_id`<sup>Optional</sup> <a name="dd_api_key_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.ddApiKeyId"></a>

```python
dd_api_key_id: str
```

- *Type:* str

ID of the Datadog API key the global init script uses to submit data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#dd_api_key_id IntegrationDatabricksAccount#dd_api_key_id}

---

##### `dd_api_key_secret_wo`<sup>Optional</sup> <a name="dd_api_key_secret_wo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.ddApiKeySecretWo"></a>

```python
dd_api_key_secret_wo: str
```

- *Type:* str

Secret value of the Datadog API key identified by `dd_api_key_id`. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#dd_api_key_secret_wo IntegrationDatabricksAccount#dd_api_key_secret_wo}

---

##### `dd_api_key_secret_wo_version`<sup>Optional</sup> <a name="dd_api_key_secret_wo_version" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.ddApiKeySecretWoVersion"></a>

```python
dd_api_key_secret_wo_version: str
```

- *Type:* str

Version trigger for dd_api_key_secret_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#dd_api_key_secret_wo_version IntegrationDatabricksAccount#dd_api_key_secret_wo_version}

---

##### `djm_global_init_script_enabled`<sup>Optional</sup> <a name="djm_global_init_script_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.djmGlobalInitScriptEnabled"></a>

```python
djm_global_init_script_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Datadog installs and manages the Agent on your Databricks clusters through a global init script.

The script does not apply to clusters in Standard access mode. When `false`, the Agent is installed manually.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#djm_global_init_script_enabled IntegrationDatabricksAccount#djm_global_init_script_enabled}

---

##### `script_gpum_enabled`<sup>Optional</sup> <a name="script_gpum_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.scriptGpumEnabled"></a>

```python
script_gpum_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether GPU metrics are collected from your Databricks clusters.

The Agent installed by the global init script performs the collection, so this requires the dataflow to be enabled with `djm_global_init_script_enabled` set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#script_gpum_enabled IntegrationDatabricksAccount#script_gpum_enabled}

---

##### `script_logs_enabled`<sup>Optional</sup> <a name="script_logs_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.scriptLogsEnabled"></a>

```python
script_logs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether driver and worker logs are collected from your Databricks clusters.

The Agent installed by the global init script performs the collection, so this requires the dataflow to be enabled with `djm_global_init_script_enabled` set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#script_logs_enabled IntegrationDatabricksAccount#script_logs_enabled}

---

##### `serverless_jobs_enabled`<sup>Optional</sup> <a name="serverless_jobs_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings.property.serverlessJobsEnabled"></a>

```python
serverless_jobs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether health and cost data is collected for jobs running on Serverless or SQL Warehouse compute.

This compute has no clusters for the global init script to target, so collection reads the Databricks system tables and requires `system_tables_sql_warehouse_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#serverless_jobs_enabled IntegrationDatabricksAccount#serverless_jobs_enabled}

---

### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring(
  enabled: bool | IResolvable = None,
  settings: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Datadog collects this data. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings</a></code> | Settings of the Data Observability dataflow. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#enabled IntegrationDatabricksAccount#enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring.property.settings"></a>

```python
settings: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings</a>

Settings of the Data Observability dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#settings IntegrationDatabricksAccount#settings}

---

### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings(
  do_crawlers_cron: str = None,
  sync_system_catalog: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings.property.doCrawlersCron">do_crawlers_cron</a></code> | <code>str</code> | Cron expression setting how often Datadog connects to your Databricks warehouse to collect metadata. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings.property.syncSystemCatalog">sync_system_catalog</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether metadata from the Databricks `system` catalog is included in Data Observability alongside your data catalogs. |

---

##### `do_crawlers_cron`<sup>Optional</sup> <a name="do_crawlers_cron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings.property.doCrawlersCron"></a>

```python
do_crawlers_cron: str
```

- *Type:* str

Cron expression setting how often Datadog connects to your Databricks warehouse to collect metadata.

Currently, only hourly (`0 * * * *`) and daily (`0 0 * * *`) are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#do_crawlers_cron IntegrationDatabricksAccount#do_crawlers_cron}

---

##### `sync_system_catalog`<sup>Optional</sup> <a name="sync_system_catalog" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings.property.syncSystemCatalog"></a>

```python
sync_system_catalog: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether metadata from the Databricks `system` catalog is included in Data Observability alongside your data catalogs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#sync_system_catalog IntegrationDatabricksAccount#sync_system_catalog}

---

### IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics <a name="IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#enabled IntegrationDatabricksAccount#enabled}

---

### IntegrationDatabricksAccountSettings <a name="IntegrationDatabricksAccountSettings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountSettings(
  workspace_url: str,
  system_tables_sql_warehouse_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings.property.workspaceUrl">workspace_url</a></code> | <code>str</code> | URL of the Databricks workspace. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings.property.systemTablesSqlWarehouseId">system_tables_sql_warehouse_id</a></code> | <code>str</code> | ID of the SQL warehouse used to query the Databricks system tables. |

---

##### `workspace_url`<sup>Required</sup> <a name="workspace_url" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings.property.workspaceUrl"></a>

```python
workspace_url: str
```

- *Type:* str

URL of the Databricks workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#workspace_url IntegrationDatabricksAccount#workspace_url}

---

##### `system_tables_sql_warehouse_id`<sup>Optional</sup> <a name="system_tables_sql_warehouse_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings.property.systemTablesSqlWarehouseId"></a>

```python
system_tables_sql_warehouse_id: str
```

- *Type:* str

ID of the SQL warehouse used to query the Databricks system tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#system_tables_sql_warehouse_id IntegrationDatabricksAccount#system_tables_sql_warehouse_id}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference <a name="IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resetAuthType">reset_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resetTokenWo">reset_token_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resetTokenWoVersion">reset_token_wo_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resetAuthType"></a>

```python
def reset_auth_type() -> None
```

##### `reset_token_wo` <a name="reset_token_wo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resetTokenWo"></a>

```python
def reset_token_wo() -> None
```

##### `reset_token_wo_version` <a name="reset_token_wo_version" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.resetTokenWoVersion"></a>

```python
def reset_token_wo_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWoInput">token_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWoVersionInput">token_wo_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWo">token_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWoVersion">token_wo_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `token_wo_input`<sup>Optional</sup> <a name="token_wo_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWoInput"></a>

```python
token_wo_input: str
```

- *Type:* str

---

##### `token_wo_version_input`<sup>Optional</sup> <a name="token_wo_version_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWoVersionInput"></a>

```python
token_wo_version_input: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### ~~`token_wo`~~<sup>Required</sup> <a name="token_wo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
token_wo: str
```

- *Type:* str

---

##### `token_wo_version`<sup>Required</sup> <a name="token_wo_version" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.tokenWoVersion"></a>

```python
token_wo_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth</a>

---


### IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference <a name="IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resetAuthType">reset_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resetAzureTenantId">reset_azure_tenant_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resetAuthType"></a>

```python
def reset_auth_type() -> None
```

##### `reset_azure_tenant_id` <a name="reset_azure_tenant_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.resetAzureTenantId"></a>

```python
def reset_azure_tenant_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.azureTenantIdInput">azure_tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWoInput">client_secret_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWoVersionInput">client_secret_wo_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWo">client_secret_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWoVersion">client_secret_wo_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `azure_tenant_id_input`<sup>Optional</sup> <a name="azure_tenant_id_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.azureTenantIdInput"></a>

```python
azure_tenant_id_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_wo_input`<sup>Optional</sup> <a name="client_secret_wo_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWoInput"></a>

```python
client_secret_wo_input: str
```

- *Type:* str

---

##### `client_secret_wo_version_input`<sup>Optional</sup> <a name="client_secret_wo_version_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWoVersionInput"></a>

```python
client_secret_wo_version_input: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `azure_tenant_id`<sup>Required</sup> <a name="azure_tenant_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.azureTenantId"></a>

```python
azure_tenant_id: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### ~~`client_secret_wo`~~<sup>Required</sup> <a name="client_secret_wo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
client_secret_wo: str
```

- *Type:* str

---

##### `client_secret_wo_version`<sup>Required</sup> <a name="client_secret_wo_version" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.clientSecretWoVersion"></a>

```python
client_secret_wo_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth</a>

---


### IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference <a name="IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resetAuthType">reset_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resetSecretPath">reset_secret_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resetAuthType"></a>

```python
def reset_auth_type() -> None
```

##### `reset_secret_path` <a name="reset_secret_path" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.resetSecretPath"></a>

```python
def reset_secret_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.secretPathInput">secret_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.userUuidInput">user_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.secretPath">secret_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.userUuid">user_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `secret_path_input`<sup>Optional</sup> <a name="secret_path_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.secretPathInput"></a>

```python
secret_path_input: str
```

- *Type:* str

---

##### `user_uuid_input`<sup>Optional</sup> <a name="user_uuid_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.userUuidInput"></a>

```python
user_uuid_input: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `secret_path`<sup>Required</sup> <a name="secret_path" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.secretPath"></a>

```python
secret_path: str
```

- *Type:* str

---

##### `user_uuid`<sup>Required</sup> <a name="user_uuid" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.userUuid"></a>

```python
user_uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth</a>

---


### IntegrationDatabricksAccountAuthenticationOutputReference <a name="IntegrationDatabricksAccountAuthenticationOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountBearerTokenAuth">put_databricks_integration_account_bearer_token_auth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountOAuthAuth">put_databricks_integration_account_o_auth_auth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountPrivateActionRunnerAuth">put_databricks_integration_account_private_action_runner_auth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resetDatabricksIntegrationAccountBearerTokenAuth">reset_databricks_integration_account_bearer_token_auth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resetDatabricksIntegrationAccountOAuthAuth">reset_databricks_integration_account_o_auth_auth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resetDatabricksIntegrationAccountPrivateActionRunnerAuth">reset_databricks_integration_account_private_action_runner_auth</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_databricks_integration_account_bearer_token_auth` <a name="put_databricks_integration_account_bearer_token_auth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountBearerTokenAuth"></a>

```python
def put_databricks_integration_account_bearer_token_auth(
  auth_type: str = None,
  token_wo: str = None,
  token_wo_version: str = None
) -> None
```

###### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountBearerTokenAuth.parameter.authType"></a>

- *Type:* str

The authentication method type. Valid values are `bearer_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#auth_type IntegrationDatabricksAccount#auth_type}

---

###### `token_wo`<sup>Optional</sup> <a name="token_wo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountBearerTokenAuth.parameter.tokenWo"></a>

- *Type:* str

Secret token used to authenticate with Databricks. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#token_wo IntegrationDatabricksAccount#token_wo}

---

###### `token_wo_version`<sup>Optional</sup> <a name="token_wo_version" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountBearerTokenAuth.parameter.tokenWoVersion"></a>

- *Type:* str

Version trigger for token_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#token_wo_version IntegrationDatabricksAccount#token_wo_version}

---

##### `put_databricks_integration_account_o_auth_auth` <a name="put_databricks_integration_account_o_auth_auth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountOAuthAuth"></a>

```python
def put_databricks_integration_account_o_auth_auth(
  client_id: str,
  client_secret_wo: str,
  client_secret_wo_version: str,
  auth_type: str = None,
  azure_tenant_id: str = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountOAuthAuth.parameter.clientId"></a>

- *Type:* str

Client ID of the Databricks service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#client_id IntegrationDatabricksAccount#client_id}

---

###### `client_secret_wo`<sup>Required</sup> <a name="client_secret_wo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountOAuthAuth.parameter.clientSecretWo"></a>

- *Type:* str

Secret of the Databricks service principal.

Generate it under User management > Service principals > Credentials & secrets in Databricks. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#client_secret_wo IntegrationDatabricksAccount#client_secret_wo}

---

###### `client_secret_wo_version`<sup>Required</sup> <a name="client_secret_wo_version" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountOAuthAuth.parameter.clientSecretWoVersion"></a>

- *Type:* str

Version trigger for client_secret_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#client_secret_wo_version IntegrationDatabricksAccount#client_secret_wo_version}

---

###### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountOAuthAuth.parameter.authType"></a>

- *Type:* str

The authentication method type. Valid values are `databricks_oauth`. Defaults to `"databricks_oauth"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#auth_type IntegrationDatabricksAccount#auth_type}

---

###### `azure_tenant_id`<sup>Optional</sup> <a name="azure_tenant_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountOAuthAuth.parameter.azureTenantId"></a>

- *Type:* str

Microsoft Entra ID tenant of the service principal, for Azure Databricks workspaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#azure_tenant_id IntegrationDatabricksAccount#azure_tenant_id}

---

##### `put_databricks_integration_account_private_action_runner_auth` <a name="put_databricks_integration_account_private_action_runner_auth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountPrivateActionRunnerAuth"></a>

```python
def put_databricks_integration_account_private_action_runner_auth(
  connection_id: str,
  user_uuid: str,
  auth_type: str = None,
  secret_path: str = None
) -> None
```

###### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountPrivateActionRunnerAuth.parameter.connectionId"></a>

- *Type:* str

Unique identifier of the Private Action Runner connection holding the credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#connection_id IntegrationDatabricksAccount#connection_id}

---

###### `user_uuid`<sup>Required</sup> <a name="user_uuid" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountPrivateActionRunnerAuth.parameter.userUuid"></a>

- *Type:* str

Unique identifier of the user the Private Action Runner connection belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#user_uuid IntegrationDatabricksAccount#user_uuid}

---

###### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountPrivateActionRunnerAuth.parameter.authType"></a>

- *Type:* str

The authentication method type. Valid values are `private_action_runner`. Defaults to `"private_action_runner"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#auth_type IntegrationDatabricksAccount#auth_type}

---

###### `secret_path`<sup>Optional</sup> <a name="secret_path" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.putDatabricksIntegrationAccountPrivateActionRunnerAuth.parameter.secretPath"></a>

- *Type:* str

Path of the credential inside the secret backend configured on the runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#secret_path IntegrationDatabricksAccount#secret_path}

---

##### `reset_databricks_integration_account_bearer_token_auth` <a name="reset_databricks_integration_account_bearer_token_auth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resetDatabricksIntegrationAccountBearerTokenAuth"></a>

```python
def reset_databricks_integration_account_bearer_token_auth() -> None
```

##### `reset_databricks_integration_account_o_auth_auth` <a name="reset_databricks_integration_account_o_auth_auth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resetDatabricksIntegrationAccountOAuthAuth"></a>

```python
def reset_databricks_integration_account_o_auth_auth() -> None
```

##### `reset_databricks_integration_account_private_action_runner_auth` <a name="reset_databricks_integration_account_private_action_runner_auth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.resetDatabricksIntegrationAccountPrivateActionRunnerAuth"></a>

```python
def reset_databricks_integration_account_private_action_runner_auth() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountBearerTokenAuth">databricks_integration_account_bearer_token_auth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountOAuthAuth">databricks_integration_account_o_auth_auth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountPrivateActionRunnerAuth">databricks_integration_account_private_action_runner_auth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountBearerTokenAuthInput">databricks_integration_account_bearer_token_auth_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountOAuthAuthInput">databricks_integration_account_o_auth_auth_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountPrivateActionRunnerAuthInput">databricks_integration_account_private_action_runner_auth_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication">IntegrationDatabricksAccountAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `databricks_integration_account_bearer_token_auth`<sup>Required</sup> <a name="databricks_integration_account_bearer_token_auth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountBearerTokenAuth"></a>

```python
databricks_integration_account_bearer_token_auth: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuthOutputReference</a>

---

##### `databricks_integration_account_o_auth_auth`<sup>Required</sup> <a name="databricks_integration_account_o_auth_auth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountOAuthAuth"></a>

```python
databricks_integration_account_o_auth_auth: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuthOutputReference</a>

---

##### `databricks_integration_account_private_action_runner_auth`<sup>Required</sup> <a name="databricks_integration_account_private_action_runner_auth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountPrivateActionRunnerAuth"></a>

```python
databricks_integration_account_private_action_runner_auth: IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuthOutputReference</a>

---

##### `databricks_integration_account_bearer_token_auth_input`<sup>Optional</sup> <a name="databricks_integration_account_bearer_token_auth_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountBearerTokenAuthInput"></a>

```python
databricks_integration_account_bearer_token_auth_input: IResolvable | IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountBearerTokenAuth</a>

---

##### `databricks_integration_account_o_auth_auth_input`<sup>Optional</sup> <a name="databricks_integration_account_o_auth_auth_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountOAuthAuthInput"></a>

```python
databricks_integration_account_o_auth_auth_input: IResolvable | IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountOAuthAuth</a>

---

##### `databricks_integration_account_private_action_runner_auth_input`<sup>Optional</sup> <a name="databricks_integration_account_private_action_runner_auth_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.databricksIntegrationAccountPrivateActionRunnerAuthInput"></a>

```python
databricks_integration_account_private_action_runner_auth_input: IResolvable | IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth">IntegrationDatabricksAccountAuthenticationDatabricksIntegrationAccountPrivateActionRunnerAuth</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationDatabricksAccountAuthentication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthentication">IntegrationDatabricksAccountAuthentication</a>

---


### IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resetSettings">reset_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_settings` <a name="put_settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.putSettings"></a>

```python
def put_settings(
  ccm_collect_all_workspaces: bool | IResolvable = None
) -> None
```

###### `ccm_collect_all_workspaces`<sup>Optional</sup> <a name="ccm_collect_all_workspaces" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.putSettings.parameter.ccmCollectAllWorkspaces"></a>

- *Type:* bool | cdktn.IResolvable

Whether cost data is collected for every workspace in the Databricks account rather than this workspace only.

This takes effect across the Databricks account: if any one workspace enables it, Datadog collects cost data for all of them regardless of their individual settings, and every covered workspace incurs Cloud Cost Management charges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#ccm_collect_all_workspaces IntegrationDatabricksAccount#ccm_collect_all_workspaces}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.resetSettings"></a>

```python
def reset_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.settingsInput">settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.settings"></a>

```python
settings: IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.settingsInput"></a>

```python
settings_input: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics</a>

---


### IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.resetCcmCollectAllWorkspaces">reset_ccm_collect_all_workspaces</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ccm_collect_all_workspaces` <a name="reset_ccm_collect_all_workspaces" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.resetCcmCollectAllWorkspaces"></a>

```python
def reset_ccm_collect_all_workspaces() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.ccmCollectAllWorkspacesInput">ccm_collect_all_workspaces_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.ccmCollectAllWorkspaces">ccm_collect_all_workspaces</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ccm_collect_all_workspaces_input`<sup>Optional</sup> <a name="ccm_collect_all_workspaces_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.ccmCollectAllWorkspacesInput"></a>

```python
ccm_collect_all_workspaces_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ccm_collect_all_workspaces`<sup>Required</sup> <a name="ccm_collect_all_workspaces" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.ccmCollectAllWorkspaces"></a>

```python
ccm_collect_all_workspaces: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings</a>

---


### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resetSettings">reset_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_settings` <a name="put_settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.putSettings"></a>

```python
def put_settings(
  dd_api_key_id: str = None,
  dd_api_key_secret_wo: str = None,
  dd_api_key_secret_wo_version: str = None,
  djm_global_init_script_enabled: bool | IResolvable = None,
  script_gpum_enabled: bool | IResolvable = None,
  script_logs_enabled: bool | IResolvable = None,
  serverless_jobs_enabled: bool | IResolvable = None
) -> None
```

###### `dd_api_key_id`<sup>Optional</sup> <a name="dd_api_key_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.putSettings.parameter.ddApiKeyId"></a>

- *Type:* str

ID of the Datadog API key the global init script uses to submit data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#dd_api_key_id IntegrationDatabricksAccount#dd_api_key_id}

---

###### `dd_api_key_secret_wo`<sup>Optional</sup> <a name="dd_api_key_secret_wo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.putSettings.parameter.ddApiKeySecretWo"></a>

- *Type:* str

Secret value of the Datadog API key identified by `dd_api_key_id`. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#dd_api_key_secret_wo IntegrationDatabricksAccount#dd_api_key_secret_wo}

---

###### `dd_api_key_secret_wo_version`<sup>Optional</sup> <a name="dd_api_key_secret_wo_version" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.putSettings.parameter.ddApiKeySecretWoVersion"></a>

- *Type:* str

Version trigger for dd_api_key_secret_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#dd_api_key_secret_wo_version IntegrationDatabricksAccount#dd_api_key_secret_wo_version}

---

###### `djm_global_init_script_enabled`<sup>Optional</sup> <a name="djm_global_init_script_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.putSettings.parameter.djmGlobalInitScriptEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Datadog installs and manages the Agent on your Databricks clusters through a global init script.

The script does not apply to clusters in Standard access mode. When `false`, the Agent is installed manually.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#djm_global_init_script_enabled IntegrationDatabricksAccount#djm_global_init_script_enabled}

---

###### `script_gpum_enabled`<sup>Optional</sup> <a name="script_gpum_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.putSettings.parameter.scriptGpumEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether GPU metrics are collected from your Databricks clusters.

The Agent installed by the global init script performs the collection, so this requires the dataflow to be enabled with `djm_global_init_script_enabled` set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#script_gpum_enabled IntegrationDatabricksAccount#script_gpum_enabled}

---

###### `script_logs_enabled`<sup>Optional</sup> <a name="script_logs_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.putSettings.parameter.scriptLogsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether driver and worker logs are collected from your Databricks clusters.

The Agent installed by the global init script performs the collection, so this requires the dataflow to be enabled with `djm_global_init_script_enabled` set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#script_logs_enabled IntegrationDatabricksAccount#script_logs_enabled}

---

###### `serverless_jobs_enabled`<sup>Optional</sup> <a name="serverless_jobs_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.putSettings.parameter.serverlessJobsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether health and cost data is collected for jobs running on Serverless or SQL Warehouse compute.

This compute has no clusters for the global init script to target, so collection reads the Databricks system tables and requires `system_tables_sql_warehouse_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#serverless_jobs_enabled IntegrationDatabricksAccount#serverless_jobs_enabled}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.resetSettings"></a>

```python
def reset_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.settingsInput">settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.settings"></a>

```python
settings: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.settingsInput"></a>

```python
settings_input: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring</a>

---


### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDdApiKeyId">reset_dd_api_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDdApiKeySecretWo">reset_dd_api_key_secret_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDdApiKeySecretWoVersion">reset_dd_api_key_secret_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDjmGlobalInitScriptEnabled">reset_djm_global_init_script_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetScriptGpumEnabled">reset_script_gpum_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetScriptLogsEnabled">reset_script_logs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetServerlessJobsEnabled">reset_serverless_jobs_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dd_api_key_id` <a name="reset_dd_api_key_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDdApiKeyId"></a>

```python
def reset_dd_api_key_id() -> None
```

##### `reset_dd_api_key_secret_wo` <a name="reset_dd_api_key_secret_wo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDdApiKeySecretWo"></a>

```python
def reset_dd_api_key_secret_wo() -> None
```

##### `reset_dd_api_key_secret_wo_version` <a name="reset_dd_api_key_secret_wo_version" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDdApiKeySecretWoVersion"></a>

```python
def reset_dd_api_key_secret_wo_version() -> None
```

##### `reset_djm_global_init_script_enabled` <a name="reset_djm_global_init_script_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetDjmGlobalInitScriptEnabled"></a>

```python
def reset_djm_global_init_script_enabled() -> None
```

##### `reset_script_gpum_enabled` <a name="reset_script_gpum_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetScriptGpumEnabled"></a>

```python
def reset_script_gpum_enabled() -> None
```

##### `reset_script_logs_enabled` <a name="reset_script_logs_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetScriptLogsEnabled"></a>

```python
def reset_script_logs_enabled() -> None
```

##### `reset_serverless_jobs_enabled` <a name="reset_serverless_jobs_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.resetServerlessJobsEnabled"></a>

```python
def reset_serverless_jobs_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeyIdInput">dd_api_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWoInput">dd_api_key_secret_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWoVersionInput">dd_api_key_secret_wo_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.djmGlobalInitScriptEnabledInput">djm_global_init_script_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptGpumEnabledInput">script_gpum_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptLogsEnabledInput">script_logs_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.serverlessJobsEnabledInput">serverless_jobs_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeyId">dd_api_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWo">dd_api_key_secret_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWoVersion">dd_api_key_secret_wo_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.djmGlobalInitScriptEnabled">djm_global_init_script_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptGpumEnabled">script_gpum_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptLogsEnabled">script_logs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.serverlessJobsEnabled">serverless_jobs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dd_api_key_id_input`<sup>Optional</sup> <a name="dd_api_key_id_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeyIdInput"></a>

```python
dd_api_key_id_input: str
```

- *Type:* str

---

##### `dd_api_key_secret_wo_input`<sup>Optional</sup> <a name="dd_api_key_secret_wo_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWoInput"></a>

```python
dd_api_key_secret_wo_input: str
```

- *Type:* str

---

##### `dd_api_key_secret_wo_version_input`<sup>Optional</sup> <a name="dd_api_key_secret_wo_version_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWoVersionInput"></a>

```python
dd_api_key_secret_wo_version_input: str
```

- *Type:* str

---

##### `djm_global_init_script_enabled_input`<sup>Optional</sup> <a name="djm_global_init_script_enabled_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.djmGlobalInitScriptEnabledInput"></a>

```python
djm_global_init_script_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `script_gpum_enabled_input`<sup>Optional</sup> <a name="script_gpum_enabled_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptGpumEnabledInput"></a>

```python
script_gpum_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `script_logs_enabled_input`<sup>Optional</sup> <a name="script_logs_enabled_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptLogsEnabledInput"></a>

```python
script_logs_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `serverless_jobs_enabled_input`<sup>Optional</sup> <a name="serverless_jobs_enabled_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.serverlessJobsEnabledInput"></a>

```python
serverless_jobs_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `dd_api_key_id`<sup>Required</sup> <a name="dd_api_key_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeyId"></a>

```python
dd_api_key_id: str
```

- *Type:* str

---

##### ~~`dd_api_key_secret_wo`~~<sup>Required</sup> <a name="dd_api_key_secret_wo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
dd_api_key_secret_wo: str
```

- *Type:* str

---

##### `dd_api_key_secret_wo_version`<sup>Required</sup> <a name="dd_api_key_secret_wo_version" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.ddApiKeySecretWoVersion"></a>

```python
dd_api_key_secret_wo_version: str
```

- *Type:* str

---

##### `djm_global_init_script_enabled`<sup>Required</sup> <a name="djm_global_init_script_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.djmGlobalInitScriptEnabled"></a>

```python
djm_global_init_script_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `script_gpum_enabled`<sup>Required</sup> <a name="script_gpum_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptGpumEnabled"></a>

```python
script_gpum_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `script_logs_enabled`<sup>Required</sup> <a name="script_logs_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.scriptLogsEnabled"></a>

```python
script_logs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `serverless_jobs_enabled`<sup>Required</sup> <a name="serverless_jobs_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.serverlessJobsEnabled"></a>

```python
serverless_jobs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings</a>

---


### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resetSettings">reset_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_settings` <a name="put_settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.putSettings"></a>

```python
def put_settings(
  do_crawlers_cron: str = None,
  sync_system_catalog: bool | IResolvable = None
) -> None
```

###### `do_crawlers_cron`<sup>Optional</sup> <a name="do_crawlers_cron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.putSettings.parameter.doCrawlersCron"></a>

- *Type:* str

Cron expression setting how often Datadog connects to your Databricks warehouse to collect metadata.

Currently, only hourly (`0 * * * *`) and daily (`0 0 * * *`) are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#do_crawlers_cron IntegrationDatabricksAccount#do_crawlers_cron}

---

###### `sync_system_catalog`<sup>Optional</sup> <a name="sync_system_catalog" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.putSettings.parameter.syncSystemCatalog"></a>

- *Type:* bool | cdktn.IResolvable

Whether metadata from the Databricks `system` catalog is included in Data Observability alongside your data catalogs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#sync_system_catalog IntegrationDatabricksAccount#sync_system_catalog}

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.resetSettings"></a>

```python
def reset_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.settingsInput">settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.settings"></a>

```python
settings: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.settingsInput"></a>

```python
settings_input: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring</a>

---


### IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resetDoCrawlersCron">reset_do_crawlers_cron</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resetSyncSystemCatalog">reset_sync_system_catalog</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_do_crawlers_cron` <a name="reset_do_crawlers_cron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resetDoCrawlersCron"></a>

```python
def reset_do_crawlers_cron() -> None
```

##### `reset_sync_system_catalog` <a name="reset_sync_system_catalog" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.resetSyncSystemCatalog"></a>

```python
def reset_sync_system_catalog() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.doCrawlersCronInput">do_crawlers_cron_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSystemCatalogInput">sync_system_catalog_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.doCrawlersCron">do_crawlers_cron</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSystemCatalog">sync_system_catalog</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `do_crawlers_cron_input`<sup>Optional</sup> <a name="do_crawlers_cron_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.doCrawlersCronInput"></a>

```python
do_crawlers_cron_input: str
```

- *Type:* str

---

##### `sync_system_catalog_input`<sup>Optional</sup> <a name="sync_system_catalog_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSystemCatalogInput"></a>

```python
sync_system_catalog_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `do_crawlers_cron`<sup>Required</sup> <a name="do_crawlers_cron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.doCrawlersCron"></a>

```python
do_crawlers_cron: str
```

- *Type:* str

---

##### `sync_system_catalog`<sup>Required</sup> <a name="sync_system_catalog" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.syncSystemCatalog"></a>

```python
sync_system_catalog: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings</a>

---


### IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference <a name="IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics</a>

---


### IntegrationDatabricksAccountDataflowsOutputReference <a name="IntegrationDatabricksAccountDataflowsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksCloudCostMetrics">put_databricks_cloud_cost_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityJobsMonitoring">put_databricks_data_observability_jobs_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityQualityMonitoring">put_databricks_data_observability_quality_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksModelServingMetrics">put_databricks_model_serving_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksCloudCostMetrics">reset_databricks_cloud_cost_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksDataObservabilityJobsMonitoring">reset_databricks_data_observability_jobs_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksDataObservabilityQualityMonitoring">reset_databricks_data_observability_quality_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksModelServingMetrics">reset_databricks_model_serving_metrics</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_databricks_cloud_cost_metrics` <a name="put_databricks_cloud_cost_metrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksCloudCostMetrics"></a>

```python
def put_databricks_cloud_cost_metrics(
  enabled: bool | IResolvable = None,
  settings: IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksCloudCostMetrics.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#enabled IntegrationDatabricksAccount#enabled}

---

###### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksCloudCostMetrics.parameter.settings"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsSettings</a>

Settings of the Cloud Cost Management dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#settings IntegrationDatabricksAccount#settings}

---

##### `put_databricks_data_observability_jobs_monitoring` <a name="put_databricks_data_observability_jobs_monitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityJobsMonitoring"></a>

```python
def put_databricks_data_observability_jobs_monitoring(
  enabled: bool | IResolvable = None,
  settings: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityJobsMonitoring.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#enabled IntegrationDatabricksAccount#enabled}

---

###### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityJobsMonitoring.parameter.settings"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringSettings</a>

Settings of the Data Jobs Monitoring dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#settings IntegrationDatabricksAccount#settings}

---

##### `put_databricks_data_observability_quality_monitoring` <a name="put_databricks_data_observability_quality_monitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityQualityMonitoring"></a>

```python
def put_databricks_data_observability_quality_monitoring(
  enabled: bool | IResolvable = None,
  settings: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityQualityMonitoring.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#enabled IntegrationDatabricksAccount#enabled}

---

###### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksDataObservabilityQualityMonitoring.parameter.settings"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringSettings</a>

Settings of the Data Observability dataflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#settings IntegrationDatabricksAccount#settings}

---

##### `put_databricks_model_serving_metrics` <a name="put_databricks_model_serving_metrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksModelServingMetrics"></a>

```python
def put_databricks_model_serving_metrics(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.putDatabricksModelServingMetrics.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_databricks_account#enabled IntegrationDatabricksAccount#enabled}

---

##### `reset_databricks_cloud_cost_metrics` <a name="reset_databricks_cloud_cost_metrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksCloudCostMetrics"></a>

```python
def reset_databricks_cloud_cost_metrics() -> None
```

##### `reset_databricks_data_observability_jobs_monitoring` <a name="reset_databricks_data_observability_jobs_monitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksDataObservabilityJobsMonitoring"></a>

```python
def reset_databricks_data_observability_jobs_monitoring() -> None
```

##### `reset_databricks_data_observability_quality_monitoring` <a name="reset_databricks_data_observability_quality_monitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksDataObservabilityQualityMonitoring"></a>

```python
def reset_databricks_data_observability_quality_monitoring() -> None
```

##### `reset_databricks_model_serving_metrics` <a name="reset_databricks_model_serving_metrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.resetDatabricksModelServingMetrics"></a>

```python
def reset_databricks_model_serving_metrics() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksCloudCostMetrics">databricks_cloud_cost_metrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityJobsMonitoring">databricks_data_observability_jobs_monitoring</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityQualityMonitoring">databricks_data_observability_quality_monitoring</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksModelServingMetrics">databricks_model_serving_metrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksCloudCostMetricsInput">databricks_cloud_cost_metrics_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityJobsMonitoringInput">databricks_data_observability_jobs_monitoring_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityQualityMonitoringInput">databricks_data_observability_quality_monitoring_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksModelServingMetricsInput">databricks_model_serving_metrics_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows">IntegrationDatabricksAccountDataflows</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `databricks_cloud_cost_metrics`<sup>Required</sup> <a name="databricks_cloud_cost_metrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksCloudCostMetrics"></a>

```python
databricks_cloud_cost_metrics: IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetricsOutputReference</a>

---

##### `databricks_data_observability_jobs_monitoring`<sup>Required</sup> <a name="databricks_data_observability_jobs_monitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityJobsMonitoring"></a>

```python
databricks_data_observability_jobs_monitoring: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoringOutputReference</a>

---

##### `databricks_data_observability_quality_monitoring`<sup>Required</sup> <a name="databricks_data_observability_quality_monitoring" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityQualityMonitoring"></a>

```python
databricks_data_observability_quality_monitoring: IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoringOutputReference</a>

---

##### `databricks_model_serving_metrics`<sup>Required</sup> <a name="databricks_model_serving_metrics" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksModelServingMetrics"></a>

```python
databricks_model_serving_metrics: IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetricsOutputReference</a>

---

##### `databricks_cloud_cost_metrics_input`<sup>Optional</sup> <a name="databricks_cloud_cost_metrics_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksCloudCostMetricsInput"></a>

```python
databricks_cloud_cost_metrics_input: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics">IntegrationDatabricksAccountDataflowsDatabricksCloudCostMetrics</a>

---

##### `databricks_data_observability_jobs_monitoring_input`<sup>Optional</sup> <a name="databricks_data_observability_jobs_monitoring_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityJobsMonitoringInput"></a>

```python
databricks_data_observability_jobs_monitoring_input: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityJobsMonitoring</a>

---

##### `databricks_data_observability_quality_monitoring_input`<sup>Optional</sup> <a name="databricks_data_observability_quality_monitoring_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksDataObservabilityQualityMonitoringInput"></a>

```python
databricks_data_observability_quality_monitoring_input: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring">IntegrationDatabricksAccountDataflowsDatabricksDataObservabilityQualityMonitoring</a>

---

##### `databricks_model_serving_metrics_input`<sup>Optional</sup> <a name="databricks_model_serving_metrics_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.databricksModelServingMetricsInput"></a>

```python
databricks_model_serving_metrics_input: IResolvable | IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics">IntegrationDatabricksAccountDataflowsDatabricksModelServingMetrics</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflowsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationDatabricksAccountDataflows
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountDataflows">IntegrationDatabricksAccountDataflows</a>

---


### IntegrationDatabricksAccountSettingsOutputReference <a name="IntegrationDatabricksAccountSettingsOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_databricks_account

integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.resetSystemTablesSqlWarehouseId">reset_system_tables_sql_warehouse_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_system_tables_sql_warehouse_id` <a name="reset_system_tables_sql_warehouse_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.resetSystemTablesSqlWarehouseId"></a>

```python
def reset_system_tables_sql_warehouse_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.systemTablesSqlWarehouseIdInput">system_tables_sql_warehouse_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.workspaceUrlInput">workspace_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.systemTablesSqlWarehouseId">system_tables_sql_warehouse_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.workspaceUrl">workspace_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings">IntegrationDatabricksAccountSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `system_tables_sql_warehouse_id_input`<sup>Optional</sup> <a name="system_tables_sql_warehouse_id_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.systemTablesSqlWarehouseIdInput"></a>

```python
system_tables_sql_warehouse_id_input: str
```

- *Type:* str

---

##### `workspace_url_input`<sup>Optional</sup> <a name="workspace_url_input" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.workspaceUrlInput"></a>

```python
workspace_url_input: str
```

- *Type:* str

---

##### `system_tables_sql_warehouse_id`<sup>Required</sup> <a name="system_tables_sql_warehouse_id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.systemTablesSqlWarehouseId"></a>

```python
system_tables_sql_warehouse_id: str
```

- *Type:* str

---

##### `workspace_url`<sup>Required</sup> <a name="workspace_url" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.workspaceUrl"></a>

```python
workspace_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationDatabricksAccountSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountSettings">IntegrationDatabricksAccountSettings</a>

---



