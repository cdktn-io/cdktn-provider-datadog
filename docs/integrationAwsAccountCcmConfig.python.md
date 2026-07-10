# `integrationAwsAccountCcmConfig` Submodule <a name="`integrationAwsAccountCcmConfig` Submodule" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsAccountCcmConfig <a name="IntegrationAwsAccountCcmConfig" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/integration_aws_account_ccm_config datadog_integration_aws_account_ccm_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer"></a>

```python
from cdktn_provider_datadog import integration_aws_account_ccm_config

integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  aws_account_config_id: str,
  ccm_config: IntegrationAwsAccountCcmConfigCcmConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.awsAccountConfigId">aws_account_config_id</a></code> | <code>str</code> | Unique Datadog ID of the AWS Account Integration Config. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.ccmConfig">ccm_config</a></code> | <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a></code> | ccm_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aws_account_config_id`<sup>Required</sup> <a name="aws_account_config_id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.awsAccountConfigId"></a>

- *Type:* str

Unique Datadog ID of the AWS Account Integration Config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/integration_aws_account_ccm_config#aws_account_config_id IntegrationAwsAccountCcmConfig#aws_account_config_id}

---

##### `ccm_config`<sup>Optional</sup> <a name="ccm_config" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.Initializer.parameter.ccmConfig"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a>

ccm_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/integration_aws_account_ccm_config#ccm_config IntegrationAwsAccountCcmConfig#ccm_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.putCcmConfig">put_ccm_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.resetCcmConfig">reset_ccm_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ccm_config` <a name="put_ccm_config" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.putCcmConfig"></a>

```python
def put_ccm_config(
  data_export_configs: IResolvable | typing.List[IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs] = None
) -> None
```

###### `data_export_configs`<sup>Optional</sup> <a name="data_export_configs" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.putCcmConfig.parameter.dataExportConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a>]

data_export_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/integration_aws_account_ccm_config#data_export_configs IntegrationAwsAccountCcmConfig#data_export_configs}

---

##### `reset_ccm_config` <a name="reset_ccm_config" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.resetCcmConfig"></a>

```python
def reset_ccm_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IntegrationAwsAccountCcmConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isConstruct"></a>

```python
from cdktn_provider_datadog import integration_aws_account_ccm_config

integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformElement"></a>

```python
from cdktn_provider_datadog import integration_aws_account_ccm_config

integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformResource"></a>

```python
from cdktn_provider_datadog import integration_aws_account_ccm_config

integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import integration_aws_account_ccm_config

integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IntegrationAwsAccountCcmConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationAwsAccountCcmConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationAwsAccountCcmConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/integration_aws_account_ccm_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationAwsAccountCcmConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.ccmConfig">ccm_config</a></code> | <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference">IntegrationAwsAccountCcmConfigCcmConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.awsAccountConfigIdInput">aws_account_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.ccmConfigInput">ccm_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.awsAccountConfigId">aws_account_config_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ccm_config`<sup>Required</sup> <a name="ccm_config" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.ccmConfig"></a>

```python
ccm_config: IntegrationAwsAccountCcmConfigCcmConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference">IntegrationAwsAccountCcmConfigCcmConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `aws_account_config_id_input`<sup>Optional</sup> <a name="aws_account_config_id_input" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.awsAccountConfigIdInput"></a>

```python
aws_account_config_id_input: str
```

- *Type:* str

---

##### `ccm_config_input`<sup>Optional</sup> <a name="ccm_config_input" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.ccmConfigInput"></a>

```python
ccm_config_input: IResolvable | IntegrationAwsAccountCcmConfigCcmConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a>

---

##### `aws_account_config_id`<sup>Required</sup> <a name="aws_account_config_id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.awsAccountConfigId"></a>

```python
aws_account_config_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsAccountCcmConfigCcmConfig <a name="IntegrationAwsAccountCcmConfigCcmConfig" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig.Initializer"></a>

```python
from cdktn_provider_datadog import integration_aws_account_ccm_config

integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig(
  data_export_configs: IResolvable | typing.List[IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig.property.dataExportConfigs">data_export_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a>]</code> | data_export_configs block. |

---

##### `data_export_configs`<sup>Optional</sup> <a name="data_export_configs" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig.property.dataExportConfigs"></a>

```python
data_export_configs: IResolvable | typing.List[IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a>]

data_export_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/integration_aws_account_ccm_config#data_export_configs IntegrationAwsAccountCcmConfig#data_export_configs}

---

### IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs <a name="IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.Initializer"></a>

```python
from cdktn_provider_datadog import integration_aws_account_ccm_config

integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs(
  bucket_name: str = None,
  bucket_region: str = None,
  report_name: str = None,
  report_prefix: str = None,
  report_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.bucketName">bucket_name</a></code> | <code>str</code> | Name of the S3 bucket where the Cost and Usage Report is stored. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.bucketRegion">bucket_region</a></code> | <code>str</code> | AWS region of the S3 bucket. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.reportName">report_name</a></code> | <code>str</code> | Name of the Cost and Usage Report. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.reportPrefix">report_prefix</a></code> | <code>str</code> | S3 prefix where the Cost and Usage Report is stored. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.reportType">report_type</a></code> | <code>str</code> | Type of the Cost and Usage Report. |

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Name of the S3 bucket where the Cost and Usage Report is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/integration_aws_account_ccm_config#bucket_name IntegrationAwsAccountCcmConfig#bucket_name}

---

##### `bucket_region`<sup>Optional</sup> <a name="bucket_region" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.bucketRegion"></a>

```python
bucket_region: str
```

- *Type:* str

AWS region of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/integration_aws_account_ccm_config#bucket_region IntegrationAwsAccountCcmConfig#bucket_region}

---

##### `report_name`<sup>Optional</sup> <a name="report_name" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.reportName"></a>

```python
report_name: str
```

- *Type:* str

Name of the Cost and Usage Report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/integration_aws_account_ccm_config#report_name IntegrationAwsAccountCcmConfig#report_name}

---

##### `report_prefix`<sup>Optional</sup> <a name="report_prefix" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.reportPrefix"></a>

```python
report_prefix: str
```

- *Type:* str

S3 prefix where the Cost and Usage Report is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/integration_aws_account_ccm_config#report_prefix IntegrationAwsAccountCcmConfig#report_prefix}

---

##### `report_type`<sup>Optional</sup> <a name="report_type" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs.property.reportType"></a>

```python
report_type: str
```

- *Type:* str

Type of the Cost and Usage Report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/integration_aws_account_ccm_config#report_type IntegrationAwsAccountCcmConfig#report_type}

---

### IntegrationAwsAccountCcmConfigConfig <a name="IntegrationAwsAccountCcmConfigConfig" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.Initializer"></a>

```python
from cdktn_provider_datadog import integration_aws_account_ccm_config

integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  aws_account_config_id: str,
  ccm_config: IntegrationAwsAccountCcmConfigCcmConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.awsAccountConfigId">aws_account_config_id</a></code> | <code>str</code> | Unique Datadog ID of the AWS Account Integration Config. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.ccmConfig">ccm_config</a></code> | <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a></code> | ccm_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aws_account_config_id`<sup>Required</sup> <a name="aws_account_config_id" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.awsAccountConfigId"></a>

```python
aws_account_config_id: str
```

- *Type:* str

Unique Datadog ID of the AWS Account Integration Config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/integration_aws_account_ccm_config#aws_account_config_id IntegrationAwsAccountCcmConfig#aws_account_config_id}

---

##### `ccm_config`<sup>Optional</sup> <a name="ccm_config" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigConfig.property.ccmConfig"></a>

```python
ccm_config: IntegrationAwsAccountCcmConfigCcmConfig
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a>

ccm_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/integration_aws_account_ccm_config#ccm_config IntegrationAwsAccountCcmConfig#ccm_config}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList <a name="IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer"></a>

```python
from cdktn_provider_datadog import integration_aws_account_ccm_config

integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a>]

---


### IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference <a name="IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_aws_account_ccm_config

integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetBucketRegion">reset_bucket_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetReportName">reset_report_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetReportPrefix">reset_report_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetReportType">reset_report_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_bucket_region` <a name="reset_bucket_region" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetBucketRegion"></a>

```python
def reset_bucket_region() -> None
```

##### `reset_report_name` <a name="reset_report_name" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetReportName"></a>

```python
def reset_report_name() -> None
```

##### `reset_report_prefix` <a name="reset_report_prefix" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetReportPrefix"></a>

```python
def reset_report_prefix() -> None
```

##### `reset_report_type` <a name="reset_report_type" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.resetReportType"></a>

```python
def reset_report_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketRegionInput">bucket_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportNameInput">report_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportPrefixInput">report_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportTypeInput">report_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketRegion">bucket_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportName">report_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportPrefix">report_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportType">report_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `bucket_region_input`<sup>Optional</sup> <a name="bucket_region_input" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketRegionInput"></a>

```python
bucket_region_input: str
```

- *Type:* str

---

##### `report_name_input`<sup>Optional</sup> <a name="report_name_input" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportNameInput"></a>

```python
report_name_input: str
```

- *Type:* str

---

##### `report_prefix_input`<sup>Optional</sup> <a name="report_prefix_input" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportPrefixInput"></a>

```python
report_prefix_input: str
```

- *Type:* str

---

##### `report_type_input`<sup>Optional</sup> <a name="report_type_input" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportTypeInput"></a>

```python
report_type_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `bucket_region`<sup>Required</sup> <a name="bucket_region" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.bucketRegion"></a>

```python
bucket_region: str
```

- *Type:* str

---

##### `report_name`<sup>Required</sup> <a name="report_name" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportName"></a>

```python
report_name: str
```

- *Type:* str

---

##### `report_prefix`<sup>Required</sup> <a name="report_prefix" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportPrefix"></a>

```python
report_prefix: str
```

- *Type:* str

---

##### `report_type`<sup>Required</sup> <a name="report_type" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.reportType"></a>

```python
report_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a>

---


### IntegrationAwsAccountCcmConfigCcmConfigOutputReference <a name="IntegrationAwsAccountCcmConfigCcmConfigOutputReference" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import integration_aws_account_ccm_config

integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.putDataExportConfigs">put_data_export_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.resetDataExportConfigs">reset_data_export_configs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_export_configs` <a name="put_data_export_configs" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.putDataExportConfigs"></a>

```python
def put_data_export_configs(
  value: IResolvable | typing.List[IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.putDataExportConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a>]

---

##### `reset_data_export_configs` <a name="reset_data_export_configs" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.resetDataExportConfigs"></a>

```python
def reset_data_export_configs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.dataExportConfigs">data_export_configs</a></code> | <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.dataExportConfigsInput">data_export_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_export_configs`<sup>Required</sup> <a name="data_export_configs" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.dataExportConfigs"></a>

```python
data_export_configs: IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList</a>

---

##### `data_export_configs_input`<sup>Optional</sup> <a name="data_export_configs_input" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.dataExportConfigsInput"></a>

```python
data_export_configs_input: IResolvable | typing.List[IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs">IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationAwsAccountCcmConfigCcmConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationAwsAccountCcmConfig.IntegrationAwsAccountCcmConfigCcmConfig">IntegrationAwsAccountCcmConfigCcmConfig</a>

---



