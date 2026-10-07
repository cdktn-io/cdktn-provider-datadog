# `awsWifIdentityMapping` Submodule <a name="`awsWifIdentityMapping` Submodule" id="@cdktn/provider-datadog.awsWifIdentityMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsWifIdentityMapping <a name="AwsWifIdentityMapping" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/aws_wif_identity_mapping datadog_aws_wif_identity_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer"></a>

```python
from cdktn_provider_datadog import aws_wif_identity_mapping

awsWifIdentityMapping.AwsWifIdentityMapping(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_identifier: str,
  arn_pattern: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.accountIdentifier">account_identifier</a></code> | <code>str</code> | The email or handle of the Datadog user or service account that the AWS principal authenticates as. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.arnPattern">arn_pattern</a></code> | <code>str</code> | The AWS caller ARN pattern allowed to authenticate. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_identifier`<sup>Required</sup> <a name="account_identifier" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.accountIdentifier"></a>

- *Type:* str

The email or handle of the Datadog user or service account that the AWS principal authenticates as.

For a Terraform-managed service account, prefer the stable UUID exported by `datadog_service_account.id`; Datadog accepts it as the service account identifier. Datadog normalizes an email to the account's handle, so the handle form is the only value that survives `terraform import` unchanged — importing a mapping configured by email produces a diff on this attribute, which forces replacement. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/aws_wif_identity_mapping#account_identifier AwsWifIdentityMapping#account_identifier}

---

##### `arn_pattern`<sup>Required</sup> <a name="arn_pattern" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.Initializer.parameter.arnPattern"></a>

- *Type:* str

The AWS caller ARN pattern allowed to authenticate.

Currently, only the `aws` partition is supported. For role-based authentication, use the STS assumed-role ARN returned by `aws sts get-caller-identity`, not the IAM role ARN shown in the AWS console. A pattern may contain one wildcard only, as a trailing `/*` after a specific resource, for example `arn:aws:sts::123456789012:assumed-role/terraform-runner/*`. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/aws_wif_identity_mapping#arn_pattern AwsWifIdentityMapping#arn_pattern}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AwsWifIdentityMapping resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isConstruct"></a>

```python
from cdktn_provider_datadog import aws_wif_identity_mapping

awsWifIdentityMapping.AwsWifIdentityMapping.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isTerraformElement"></a>

```python
from cdktn_provider_datadog import aws_wif_identity_mapping

awsWifIdentityMapping.AwsWifIdentityMapping.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isTerraformResource"></a>

```python
from cdktn_provider_datadog import aws_wif_identity_mapping

awsWifIdentityMapping.AwsWifIdentityMapping.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import aws_wif_identity_mapping

awsWifIdentityMapping.AwsWifIdentityMapping.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AwsWifIdentityMapping resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AwsWifIdentityMapping to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AwsWifIdentityMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/aws_wif_identity_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AwsWifIdentityMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.accountUuid">account_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.accountIdentifierInput">account_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.arnPatternInput">arn_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.accountIdentifier">account_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.arnPattern">arn_pattern</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_uuid`<sup>Required</sup> <a name="account_uuid" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.accountUuid"></a>

```python
account_uuid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `account_identifier_input`<sup>Optional</sup> <a name="account_identifier_input" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.accountIdentifierInput"></a>

```python
account_identifier_input: str
```

- *Type:* str

---

##### `arn_pattern_input`<sup>Optional</sup> <a name="arn_pattern_input" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.arnPatternInput"></a>

```python
arn_pattern_input: str
```

- *Type:* str

---

##### `account_identifier`<sup>Required</sup> <a name="account_identifier" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.accountIdentifier"></a>

```python
account_identifier: str
```

- *Type:* str

---

##### `arn_pattern`<sup>Required</sup> <a name="arn_pattern" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.arnPattern"></a>

```python
arn_pattern: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMapping.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AwsWifIdentityMappingConfig <a name="AwsWifIdentityMappingConfig" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.Initializer"></a>

```python
from cdktn_provider_datadog import aws_wif_identity_mapping

awsWifIdentityMapping.AwsWifIdentityMappingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_identifier: str,
  arn_pattern: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.accountIdentifier">account_identifier</a></code> | <code>str</code> | The email or handle of the Datadog user or service account that the AWS principal authenticates as. |
| <code><a href="#@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.arnPattern">arn_pattern</a></code> | <code>str</code> | The AWS caller ARN pattern allowed to authenticate. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_identifier`<sup>Required</sup> <a name="account_identifier" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.accountIdentifier"></a>

```python
account_identifier: str
```

- *Type:* str

The email or handle of the Datadog user or service account that the AWS principal authenticates as.

For a Terraform-managed service account, prefer the stable UUID exported by `datadog_service_account.id`; Datadog accepts it as the service account identifier. Datadog normalizes an email to the account's handle, so the handle form is the only value that survives `terraform import` unchanged — importing a mapping configured by email produces a diff on this attribute, which forces replacement. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/aws_wif_identity_mapping#account_identifier AwsWifIdentityMapping#account_identifier}

---

##### `arn_pattern`<sup>Required</sup> <a name="arn_pattern" id="@cdktn/provider-datadog.awsWifIdentityMapping.AwsWifIdentityMappingConfig.property.arnPattern"></a>

```python
arn_pattern: str
```

- *Type:* str

The AWS caller ARN pattern allowed to authenticate.

Currently, only the `aws` partition is supported. For role-based authentication, use the STS assumed-role ARN returned by `aws sts get-caller-identity`, not the IAM role ARN shown in the AWS console. A pattern may contain one wildcard only, as a trailing `/*` after a specific resource, for example `arn:aws:sts::123456789012:assumed-role/terraform-runner/*`. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/aws_wif_identity_mapping#arn_pattern AwsWifIdentityMapping#arn_pattern}

---



