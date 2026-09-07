# `tagRule` Submodule <a name="`tagRule` Submodule" id="@cdktn/provider-datadog.tagRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TagRule <a name="TagRule" id="@cdktn/provider-datadog.tagRule.TagRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule datadog_tag_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer"></a>

```python
from cdktn_provider_datadog import tag_rule

tagRule.TagRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  rule_type: str,
  scope: str,
  source: str,
  tag_key: str,
  tag_value_patterns: typing.List[str],
  enabled: bool | IResolvable = None,
  force_blocking_on_create: bool | IResolvable = None,
  hard_delete: bool | IResolvable = None,
  negated: bool | IResolvable = None,
  required: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Human-readable name for the tag rule. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.ruleType">rule_type</a></code> | <code>str</code> | How the rule is enforced. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.scope">scope</a></code> | <code>str</code> | The scope the rule applies within. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.source">source</a></code> | <code>str</code> | The telemetry source that the tag rule applies to. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.tagKey">tag_key</a></code> | <code>str</code> | The tag key that the rule governs (for example, `service`). |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.tagValuePatterns">tag_value_patterns</a></code> | <code>typing.List[str]</code> | One or more patterns that valid values for the tag key must match. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the rule is currently enforced. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.forceBlockingOnCreate">force_blocking_on_create</a></code> | <code>bool \| cdktn.IResolvable</code> | Set to `true` to allow creating a rule with `rule_type` set to `blocking`. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.hardDelete">hard_delete</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether destroying this resource permanently deletes the tag rule. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.negated">negated</a></code> | <code>bool \| cdktn.IResolvable</code> | When `true`, the rule matches tag values that do NOT match any of the supplied patterns. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.required">required</a></code> | <code>bool \| cdktn.IResolvable</code> | When `true`, telemetry without this tag is treated as a violation. Defaults to `false`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.name"></a>

- *Type:* str

Human-readable name for the tag rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#name TagRule#name}

---

##### `rule_type`<sup>Required</sup> <a name="rule_type" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.ruleType"></a>

- *Type:* str

How the rule is enforced.

`surfacing` only highlights non-compliant telemetry, while `blocking` rejects telemetry that violates the rule. The API only accepts `surfacing` at creation time, so creating a rule directly as `blocking` requires `force_blocking_on_create` to be set to `true`. Using `blocking` at all requires blocking tag rules to be enabled for your organization; otherwise the API returns `403 permission denied`. Valid values are `blocking`, `surfacing`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#rule_type TagRule#rule_type}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.scope"></a>

- *Type:* str

The scope the rule applies within.

Typically an environment, team, or organization-level identifier used to limit where the rule is enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#scope TagRule#scope}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.source"></a>

- *Type:* str

The telemetry source that the tag rule applies to.

This field cannot be updated after creation; changing it forces a new resource. Valid values are `logs`, `spans`, `metrics`, `rum`, `feed`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#source TagRule#source}

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.tagKey"></a>

- *Type:* str

The tag key that the rule governs (for example, `service`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#tag_key TagRule#tag_key}

---

##### `tag_value_patterns`<sup>Required</sup> <a name="tag_value_patterns" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.tagValuePatterns"></a>

- *Type:* typing.List[str]

One or more patterns that valid values for the tag key must match.

At least one pattern is required. These are not regular expressions: the API restricts pattern characters to `A-Za-z0-9_:-.,/*`, with `*` acting as a wildcard. A pattern made up only of wildcards (for example a bare `*`) is rejected by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#tag_value_patterns TagRule#tag_value_patterns}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the rule is currently enforced. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#enabled TagRule#enabled}

---

##### `force_blocking_on_create`<sup>Optional</sup> <a name="force_blocking_on_create" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.forceBlockingOnCreate"></a>

- *Type:* bool | cdktn.IResolvable

Set to `true` to allow creating a rule with `rule_type` set to `blocking`.

The Datadog API only accepts `surfacing` at creation time, so the provider creates the rule as `surfacing` and then immediately updates it to `blocking`, which makes the create non-atomic: if the update fails, a `surfacing` rule is left behind and the resource is marked tainted. This field is only read during creation and is not sent to the API; changing it afterwards produces a diff that has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#force_blocking_on_create TagRule#force_blocking_on_create}

---

##### `hard_delete`<sup>Optional</sup> <a name="hard_delete" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.hardDelete"></a>

- *Type:* bool | cdktn.IResolvable

Whether destroying this resource permanently deletes the tag rule.

When set to `false` the rule is soft-deleted instead, which keeps it recoverable and preserves its historical compliance score data. This field is only read during deletion and is not sent to the API on create or update. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#hard_delete TagRule#hard_delete}

---

##### `negated`<sup>Optional</sup> <a name="negated" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.negated"></a>

- *Type:* bool | cdktn.IResolvable

When `true`, the rule matches tag values that do NOT match any of the supplied patterns. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#negated TagRule#negated}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-datadog.tagRule.TagRule.Initializer.parameter.required"></a>

- *Type:* bool | cdktn.IResolvable

When `true`, telemetry without this tag is treated as a violation. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#required TagRule#required}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.resetForceBlockingOnCreate">reset_force_blocking_on_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.resetHardDelete">reset_hard_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.resetNegated">reset_negated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.resetRequired">reset_required</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.tagRule.TagRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.tagRule.TagRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.tagRule.TagRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.tagRule.TagRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.tagRule.TagRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.tagRule.TagRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.tagRule.TagRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.tagRule.TagRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.tagRule.TagRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.tagRule.TagRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.tagRule.TagRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.tagRule.TagRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.tagRule.TagRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.tagRule.TagRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.tagRule.TagRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagRule.TagRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.tagRule.TagRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagRule.TagRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.tagRule.TagRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagRule.TagRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.tagRule.TagRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagRule.TagRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.tagRule.TagRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagRule.TagRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.tagRule.TagRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagRule.TagRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.tagRule.TagRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagRule.TagRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.tagRule.TagRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagRule.TagRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.tagRule.TagRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagRule.TagRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.tagRule.TagRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.tagRule.TagRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagRule.TagRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagRule.TagRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.tagRule.TagRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagRule.TagRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.tagRule.TagRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagRule.TagRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.tagRule.TagRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.tagRule.TagRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.tagRule.TagRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.tagRule.TagRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagRule.TagRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.tagRule.TagRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_force_blocking_on_create` <a name="reset_force_blocking_on_create" id="@cdktn/provider-datadog.tagRule.TagRule.resetForceBlockingOnCreate"></a>

```python
def reset_force_blocking_on_create() -> None
```

##### `reset_hard_delete` <a name="reset_hard_delete" id="@cdktn/provider-datadog.tagRule.TagRule.resetHardDelete"></a>

```python
def reset_hard_delete() -> None
```

##### `reset_negated` <a name="reset_negated" id="@cdktn/provider-datadog.tagRule.TagRule.resetNegated"></a>

```python
def reset_negated() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktn/provider-datadog.tagRule.TagRule.resetRequired"></a>

```python
def reset_required() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a TagRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.tagRule.TagRule.isConstruct"></a>

```python
from cdktn_provider_datadog import tag_rule

tagRule.TagRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.tagRule.TagRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.tagRule.TagRule.isTerraformElement"></a>

```python
from cdktn_provider_datadog import tag_rule

tagRule.TagRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.tagRule.TagRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.tagRule.TagRule.isTerraformResource"></a>

```python
from cdktn_provider_datadog import tag_rule

tagRule.TagRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.tagRule.TagRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.tagRule.TagRule.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import tag_rule

tagRule.TagRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a TagRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.tagRule.TagRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.tagRule.TagRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TagRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.tagRule.TagRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TagRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagRule.TagRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TagRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.modifiedBy">modified_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.forceBlockingOnCreateInput">force_blocking_on_create_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.hardDeleteInput">hard_delete_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.negatedInput">negated_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.requiredInput">required_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.ruleTypeInput">rule_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.tagValuePatternsInput">tag_value_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.forceBlockingOnCreate">force_blocking_on_create</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.hardDelete">hard_delete</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.negated">negated</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.required">required</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.ruleType">rule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.tagValuePatterns">tag_value_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.tagRule.TagRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.tagRule.TagRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.tagRule.TagRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.tagRule.TagRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.tagRule.TagRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.tagRule.TagRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.tagRule.TagRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.tagRule.TagRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.tagRule.TagRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.tagRule.TagRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.tagRule.TagRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.tagRule.TagRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagRule.TagRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.tagRule.TagRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-datadog.tagRule.TagRule.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-datadog.tagRule.TagRule.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagRule.TagRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-datadog.tagRule.TagRule.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `modified_by`<sup>Required</sup> <a name="modified_by" id="@cdktn/provider-datadog.tagRule.TagRule.property.modifiedBy"></a>

```python
modified_by: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-datadog.tagRule.TagRule.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.tagRule.TagRule.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `force_blocking_on_create_input`<sup>Optional</sup> <a name="force_blocking_on_create_input" id="@cdktn/provider-datadog.tagRule.TagRule.property.forceBlockingOnCreateInput"></a>

```python
force_blocking_on_create_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `hard_delete_input`<sup>Optional</sup> <a name="hard_delete_input" id="@cdktn/provider-datadog.tagRule.TagRule.property.hardDeleteInput"></a>

```python
hard_delete_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.tagRule.TagRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `negated_input`<sup>Optional</sup> <a name="negated_input" id="@cdktn/provider-datadog.tagRule.TagRule.property.negatedInput"></a>

```python
negated_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktn/provider-datadog.tagRule.TagRule.property.requiredInput"></a>

```python
required_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `rule_type_input`<sup>Optional</sup> <a name="rule_type_input" id="@cdktn/provider-datadog.tagRule.TagRule.property.ruleTypeInput"></a>

```python
rule_type_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-datadog.tagRule.TagRule.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-datadog.tagRule.TagRule.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktn/provider-datadog.tagRule.TagRule.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `tag_value_patterns_input`<sup>Optional</sup> <a name="tag_value_patterns_input" id="@cdktn/provider-datadog.tagRule.TagRule.property.tagValuePatternsInput"></a>

```python
tag_value_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.tagRule.TagRule.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `force_blocking_on_create`<sup>Required</sup> <a name="force_blocking_on_create" id="@cdktn/provider-datadog.tagRule.TagRule.property.forceBlockingOnCreate"></a>

```python
force_blocking_on_create: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `hard_delete`<sup>Required</sup> <a name="hard_delete" id="@cdktn/provider-datadog.tagRule.TagRule.property.hardDelete"></a>

```python
hard_delete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.tagRule.TagRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `negated`<sup>Required</sup> <a name="negated" id="@cdktn/provider-datadog.tagRule.TagRule.property.negated"></a>

```python
negated: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-datadog.tagRule.TagRule.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `rule_type`<sup>Required</sup> <a name="rule_type" id="@cdktn/provider-datadog.tagRule.TagRule.property.ruleType"></a>

```python
rule_type: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.tagRule.TagRule.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-datadog.tagRule.TagRule.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-datadog.tagRule.TagRule.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_value_patterns`<sup>Required</sup> <a name="tag_value_patterns" id="@cdktn/provider-datadog.tagRule.TagRule.property.tagValuePatterns"></a>

```python
tag_value_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.tagRule.TagRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TagRuleConfig <a name="TagRuleConfig" id="@cdktn/provider-datadog.tagRule.TagRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.Initializer"></a>

```python
from cdktn_provider_datadog import tag_rule

tagRule.TagRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  rule_type: str,
  scope: str,
  source: str,
  tag_key: str,
  tag_value_patterns: typing.List[str],
  enabled: bool | IResolvable = None,
  force_blocking_on_create: bool | IResolvable = None,
  hard_delete: bool | IResolvable = None,
  negated: bool | IResolvable = None,
  required: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.name">name</a></code> | <code>str</code> | Human-readable name for the tag rule. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.ruleType">rule_type</a></code> | <code>str</code> | How the rule is enforced. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.scope">scope</a></code> | <code>str</code> | The scope the rule applies within. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.source">source</a></code> | <code>str</code> | The telemetry source that the tag rule applies to. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.tagKey">tag_key</a></code> | <code>str</code> | The tag key that the rule governs (for example, `service`). |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.tagValuePatterns">tag_value_patterns</a></code> | <code>typing.List[str]</code> | One or more patterns that valid values for the tag key must match. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the rule is currently enforced. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.forceBlockingOnCreate">force_blocking_on_create</a></code> | <code>bool \| cdktn.IResolvable</code> | Set to `true` to allow creating a rule with `rule_type` set to `blocking`. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.hardDelete">hard_delete</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether destroying this resource permanently deletes the tag rule. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.negated">negated</a></code> | <code>bool \| cdktn.IResolvable</code> | When `true`, the rule matches tag values that do NOT match any of the supplied patterns. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.tagRule.TagRuleConfig.property.required">required</a></code> | <code>bool \| cdktn.IResolvable</code> | When `true`, telemetry without this tag is treated as a violation. Defaults to `false`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Human-readable name for the tag rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#name TagRule#name}

---

##### `rule_type`<sup>Required</sup> <a name="rule_type" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.ruleType"></a>

```python
rule_type: str
```

- *Type:* str

How the rule is enforced.

`surfacing` only highlights non-compliant telemetry, while `blocking` rejects telemetry that violates the rule. The API only accepts `surfacing` at creation time, so creating a rule directly as `blocking` requires `force_blocking_on_create` to be set to `true`. Using `blocking` at all requires blocking tag rules to be enabled for your organization; otherwise the API returns `403 permission denied`. Valid values are `blocking`, `surfacing`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#rule_type TagRule#rule_type}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

The scope the rule applies within.

Typically an environment, team, or organization-level identifier used to limit where the rule is enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#scope TagRule#scope}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.source"></a>

```python
source: str
```

- *Type:* str

The telemetry source that the tag rule applies to.

This field cannot be updated after creation; changing it forces a new resource. Valid values are `logs`, `spans`, `metrics`, `rum`, `feed`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#source TagRule#source}

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

The tag key that the rule governs (for example, `service`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#tag_key TagRule#tag_key}

---

##### `tag_value_patterns`<sup>Required</sup> <a name="tag_value_patterns" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.tagValuePatterns"></a>

```python
tag_value_patterns: typing.List[str]
```

- *Type:* typing.List[str]

One or more patterns that valid values for the tag key must match.

At least one pattern is required. These are not regular expressions: the API restricts pattern characters to `A-Za-z0-9_:-.,/*`, with `*` acting as a wildcard. A pattern made up only of wildcards (for example a bare `*`) is rejected by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#tag_value_patterns TagRule#tag_value_patterns}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the rule is currently enforced. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#enabled TagRule#enabled}

---

##### `force_blocking_on_create`<sup>Optional</sup> <a name="force_blocking_on_create" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.forceBlockingOnCreate"></a>

```python
force_blocking_on_create: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Set to `true` to allow creating a rule with `rule_type` set to `blocking`.

The Datadog API only accepts `surfacing` at creation time, so the provider creates the rule as `surfacing` and then immediately updates it to `blocking`, which makes the create non-atomic: if the update fails, a `surfacing` rule is left behind and the resource is marked tainted. This field is only read during creation and is not sent to the API; changing it afterwards produces a diff that has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#force_blocking_on_create TagRule#force_blocking_on_create}

---

##### `hard_delete`<sup>Optional</sup> <a name="hard_delete" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.hardDelete"></a>

```python
hard_delete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether destroying this resource permanently deletes the tag rule.

When set to `false` the rule is soft-deleted instead, which keeps it recoverable and preserves its historical compliance score data. This field is only read during deletion and is not sent to the API on create or update. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#hard_delete TagRule#hard_delete}

---

##### `negated`<sup>Optional</sup> <a name="negated" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.negated"></a>

```python
negated: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When `true`, the rule matches tag values that do NOT match any of the supplied patterns. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#negated TagRule#negated}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-datadog.tagRule.TagRuleConfig.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When `true`, telemetry without this tag is treated as a violation. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#required TagRule#required}

---



