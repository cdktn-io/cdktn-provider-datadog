# `integrationTwilioAccount` Submodule <a name="`integrationTwilioAccount` Submodule" id="@cdktn/provider-datadog.integrationTwilioAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationTwilioAccount <a name="IntegrationTwilioAccount" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account datadog_integration_twilio_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccount(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authentication: IntegrationTwilioAccountAuthentication,
  name: str,
  settings: IntegrationTwilioAccountSettings,
  dataflows: IntegrationTwilioAccountDataflows = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication">IntegrationTwilioAccountAuthentication</a></code> | Authentication configured on the Twilio integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.name">name</a></code> | <code>str</code> | Human-readable name of the Twilio integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings">IntegrationTwilioAccountSettings</a></code> | Settings configured on the Twilio integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.dataflows">dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows">IntegrationTwilioAccountDataflows</a></code> | Data Datadog collects from Twilio, keyed by dataflow id. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.authentication"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication">IntegrationTwilioAccountAuthentication</a>

Authentication configured on the Twilio integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#authentication IntegrationTwilioAccount#authentication}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.name"></a>

- *Type:* str

Human-readable name of the Twilio integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#name IntegrationTwilioAccount#name}

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.settings"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings">IntegrationTwilioAccountSettings</a>

Settings configured on the Twilio integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#settings IntegrationTwilioAccount#settings}

---

##### `dataflows`<sup>Optional</sup> <a name="dataflows" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.Initializer.parameter.dataflows"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows">IntegrationTwilioAccountDataflows</a>

Data Datadog collects from Twilio, keyed by dataflow id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#dataflows IntegrationTwilioAccount#dataflows}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putAuthentication">put_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putDataflows">put_dataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.resetDataflows">reset_dataflows</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authentication` <a name="put_authentication" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putAuthentication"></a>

```python
def put_authentication(
  twilio_integration_account_basic_auth: IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth = None
) -> None
```

###### `twilio_integration_account_basic_auth`<sup>Optional</sup> <a name="twilio_integration_account_basic_auth" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putAuthentication.parameter.twilioIntegrationAccountBasicAuth"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth">IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth</a>

The basic authentication method and username configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#twilio_integration_account_basic_auth IntegrationTwilioAccount#twilio_integration_account_basic_auth}

---

##### `put_dataflows` <a name="put_dataflows" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putDataflows"></a>

```python
def put_dataflows(
  twilio_alerts_logs: IntegrationTwilioAccountDataflowsTwilioAlertsLogs = None,
  twilio_call_summaries_logs: IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs = None,
  twilio_cloud_cost_metrics: IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics = None,
  twilio_events_logs: IntegrationTwilioAccountDataflowsTwilioEventsLogs = None,
  twilio_messages_logs: IntegrationTwilioAccountDataflowsTwilioMessagesLogs = None
) -> None
```

###### `twilio_alerts_logs`<sup>Optional</sup> <a name="twilio_alerts_logs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putDataflows.parameter.twilioAlertsLogs"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs">IntegrationTwilioAccountDataflowsTwilioAlertsLogs</a>

Twilio Alert resource logs, which detail the errors and warnings raised when Twilio makes a webhook request to your server or when your application calls the Twilio REST API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#twilio_alerts_logs IntegrationTwilioAccount#twilio_alerts_logs}

---

###### `twilio_call_summaries_logs`<sup>Optional</sup> <a name="twilio_call_summaries_logs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putDataflows.parameter.twilioCallSummariesLogs"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs</a>

Twilio Call Summary resource logs, covering the metadata and performance of the calls made from your Twilio account.

Requires Voice Insights Advanced Features to be enabled on the Twilio account; without it this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#twilio_call_summaries_logs IntegrationTwilioAccount#twilio_call_summaries_logs}

---

###### `twilio_cloud_cost_metrics`<sup>Optional</sup> <a name="twilio_cloud_cost_metrics" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putDataflows.parameter.twilioCloudCostMetrics"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics">IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics</a>

Your Twilio cost data, so that Twilio spend can be broken down and attributed in [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#twilio_cloud_cost_metrics IntegrationTwilioAccount#twilio_cloud_cost_metrics}

---

###### `twilio_events_logs`<sup>Optional</sup> <a name="twilio_events_logs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putDataflows.parameter.twilioEventsLogs"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs">IntegrationTwilioAccountDataflowsTwilioEventsLogs</a>

Twilio Event resource logs, which record virtually every action taken in your Twilio account, such as provisioning a phone number, changing account security settings, or deleting a recording.

Actions are recorded whether they came from the REST API, a user in the Twilio Console, or Twilio itself. [Cloud SIEM](https://docs.datadoghq.com/security/cloud_siem/) analyzes and correlates these logs to detect threats in real time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#twilio_events_logs IntegrationTwilioAccount#twilio_events_logs}

---

###### `twilio_messages_logs`<sup>Optional</sup> <a name="twilio_messages_logs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putDataflows.parameter.twilioMessagesLogs"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs">IntegrationTwilioAccountDataflowsTwilioMessagesLogs</a>

Twilio Message resource logs for inbound and outbound messages, used to track delivery and troubleshoot message errors.

A log is produced when you send a message through the REST API, when Twilio executes a TwiML instruction, and when someone messages one of your Twilio numbers or channel addresses. Message bodies are never collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#twilio_messages_logs IntegrationTwilioAccount#twilio_messages_logs}

---

##### `put_settings` <a name="put_settings" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putSettings"></a>

```python
def put_settings(
  account_sid: str,
  censor_logs: bool | IResolvable = None
) -> None
```

###### `account_sid`<sup>Required</sup> <a name="account_sid" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putSettings.parameter.accountSid"></a>

- *Type:* str

Twilio Account SID that uniquely identifies your Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#account_sid IntegrationTwilioAccount#account_sid}

---

###### `censor_logs`<sup>Optional</sup> <a name="censor_logs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.putSettings.parameter.censorLogs"></a>

- *Type:* bool | cdktn.IResolvable

When enabled, Twilio phone numbers in the `to` field and SMS message bodies are censored for privacy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#censor_logs IntegrationTwilioAccount#censor_logs}

---

##### `reset_dataflows` <a name="reset_dataflows" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.resetDataflows"></a>

```python
def reset_dataflows() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IntegrationTwilioAccount resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isConstruct"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isTerraformElement"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isTerraformResource"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IntegrationTwilioAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationTwilioAccount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationTwilioAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationTwilioAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference">IntegrationTwilioAccountAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.dataflows">dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference">IntegrationTwilioAccountDataflowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference">IntegrationTwilioAccountSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.authenticationInput">authentication_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication">IntegrationTwilioAccountAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.dataflowsInput">dataflows_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows">IntegrationTwilioAccountDataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.settingsInput">settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings">IntegrationTwilioAccountSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.authentication"></a>

```python
authentication: IntegrationTwilioAccountAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference">IntegrationTwilioAccountAuthenticationOutputReference</a>

---

##### `dataflows`<sup>Required</sup> <a name="dataflows" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.dataflows"></a>

```python
dataflows: IntegrationTwilioAccountDataflowsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference">IntegrationTwilioAccountDataflowsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.settings"></a>

```python
settings: IntegrationTwilioAccountSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference">IntegrationTwilioAccountSettingsOutputReference</a>

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.authenticationInput"></a>

```python
authentication_input: IResolvable | IntegrationTwilioAccountAuthentication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication">IntegrationTwilioAccountAuthentication</a>

---

##### `dataflows_input`<sup>Optional</sup> <a name="dataflows_input" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.dataflowsInput"></a>

```python
dataflows_input: IResolvable | IntegrationTwilioAccountDataflows
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows">IntegrationTwilioAccountDataflows</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.settingsInput"></a>

```python
settings_input: IResolvable | IntegrationTwilioAccountSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings">IntegrationTwilioAccountSettings</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationTwilioAccountAuthentication <a name="IntegrationTwilioAccountAuthentication" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountAuthentication(
  twilio_integration_account_basic_auth: IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication.property.twilioIntegrationAccountBasicAuth">twilio_integration_account_basic_auth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth">IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth</a></code> | The basic authentication method and username configured on the account. |

---

##### `twilio_integration_account_basic_auth`<sup>Optional</sup> <a name="twilio_integration_account_basic_auth" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication.property.twilioIntegrationAccountBasicAuth"></a>

```python
twilio_integration_account_basic_auth: IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth">IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth</a>

The basic authentication method and username configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#twilio_integration_account_basic_auth IntegrationTwilioAccount#twilio_integration_account_basic_auth}

---

### IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth <a name="IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth(
  password_wo: str,
  password_wo_version: str,
  username: str,
  auth_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.property.passwordWo">password_wo</a></code> | <code>str</code> | Secret password or private key. This write-only value is not stored in Terraform state. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.property.passwordWoVersion">password_wo_version</a></code> | <code>str</code> | Version trigger for password_wo rotation. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.property.username">username</a></code> | <code>str</code> | Non-secret username or public identifier for the credential pair. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.property.authType">auth_type</a></code> | <code>str</code> | The authentication method type. Valid values are `basic`. Defaults to `"basic"`. |

---

##### `password_wo`<sup>Required</sup> <a name="password_wo" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.property.passwordWo"></a>

```python
password_wo: str
```

- *Type:* str

Secret password or private key. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#password_wo IntegrationTwilioAccount#password_wo}

---

##### `password_wo_version`<sup>Required</sup> <a name="password_wo_version" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.property.passwordWoVersion"></a>

```python
password_wo_version: str
```

- *Type:* str

Version trigger for password_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#password_wo_version IntegrationTwilioAccount#password_wo_version}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.property.username"></a>

```python
username: str
```

- *Type:* str

Non-secret username or public identifier for the credential pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#username IntegrationTwilioAccount#username}

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

The authentication method type. Valid values are `basic`. Defaults to `"basic"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#auth_type IntegrationTwilioAccount#auth_type}

---

### IntegrationTwilioAccountConfig <a name="IntegrationTwilioAccountConfig" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authentication: IntegrationTwilioAccountAuthentication,
  name: str,
  settings: IntegrationTwilioAccountSettings,
  dataflows: IntegrationTwilioAccountDataflows = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication">IntegrationTwilioAccountAuthentication</a></code> | Authentication configured on the Twilio integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.name">name</a></code> | <code>str</code> | Human-readable name of the Twilio integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings">IntegrationTwilioAccountSettings</a></code> | Settings configured on the Twilio integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.dataflows">dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows">IntegrationTwilioAccountDataflows</a></code> | Data Datadog collects from Twilio, keyed by dataflow id. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.authentication"></a>

```python
authentication: IntegrationTwilioAccountAuthentication
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication">IntegrationTwilioAccountAuthentication</a>

Authentication configured on the Twilio integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#authentication IntegrationTwilioAccount#authentication}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Human-readable name of the Twilio integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#name IntegrationTwilioAccount#name}

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.settings"></a>

```python
settings: IntegrationTwilioAccountSettings
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings">IntegrationTwilioAccountSettings</a>

Settings configured on the Twilio integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#settings IntegrationTwilioAccount#settings}

---

##### `dataflows`<sup>Optional</sup> <a name="dataflows" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountConfig.property.dataflows"></a>

```python
dataflows: IntegrationTwilioAccountDataflows
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows">IntegrationTwilioAccountDataflows</a>

Data Datadog collects from Twilio, keyed by dataflow id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#dataflows IntegrationTwilioAccount#dataflows}

---

### IntegrationTwilioAccountDataflows <a name="IntegrationTwilioAccountDataflows" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountDataflows(
  twilio_alerts_logs: IntegrationTwilioAccountDataflowsTwilioAlertsLogs = None,
  twilio_call_summaries_logs: IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs = None,
  twilio_cloud_cost_metrics: IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics = None,
  twilio_events_logs: IntegrationTwilioAccountDataflowsTwilioEventsLogs = None,
  twilio_messages_logs: IntegrationTwilioAccountDataflowsTwilioMessagesLogs = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioAlertsLogs">twilio_alerts_logs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs">IntegrationTwilioAccountDataflowsTwilioAlertsLogs</a></code> | Twilio Alert resource logs, which detail the errors and warnings raised when Twilio makes a webhook request to your server or when your application calls the Twilio REST API. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioCallSummariesLogs">twilio_call_summaries_logs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs</a></code> | Twilio Call Summary resource logs, covering the metadata and performance of the calls made from your Twilio account. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioCloudCostMetrics">twilio_cloud_cost_metrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics">IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics</a></code> | Your Twilio cost data, so that Twilio spend can be broken down and attributed in [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/). |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioEventsLogs">twilio_events_logs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs">IntegrationTwilioAccountDataflowsTwilioEventsLogs</a></code> | Twilio Event resource logs, which record virtually every action taken in your Twilio account, such as provisioning a phone number, changing account security settings, or deleting a recording. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioMessagesLogs">twilio_messages_logs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs">IntegrationTwilioAccountDataflowsTwilioMessagesLogs</a></code> | Twilio Message resource logs for inbound and outbound messages, used to track delivery and troubleshoot message errors. |

---

##### `twilio_alerts_logs`<sup>Optional</sup> <a name="twilio_alerts_logs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioAlertsLogs"></a>

```python
twilio_alerts_logs: IntegrationTwilioAccountDataflowsTwilioAlertsLogs
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs">IntegrationTwilioAccountDataflowsTwilioAlertsLogs</a>

Twilio Alert resource logs, which detail the errors and warnings raised when Twilio makes a webhook request to your server or when your application calls the Twilio REST API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#twilio_alerts_logs IntegrationTwilioAccount#twilio_alerts_logs}

---

##### `twilio_call_summaries_logs`<sup>Optional</sup> <a name="twilio_call_summaries_logs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioCallSummariesLogs"></a>

```python
twilio_call_summaries_logs: IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs</a>

Twilio Call Summary resource logs, covering the metadata and performance of the calls made from your Twilio account.

Requires Voice Insights Advanced Features to be enabled on the Twilio account; without it this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#twilio_call_summaries_logs IntegrationTwilioAccount#twilio_call_summaries_logs}

---

##### `twilio_cloud_cost_metrics`<sup>Optional</sup> <a name="twilio_cloud_cost_metrics" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioCloudCostMetrics"></a>

```python
twilio_cloud_cost_metrics: IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics">IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics</a>

Your Twilio cost data, so that Twilio spend can be broken down and attributed in [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#twilio_cloud_cost_metrics IntegrationTwilioAccount#twilio_cloud_cost_metrics}

---

##### `twilio_events_logs`<sup>Optional</sup> <a name="twilio_events_logs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioEventsLogs"></a>

```python
twilio_events_logs: IntegrationTwilioAccountDataflowsTwilioEventsLogs
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs">IntegrationTwilioAccountDataflowsTwilioEventsLogs</a>

Twilio Event resource logs, which record virtually every action taken in your Twilio account, such as provisioning a phone number, changing account security settings, or deleting a recording.

Actions are recorded whether they came from the REST API, a user in the Twilio Console, or Twilio itself. [Cloud SIEM](https://docs.datadoghq.com/security/cloud_siem/) analyzes and correlates these logs to detect threats in real time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#twilio_events_logs IntegrationTwilioAccount#twilio_events_logs}

---

##### `twilio_messages_logs`<sup>Optional</sup> <a name="twilio_messages_logs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows.property.twilioMessagesLogs"></a>

```python
twilio_messages_logs: IntegrationTwilioAccountDataflowsTwilioMessagesLogs
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs">IntegrationTwilioAccountDataflowsTwilioMessagesLogs</a>

Twilio Message resource logs for inbound and outbound messages, used to track delivery and troubleshoot message errors.

A log is produced when you send a message through the REST API, when Twilio executes a TwiML instruction, and when someone messages one of your Twilio numbers or channel addresses. Message bodies are never collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#twilio_messages_logs IntegrationTwilioAccount#twilio_messages_logs}

---

### IntegrationTwilioAccountDataflowsTwilioAlertsLogs <a name="IntegrationTwilioAccountDataflowsTwilioAlertsLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#enabled IntegrationTwilioAccount#enabled}

---

### IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus <a name="IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus()
```


### IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs <a name="IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#enabled IntegrationTwilioAccount#enabled}

---

### IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus <a name="IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus()
```


### IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics <a name="IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#enabled IntegrationTwilioAccount#enabled}

---

### IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus <a name="IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus()
```


### IntegrationTwilioAccountDataflowsTwilioEventsLogs <a name="IntegrationTwilioAccountDataflowsTwilioEventsLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#enabled IntegrationTwilioAccount#enabled}

---

### IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus <a name="IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus()
```


### IntegrationTwilioAccountDataflowsTwilioMessagesLogs <a name="IntegrationTwilioAccountDataflowsTwilioMessagesLogs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#enabled IntegrationTwilioAccount#enabled}

---

### IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus <a name="IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus()
```


### IntegrationTwilioAccountSettings <a name="IntegrationTwilioAccountSettings" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountSettings(
  account_sid: str,
  censor_logs: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings.property.accountSid">account_sid</a></code> | <code>str</code> | Twilio Account SID that uniquely identifies your Twilio account. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings.property.censorLogs">censor_logs</a></code> | <code>bool \| cdktn.IResolvable</code> | When enabled, Twilio phone numbers in the `to` field and SMS message bodies are censored for privacy. |

---

##### `account_sid`<sup>Required</sup> <a name="account_sid" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings.property.accountSid"></a>

```python
account_sid: str
```

- *Type:* str

Twilio Account SID that uniquely identifies your Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#account_sid IntegrationTwilioAccount#account_sid}

---

##### `censor_logs`<sup>Optional</sup> <a name="censor_logs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings.property.censorLogs"></a>

```python
censor_logs: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When enabled, Twilio phone numbers in the `to` field and SMS message bodies are censored for privacy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#censor_logs IntegrationTwilioAccount#censor_logs}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationTwilioAccountAuthenticationOutputReference <a name="IntegrationTwilioAccountAuthenticationOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.putTwilioIntegrationAccountBasicAuth">put_twilio_integration_account_basic_auth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.resetTwilioIntegrationAccountBasicAuth">reset_twilio_integration_account_basic_auth</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_twilio_integration_account_basic_auth` <a name="put_twilio_integration_account_basic_auth" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.putTwilioIntegrationAccountBasicAuth"></a>

```python
def put_twilio_integration_account_basic_auth(
  password_wo: str,
  password_wo_version: str,
  username: str,
  auth_type: str = None
) -> None
```

###### `password_wo`<sup>Required</sup> <a name="password_wo" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.putTwilioIntegrationAccountBasicAuth.parameter.passwordWo"></a>

- *Type:* str

Secret password or private key. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#password_wo IntegrationTwilioAccount#password_wo}

---

###### `password_wo_version`<sup>Required</sup> <a name="password_wo_version" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.putTwilioIntegrationAccountBasicAuth.parameter.passwordWoVersion"></a>

- *Type:* str

Version trigger for password_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#password_wo_version IntegrationTwilioAccount#password_wo_version}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.putTwilioIntegrationAccountBasicAuth.parameter.username"></a>

- *Type:* str

Non-secret username or public identifier for the credential pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#username IntegrationTwilioAccount#username}

---

###### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.putTwilioIntegrationAccountBasicAuth.parameter.authType"></a>

- *Type:* str

The authentication method type. Valid values are `basic`. Defaults to `"basic"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#auth_type IntegrationTwilioAccount#auth_type}

---

##### `reset_twilio_integration_account_basic_auth` <a name="reset_twilio_integration_account_basic_auth" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.resetTwilioIntegrationAccountBasicAuth"></a>

```python
def reset_twilio_integration_account_basic_auth() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.twilioIntegrationAccountBasicAuth">twilio_integration_account_basic_auth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference">IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.twilioIntegrationAccountBasicAuthInput">twilio_integration_account_basic_auth_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth">IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication">IntegrationTwilioAccountAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `twilio_integration_account_basic_auth`<sup>Required</sup> <a name="twilio_integration_account_basic_auth" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.twilioIntegrationAccountBasicAuth"></a>

```python
twilio_integration_account_basic_auth: IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference">IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference</a>

---

##### `twilio_integration_account_basic_auth_input`<sup>Optional</sup> <a name="twilio_integration_account_basic_auth_input" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.twilioIntegrationAccountBasicAuthInput"></a>

```python
twilio_integration_account_basic_auth_input: IResolvable | IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth">IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationTwilioAccountAuthentication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthentication">IntegrationTwilioAccountAuthentication</a>

---


### IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference <a name="IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.resetAuthType">reset_auth_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.resetAuthType"></a>

```python
def reset_auth_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.passwordWoInput">password_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.passwordWoVersionInput">password_wo_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.passwordWo">password_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.passwordWoVersion">password_wo_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth">IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `password_wo_input`<sup>Optional</sup> <a name="password_wo_input" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.passwordWoInput"></a>

```python
password_wo_input: str
```

- *Type:* str

---

##### `password_wo_version_input`<sup>Optional</sup> <a name="password_wo_version_input" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.passwordWoVersionInput"></a>

```python
password_wo_version_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### ~~`password_wo`~~<sup>Required</sup> <a name="password_wo" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.passwordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
password_wo: str
```

- *Type:* str

---

##### `password_wo_version`<sup>Required</sup> <a name="password_wo_version" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.passwordWoVersion"></a>

```python
password_wo_version: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuthOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth">IntegrationTwilioAccountAuthenticationTwilioIntegrationAccountBasicAuth</a>

---


### IntegrationTwilioAccountDataflowsOutputReference <a name="IntegrationTwilioAccountDataflowsOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioAlertsLogs">put_twilio_alerts_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioCallSummariesLogs">put_twilio_call_summaries_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioCloudCostMetrics">put_twilio_cloud_cost_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioEventsLogs">put_twilio_events_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioMessagesLogs">put_twilio_messages_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioAlertsLogs">reset_twilio_alerts_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioCallSummariesLogs">reset_twilio_call_summaries_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioCloudCostMetrics">reset_twilio_cloud_cost_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioEventsLogs">reset_twilio_events_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioMessagesLogs">reset_twilio_messages_logs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_twilio_alerts_logs` <a name="put_twilio_alerts_logs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioAlertsLogs"></a>

```python
def put_twilio_alerts_logs(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioAlertsLogs.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#enabled IntegrationTwilioAccount#enabled}

---

##### `put_twilio_call_summaries_logs` <a name="put_twilio_call_summaries_logs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioCallSummariesLogs"></a>

```python
def put_twilio_call_summaries_logs(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioCallSummariesLogs.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#enabled IntegrationTwilioAccount#enabled}

---

##### `put_twilio_cloud_cost_metrics` <a name="put_twilio_cloud_cost_metrics" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioCloudCostMetrics"></a>

```python
def put_twilio_cloud_cost_metrics(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioCloudCostMetrics.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#enabled IntegrationTwilioAccount#enabled}

---

##### `put_twilio_events_logs` <a name="put_twilio_events_logs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioEventsLogs"></a>

```python
def put_twilio_events_logs(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioEventsLogs.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#enabled IntegrationTwilioAccount#enabled}

---

##### `put_twilio_messages_logs` <a name="put_twilio_messages_logs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioMessagesLogs"></a>

```python
def put_twilio_messages_logs(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.putTwilioMessagesLogs.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_twilio_account#enabled IntegrationTwilioAccount#enabled}

---

##### `reset_twilio_alerts_logs` <a name="reset_twilio_alerts_logs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioAlertsLogs"></a>

```python
def reset_twilio_alerts_logs() -> None
```

##### `reset_twilio_call_summaries_logs` <a name="reset_twilio_call_summaries_logs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioCallSummariesLogs"></a>

```python
def reset_twilio_call_summaries_logs() -> None
```

##### `reset_twilio_cloud_cost_metrics` <a name="reset_twilio_cloud_cost_metrics" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioCloudCostMetrics"></a>

```python
def reset_twilio_cloud_cost_metrics() -> None
```

##### `reset_twilio_events_logs` <a name="reset_twilio_events_logs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioEventsLogs"></a>

```python
def reset_twilio_events_logs() -> None
```

##### `reset_twilio_messages_logs` <a name="reset_twilio_messages_logs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.resetTwilioMessagesLogs"></a>

```python
def reset_twilio_messages_logs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioAlertsLogs">twilio_alerts_logs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference">IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioCallSummariesLogs">twilio_call_summaries_logs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioCloudCostMetrics">twilio_cloud_cost_metrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference">IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioEventsLogs">twilio_events_logs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference">IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioMessagesLogs">twilio_messages_logs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference">IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioAlertsLogsInput">twilio_alerts_logs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs">IntegrationTwilioAccountDataflowsTwilioAlertsLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioCallSummariesLogsInput">twilio_call_summaries_logs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioCloudCostMetricsInput">twilio_cloud_cost_metrics_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics">IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioEventsLogsInput">twilio_events_logs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs">IntegrationTwilioAccountDataflowsTwilioEventsLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioMessagesLogsInput">twilio_messages_logs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs">IntegrationTwilioAccountDataflowsTwilioMessagesLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows">IntegrationTwilioAccountDataflows</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `twilio_alerts_logs`<sup>Required</sup> <a name="twilio_alerts_logs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioAlertsLogs"></a>

```python
twilio_alerts_logs: IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference">IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference</a>

---

##### `twilio_call_summaries_logs`<sup>Required</sup> <a name="twilio_call_summaries_logs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioCallSummariesLogs"></a>

```python
twilio_call_summaries_logs: IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference</a>

---

##### `twilio_cloud_cost_metrics`<sup>Required</sup> <a name="twilio_cloud_cost_metrics" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioCloudCostMetrics"></a>

```python
twilio_cloud_cost_metrics: IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference">IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference</a>

---

##### `twilio_events_logs`<sup>Required</sup> <a name="twilio_events_logs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioEventsLogs"></a>

```python
twilio_events_logs: IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference">IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference</a>

---

##### `twilio_messages_logs`<sup>Required</sup> <a name="twilio_messages_logs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioMessagesLogs"></a>

```python
twilio_messages_logs: IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference">IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference</a>

---

##### `twilio_alerts_logs_input`<sup>Optional</sup> <a name="twilio_alerts_logs_input" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioAlertsLogsInput"></a>

```python
twilio_alerts_logs_input: IResolvable | IntegrationTwilioAccountDataflowsTwilioAlertsLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs">IntegrationTwilioAccountDataflowsTwilioAlertsLogs</a>

---

##### `twilio_call_summaries_logs_input`<sup>Optional</sup> <a name="twilio_call_summaries_logs_input" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioCallSummariesLogsInput"></a>

```python
twilio_call_summaries_logs_input: IResolvable | IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs</a>

---

##### `twilio_cloud_cost_metrics_input`<sup>Optional</sup> <a name="twilio_cloud_cost_metrics_input" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioCloudCostMetricsInput"></a>

```python
twilio_cloud_cost_metrics_input: IResolvable | IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics">IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics</a>

---

##### `twilio_events_logs_input`<sup>Optional</sup> <a name="twilio_events_logs_input" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioEventsLogsInput"></a>

```python
twilio_events_logs_input: IResolvable | IntegrationTwilioAccountDataflowsTwilioEventsLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs">IntegrationTwilioAccountDataflowsTwilioEventsLogs</a>

---

##### `twilio_messages_logs_input`<sup>Optional</sup> <a name="twilio_messages_logs_input" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.twilioMessagesLogsInput"></a>

```python
twilio_messages_logs_input: IResolvable | IntegrationTwilioAccountDataflowsTwilioMessagesLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs">IntegrationTwilioAccountDataflowsTwilioMessagesLogs</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationTwilioAccountDataflows
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflows">IntegrationTwilioAccountDataflows</a>

---


### IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs">IntegrationTwilioAccountDataflowsTwilioAlertsLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.status"></a>

```python
status: IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationTwilioAccountDataflowsTwilioAlertsLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogs">IntegrationTwilioAccountDataflowsTwilioAlertsLogs</a>

---


### IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.health">health</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus">IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.health"></a>

```python
health: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatusOutputReference.property.internalValue"></a>

```python
internal_value: IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus">IntegrationTwilioAccountDataflowsTwilioAlertsLogsStatus</a>

---


### IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.status"></a>

```python
status: IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogs</a>

---


### IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.health">health</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.health"></a>

```python
health: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatusOutputReference.property.internalValue"></a>

```python
internal_value: IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus">IntegrationTwilioAccountDataflowsTwilioCallSummariesLogsStatus</a>

---


### IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics">IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.status"></a>

```python
status: IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics">IntegrationTwilioAccountDataflowsTwilioCloudCostMetrics</a>

---


### IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.health">health</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus">IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.health"></a>

```python
health: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatusOutputReference.property.internalValue"></a>

```python
internal_value: IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus">IntegrationTwilioAccountDataflowsTwilioCloudCostMetricsStatus</a>

---


### IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs">IntegrationTwilioAccountDataflowsTwilioEventsLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.status"></a>

```python
status: IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationTwilioAccountDataflowsTwilioEventsLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogs">IntegrationTwilioAccountDataflowsTwilioEventsLogs</a>

---


### IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.health">health</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus">IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.health"></a>

```python
health: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatusOutputReference.property.internalValue"></a>

```python
internal_value: IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus">IntegrationTwilioAccountDataflowsTwilioEventsLogsStatus</a>

---


### IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs">IntegrationTwilioAccountDataflowsTwilioMessagesLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.status"></a>

```python
status: IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference">IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationTwilioAccountDataflowsTwilioMessagesLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogs">IntegrationTwilioAccountDataflowsTwilioMessagesLogs</a>

---


### IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference <a name="IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.health">health</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus">IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.health"></a>

```python
health: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatusOutputReference.property.internalValue"></a>

```python
internal_value: IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus">IntegrationTwilioAccountDataflowsTwilioMessagesLogsStatus</a>

---


### IntegrationTwilioAccountSettingsOutputReference <a name="IntegrationTwilioAccountSettingsOutputReference" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_twilio_account

integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.resetCensorLogs">reset_censor_logs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_censor_logs` <a name="reset_censor_logs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.resetCensorLogs"></a>

```python
def reset_censor_logs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.accountSidInput">account_sid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.censorLogsInput">censor_logs_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.accountSid">account_sid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.censorLogs">censor_logs</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings">IntegrationTwilioAccountSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_sid_input`<sup>Optional</sup> <a name="account_sid_input" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.accountSidInput"></a>

```python
account_sid_input: str
```

- *Type:* str

---

##### `censor_logs_input`<sup>Optional</sup> <a name="censor_logs_input" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.censorLogsInput"></a>

```python
censor_logs_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `account_sid`<sup>Required</sup> <a name="account_sid" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.accountSid"></a>

```python
account_sid: str
```

- *Type:* str

---

##### `censor_logs`<sup>Required</sup> <a name="censor_logs" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.censorLogs"></a>

```python
censor_logs: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationTwilioAccountSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationTwilioAccount.IntegrationTwilioAccountSettings">IntegrationTwilioAccountSettings</a>

---



