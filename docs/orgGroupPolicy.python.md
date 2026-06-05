# `orgGroupPolicy` Submodule <a name="`orgGroupPolicy` Submodule" id="@cdktn/provider-datadog.orgGroupPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrgGroupPolicy <a name="OrgGroupPolicy" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/org_group_policy datadog_org_group_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer"></a>

```python
from cdktn_provider_datadog import org_group_policy

orgGroupPolicy.OrgGroupPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  content: str,
  org_group_id: str,
  policy_name: str,
  enforcement_tier: str = None,
  policy_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.content">content</a></code> | <code>str</code> | The policy content as a JSON-encoded string. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.orgGroupId">org_group_id</a></code> | <code>str</code> | The UUID of the org group this policy belongs to. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.policyName">policy_name</a></code> | <code>str</code> | The name of the policy. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.enforcementTier">enforcement_tier</a></code> | <code>str</code> | The enforcement tier of the policy. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.policyType">policy_type</a></code> | <code>str</code> | The type of the policy. Valid values are `org_config`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.content"></a>

- *Type:* str

The policy content as a JSON-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/org_group_policy#content OrgGroupPolicy#content}

---

##### `org_group_id`<sup>Required</sup> <a name="org_group_id" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.orgGroupId"></a>

- *Type:* str

The UUID of the org group this policy belongs to. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/org_group_policy#org_group_id OrgGroupPolicy#org_group_id}

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.policyName"></a>

- *Type:* str

The name of the policy. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/org_group_policy#policy_name OrgGroupPolicy#policy_name}

---

##### `enforcement_tier`<sup>Optional</sup> <a name="enforcement_tier" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.enforcementTier"></a>

- *Type:* str

The enforcement tier of the policy.

`OVERRIDE_ALLOWED` means the policy is set but member orgs may mutate it. `GROUP_MANAGED` means the policy is strictly controlled and mutations are blocked for affected orgs. `DELEGATE` means each member org controls its own value. Valid values are `OVERRIDE_ALLOWED`, `GROUP_MANAGED`, `DELEGATE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/org_group_policy#enforcement_tier OrgGroupPolicy#enforcement_tier}

---

##### `policy_type`<sup>Optional</sup> <a name="policy_type" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.Initializer.parameter.policyType"></a>

- *Type:* str

The type of the policy. Valid values are `org_config`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/org_group_policy#policy_type OrgGroupPolicy#policy_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.resetEnforcementTier">reset_enforcement_tier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.resetPolicyType">reset_policy_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_enforcement_tier` <a name="reset_enforcement_tier" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.resetEnforcementTier"></a>

```python
def reset_enforcement_tier() -> None
```

##### `reset_policy_type` <a name="reset_policy_type" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.resetPolicyType"></a>

```python
def reset_policy_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OrgGroupPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.isConstruct"></a>

```python
from cdktn_provider_datadog import org_group_policy

orgGroupPolicy.OrgGroupPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.isTerraformElement"></a>

```python
from cdktn_provider_datadog import org_group_policy

orgGroupPolicy.OrgGroupPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.isTerraformResource"></a>

```python
from cdktn_provider_datadog import org_group_policy

orgGroupPolicy.OrgGroupPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import org_group_policy

orgGroupPolicy.OrgGroupPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OrgGroupPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OrgGroupPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OrgGroupPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/org_group_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OrgGroupPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.enforcementTierInput">enforcement_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.orgGroupIdInput">org_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.policyTypeInput">policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.enforcementTier">enforcement_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.orgGroupId">org_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `enforcement_tier_input`<sup>Optional</sup> <a name="enforcement_tier_input" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.enforcementTierInput"></a>

```python
enforcement_tier_input: str
```

- *Type:* str

---

##### `org_group_id_input`<sup>Optional</sup> <a name="org_group_id_input" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.orgGroupIdInput"></a>

```python
org_group_id_input: str
```

- *Type:* str

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `policy_type_input`<sup>Optional</sup> <a name="policy_type_input" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.policyTypeInput"></a>

```python
policy_type_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `enforcement_tier`<sup>Required</sup> <a name="enforcement_tier" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.enforcementTier"></a>

```python
enforcement_tier: str
```

- *Type:* str

---

##### `org_group_id`<sup>Required</sup> <a name="org_group_id" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.orgGroupId"></a>

```python
org_group_id: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrgGroupPolicyConfig <a name="OrgGroupPolicyConfig" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.Initializer"></a>

```python
from cdktn_provider_datadog import org_group_policy

orgGroupPolicy.OrgGroupPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  content: str,
  org_group_id: str,
  policy_name: str,
  enforcement_tier: str = None,
  policy_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.content">content</a></code> | <code>str</code> | The policy content as a JSON-encoded string. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.orgGroupId">org_group_id</a></code> | <code>str</code> | The UUID of the org group this policy belongs to. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.policyName">policy_name</a></code> | <code>str</code> | The name of the policy. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.enforcementTier">enforcement_tier</a></code> | <code>str</code> | The enforcement tier of the policy. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.policyType">policy_type</a></code> | <code>str</code> | The type of the policy. Valid values are `org_config`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.content"></a>

```python
content: str
```

- *Type:* str

The policy content as a JSON-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/org_group_policy#content OrgGroupPolicy#content}

---

##### `org_group_id`<sup>Required</sup> <a name="org_group_id" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.orgGroupId"></a>

```python
org_group_id: str
```

- *Type:* str

The UUID of the org group this policy belongs to. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/org_group_policy#org_group_id OrgGroupPolicy#org_group_id}

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

The name of the policy. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/org_group_policy#policy_name OrgGroupPolicy#policy_name}

---

##### `enforcement_tier`<sup>Optional</sup> <a name="enforcement_tier" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.enforcementTier"></a>

```python
enforcement_tier: str
```

- *Type:* str

The enforcement tier of the policy.

`OVERRIDE_ALLOWED` means the policy is set but member orgs may mutate it. `GROUP_MANAGED` means the policy is strictly controlled and mutations are blocked for affected orgs. `DELEGATE` means each member org controls its own value. Valid values are `OVERRIDE_ALLOWED`, `GROUP_MANAGED`, `DELEGATE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/org_group_policy#enforcement_tier OrgGroupPolicy#enforcement_tier}

---

##### `policy_type`<sup>Optional</sup> <a name="policy_type" id="@cdktn/provider-datadog.orgGroupPolicy.OrgGroupPolicyConfig.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

The type of the policy. Valid values are `org_config`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/org_group_policy#policy_type OrgGroupPolicy#policy_type}

---



