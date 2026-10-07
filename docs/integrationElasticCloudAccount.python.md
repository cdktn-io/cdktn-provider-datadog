# `integrationElasticCloudAccount` Submodule <a name="`integrationElasticCloudAccount` Submodule" id="@cdktn/provider-datadog.integrationElasticCloudAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationElasticCloudAccount <a name="IntegrationElasticCloudAccount" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account datadog_integration_elastic_cloud_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccount(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authentication: IntegrationElasticCloudAccountAuthentication,
  name: str,
  settings: IntegrationElasticCloudAccountSettings,
  dataflows: IntegrationElasticCloudAccountDataflows = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication">IntegrationElasticCloudAccountAuthentication</a></code> | Authentication configured on the Elastic Cloud integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.name">name</a></code> | <code>str</code> | Human-readable name of the Elastic Cloud integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings">IntegrationElasticCloudAccountSettings</a></code> | Settings configured on the Elastic Cloud integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.dataflows">dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows">IntegrationElasticCloudAccountDataflows</a></code> | Data Datadog collects from Elastic Cloud, keyed by dataflow id. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.authentication"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication">IntegrationElasticCloudAccountAuthentication</a>

Authentication configured on the Elastic Cloud integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#authentication IntegrationElasticCloudAccount#authentication}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.name"></a>

- *Type:* str

Human-readable name of the Elastic Cloud integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#name IntegrationElasticCloudAccount#name}

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.settings"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings">IntegrationElasticCloudAccountSettings</a>

Settings configured on the Elastic Cloud integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#settings IntegrationElasticCloudAccount#settings}

---

##### `dataflows`<sup>Optional</sup> <a name="dataflows" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.Initializer.parameter.dataflows"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows">IntegrationElasticCloudAccountDataflows</a>

Data Datadog collects from Elastic Cloud, keyed by dataflow id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#dataflows IntegrationElasticCloudAccount#dataflows}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putAuthentication">put_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putDataflows">put_dataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.resetDataflows">reset_dataflows</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authentication` <a name="put_authentication" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putAuthentication"></a>

```python
def put_authentication(
  elastic_cloud_integration_account_basic_auth: IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth = None
) -> None
```

###### `elastic_cloud_integration_account_basic_auth`<sup>Optional</sup> <a name="elastic_cloud_integration_account_basic_auth" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putAuthentication.parameter.elasticCloudIntegrationAccountBasicAuth"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth</a>

The basic authentication method and username configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_integration_account_basic_auth IntegrationElasticCloudAccount#elastic_cloud_integration_account_basic_auth}

---

##### `put_dataflows` <a name="put_dataflows" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putDataflows"></a>

```python
def put_dataflows(
  elastic_cloud_detailed_index_stats: IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats = None,
  elastic_cloud_index_stats: IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats = None,
  elastic_cloud_pending_task_stats: IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats = None,
  elastic_cloud_primary_shard_graceful_timeout: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout = None,
  elastic_cloud_primary_shard_stats: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats = None,
  elastic_cloud_shard_allocation_stats: IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats = None,
  elastic_cloud_slm_stats: IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats = None
) -> None
```

###### `elastic_cloud_detailed_index_stats`<sup>Optional</sup> <a name="elastic_cloud_detailed_index_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putDataflows.parameter.elasticCloudDetailedIndexStats"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats</a>

Primary shard metrics broken down per index, rather than aggregated across the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_detailed_index_stats IntegrationElasticCloudAccount#elastic_cloud_detailed_index_stats}

---

###### `elastic_cloud_index_stats`<sup>Optional</sup> <a name="elastic_cloud_index_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putDataflows.parameter.elasticCloudIndexStats"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats</a>

Metrics for individual indices. Only the indices granted to the role of the user in `authentication` are collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_index_stats IntegrationElasticCloudAccount#elastic_cloud_index_stats}

---

###### `elastic_cloud_pending_task_stats`<sup>Optional</sup> <a name="elastic_cloud_pending_task_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putDataflows.parameter.elasticCloudPendingTaskStats"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats</a>

Metrics for cluster-level changes that have been submitted but not yet executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_pending_task_stats IntegrationElasticCloudAccount#elastic_cloud_pending_task_stats}

---

###### `elastic_cloud_primary_shard_graceful_timeout`<sup>Optional</sup> <a name="elastic_cloud_primary_shard_graceful_timeout" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putDataflows.parameter.elasticCloudPrimaryShardGracefulTimeout"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout</a>

Tolerance for slow primary shard requests, keeping the rest of the collection running when a primary shard request times out instead of failing the run.

Only has an effect alongside `elastic-cloud-primary-shard-stats`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_primary_shard_graceful_timeout IntegrationElasticCloudAccount#elastic_cloud_primary_shard_graceful_timeout}

---

###### `elastic_cloud_primary_shard_stats`<sup>Optional</sup> <a name="elastic_cloud_primary_shard_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putDataflows.parameter.elasticCloudPrimaryShardStats"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats</a>

Metrics covering only the cluster's primary shards.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_primary_shard_stats IntegrationElasticCloudAccount#elastic_cloud_primary_shard_stats}

---

###### `elastic_cloud_shard_allocation_stats`<sup>Optional</sup> <a name="elastic_cloud_shard_allocation_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putDataflows.parameter.elasticCloudShardAllocationStats"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats</a>

Metrics for how many shards are allocated to each data node, and the disk space they use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_shard_allocation_stats IntegrationElasticCloudAccount#elastic_cloud_shard_allocation_stats}

---

###### `elastic_cloud_slm_stats`<sup>Optional</sup> <a name="elastic_cloud_slm_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putDataflows.parameter.elasticCloudSlmStats"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats</a>

Metrics about the actions taken by snapshot lifecycle management.

Requires the `read_slm` Elasticsearch cluster privilege on the role of the user in `authentication`; without it this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_slm_stats IntegrationElasticCloudAccount#elastic_cloud_slm_stats}

---

##### `put_settings` <a name="put_settings" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putSettings"></a>

```python
def put_settings(
  url: str,
  tags: str = None
) -> None
```

###### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putSettings.parameter.url"></a>

- *Type:* str

Elastic Cloud deployment URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#url IntegrationElasticCloudAccount#url}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.putSettings.parameter.tags"></a>

- *Type:* str

Comma-separated list of custom tags for this Elastic Cloud deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#tags IntegrationElasticCloudAccount#tags}

---

##### `reset_dataflows` <a name="reset_dataflows" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.resetDataflows"></a>

```python
def reset_dataflows() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IntegrationElasticCloudAccount resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isConstruct"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isTerraformElement"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isTerraformResource"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IntegrationElasticCloudAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationElasticCloudAccount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationElasticCloudAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationElasticCloudAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference">IntegrationElasticCloudAccountAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.dataflows">dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference">IntegrationElasticCloudAccountDataflowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference">IntegrationElasticCloudAccountSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.authenticationInput">authentication_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication">IntegrationElasticCloudAccountAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.dataflowsInput">dataflows_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows">IntegrationElasticCloudAccountDataflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.settingsInput">settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings">IntegrationElasticCloudAccountSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.authentication"></a>

```python
authentication: IntegrationElasticCloudAccountAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference">IntegrationElasticCloudAccountAuthenticationOutputReference</a>

---

##### `dataflows`<sup>Required</sup> <a name="dataflows" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.dataflows"></a>

```python
dataflows: IntegrationElasticCloudAccountDataflowsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference">IntegrationElasticCloudAccountDataflowsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.settings"></a>

```python
settings: IntegrationElasticCloudAccountSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference">IntegrationElasticCloudAccountSettingsOutputReference</a>

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.authenticationInput"></a>

```python
authentication_input: IResolvable | IntegrationElasticCloudAccountAuthentication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication">IntegrationElasticCloudAccountAuthentication</a>

---

##### `dataflows_input`<sup>Optional</sup> <a name="dataflows_input" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.dataflowsInput"></a>

```python
dataflows_input: IResolvable | IntegrationElasticCloudAccountDataflows
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows">IntegrationElasticCloudAccountDataflows</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.settingsInput"></a>

```python
settings_input: IResolvable | IntegrationElasticCloudAccountSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings">IntegrationElasticCloudAccountSettings</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationElasticCloudAccountAuthentication <a name="IntegrationElasticCloudAccountAuthentication" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication(
  elastic_cloud_integration_account_basic_auth: IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication.property.elasticCloudIntegrationAccountBasicAuth">elastic_cloud_integration_account_basic_auth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth</a></code> | The basic authentication method and username configured on the account. |

---

##### `elastic_cloud_integration_account_basic_auth`<sup>Optional</sup> <a name="elastic_cloud_integration_account_basic_auth" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication.property.elasticCloudIntegrationAccountBasicAuth"></a>

```python
elastic_cloud_integration_account_basic_auth: IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth</a>

The basic authentication method and username configured on the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_integration_account_basic_auth IntegrationElasticCloudAccount#elastic_cloud_integration_account_basic_auth}

---

### IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth <a name="IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth(
  password_wo: str,
  password_wo_version: str,
  username: str,
  auth_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.property.passwordWo">password_wo</a></code> | <code>str</code> | Secret password or private key. This write-only value is not stored in Terraform state. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.property.passwordWoVersion">password_wo_version</a></code> | <code>str</code> | Version trigger for password_wo rotation. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.property.username">username</a></code> | <code>str</code> | Non-secret username or public identifier for the credential pair. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.property.authType">auth_type</a></code> | <code>str</code> | The authentication method type. Valid values are `basic`. Defaults to `"basic"`. |

---

##### `password_wo`<sup>Required</sup> <a name="password_wo" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.property.passwordWo"></a>

```python
password_wo: str
```

- *Type:* str

Secret password or private key. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#password_wo IntegrationElasticCloudAccount#password_wo}

---

##### `password_wo_version`<sup>Required</sup> <a name="password_wo_version" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.property.passwordWoVersion"></a>

```python
password_wo_version: str
```

- *Type:* str

Version trigger for password_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#password_wo_version IntegrationElasticCloudAccount#password_wo_version}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.property.username"></a>

```python
username: str
```

- *Type:* str

Non-secret username or public identifier for the credential pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#username IntegrationElasticCloudAccount#username}

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

The authentication method type. Valid values are `basic`. Defaults to `"basic"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#auth_type IntegrationElasticCloudAccount#auth_type}

---

### IntegrationElasticCloudAccountConfig <a name="IntegrationElasticCloudAccountConfig" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authentication: IntegrationElasticCloudAccountAuthentication,
  name: str,
  settings: IntegrationElasticCloudAccountSettings,
  dataflows: IntegrationElasticCloudAccountDataflows = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication">IntegrationElasticCloudAccountAuthentication</a></code> | Authentication configured on the Elastic Cloud integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.name">name</a></code> | <code>str</code> | Human-readable name of the Elastic Cloud integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings">IntegrationElasticCloudAccountSettings</a></code> | Settings configured on the Elastic Cloud integration account. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.dataflows">dataflows</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows">IntegrationElasticCloudAccountDataflows</a></code> | Data Datadog collects from Elastic Cloud, keyed by dataflow id. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.authentication"></a>

```python
authentication: IntegrationElasticCloudAccountAuthentication
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication">IntegrationElasticCloudAccountAuthentication</a>

Authentication configured on the Elastic Cloud integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#authentication IntegrationElasticCloudAccount#authentication}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Human-readable name of the Elastic Cloud integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#name IntegrationElasticCloudAccount#name}

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.settings"></a>

```python
settings: IntegrationElasticCloudAccountSettings
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings">IntegrationElasticCloudAccountSettings</a>

Settings configured on the Elastic Cloud integration account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#settings IntegrationElasticCloudAccount#settings}

---

##### `dataflows`<sup>Optional</sup> <a name="dataflows" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountConfig.property.dataflows"></a>

```python
dataflows: IntegrationElasticCloudAccountDataflows
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows">IntegrationElasticCloudAccountDataflows</a>

Data Datadog collects from Elastic Cloud, keyed by dataflow id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#dataflows IntegrationElasticCloudAccount#dataflows}

---

### IntegrationElasticCloudAccountDataflows <a name="IntegrationElasticCloudAccountDataflows" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows(
  elastic_cloud_detailed_index_stats: IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats = None,
  elastic_cloud_index_stats: IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats = None,
  elastic_cloud_pending_task_stats: IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats = None,
  elastic_cloud_primary_shard_graceful_timeout: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout = None,
  elastic_cloud_primary_shard_stats: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats = None,
  elastic_cloud_shard_allocation_stats: IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats = None,
  elastic_cloud_slm_stats: IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudDetailedIndexStats">elastic_cloud_detailed_index_stats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats</a></code> | Primary shard metrics broken down per index, rather than aggregated across the cluster. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudIndexStats">elastic_cloud_index_stats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats</a></code> | Metrics for individual indices. Only the indices granted to the role of the user in `authentication` are collected. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudPendingTaskStats">elastic_cloud_pending_task_stats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats</a></code> | Metrics for cluster-level changes that have been submitted but not yet executed. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudPrimaryShardGracefulTimeout">elastic_cloud_primary_shard_graceful_timeout</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout</a></code> | Tolerance for slow primary shard requests, keeping the rest of the collection running when a primary shard request times out instead of failing the run. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudPrimaryShardStats">elastic_cloud_primary_shard_stats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats</a></code> | Metrics covering only the cluster's primary shards. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudShardAllocationStats">elastic_cloud_shard_allocation_stats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats</a></code> | Metrics for how many shards are allocated to each data node, and the disk space they use. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudSlmStats">elastic_cloud_slm_stats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats</a></code> | Metrics about the actions taken by snapshot lifecycle management. |

---

##### `elastic_cloud_detailed_index_stats`<sup>Optional</sup> <a name="elastic_cloud_detailed_index_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudDetailedIndexStats"></a>

```python
elastic_cloud_detailed_index_stats: IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats</a>

Primary shard metrics broken down per index, rather than aggregated across the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_detailed_index_stats IntegrationElasticCloudAccount#elastic_cloud_detailed_index_stats}

---

##### `elastic_cloud_index_stats`<sup>Optional</sup> <a name="elastic_cloud_index_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudIndexStats"></a>

```python
elastic_cloud_index_stats: IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats</a>

Metrics for individual indices. Only the indices granted to the role of the user in `authentication` are collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_index_stats IntegrationElasticCloudAccount#elastic_cloud_index_stats}

---

##### `elastic_cloud_pending_task_stats`<sup>Optional</sup> <a name="elastic_cloud_pending_task_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudPendingTaskStats"></a>

```python
elastic_cloud_pending_task_stats: IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats</a>

Metrics for cluster-level changes that have been submitted but not yet executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_pending_task_stats IntegrationElasticCloudAccount#elastic_cloud_pending_task_stats}

---

##### `elastic_cloud_primary_shard_graceful_timeout`<sup>Optional</sup> <a name="elastic_cloud_primary_shard_graceful_timeout" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudPrimaryShardGracefulTimeout"></a>

```python
elastic_cloud_primary_shard_graceful_timeout: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout</a>

Tolerance for slow primary shard requests, keeping the rest of the collection running when a primary shard request times out instead of failing the run.

Only has an effect alongside `elastic-cloud-primary-shard-stats`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_primary_shard_graceful_timeout IntegrationElasticCloudAccount#elastic_cloud_primary_shard_graceful_timeout}

---

##### `elastic_cloud_primary_shard_stats`<sup>Optional</sup> <a name="elastic_cloud_primary_shard_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudPrimaryShardStats"></a>

```python
elastic_cloud_primary_shard_stats: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats</a>

Metrics covering only the cluster's primary shards.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_primary_shard_stats IntegrationElasticCloudAccount#elastic_cloud_primary_shard_stats}

---

##### `elastic_cloud_shard_allocation_stats`<sup>Optional</sup> <a name="elastic_cloud_shard_allocation_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudShardAllocationStats"></a>

```python
elastic_cloud_shard_allocation_stats: IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats</a>

Metrics for how many shards are allocated to each data node, and the disk space they use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_shard_allocation_stats IntegrationElasticCloudAccount#elastic_cloud_shard_allocation_stats}

---

##### `elastic_cloud_slm_stats`<sup>Optional</sup> <a name="elastic_cloud_slm_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows.property.elasticCloudSlmStats"></a>

```python
elastic_cloud_slm_stats: IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats</a>

Metrics about the actions taken by snapshot lifecycle management.

Requires the `read_slm` Elasticsearch cluster privilege on the role of the user in `authentication`; without it this dataflow collects no data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#elastic_cloud_slm_stats IntegrationElasticCloudAccount#elastic_cloud_slm_stats}

---

### IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats <a name="IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

### IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus <a name="IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus()
```


### IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats <a name="IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

### IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus <a name="IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus()
```


### IntegrationElasticCloudAccountDataflowsElasticCloudMetrics <a name="IntegrationElasticCloudAccountDataflowsElasticCloudMetrics" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetrics.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetrics()
```


### IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus <a name="IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus()
```


### IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

### IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus()
```


### IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether this tolerance is applied. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether this tolerance is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

### IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus()
```


### IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

### IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus()
```


### IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats <a name="IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

### IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus <a name="IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus()
```


### IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats <a name="IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Datadog collects this data. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

### IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus <a name="IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus()
```


### IntegrationElasticCloudAccountSettings <a name="IntegrationElasticCloudAccountSettings" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings(
  url: str,
  tags: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings.property.url">url</a></code> | <code>str</code> | Elastic Cloud deployment URL. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings.property.tags">tags</a></code> | <code>str</code> | Comma-separated list of custom tags for this Elastic Cloud deployment. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings.property.url"></a>

```python
url: str
```

- *Type:* str

Elastic Cloud deployment URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#url IntegrationElasticCloudAccount#url}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings.property.tags"></a>

```python
tags: str
```

- *Type:* str

Comma-separated list of custom tags for this Elastic Cloud deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#tags IntegrationElasticCloudAccount#tags}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference <a name="IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.resetAuthType">reset_auth_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.resetAuthType"></a>

```python
def reset_auth_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.passwordWoInput">password_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.passwordWoVersionInput">password_wo_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.passwordWo">password_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.passwordWoVersion">password_wo_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `password_wo_input`<sup>Optional</sup> <a name="password_wo_input" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.passwordWoInput"></a>

```python
password_wo_input: str
```

- *Type:* str

---

##### `password_wo_version_input`<sup>Optional</sup> <a name="password_wo_version_input" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.passwordWoVersionInput"></a>

```python
password_wo_version_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### ~~`password_wo`~~<sup>Required</sup> <a name="password_wo" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.passwordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
password_wo: str
```

- *Type:* str

---

##### `password_wo_version`<sup>Required</sup> <a name="password_wo_version" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.passwordWoVersion"></a>

```python
password_wo_version: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth</a>

---


### IntegrationElasticCloudAccountAuthenticationOutputReference <a name="IntegrationElasticCloudAccountAuthenticationOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.putElasticCloudIntegrationAccountBasicAuth">put_elastic_cloud_integration_account_basic_auth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.resetElasticCloudIntegrationAccountBasicAuth">reset_elastic_cloud_integration_account_basic_auth</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_elastic_cloud_integration_account_basic_auth` <a name="put_elastic_cloud_integration_account_basic_auth" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.putElasticCloudIntegrationAccountBasicAuth"></a>

```python
def put_elastic_cloud_integration_account_basic_auth(
  password_wo: str,
  password_wo_version: str,
  username: str,
  auth_type: str = None
) -> None
```

###### `password_wo`<sup>Required</sup> <a name="password_wo" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.putElasticCloudIntegrationAccountBasicAuth.parameter.passwordWo"></a>

- *Type:* str

Secret password or private key. This write-only value is not stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#password_wo IntegrationElasticCloudAccount#password_wo}

---

###### `password_wo_version`<sup>Required</sup> <a name="password_wo_version" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.putElasticCloudIntegrationAccountBasicAuth.parameter.passwordWoVersion"></a>

- *Type:* str

Version trigger for password_wo rotation. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#password_wo_version IntegrationElasticCloudAccount#password_wo_version}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.putElasticCloudIntegrationAccountBasicAuth.parameter.username"></a>

- *Type:* str

Non-secret username or public identifier for the credential pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#username IntegrationElasticCloudAccount#username}

---

###### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.putElasticCloudIntegrationAccountBasicAuth.parameter.authType"></a>

- *Type:* str

The authentication method type. Valid values are `basic`. Defaults to `"basic"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#auth_type IntegrationElasticCloudAccount#auth_type}

---

##### `reset_elastic_cloud_integration_account_basic_auth` <a name="reset_elastic_cloud_integration_account_basic_auth" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.resetElasticCloudIntegrationAccountBasicAuth"></a>

```python
def reset_elastic_cloud_integration_account_basic_auth() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.elasticCloudIntegrationAccountBasicAuth">elastic_cloud_integration_account_basic_auth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.elasticCloudIntegrationAccountBasicAuthInput">elastic_cloud_integration_account_basic_auth_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication">IntegrationElasticCloudAccountAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `elastic_cloud_integration_account_basic_auth`<sup>Required</sup> <a name="elastic_cloud_integration_account_basic_auth" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.elasticCloudIntegrationAccountBasicAuth"></a>

```python
elastic_cloud_integration_account_basic_auth: IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuthOutputReference</a>

---

##### `elastic_cloud_integration_account_basic_auth_input`<sup>Optional</sup> <a name="elastic_cloud_integration_account_basic_auth_input" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.elasticCloudIntegrationAccountBasicAuthInput"></a>

```python
elastic_cloud_integration_account_basic_auth_input: IResolvable | IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth">IntegrationElasticCloudAccountAuthenticationElasticCloudIntegrationAccountBasicAuth</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationElasticCloudAccountAuthentication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountAuthentication">IntegrationElasticCloudAccountAuthentication</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.status"></a>

```python
status: IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.health">health</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.health"></a>

```python
health: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatusOutputReference.property.internalValue"></a>

```python
internal_value: IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsStatus</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.status"></a>

```python
status: IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.health">health</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.health"></a>

```python
health: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatusOutputReference.property.internalValue"></a>

```python
internal_value: IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsStatus</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetrics">IntegrationElasticCloudAccountDataflowsElasticCloudMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.status"></a>

```python
status: IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IntegrationElasticCloudAccountDataflowsElasticCloudMetrics
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetrics">IntegrationElasticCloudAccountDataflowsElasticCloudMetrics</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.health">health</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.health"></a>

```python
health: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatusOutputReference.property.internalValue"></a>

```python
internal_value: IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudMetricsStatus</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.status"></a>

```python
status: IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.health">health</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.health"></a>

```python
health: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatusOutputReference.property.internalValue"></a>

```python
internal_value: IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsStatus</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.status"></a>

```python
status: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.health">health</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.health"></a>

```python
health: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatusOutputReference.property.internalValue"></a>

```python
internal_value: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutStatus</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.status"></a>

```python
status: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.health">health</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.health"></a>

```python
health: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatusOutputReference.property.internalValue"></a>

```python
internal_value: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsStatus</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.status"></a>

```python
status: IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.health">health</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.health"></a>

```python
health: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatusOutputReference.property.internalValue"></a>

```python
internal_value: IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsStatus</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.status"></a>

```python
status: IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats</a>

---


### IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference <a name="IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.health">health</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.health"></a>

```python
health: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatusOutputReference.property.internalValue"></a>

```python
internal_value: IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsStatus</a>

---


### IntegrationElasticCloudAccountDataflowsOutputReference <a name="IntegrationElasticCloudAccountDataflowsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudDetailedIndexStats">put_elastic_cloud_detailed_index_stats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudIndexStats">put_elastic_cloud_index_stats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPendingTaskStats">put_elastic_cloud_pending_task_stats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPrimaryShardGracefulTimeout">put_elastic_cloud_primary_shard_graceful_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPrimaryShardStats">put_elastic_cloud_primary_shard_stats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudShardAllocationStats">put_elastic_cloud_shard_allocation_stats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudSlmStats">put_elastic_cloud_slm_stats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudDetailedIndexStats">reset_elastic_cloud_detailed_index_stats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudIndexStats">reset_elastic_cloud_index_stats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudPendingTaskStats">reset_elastic_cloud_pending_task_stats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudPrimaryShardGracefulTimeout">reset_elastic_cloud_primary_shard_graceful_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudPrimaryShardStats">reset_elastic_cloud_primary_shard_stats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudShardAllocationStats">reset_elastic_cloud_shard_allocation_stats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudSlmStats">reset_elastic_cloud_slm_stats</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_elastic_cloud_detailed_index_stats` <a name="put_elastic_cloud_detailed_index_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudDetailedIndexStats"></a>

```python
def put_elastic_cloud_detailed_index_stats(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudDetailedIndexStats.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

##### `put_elastic_cloud_index_stats` <a name="put_elastic_cloud_index_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudIndexStats"></a>

```python
def put_elastic_cloud_index_stats(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudIndexStats.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

##### `put_elastic_cloud_pending_task_stats` <a name="put_elastic_cloud_pending_task_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPendingTaskStats"></a>

```python
def put_elastic_cloud_pending_task_stats(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPendingTaskStats.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

##### `put_elastic_cloud_primary_shard_graceful_timeout` <a name="put_elastic_cloud_primary_shard_graceful_timeout" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPrimaryShardGracefulTimeout"></a>

```python
def put_elastic_cloud_primary_shard_graceful_timeout(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPrimaryShardGracefulTimeout.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether this tolerance is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

##### `put_elastic_cloud_primary_shard_stats` <a name="put_elastic_cloud_primary_shard_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPrimaryShardStats"></a>

```python
def put_elastic_cloud_primary_shard_stats(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudPrimaryShardStats.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

##### `put_elastic_cloud_shard_allocation_stats` <a name="put_elastic_cloud_shard_allocation_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudShardAllocationStats"></a>

```python
def put_elastic_cloud_shard_allocation_stats(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudShardAllocationStats.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

##### `put_elastic_cloud_slm_stats` <a name="put_elastic_cloud_slm_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudSlmStats"></a>

```python
def put_elastic_cloud_slm_stats(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.putElasticCloudSlmStats.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Datadog collects this data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/integration_elastic_cloud_account#enabled IntegrationElasticCloudAccount#enabled}

---

##### `reset_elastic_cloud_detailed_index_stats` <a name="reset_elastic_cloud_detailed_index_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudDetailedIndexStats"></a>

```python
def reset_elastic_cloud_detailed_index_stats() -> None
```

##### `reset_elastic_cloud_index_stats` <a name="reset_elastic_cloud_index_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudIndexStats"></a>

```python
def reset_elastic_cloud_index_stats() -> None
```

##### `reset_elastic_cloud_pending_task_stats` <a name="reset_elastic_cloud_pending_task_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudPendingTaskStats"></a>

```python
def reset_elastic_cloud_pending_task_stats() -> None
```

##### `reset_elastic_cloud_primary_shard_graceful_timeout` <a name="reset_elastic_cloud_primary_shard_graceful_timeout" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudPrimaryShardGracefulTimeout"></a>

```python
def reset_elastic_cloud_primary_shard_graceful_timeout() -> None
```

##### `reset_elastic_cloud_primary_shard_stats` <a name="reset_elastic_cloud_primary_shard_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudPrimaryShardStats"></a>

```python
def reset_elastic_cloud_primary_shard_stats() -> None
```

##### `reset_elastic_cloud_shard_allocation_stats` <a name="reset_elastic_cloud_shard_allocation_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudShardAllocationStats"></a>

```python
def reset_elastic_cloud_shard_allocation_stats() -> None
```

##### `reset_elastic_cloud_slm_stats` <a name="reset_elastic_cloud_slm_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.resetElasticCloudSlmStats"></a>

```python
def reset_elastic_cloud_slm_stats() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudDetailedIndexStats">elastic_cloud_detailed_index_stats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudIndexStats">elastic_cloud_index_stats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudMetrics">elastic_cloud_metrics</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPendingTaskStats">elastic_cloud_pending_task_stats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPrimaryShardGracefulTimeout">elastic_cloud_primary_shard_graceful_timeout</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPrimaryShardStats">elastic_cloud_primary_shard_stats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudShardAllocationStats">elastic_cloud_shard_allocation_stats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudSlmStats">elastic_cloud_slm_stats</a></code> | <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudDetailedIndexStatsInput">elastic_cloud_detailed_index_stats_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudIndexStatsInput">elastic_cloud_index_stats_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPendingTaskStatsInput">elastic_cloud_pending_task_stats_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPrimaryShardGracefulTimeoutInput">elastic_cloud_primary_shard_graceful_timeout_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPrimaryShardStatsInput">elastic_cloud_primary_shard_stats_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudShardAllocationStatsInput">elastic_cloud_shard_allocation_stats_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudSlmStatsInput">elastic_cloud_slm_stats_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows">IntegrationElasticCloudAccountDataflows</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `elastic_cloud_detailed_index_stats`<sup>Required</sup> <a name="elastic_cloud_detailed_index_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudDetailedIndexStats"></a>

```python
elastic_cloud_detailed_index_stats: IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStatsOutputReference</a>

---

##### `elastic_cloud_index_stats`<sup>Required</sup> <a name="elastic_cloud_index_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudIndexStats"></a>

```python
elastic_cloud_index_stats: IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStatsOutputReference</a>

---

##### `elastic_cloud_metrics`<sup>Required</sup> <a name="elastic_cloud_metrics" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudMetrics"></a>

```python
elastic_cloud_metrics: IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudMetricsOutputReference</a>

---

##### `elastic_cloud_pending_task_stats`<sup>Required</sup> <a name="elastic_cloud_pending_task_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPendingTaskStats"></a>

```python
elastic_cloud_pending_task_stats: IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStatsOutputReference</a>

---

##### `elastic_cloud_primary_shard_graceful_timeout`<sup>Required</sup> <a name="elastic_cloud_primary_shard_graceful_timeout" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPrimaryShardGracefulTimeout"></a>

```python
elastic_cloud_primary_shard_graceful_timeout: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeoutOutputReference</a>

---

##### `elastic_cloud_primary_shard_stats`<sup>Required</sup> <a name="elastic_cloud_primary_shard_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPrimaryShardStats"></a>

```python
elastic_cloud_primary_shard_stats: IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStatsOutputReference</a>

---

##### `elastic_cloud_shard_allocation_stats`<sup>Required</sup> <a name="elastic_cloud_shard_allocation_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudShardAllocationStats"></a>

```python
elastic_cloud_shard_allocation_stats: IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStatsOutputReference</a>

---

##### `elastic_cloud_slm_stats`<sup>Required</sup> <a name="elastic_cloud_slm_stats" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudSlmStats"></a>

```python
elastic_cloud_slm_stats: IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStatsOutputReference</a>

---

##### `elastic_cloud_detailed_index_stats_input`<sup>Optional</sup> <a name="elastic_cloud_detailed_index_stats_input" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudDetailedIndexStatsInput"></a>

```python
elastic_cloud_detailed_index_stats_input: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudDetailedIndexStats</a>

---

##### `elastic_cloud_index_stats_input`<sup>Optional</sup> <a name="elastic_cloud_index_stats_input" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudIndexStatsInput"></a>

```python
elastic_cloud_index_stats_input: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats">IntegrationElasticCloudAccountDataflowsElasticCloudIndexStats</a>

---

##### `elastic_cloud_pending_task_stats_input`<sup>Optional</sup> <a name="elastic_cloud_pending_task_stats_input" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPendingTaskStatsInput"></a>

```python
elastic_cloud_pending_task_stats_input: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats">IntegrationElasticCloudAccountDataflowsElasticCloudPendingTaskStats</a>

---

##### `elastic_cloud_primary_shard_graceful_timeout_input`<sup>Optional</sup> <a name="elastic_cloud_primary_shard_graceful_timeout_input" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPrimaryShardGracefulTimeoutInput"></a>

```python
elastic_cloud_primary_shard_graceful_timeout_input: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardGracefulTimeout</a>

---

##### `elastic_cloud_primary_shard_stats_input`<sup>Optional</sup> <a name="elastic_cloud_primary_shard_stats_input" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudPrimaryShardStatsInput"></a>

```python
elastic_cloud_primary_shard_stats_input: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats">IntegrationElasticCloudAccountDataflowsElasticCloudPrimaryShardStats</a>

---

##### `elastic_cloud_shard_allocation_stats_input`<sup>Optional</sup> <a name="elastic_cloud_shard_allocation_stats_input" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudShardAllocationStatsInput"></a>

```python
elastic_cloud_shard_allocation_stats_input: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats">IntegrationElasticCloudAccountDataflowsElasticCloudShardAllocationStats</a>

---

##### `elastic_cloud_slm_stats_input`<sup>Optional</sup> <a name="elastic_cloud_slm_stats_input" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.elasticCloudSlmStatsInput"></a>

```python
elastic_cloud_slm_stats_input: IResolvable | IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats">IntegrationElasticCloudAccountDataflowsElasticCloudSlmStats</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflowsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationElasticCloudAccountDataflows
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountDataflows">IntegrationElasticCloudAccountDataflows</a>

---


### IntegrationElasticCloudAccountSettingsOutputReference <a name="IntegrationElasticCloudAccountSettingsOutputReference" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_elastic_cloud_account

integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.tagsInput">tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.tags">tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings">IntegrationElasticCloudAccountSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.tagsInput"></a>

```python
tags_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.tags"></a>

```python
tags: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationElasticCloudAccountSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationElasticCloudAccount.IntegrationElasticCloudAccountSettings">IntegrationElasticCloudAccountSettings</a>

---



