# `cloudInventorySyncConfig` Submodule <a name="`cloudInventorySyncConfig` Submodule" id="@cdktn/provider-datadog.cloudInventorySyncConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudInventorySyncConfig <a name="CloudInventorySyncConfig" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config datadog_cloud_inventory_sync_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer"></a>

```python
from cdktn_provider_datadog import cloud_inventory_sync_config

cloudInventorySyncConfig.CloudInventorySyncConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cloud_provider: str,
  aws: CloudInventorySyncConfigAws = None,
  azure: CloudInventorySyncConfigAzure = None,
  gcp: CloudInventorySyncConfigGcp = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.cloudProvider">cloud_provider</a></code> | <code>str</code> | The cloud provider type. Valid values are `aws`, `azure`, `gcp`. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.aws">aws</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a></code> | aws block. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.azure">azure</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a></code> | azure block. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.gcp">gcp</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a></code> | gcp block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cloud_provider`<sup>Required</sup> <a name="cloud_provider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.cloudProvider"></a>

- *Type:* str

The cloud provider type. Valid values are `aws`, `azure`, `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#cloud_provider CloudInventorySyncConfig#cloud_provider}

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.aws"></a>

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#aws CloudInventorySyncConfig#aws}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.azure"></a>

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#azure CloudInventorySyncConfig#azure}

---

##### `gcp`<sup>Optional</sup> <a name="gcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.gcp"></a>

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a>

gcp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#gcp CloudInventorySyncConfig#gcp}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAws">put_aws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAzure">put_azure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putGcp">put_gcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetAws">reset_aws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetAzure">reset_azure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetGcp">reset_gcp</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aws` <a name="put_aws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAws"></a>

```python
def put_aws(
  aws_account_id: str = None,
  destination_bucket_name: str = None,
  destination_bucket_region: str = None,
  destination_prefix: str = None
) -> None
```

###### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAws.parameter.awsAccountId"></a>

- *Type:* str

AWS Account ID of the account holding the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#aws_account_id CloudInventorySyncConfig#aws_account_id}

---

###### `destination_bucket_name`<sup>Optional</sup> <a name="destination_bucket_name" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAws.parameter.destinationBucketName"></a>

- *Type:* str

Name of the S3 bucket holding the inventory files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#destination_bucket_name CloudInventorySyncConfig#destination_bucket_name}

---

###### `destination_bucket_region`<sup>Optional</sup> <a name="destination_bucket_region" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAws.parameter.destinationBucketRegion"></a>

- *Type:* str

AWS Region of the bucket holding the inventory files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#destination_bucket_region CloudInventorySyncConfig#destination_bucket_region}

---

###### `destination_prefix`<sup>Optional</sup> <a name="destination_prefix" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAws.parameter.destinationPrefix"></a>

- *Type:* str

Prefix path within the bucket for inventory files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#destination_prefix CloudInventorySyncConfig#destination_prefix}

---

##### `put_azure` <a name="put_azure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAzure"></a>

```python
def put_azure(
  client_id: str = None,
  container: str = None,
  resource_group: str = None,
  storage_account: str = None,
  subscription_id: str = None,
  tenant_id: str = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAzure.parameter.clientId"></a>

- *Type:* str

Azure Client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#client_id CloudInventorySyncConfig#client_id}

---

###### `container`<sup>Optional</sup> <a name="container" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAzure.parameter.container"></a>

- *Type:* str

Azure Storage Container name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#container CloudInventorySyncConfig#container}

---

###### `resource_group`<sup>Optional</sup> <a name="resource_group" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAzure.parameter.resourceGroup"></a>

- *Type:* str

Azure Resource Group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#resource_group CloudInventorySyncConfig#resource_group}

---

###### `storage_account`<sup>Optional</sup> <a name="storage_account" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAzure.parameter.storageAccount"></a>

- *Type:* str

Azure Storage Account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#storage_account CloudInventorySyncConfig#storage_account}

---

###### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAzure.parameter.subscriptionId"></a>

- *Type:* str

Azure Subscription ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#subscription_id CloudInventorySyncConfig#subscription_id}

---

###### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAzure.parameter.tenantId"></a>

- *Type:* str

Azure Tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#tenant_id CloudInventorySyncConfig#tenant_id}

---

##### `put_gcp` <a name="put_gcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putGcp"></a>

```python
def put_gcp(
  destination_bucket_name: str = None,
  project_id: str = None,
  service_account_email: str = None,
  source_bucket_name: str = None
) -> None
```

###### `destination_bucket_name`<sup>Optional</sup> <a name="destination_bucket_name" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putGcp.parameter.destinationBucketName"></a>

- *Type:* str

Name of the GCS bucket holding the inventory files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#destination_bucket_name CloudInventorySyncConfig#destination_bucket_name}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putGcp.parameter.projectId"></a>

- *Type:* str

GCP Project ID of the project holding the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#project_id CloudInventorySyncConfig#project_id}

---

###### `service_account_email`<sup>Optional</sup> <a name="service_account_email" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putGcp.parameter.serviceAccountEmail"></a>

- *Type:* str

Service account email used for reading the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#service_account_email CloudInventorySyncConfig#service_account_email}

---

###### `source_bucket_name`<sup>Optional</sup> <a name="source_bucket_name" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putGcp.parameter.sourceBucketName"></a>

- *Type:* str

Name of the source bucket the inventory report is generated for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#source_bucket_name CloudInventorySyncConfig#source_bucket_name}

---

##### `reset_aws` <a name="reset_aws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetAws"></a>

```python
def reset_aws() -> None
```

##### `reset_azure` <a name="reset_azure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetAzure"></a>

```python
def reset_azure() -> None
```

##### `reset_gcp` <a name="reset_gcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetGcp"></a>

```python
def reset_gcp() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudInventorySyncConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isConstruct"></a>

```python
from cdktn_provider_datadog import cloud_inventory_sync_config

cloudInventorySyncConfig.CloudInventorySyncConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformElement"></a>

```python
from cdktn_provider_datadog import cloud_inventory_sync_config

cloudInventorySyncConfig.CloudInventorySyncConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformResource"></a>

```python
from cdktn_provider_datadog import cloud_inventory_sync_config

cloudInventorySyncConfig.CloudInventorySyncConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import cloud_inventory_sync_config

cloudInventorySyncConfig.CloudInventorySyncConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudInventorySyncConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudInventorySyncConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudInventorySyncConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudInventorySyncConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.aws">aws</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference">CloudInventorySyncConfigAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.azure">azure</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference">CloudInventorySyncConfigAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.gcp">gcp</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference">CloudInventorySyncConfigGcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.awsInput">aws_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.azureInput">azure_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cloudProviderInput">cloud_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.gcpInput">gcp_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cloudProvider">cloud_provider</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.aws"></a>

```python
aws: CloudInventorySyncConfigAwsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference">CloudInventorySyncConfigAwsOutputReference</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.azure"></a>

```python
azure: CloudInventorySyncConfigAzureOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference">CloudInventorySyncConfigAzureOutputReference</a>

---

##### `gcp`<sup>Required</sup> <a name="gcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.gcp"></a>

```python
gcp: CloudInventorySyncConfigGcpOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference">CloudInventorySyncConfigGcpOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `aws_input`<sup>Optional</sup> <a name="aws_input" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.awsInput"></a>

```python
aws_input: IResolvable | CloudInventorySyncConfigAws
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a>

---

##### `azure_input`<sup>Optional</sup> <a name="azure_input" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.azureInput"></a>

```python
azure_input: IResolvable | CloudInventorySyncConfigAzure
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a>

---

##### `cloud_provider_input`<sup>Optional</sup> <a name="cloud_provider_input" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cloudProviderInput"></a>

```python
cloud_provider_input: str
```

- *Type:* str

---

##### `gcp_input`<sup>Optional</sup> <a name="gcp_input" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.gcpInput"></a>

```python
gcp_input: IResolvable | CloudInventorySyncConfigGcp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a>

---

##### `cloud_provider`<sup>Required</sup> <a name="cloud_provider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cloudProvider"></a>

```python
cloud_provider: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudInventorySyncConfigAws <a name="CloudInventorySyncConfigAws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.Initializer"></a>

```python
from cdktn_provider_datadog import cloud_inventory_sync_config

cloudInventorySyncConfig.CloudInventorySyncConfigAws(
  aws_account_id: str = None,
  destination_bucket_name: str = None,
  destination_bucket_region: str = None,
  destination_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | AWS Account ID of the account holding the bucket. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationBucketName">destination_bucket_name</a></code> | <code>str</code> | Name of the S3 bucket holding the inventory files. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationBucketRegion">destination_bucket_region</a></code> | <code>str</code> | AWS Region of the bucket holding the inventory files. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationPrefix">destination_prefix</a></code> | <code>str</code> | Prefix path within the bucket for inventory files. |

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

AWS Account ID of the account holding the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#aws_account_id CloudInventorySyncConfig#aws_account_id}

---

##### `destination_bucket_name`<sup>Optional</sup> <a name="destination_bucket_name" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationBucketName"></a>

```python
destination_bucket_name: str
```

- *Type:* str

Name of the S3 bucket holding the inventory files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#destination_bucket_name CloudInventorySyncConfig#destination_bucket_name}

---

##### `destination_bucket_region`<sup>Optional</sup> <a name="destination_bucket_region" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationBucketRegion"></a>

```python
destination_bucket_region: str
```

- *Type:* str

AWS Region of the bucket holding the inventory files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#destination_bucket_region CloudInventorySyncConfig#destination_bucket_region}

---

##### `destination_prefix`<sup>Optional</sup> <a name="destination_prefix" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationPrefix"></a>

```python
destination_prefix: str
```

- *Type:* str

Prefix path within the bucket for inventory files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#destination_prefix CloudInventorySyncConfig#destination_prefix}

---

### CloudInventorySyncConfigAzure <a name="CloudInventorySyncConfigAzure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.Initializer"></a>

```python
from cdktn_provider_datadog import cloud_inventory_sync_config

cloudInventorySyncConfig.CloudInventorySyncConfigAzure(
  client_id: str = None,
  container: str = None,
  resource_group: str = None,
  storage_account: str = None,
  subscription_id: str = None,
  tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.clientId">client_id</a></code> | <code>str</code> | Azure Client ID. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.container">container</a></code> | <code>str</code> | Azure Storage Container name. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.resourceGroup">resource_group</a></code> | <code>str</code> | Azure Resource Group name. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.storageAccount">storage_account</a></code> | <code>str</code> | Azure Storage Account name. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Azure Subscription ID. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.tenantId">tenant_id</a></code> | <code>str</code> | Azure Tenant ID. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Azure Client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#client_id CloudInventorySyncConfig#client_id}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.container"></a>

```python
container: str
```

- *Type:* str

Azure Storage Container name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#container CloudInventorySyncConfig#container}

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

Azure Resource Group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#resource_group CloudInventorySyncConfig#resource_group}

---

##### `storage_account`<sup>Optional</sup> <a name="storage_account" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.storageAccount"></a>

```python
storage_account: str
```

- *Type:* str

Azure Storage Account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#storage_account CloudInventorySyncConfig#storage_account}

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Azure Subscription ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#subscription_id CloudInventorySyncConfig#subscription_id}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Azure Tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#tenant_id CloudInventorySyncConfig#tenant_id}

---

### CloudInventorySyncConfigConfig <a name="CloudInventorySyncConfigConfig" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.Initializer"></a>

```python
from cdktn_provider_datadog import cloud_inventory_sync_config

cloudInventorySyncConfig.CloudInventorySyncConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cloud_provider: str,
  aws: CloudInventorySyncConfigAws = None,
  azure: CloudInventorySyncConfigAzure = None,
  gcp: CloudInventorySyncConfigGcp = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.cloudProvider">cloud_provider</a></code> | <code>str</code> | The cloud provider type. Valid values are `aws`, `azure`, `gcp`. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.aws">aws</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a></code> | aws block. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.azure">azure</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a></code> | azure block. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.gcp">gcp</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a></code> | gcp block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cloud_provider`<sup>Required</sup> <a name="cloud_provider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.cloudProvider"></a>

```python
cloud_provider: str
```

- *Type:* str

The cloud provider type. Valid values are `aws`, `azure`, `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#cloud_provider CloudInventorySyncConfig#cloud_provider}

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.aws"></a>

```python
aws: CloudInventorySyncConfigAws
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#aws CloudInventorySyncConfig#aws}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.azure"></a>

```python
azure: CloudInventorySyncConfigAzure
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#azure CloudInventorySyncConfig#azure}

---

##### `gcp`<sup>Optional</sup> <a name="gcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.gcp"></a>

```python
gcp: CloudInventorySyncConfigGcp
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a>

gcp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#gcp CloudInventorySyncConfig#gcp}

---

### CloudInventorySyncConfigGcp <a name="CloudInventorySyncConfigGcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.Initializer"></a>

```python
from cdktn_provider_datadog import cloud_inventory_sync_config

cloudInventorySyncConfig.CloudInventorySyncConfigGcp(
  destination_bucket_name: str = None,
  project_id: str = None,
  service_account_email: str = None,
  source_bucket_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.destinationBucketName">destination_bucket_name</a></code> | <code>str</code> | Name of the GCS bucket holding the inventory files. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.projectId">project_id</a></code> | <code>str</code> | GCP Project ID of the project holding the bucket. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | Service account email used for reading the bucket. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.sourceBucketName">source_bucket_name</a></code> | <code>str</code> | Name of the source bucket the inventory report is generated for. |

---

##### `destination_bucket_name`<sup>Optional</sup> <a name="destination_bucket_name" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.destinationBucketName"></a>

```python
destination_bucket_name: str
```

- *Type:* str

Name of the GCS bucket holding the inventory files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#destination_bucket_name CloudInventorySyncConfig#destination_bucket_name}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

GCP Project ID of the project holding the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#project_id CloudInventorySyncConfig#project_id}

---

##### `service_account_email`<sup>Optional</sup> <a name="service_account_email" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

Service account email used for reading the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#service_account_email CloudInventorySyncConfig#service_account_email}

---

##### `source_bucket_name`<sup>Optional</sup> <a name="source_bucket_name" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.sourceBucketName"></a>

```python
source_bucket_name: str
```

- *Type:* str

Name of the source bucket the inventory report is generated for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#source_bucket_name CloudInventorySyncConfig#source_bucket_name}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudInventorySyncConfigAwsOutputReference <a name="CloudInventorySyncConfigAwsOutputReference" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import cloud_inventory_sync_config

cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetAwsAccountId">reset_aws_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationBucketName">reset_destination_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationBucketRegion">reset_destination_bucket_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationPrefix">reset_destination_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_account_id` <a name="reset_aws_account_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetAwsAccountId"></a>

```python
def reset_aws_account_id() -> None
```

##### `reset_destination_bucket_name` <a name="reset_destination_bucket_name" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationBucketName"></a>

```python
def reset_destination_bucket_name() -> None
```

##### `reset_destination_bucket_region` <a name="reset_destination_bucket_region" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationBucketRegion"></a>

```python
def reset_destination_bucket_region() -> None
```

##### `reset_destination_prefix` <a name="reset_destination_prefix" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationPrefix"></a>

```python
def reset_destination_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketNameInput">destination_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketRegionInput">destination_bucket_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationPrefixInput">destination_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketName">destination_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketRegion">destination_bucket_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationPrefix">destination_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `destination_bucket_name_input`<sup>Optional</sup> <a name="destination_bucket_name_input" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketNameInput"></a>

```python
destination_bucket_name_input: str
```

- *Type:* str

---

##### `destination_bucket_region_input`<sup>Optional</sup> <a name="destination_bucket_region_input" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketRegionInput"></a>

```python
destination_bucket_region_input: str
```

- *Type:* str

---

##### `destination_prefix_input`<sup>Optional</sup> <a name="destination_prefix_input" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationPrefixInput"></a>

```python
destination_prefix_input: str
```

- *Type:* str

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `destination_bucket_name`<sup>Required</sup> <a name="destination_bucket_name" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketName"></a>

```python
destination_bucket_name: str
```

- *Type:* str

---

##### `destination_bucket_region`<sup>Required</sup> <a name="destination_bucket_region" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketRegion"></a>

```python
destination_bucket_region: str
```

- *Type:* str

---

##### `destination_prefix`<sup>Required</sup> <a name="destination_prefix" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationPrefix"></a>

```python
destination_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudInventorySyncConfigAws
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a>

---


### CloudInventorySyncConfigAzureOutputReference <a name="CloudInventorySyncConfigAzureOutputReference" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import cloud_inventory_sync_config

cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetContainer">reset_container</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetResourceGroup">reset_resource_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetStorageAccount">reset_storage_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetSubscriptionId">reset_subscription_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetTenantId">reset_tenant_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_container` <a name="reset_container" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetContainer"></a>

```python
def reset_container() -> None
```

##### `reset_resource_group` <a name="reset_resource_group" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetResourceGroup"></a>

```python
def reset_resource_group() -> None
```

##### `reset_storage_account` <a name="reset_storage_account" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetStorageAccount"></a>

```python
def reset_storage_account() -> None
```

##### `reset_subscription_id` <a name="reset_subscription_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetSubscriptionId"></a>

```python
def reset_subscription_id() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.containerInput">container_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.resourceGroupInput">resource_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.storageAccountInput">storage_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.container">container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.storageAccount">storage_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.containerInput"></a>

```python
container_input: str
```

- *Type:* str

---

##### `resource_group_input`<sup>Optional</sup> <a name="resource_group_input" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.resourceGroupInput"></a>

```python
resource_group_input: str
```

- *Type:* str

---

##### `storage_account_input`<sup>Optional</sup> <a name="storage_account_input" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.storageAccountInput"></a>

```python
storage_account_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.container"></a>

```python
container: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.storageAccount"></a>

```python
storage_account: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudInventorySyncConfigAzure
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a>

---


### CloudInventorySyncConfigGcpOutputReference <a name="CloudInventorySyncConfigGcpOutputReference" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import cloud_inventory_sync_config

cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetDestinationBucketName">reset_destination_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetServiceAccountEmail">reset_service_account_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetSourceBucketName">reset_source_bucket_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_bucket_name` <a name="reset_destination_bucket_name" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetDestinationBucketName"></a>

```python
def reset_destination_bucket_name() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_service_account_email` <a name="reset_service_account_email" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetServiceAccountEmail"></a>

```python
def reset_service_account_email() -> None
```

##### `reset_source_bucket_name` <a name="reset_source_bucket_name" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetSourceBucketName"></a>

```python
def reset_source_bucket_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.destinationBucketNameInput">destination_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.serviceAccountEmailInput">service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.sourceBucketNameInput">source_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.destinationBucketName">destination_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.sourceBucketName">source_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_bucket_name_input`<sup>Optional</sup> <a name="destination_bucket_name_input" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.destinationBucketNameInput"></a>

```python
destination_bucket_name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `service_account_email_input`<sup>Optional</sup> <a name="service_account_email_input" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.serviceAccountEmailInput"></a>

```python
service_account_email_input: str
```

- *Type:* str

---

##### `source_bucket_name_input`<sup>Optional</sup> <a name="source_bucket_name_input" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.sourceBucketNameInput"></a>

```python
source_bucket_name_input: str
```

- *Type:* str

---

##### `destination_bucket_name`<sup>Required</sup> <a name="destination_bucket_name" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.destinationBucketName"></a>

```python
destination_bucket_name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `source_bucket_name`<sup>Required</sup> <a name="source_bucket_name" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.sourceBucketName"></a>

```python
source_bucket_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudInventorySyncConfigGcp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a>

---



