# `githubOidcIdentityMapping` Submodule <a name="`githubOidcIdentityMapping` Submodule" id="@cdktn/provider-datadog.githubOidcIdentityMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GithubOidcIdentityMapping <a name="GithubOidcIdentityMapping" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping datadog_github_oidc_identity_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer"></a>

```python
from cdktn_provider_datadog import github_oidc_identity_mapping

githubOidcIdentityMapping.GithubOidcIdentityMapping(
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
  claim_matchers: GithubOidcIdentityMappingClaimMatchers = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.accountIdentifier">account_identifier</a></code> | <code>str</code> | The email or handle of the Datadog user or service account that the GitHub workload authenticates as. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.claimMatchers">claim_matchers</a></code> | <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a></code> | claim_matchers block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_identifier`<sup>Required</sup> <a name="account_identifier" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.accountIdentifier"></a>

- *Type:* str

The email or handle of the Datadog user or service account that the GitHub workload authenticates as.

For a Terraform-managed service account, prefer the stable UUID exported by `datadog_service_account.id`; Datadog accepts it as the service account identifier. Datadog normalizes an email to the account's handle, so the handle form is the only value that survives `terraform import` unchanged — importing a mapping configured by email produces a diff on this attribute, which forces replacement. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#account_identifier GithubOidcIdentityMapping#account_identifier}

---

##### `claim_matchers`<sup>Optional</sup> <a name="claim_matchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.claimMatchers"></a>

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a>

claim_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#claim_matchers GithubOidcIdentityMapping#claim_matchers}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers">put_claim_matchers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.resetClaimMatchers">reset_claim_matchers</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_claim_matchers` <a name="put_claim_matchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers"></a>

```python
def put_claim_matchers(
  sub: str,
  actor: str = None,
  actor_id: str = None,
  enterprise: str = None,
  enterprise_id: str = None,
  environment: str = None,
  event_name: str = None,
  job_workflow_ref: str = None,
  ref: str = None,
  ref_type: str = None,
  repository: str = None,
  repository_id: str = None,
  repository_owner: str = None,
  repository_owner_id: str = None,
  repository_visibility: str = None,
  runner_environment: str = None,
  workflow: str = None,
  workflow_ref: str = None
) -> None
```

###### `sub`<sup>Required</sup> <a name="sub" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers.parameter.sub"></a>

- *Type:* str

Regular expression matched against the required `sub` claim of the GitHub Actions OIDC token.

It must start with the literal `repo:<OWNER>/` prefix; the owner cannot be a regex. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#sub GithubOidcIdentityMapping#sub}

---

###### `actor`<sup>Optional</sup> <a name="actor" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers.parameter.actor"></a>

- *Type:* str

Regular expression matched against the `actor` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#actor GithubOidcIdentityMapping#actor}

---

###### `actor_id`<sup>Optional</sup> <a name="actor_id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers.parameter.actorId"></a>

- *Type:* str

Regular expression matched against the `actor_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#actor_id GithubOidcIdentityMapping#actor_id}

---

###### `enterprise`<sup>Optional</sup> <a name="enterprise" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers.parameter.enterprise"></a>

- *Type:* str

Regular expression matched against the `enterprise` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#enterprise GithubOidcIdentityMapping#enterprise}

---

###### `enterprise_id`<sup>Optional</sup> <a name="enterprise_id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers.parameter.enterpriseId"></a>

- *Type:* str

Regular expression matched against the `enterprise_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#enterprise_id GithubOidcIdentityMapping#enterprise_id}

---

###### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers.parameter.environment"></a>

- *Type:* str

Regular expression matched against the `environment` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#environment GithubOidcIdentityMapping#environment}

---

###### `event_name`<sup>Optional</sup> <a name="event_name" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers.parameter.eventName"></a>

- *Type:* str

Regular expression matched against the `event_name` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#event_name GithubOidcIdentityMapping#event_name}

---

###### `job_workflow_ref`<sup>Optional</sup> <a name="job_workflow_ref" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers.parameter.jobWorkflowRef"></a>

- *Type:* str

Regular expression matched against the `job_workflow_ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#job_workflow_ref GithubOidcIdentityMapping#job_workflow_ref}

---

###### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers.parameter.ref"></a>

- *Type:* str

Regular expression matched against the `ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#ref GithubOidcIdentityMapping#ref}

---

###### `ref_type`<sup>Optional</sup> <a name="ref_type" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers.parameter.refType"></a>

- *Type:* str

Regular expression matched against the `ref_type` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#ref_type GithubOidcIdentityMapping#ref_type}

---

###### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers.parameter.repository"></a>

- *Type:* str

Regular expression matched against the `repository` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository GithubOidcIdentityMapping#repository}

---

###### `repository_id`<sup>Optional</sup> <a name="repository_id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers.parameter.repositoryId"></a>

- *Type:* str

Regular expression matched against the `repository_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository_id GithubOidcIdentityMapping#repository_id}

---

###### `repository_owner`<sup>Optional</sup> <a name="repository_owner" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers.parameter.repositoryOwner"></a>

- *Type:* str

Regular expression matched against the `repository_owner` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository_owner GithubOidcIdentityMapping#repository_owner}

---

###### `repository_owner_id`<sup>Optional</sup> <a name="repository_owner_id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers.parameter.repositoryOwnerId"></a>

- *Type:* str

Regular expression matched against the `repository_owner_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository_owner_id GithubOidcIdentityMapping#repository_owner_id}

---

###### `repository_visibility`<sup>Optional</sup> <a name="repository_visibility" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers.parameter.repositoryVisibility"></a>

- *Type:* str

Regular expression matched against the `repository_visibility` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository_visibility GithubOidcIdentityMapping#repository_visibility}

---

###### `runner_environment`<sup>Optional</sup> <a name="runner_environment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers.parameter.runnerEnvironment"></a>

- *Type:* str

Regular expression matched against the `runner_environment` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#runner_environment GithubOidcIdentityMapping#runner_environment}

---

###### `workflow`<sup>Optional</sup> <a name="workflow" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers.parameter.workflow"></a>

- *Type:* str

Regular expression matched against the `workflow` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#workflow GithubOidcIdentityMapping#workflow}

---

###### `workflow_ref`<sup>Optional</sup> <a name="workflow_ref" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers.parameter.workflowRef"></a>

- *Type:* str

Regular expression matched against the `workflow_ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#workflow_ref GithubOidcIdentityMapping#workflow_ref}

---

##### `reset_claim_matchers` <a name="reset_claim_matchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.resetClaimMatchers"></a>

```python
def reset_claim_matchers() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GithubOidcIdentityMapping resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isConstruct"></a>

```python
from cdktn_provider_datadog import github_oidc_identity_mapping

githubOidcIdentityMapping.GithubOidcIdentityMapping.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformElement"></a>

```python
from cdktn_provider_datadog import github_oidc_identity_mapping

githubOidcIdentityMapping.GithubOidcIdentityMapping.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformResource"></a>

```python
from cdktn_provider_datadog import github_oidc_identity_mapping

githubOidcIdentityMapping.GithubOidcIdentityMapping.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import github_oidc_identity_mapping

githubOidcIdentityMapping.GithubOidcIdentityMapping.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GithubOidcIdentityMapping resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GithubOidcIdentityMapping to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GithubOidcIdentityMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GithubOidcIdentityMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountUuid">account_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.claimMatchers">claim_matchers</a></code> | <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference">GithubOidcIdentityMappingClaimMatchersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountIdentifierInput">account_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.claimMatchersInput">claim_matchers_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountIdentifier">account_identifier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_uuid`<sup>Required</sup> <a name="account_uuid" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountUuid"></a>

```python
account_uuid: str
```

- *Type:* str

---

##### `claim_matchers`<sup>Required</sup> <a name="claim_matchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.claimMatchers"></a>

```python
claim_matchers: GithubOidcIdentityMappingClaimMatchersOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference">GithubOidcIdentityMappingClaimMatchersOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `account_identifier_input`<sup>Optional</sup> <a name="account_identifier_input" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountIdentifierInput"></a>

```python
account_identifier_input: str
```

- *Type:* str

---

##### `claim_matchers_input`<sup>Optional</sup> <a name="claim_matchers_input" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.claimMatchersInput"></a>

```python
claim_matchers_input: IResolvable | GithubOidcIdentityMappingClaimMatchers
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a>

---

##### `account_identifier`<sup>Required</sup> <a name="account_identifier" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountIdentifier"></a>

```python
account_identifier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GithubOidcIdentityMappingClaimMatchers <a name="GithubOidcIdentityMappingClaimMatchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.Initializer"></a>

```python
from cdktn_provider_datadog import github_oidc_identity_mapping

githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers(
  sub: str,
  actor: str = None,
  actor_id: str = None,
  enterprise: str = None,
  enterprise_id: str = None,
  environment: str = None,
  event_name: str = None,
  job_workflow_ref: str = None,
  ref: str = None,
  ref_type: str = None,
  repository: str = None,
  repository_id: str = None,
  repository_owner: str = None,
  repository_owner_id: str = None,
  repository_visibility: str = None,
  runner_environment: str = None,
  workflow: str = None,
  workflow_ref: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.sub">sub</a></code> | <code>str</code> | Regular expression matched against the required `sub` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.actor">actor</a></code> | <code>str</code> | Regular expression matched against the `actor` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.actorId">actor_id</a></code> | <code>str</code> | Regular expression matched against the `actor_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.enterprise">enterprise</a></code> | <code>str</code> | Regular expression matched against the `enterprise` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.enterpriseId">enterprise_id</a></code> | <code>str</code> | Regular expression matched against the `enterprise_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.environment">environment</a></code> | <code>str</code> | Regular expression matched against the `environment` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.eventName">event_name</a></code> | <code>str</code> | Regular expression matched against the `event_name` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.jobWorkflowRef">job_workflow_ref</a></code> | <code>str</code> | Regular expression matched against the `job_workflow_ref` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.ref">ref</a></code> | <code>str</code> | Regular expression matched against the `ref` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.refType">ref_type</a></code> | <code>str</code> | Regular expression matched against the `ref_type` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repository">repository</a></code> | <code>str</code> | Regular expression matched against the `repository` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryId">repository_id</a></code> | <code>str</code> | Regular expression matched against the `repository_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryOwner">repository_owner</a></code> | <code>str</code> | Regular expression matched against the `repository_owner` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryOwnerId">repository_owner_id</a></code> | <code>str</code> | Regular expression matched against the `repository_owner_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryVisibility">repository_visibility</a></code> | <code>str</code> | Regular expression matched against the `repository_visibility` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.runnerEnvironment">runner_environment</a></code> | <code>str</code> | Regular expression matched against the `runner_environment` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.workflow">workflow</a></code> | <code>str</code> | Regular expression matched against the `workflow` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.workflowRef">workflow_ref</a></code> | <code>str</code> | Regular expression matched against the `workflow_ref` claim of the GitHub Actions OIDC token. |

---

##### `sub`<sup>Required</sup> <a name="sub" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.sub"></a>

```python
sub: str
```

- *Type:* str

Regular expression matched against the required `sub` claim of the GitHub Actions OIDC token.

It must start with the literal `repo:<OWNER>/` prefix; the owner cannot be a regex. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#sub GithubOidcIdentityMapping#sub}

---

##### `actor`<sup>Optional</sup> <a name="actor" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.actor"></a>

```python
actor: str
```

- *Type:* str

Regular expression matched against the `actor` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#actor GithubOidcIdentityMapping#actor}

---

##### `actor_id`<sup>Optional</sup> <a name="actor_id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.actorId"></a>

```python
actor_id: str
```

- *Type:* str

Regular expression matched against the `actor_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#actor_id GithubOidcIdentityMapping#actor_id}

---

##### `enterprise`<sup>Optional</sup> <a name="enterprise" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.enterprise"></a>

```python
enterprise: str
```

- *Type:* str

Regular expression matched against the `enterprise` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#enterprise GithubOidcIdentityMapping#enterprise}

---

##### `enterprise_id`<sup>Optional</sup> <a name="enterprise_id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.enterpriseId"></a>

```python
enterprise_id: str
```

- *Type:* str

Regular expression matched against the `enterprise_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#enterprise_id GithubOidcIdentityMapping#enterprise_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.environment"></a>

```python
environment: str
```

- *Type:* str

Regular expression matched against the `environment` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#environment GithubOidcIdentityMapping#environment}

---

##### `event_name`<sup>Optional</sup> <a name="event_name" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.eventName"></a>

```python
event_name: str
```

- *Type:* str

Regular expression matched against the `event_name` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#event_name GithubOidcIdentityMapping#event_name}

---

##### `job_workflow_ref`<sup>Optional</sup> <a name="job_workflow_ref" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.jobWorkflowRef"></a>

```python
job_workflow_ref: str
```

- *Type:* str

Regular expression matched against the `job_workflow_ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#job_workflow_ref GithubOidcIdentityMapping#job_workflow_ref}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.ref"></a>

```python
ref: str
```

- *Type:* str

Regular expression matched against the `ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#ref GithubOidcIdentityMapping#ref}

---

##### `ref_type`<sup>Optional</sup> <a name="ref_type" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.refType"></a>

```python
ref_type: str
```

- *Type:* str

Regular expression matched against the `ref_type` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#ref_type GithubOidcIdentityMapping#ref_type}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repository"></a>

```python
repository: str
```

- *Type:* str

Regular expression matched against the `repository` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository GithubOidcIdentityMapping#repository}

---

##### `repository_id`<sup>Optional</sup> <a name="repository_id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

Regular expression matched against the `repository_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository_id GithubOidcIdentityMapping#repository_id}

---

##### `repository_owner`<sup>Optional</sup> <a name="repository_owner" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryOwner"></a>

```python
repository_owner: str
```

- *Type:* str

Regular expression matched against the `repository_owner` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository_owner GithubOidcIdentityMapping#repository_owner}

---

##### `repository_owner_id`<sup>Optional</sup> <a name="repository_owner_id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryOwnerId"></a>

```python
repository_owner_id: str
```

- *Type:* str

Regular expression matched against the `repository_owner_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository_owner_id GithubOidcIdentityMapping#repository_owner_id}

---

##### `repository_visibility`<sup>Optional</sup> <a name="repository_visibility" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryVisibility"></a>

```python
repository_visibility: str
```

- *Type:* str

Regular expression matched against the `repository_visibility` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository_visibility GithubOidcIdentityMapping#repository_visibility}

---

##### `runner_environment`<sup>Optional</sup> <a name="runner_environment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.runnerEnvironment"></a>

```python
runner_environment: str
```

- *Type:* str

Regular expression matched against the `runner_environment` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#runner_environment GithubOidcIdentityMapping#runner_environment}

---

##### `workflow`<sup>Optional</sup> <a name="workflow" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.workflow"></a>

```python
workflow: str
```

- *Type:* str

Regular expression matched against the `workflow` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#workflow GithubOidcIdentityMapping#workflow}

---

##### `workflow_ref`<sup>Optional</sup> <a name="workflow_ref" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.workflowRef"></a>

```python
workflow_ref: str
```

- *Type:* str

Regular expression matched against the `workflow_ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#workflow_ref GithubOidcIdentityMapping#workflow_ref}

---

### GithubOidcIdentityMappingConfig <a name="GithubOidcIdentityMappingConfig" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.Initializer"></a>

```python
from cdktn_provider_datadog import github_oidc_identity_mapping

githubOidcIdentityMapping.GithubOidcIdentityMappingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_identifier: str,
  claim_matchers: GithubOidcIdentityMappingClaimMatchers = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.accountIdentifier">account_identifier</a></code> | <code>str</code> | The email or handle of the Datadog user or service account that the GitHub workload authenticates as. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.claimMatchers">claim_matchers</a></code> | <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a></code> | claim_matchers block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_identifier`<sup>Required</sup> <a name="account_identifier" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.accountIdentifier"></a>

```python
account_identifier: str
```

- *Type:* str

The email or handle of the Datadog user or service account that the GitHub workload authenticates as.

For a Terraform-managed service account, prefer the stable UUID exported by `datadog_service_account.id`; Datadog accepts it as the service account identifier. Datadog normalizes an email to the account's handle, so the handle form is the only value that survives `terraform import` unchanged — importing a mapping configured by email produces a diff on this attribute, which forces replacement. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#account_identifier GithubOidcIdentityMapping#account_identifier}

---

##### `claim_matchers`<sup>Optional</sup> <a name="claim_matchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.claimMatchers"></a>

```python
claim_matchers: GithubOidcIdentityMappingClaimMatchers
```

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a>

claim_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#claim_matchers GithubOidcIdentityMapping#claim_matchers}

---

## Classes <a name="Classes" id="Classes"></a>

### GithubOidcIdentityMappingClaimMatchersOutputReference <a name="GithubOidcIdentityMappingClaimMatchersOutputReference" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import github_oidc_identity_mapping

githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetActor">reset_actor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetActorId">reset_actor_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnterprise">reset_enterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnterpriseId">reset_enterprise_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEventName">reset_event_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetJobWorkflowRef">reset_job_workflow_ref</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRef">reset_ref</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRefType">reset_ref_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepository">reset_repository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryId">reset_repository_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryOwner">reset_repository_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryOwnerId">reset_repository_owner_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryVisibility">reset_repository_visibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRunnerEnvironment">reset_runner_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetWorkflow">reset_workflow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetWorkflowRef">reset_workflow_ref</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_actor` <a name="reset_actor" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetActor"></a>

```python
def reset_actor() -> None
```

##### `reset_actor_id` <a name="reset_actor_id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetActorId"></a>

```python
def reset_actor_id() -> None
```

##### `reset_enterprise` <a name="reset_enterprise" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnterprise"></a>

```python
def reset_enterprise() -> None
```

##### `reset_enterprise_id` <a name="reset_enterprise_id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnterpriseId"></a>

```python
def reset_enterprise_id() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_event_name` <a name="reset_event_name" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEventName"></a>

```python
def reset_event_name() -> None
```

##### `reset_job_workflow_ref` <a name="reset_job_workflow_ref" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetJobWorkflowRef"></a>

```python
def reset_job_workflow_ref() -> None
```

##### `reset_ref` <a name="reset_ref" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRef"></a>

```python
def reset_ref() -> None
```

##### `reset_ref_type` <a name="reset_ref_type" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRefType"></a>

```python
def reset_ref_type() -> None
```

##### `reset_repository` <a name="reset_repository" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepository"></a>

```python
def reset_repository() -> None
```

##### `reset_repository_id` <a name="reset_repository_id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryId"></a>

```python
def reset_repository_id() -> None
```

##### `reset_repository_owner` <a name="reset_repository_owner" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryOwner"></a>

```python
def reset_repository_owner() -> None
```

##### `reset_repository_owner_id` <a name="reset_repository_owner_id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryOwnerId"></a>

```python
def reset_repository_owner_id() -> None
```

##### `reset_repository_visibility` <a name="reset_repository_visibility" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryVisibility"></a>

```python
def reset_repository_visibility() -> None
```

##### `reset_runner_environment` <a name="reset_runner_environment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRunnerEnvironment"></a>

```python
def reset_runner_environment() -> None
```

##### `reset_workflow` <a name="reset_workflow" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetWorkflow"></a>

```python
def reset_workflow() -> None
```

##### `reset_workflow_ref` <a name="reset_workflow_ref" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetWorkflowRef"></a>

```python
def reset_workflow_ref() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorIdInput">actor_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorInput">actor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseIdInput">enterprise_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseInput">enterprise_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.eventNameInput">event_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.jobWorkflowRefInput">job_workflow_ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refInput">ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refTypeInput">ref_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerIdInput">repository_owner_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerInput">repository_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryVisibilityInput">repository_visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.runnerEnvironmentInput">runner_environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.subInput">sub_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowInput">workflow_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowRefInput">workflow_ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actor">actor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorId">actor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterprise">enterprise</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseId">enterprise_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.eventName">event_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.jobWorkflowRef">job_workflow_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refType">ref_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwner">repository_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerId">repository_owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryVisibility">repository_visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.runnerEnvironment">runner_environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.sub">sub</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflow">workflow</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowRef">workflow_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actor_id_input`<sup>Optional</sup> <a name="actor_id_input" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorIdInput"></a>

```python
actor_id_input: str
```

- *Type:* str

---

##### `actor_input`<sup>Optional</sup> <a name="actor_input" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorInput"></a>

```python
actor_input: str
```

- *Type:* str

---

##### `enterprise_id_input`<sup>Optional</sup> <a name="enterprise_id_input" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseIdInput"></a>

```python
enterprise_id_input: str
```

- *Type:* str

---

##### `enterprise_input`<sup>Optional</sup> <a name="enterprise_input" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseInput"></a>

```python
enterprise_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `event_name_input`<sup>Optional</sup> <a name="event_name_input" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.eventNameInput"></a>

```python
event_name_input: str
```

- *Type:* str

---

##### `job_workflow_ref_input`<sup>Optional</sup> <a name="job_workflow_ref_input" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.jobWorkflowRefInput"></a>

```python
job_workflow_ref_input: str
```

- *Type:* str

---

##### `ref_input`<sup>Optional</sup> <a name="ref_input" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refInput"></a>

```python
ref_input: str
```

- *Type:* str

---

##### `ref_type_input`<sup>Optional</sup> <a name="ref_type_input" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refTypeInput"></a>

```python
ref_type_input: str
```

- *Type:* str

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `repository_owner_id_input`<sup>Optional</sup> <a name="repository_owner_id_input" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerIdInput"></a>

```python
repository_owner_id_input: str
```

- *Type:* str

---

##### `repository_owner_input`<sup>Optional</sup> <a name="repository_owner_input" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerInput"></a>

```python
repository_owner_input: str
```

- *Type:* str

---

##### `repository_visibility_input`<sup>Optional</sup> <a name="repository_visibility_input" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryVisibilityInput"></a>

```python
repository_visibility_input: str
```

- *Type:* str

---

##### `runner_environment_input`<sup>Optional</sup> <a name="runner_environment_input" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.runnerEnvironmentInput"></a>

```python
runner_environment_input: str
```

- *Type:* str

---

##### `sub_input`<sup>Optional</sup> <a name="sub_input" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.subInput"></a>

```python
sub_input: str
```

- *Type:* str

---

##### `workflow_input`<sup>Optional</sup> <a name="workflow_input" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowInput"></a>

```python
workflow_input: str
```

- *Type:* str

---

##### `workflow_ref_input`<sup>Optional</sup> <a name="workflow_ref_input" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowRefInput"></a>

```python
workflow_ref_input: str
```

- *Type:* str

---

##### `actor`<sup>Required</sup> <a name="actor" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actor"></a>

```python
actor: str
```

- *Type:* str

---

##### `actor_id`<sup>Required</sup> <a name="actor_id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorId"></a>

```python
actor_id: str
```

- *Type:* str

---

##### `enterprise`<sup>Required</sup> <a name="enterprise" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterprise"></a>

```python
enterprise: str
```

- *Type:* str

---

##### `enterprise_id`<sup>Required</sup> <a name="enterprise_id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseId"></a>

```python
enterprise_id: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `event_name`<sup>Required</sup> <a name="event_name" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.eventName"></a>

```python
event_name: str
```

- *Type:* str

---

##### `job_workflow_ref`<sup>Required</sup> <a name="job_workflow_ref" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.jobWorkflowRef"></a>

```python
job_workflow_ref: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `ref_type`<sup>Required</sup> <a name="ref_type" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refType"></a>

```python
ref_type: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

##### `repository_owner`<sup>Required</sup> <a name="repository_owner" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwner"></a>

```python
repository_owner: str
```

- *Type:* str

---

##### `repository_owner_id`<sup>Required</sup> <a name="repository_owner_id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerId"></a>

```python
repository_owner_id: str
```

- *Type:* str

---

##### `repository_visibility`<sup>Required</sup> <a name="repository_visibility" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryVisibility"></a>

```python
repository_visibility: str
```

- *Type:* str

---

##### `runner_environment`<sup>Required</sup> <a name="runner_environment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.runnerEnvironment"></a>

```python
runner_environment: str
```

- *Type:* str

---

##### `sub`<sup>Required</sup> <a name="sub" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.sub"></a>

```python
sub: str
```

- *Type:* str

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflow"></a>

```python
workflow: str
```

- *Type:* str

---

##### `workflow_ref`<sup>Required</sup> <a name="workflow_ref" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowRef"></a>

```python
workflow_ref: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GithubOidcIdentityMappingClaimMatchers
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a>

---



