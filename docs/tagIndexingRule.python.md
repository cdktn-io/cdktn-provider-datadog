# `tagIndexingRule` Submodule <a name="`tagIndexingRule` Submodule" id="@cdktn/provider-datadog.tagIndexingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TagIndexingRule <a name="TagIndexingRule" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule datadog_tag_indexing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer"></a>

```python
from cdktn_provider_datadog import tag_indexing_rule

tagIndexingRule.TagIndexingRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  metric_name_matches: typing.List[str],
  name: str,
  exclude_tags_mode: bool | IResolvable = None,
  ignored_metric_name_matches: typing.List[str] = None,
  options: TagIndexingRuleOptions = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.metricNameMatches">metric_name_matches</a></code> | <code>typing.List[str]</code> | Metric name prefixes (glob patterns) this rule applies to. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Human-readable name for the rule. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.excludeTagsMode">exclude_tags_mode</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, the rule excludes the listed tags and indexes all others. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.ignoredMetricNameMatches">ignored_metric_name_matches</a></code> | <code>typing.List[str]</code> | Metric name prefixes excluded from the rule's scope. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.options">options</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a></code> | Versioned configuration options for the rule. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Tag keys this rule includes or excludes, depending on exclude_tags_mode. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `metric_name_matches`<sup>Required</sup> <a name="metric_name_matches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.metricNameMatches"></a>

- *Type:* typing.List[str]

Metric name prefixes (glob patterns) this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#metric_name_matches TagIndexingRule#metric_name_matches}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.name"></a>

- *Type:* str

Human-readable name for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#name TagIndexingRule#name}

---

##### `exclude_tags_mode`<sup>Optional</sup> <a name="exclude_tags_mode" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.excludeTagsMode"></a>

- *Type:* bool | cdktn.IResolvable

When true, the rule excludes the listed tags and indexes all others.

When false (default), the rule includes only the listed tags. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#exclude_tags_mode TagIndexingRule#exclude_tags_mode}

---

##### `ignored_metric_name_matches`<sup>Optional</sup> <a name="ignored_metric_name_matches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.ignoredMetricNameMatches"></a>

- *Type:* typing.List[str]

Metric name prefixes excluded from the rule's scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#ignored_metric_name_matches TagIndexingRule#ignored_metric_name_matches}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.options"></a>

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a>

Versioned configuration options for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#options TagIndexingRule#options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Tag keys this rule includes or excludes, depending on exclude_tags_mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#tags TagIndexingRule#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.putOptions">put_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetExcludeTagsMode">reset_exclude_tags_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetIgnoredMetricNameMatches">reset_ignored_metric_name_matches</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_options` <a name="put_options" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.putOptions"></a>

```python
def put_options(
  data: TagIndexingRuleOptionsData,
  version: typing.Union[int, float]
) -> None
```

###### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.putOptions.parameter.data"></a>

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a>

Behavioral options for how the rule applies to metrics, including backfill and override behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#data TagIndexingRule#data}

---

###### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.putOptions.parameter.version"></a>

- *Type:* typing.Union[int, float]

Options schema version. Only `1` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#version TagIndexingRule#version}

---

##### `reset_exclude_tags_mode` <a name="reset_exclude_tags_mode" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetExcludeTagsMode"></a>

```python
def reset_exclude_tags_mode() -> None
```

##### `reset_ignored_metric_name_matches` <a name="reset_ignored_metric_name_matches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetIgnoredMetricNameMatches"></a>

```python
def reset_ignored_metric_name_matches() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a TagIndexingRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isConstruct"></a>

```python
from cdktn_provider_datadog import tag_indexing_rule

tagIndexingRule.TagIndexingRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformElement"></a>

```python
from cdktn_provider_datadog import tag_indexing_rule

tagIndexingRule.TagIndexingRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformResource"></a>

```python
from cdktn_provider_datadog import tag_indexing_rule

tagIndexingRule.TagIndexingRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import tag_indexing_rule

tagIndexingRule.TagIndexingRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a TagIndexingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TagIndexingRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TagIndexingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TagIndexingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.createdByHandle">created_by_handle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.modifiedByHandle">modified_by_handle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.options">options</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference">TagIndexingRuleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ruleOrder">rule_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.excludeTagsModeInput">exclude_tags_mode_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ignoredMetricNameMatchesInput">ignored_metric_name_matches_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.metricNameMatchesInput">metric_name_matches_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.optionsInput">options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.excludeTagsMode">exclude_tags_mode</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ignoredMetricNameMatches">ignored_metric_name_matches</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.metricNameMatches">metric_name_matches</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by_handle`<sup>Required</sup> <a name="created_by_handle" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.createdByHandle"></a>

```python
created_by_handle: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `modified_by_handle`<sup>Required</sup> <a name="modified_by_handle" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.modifiedByHandle"></a>

```python
modified_by_handle: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.options"></a>

```python
options: TagIndexingRuleOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference">TagIndexingRuleOptionsOutputReference</a>

---

##### `rule_order`<sup>Required</sup> <a name="rule_order" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ruleOrder"></a>

```python
rule_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `exclude_tags_mode_input`<sup>Optional</sup> <a name="exclude_tags_mode_input" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.excludeTagsModeInput"></a>

```python
exclude_tags_mode_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignored_metric_name_matches_input`<sup>Optional</sup> <a name="ignored_metric_name_matches_input" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ignoredMetricNameMatchesInput"></a>

```python
ignored_metric_name_matches_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metric_name_matches_input`<sup>Optional</sup> <a name="metric_name_matches_input" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.metricNameMatchesInput"></a>

```python
metric_name_matches_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.optionsInput"></a>

```python
options_input: IResolvable | TagIndexingRuleOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_tags_mode`<sup>Required</sup> <a name="exclude_tags_mode" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.excludeTagsMode"></a>

```python
exclude_tags_mode: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ignored_metric_name_matches`<sup>Required</sup> <a name="ignored_metric_name_matches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ignoredMetricNameMatches"></a>

```python
ignored_metric_name_matches: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metric_name_matches`<sup>Required</sup> <a name="metric_name_matches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.metricNameMatches"></a>

```python
metric_name_matches: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TagIndexingRuleConfig <a name="TagIndexingRuleConfig" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.Initializer"></a>

```python
from cdktn_provider_datadog import tag_indexing_rule

tagIndexingRule.TagIndexingRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  metric_name_matches: typing.List[str],
  name: str,
  exclude_tags_mode: bool | IResolvable = None,
  ignored_metric_name_matches: typing.List[str] = None,
  options: TagIndexingRuleOptions = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.metricNameMatches">metric_name_matches</a></code> | <code>typing.List[str]</code> | Metric name prefixes (glob patterns) this rule applies to. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.name">name</a></code> | <code>str</code> | Human-readable name for the rule. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.excludeTagsMode">exclude_tags_mode</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, the rule excludes the listed tags and indexes all others. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.ignoredMetricNameMatches">ignored_metric_name_matches</a></code> | <code>typing.List[str]</code> | Metric name prefixes excluded from the rule's scope. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.options">options</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a></code> | Versioned configuration options for the rule. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Tag keys this rule includes or excludes, depending on exclude_tags_mode. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `metric_name_matches`<sup>Required</sup> <a name="metric_name_matches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.metricNameMatches"></a>

```python
metric_name_matches: typing.List[str]
```

- *Type:* typing.List[str]

Metric name prefixes (glob patterns) this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#metric_name_matches TagIndexingRule#metric_name_matches}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Human-readable name for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#name TagIndexingRule#name}

---

##### `exclude_tags_mode`<sup>Optional</sup> <a name="exclude_tags_mode" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.excludeTagsMode"></a>

```python
exclude_tags_mode: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, the rule excludes the listed tags and indexes all others.

When false (default), the rule includes only the listed tags. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#exclude_tags_mode TagIndexingRule#exclude_tags_mode}

---

##### `ignored_metric_name_matches`<sup>Optional</sup> <a name="ignored_metric_name_matches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.ignoredMetricNameMatches"></a>

```python
ignored_metric_name_matches: typing.List[str]
```

- *Type:* typing.List[str]

Metric name prefixes excluded from the rule's scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#ignored_metric_name_matches TagIndexingRule#ignored_metric_name_matches}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.options"></a>

```python
options: TagIndexingRuleOptions
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a>

Versioned configuration options for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#options TagIndexingRule#options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Tag keys this rule includes or excludes, depending on exclude_tags_mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#tags TagIndexingRule#tags}

---

### TagIndexingRuleOptions <a name="TagIndexingRuleOptions" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions.Initializer"></a>

```python
from cdktn_provider_datadog import tag_indexing_rule

tagIndexingRule.TagIndexingRuleOptions(
  data: TagIndexingRuleOptionsData,
  version: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions.property.data">data</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a></code> | Behavioral options for how the rule applies to metrics, including backfill and override behavior. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions.property.version">version</a></code> | <code>typing.Union[int, float]</code> | Options schema version. Only `1` is supported. |

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions.property.data"></a>

```python
data: TagIndexingRuleOptionsData
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a>

Behavioral options for how the rule applies to metrics, including backfill and override behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#data TagIndexingRule#data}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Options schema version. Only `1` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#version TagIndexingRule#version}

---

### TagIndexingRuleOptionsData <a name="TagIndexingRuleOptionsData" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.Initializer"></a>

```python
from cdktn_provider_datadog import tag_indexing_rule

tagIndexingRule.TagIndexingRuleOptionsData(
  dynamic_tags: TagIndexingRuleOptionsDataDynamicTags = None,
  manage_preexisting_metrics: bool | IResolvable = None,
  override_previous_rules: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.dynamicTags">dynamic_tags</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a></code> | Configuration for excluding tags based on dynamic usage signals. Only applies when `exclude_tags_mode` is `true`. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.managePreexistingMetrics">manage_preexisting_metrics</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, the rule applies to metrics ingested before the rule was created. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.overridePreviousRules">override_previous_rules</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, this rule's tag list overrides tags configured by earlier rules for the same metric. Defaults to `false`. |

---

##### `dynamic_tags`<sup>Optional</sup> <a name="dynamic_tags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.dynamicTags"></a>

```python
dynamic_tags: TagIndexingRuleOptionsDataDynamicTags
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a>

Configuration for excluding tags based on dynamic usage signals. Only applies when `exclude_tags_mode` is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#dynamic_tags TagIndexingRule#dynamic_tags}

---

##### `manage_preexisting_metrics`<sup>Optional</sup> <a name="manage_preexisting_metrics" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.managePreexistingMetrics"></a>

```python
manage_preexisting_metrics: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, the rule applies to metrics ingested before the rule was created. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#manage_preexisting_metrics TagIndexingRule#manage_preexisting_metrics}

---

##### `override_previous_rules`<sup>Optional</sup> <a name="override_previous_rules" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.overridePreviousRules"></a>

```python
override_previous_rules: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, this rule's tag list overrides tags configured by earlier rules for the same metric. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#override_previous_rules TagIndexingRule#override_previous_rules}

---

### TagIndexingRuleOptionsDataDynamicTags <a name="TagIndexingRuleOptionsDataDynamicTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags.Initializer"></a>

```python
from cdktn_provider_datadog import tag_indexing_rule

tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags(
  exclude_not_queried_window_seconds: typing.Union[int, float] = None,
  exclude_not_used_in_assets: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags.property.excludeNotQueriedWindowSeconds">exclude_not_queried_window_seconds</a></code> | <code>typing.Union[int, float]</code> | Lookback window, in seconds, for excluding tags that were not queried in that period. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags.property.excludeNotUsedInAssets">exclude_not_used_in_assets</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, excludes tags not used in any dashboards or monitors. Requires `exclude_tags_mode` to be `true`. |

---

##### `exclude_not_queried_window_seconds`<sup>Optional</sup> <a name="exclude_not_queried_window_seconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags.property.excludeNotQueriedWindowSeconds"></a>

```python
exclude_not_queried_window_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Lookback window, in seconds, for excluding tags that were not queried in that period.

Requires `exclude_tags_mode` to be `true`. Value must be between 1 and 7776000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#exclude_not_queried_window_seconds TagIndexingRule#exclude_not_queried_window_seconds}

---

##### `exclude_not_used_in_assets`<sup>Optional</sup> <a name="exclude_not_used_in_assets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags.property.excludeNotUsedInAssets"></a>

```python
exclude_not_used_in_assets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, excludes tags not used in any dashboards or monitors. Requires `exclude_tags_mode` to be `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#exclude_not_used_in_assets TagIndexingRule#exclude_not_used_in_assets}

---

## Classes <a name="Classes" id="Classes"></a>

### TagIndexingRuleOptionsDataDynamicTagsOutputReference <a name="TagIndexingRuleOptionsDataDynamicTagsOutputReference" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import tag_indexing_rule

tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resetExcludeNotQueriedWindowSeconds">reset_exclude_not_queried_window_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resetExcludeNotUsedInAssets">reset_exclude_not_used_in_assets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude_not_queried_window_seconds` <a name="reset_exclude_not_queried_window_seconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resetExcludeNotQueriedWindowSeconds"></a>

```python
def reset_exclude_not_queried_window_seconds() -> None
```

##### `reset_exclude_not_used_in_assets` <a name="reset_exclude_not_used_in_assets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resetExcludeNotUsedInAssets"></a>

```python
def reset_exclude_not_used_in_assets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.excludeNotQueriedWindowSecondsInput">exclude_not_queried_window_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.excludeNotUsedInAssetsInput">exclude_not_used_in_assets_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.excludeNotQueriedWindowSeconds">exclude_not_queried_window_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.excludeNotUsedInAssets">exclude_not_used_in_assets</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_not_queried_window_seconds_input`<sup>Optional</sup> <a name="exclude_not_queried_window_seconds_input" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.excludeNotQueriedWindowSecondsInput"></a>

```python
exclude_not_queried_window_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `exclude_not_used_in_assets_input`<sup>Optional</sup> <a name="exclude_not_used_in_assets_input" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.excludeNotUsedInAssetsInput"></a>

```python
exclude_not_used_in_assets_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `exclude_not_queried_window_seconds`<sup>Required</sup> <a name="exclude_not_queried_window_seconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.excludeNotQueriedWindowSeconds"></a>

```python
exclude_not_queried_window_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `exclude_not_used_in_assets`<sup>Required</sup> <a name="exclude_not_used_in_assets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.excludeNotUsedInAssets"></a>

```python
exclude_not_used_in_assets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TagIndexingRuleOptionsDataDynamicTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a>

---


### TagIndexingRuleOptionsDataOutputReference <a name="TagIndexingRuleOptionsDataOutputReference" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import tag_indexing_rule

tagIndexingRule.TagIndexingRuleOptionsDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putDynamicTags">put_dynamic_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetDynamicTags">reset_dynamic_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetManagePreexistingMetrics">reset_manage_preexisting_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetOverridePreviousRules">reset_override_previous_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dynamic_tags` <a name="put_dynamic_tags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putDynamicTags"></a>

```python
def put_dynamic_tags(
  exclude_not_queried_window_seconds: typing.Union[int, float] = None,
  exclude_not_used_in_assets: bool | IResolvable = None
) -> None
```

###### `exclude_not_queried_window_seconds`<sup>Optional</sup> <a name="exclude_not_queried_window_seconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putDynamicTags.parameter.excludeNotQueriedWindowSeconds"></a>

- *Type:* typing.Union[int, float]

Lookback window, in seconds, for excluding tags that were not queried in that period.

Requires `exclude_tags_mode` to be `true`. Value must be between 1 and 7776000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#exclude_not_queried_window_seconds TagIndexingRule#exclude_not_queried_window_seconds}

---

###### `exclude_not_used_in_assets`<sup>Optional</sup> <a name="exclude_not_used_in_assets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putDynamicTags.parameter.excludeNotUsedInAssets"></a>

- *Type:* bool | cdktn.IResolvable

When true, excludes tags not used in any dashboards or monitors. Requires `exclude_tags_mode` to be `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#exclude_not_used_in_assets TagIndexingRule#exclude_not_used_in_assets}

---

##### `reset_dynamic_tags` <a name="reset_dynamic_tags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetDynamicTags"></a>

```python
def reset_dynamic_tags() -> None
```

##### `reset_manage_preexisting_metrics` <a name="reset_manage_preexisting_metrics" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetManagePreexistingMetrics"></a>

```python
def reset_manage_preexisting_metrics() -> None
```

##### `reset_override_previous_rules` <a name="reset_override_previous_rules" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetOverridePreviousRules"></a>

```python
def reset_override_previous_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.dynamicTags">dynamic_tags</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference">TagIndexingRuleOptionsDataDynamicTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.dynamicTagsInput">dynamic_tags_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.managePreexistingMetricsInput">manage_preexisting_metrics_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.overridePreviousRulesInput">override_previous_rules_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.managePreexistingMetrics">manage_preexisting_metrics</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.overridePreviousRules">override_previous_rules</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dynamic_tags`<sup>Required</sup> <a name="dynamic_tags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.dynamicTags"></a>

```python
dynamic_tags: TagIndexingRuleOptionsDataDynamicTagsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference">TagIndexingRuleOptionsDataDynamicTagsOutputReference</a>

---

##### `dynamic_tags_input`<sup>Optional</sup> <a name="dynamic_tags_input" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.dynamicTagsInput"></a>

```python
dynamic_tags_input: IResolvable | TagIndexingRuleOptionsDataDynamicTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a>

---

##### `manage_preexisting_metrics_input`<sup>Optional</sup> <a name="manage_preexisting_metrics_input" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.managePreexistingMetricsInput"></a>

```python
manage_preexisting_metrics_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `override_previous_rules_input`<sup>Optional</sup> <a name="override_previous_rules_input" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.overridePreviousRulesInput"></a>

```python
override_previous_rules_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `manage_preexisting_metrics`<sup>Required</sup> <a name="manage_preexisting_metrics" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.managePreexistingMetrics"></a>

```python
manage_preexisting_metrics: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `override_previous_rules`<sup>Required</sup> <a name="override_previous_rules" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.overridePreviousRules"></a>

```python
override_previous_rules: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TagIndexingRuleOptionsData
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a>

---


### TagIndexingRuleOptionsOutputReference <a name="TagIndexingRuleOptionsOutputReference" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import tag_indexing_rule

tagIndexingRule.TagIndexingRuleOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.putData">put_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data` <a name="put_data" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.putData"></a>

```python
def put_data(
  dynamic_tags: TagIndexingRuleOptionsDataDynamicTags = None,
  manage_preexisting_metrics: bool | IResolvable = None,
  override_previous_rules: bool | IResolvable = None
) -> None
```

###### `dynamic_tags`<sup>Optional</sup> <a name="dynamic_tags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.putData.parameter.dynamicTags"></a>

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a>

Configuration for excluding tags based on dynamic usage signals. Only applies when `exclude_tags_mode` is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#dynamic_tags TagIndexingRule#dynamic_tags}

---

###### `manage_preexisting_metrics`<sup>Optional</sup> <a name="manage_preexisting_metrics" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.putData.parameter.managePreexistingMetrics"></a>

- *Type:* bool | cdktn.IResolvable

When true, the rule applies to metrics ingested before the rule was created. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#manage_preexisting_metrics TagIndexingRule#manage_preexisting_metrics}

---

###### `override_previous_rules`<sup>Optional</sup> <a name="override_previous_rules" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.putData.parameter.overridePreviousRules"></a>

- *Type:* bool | cdktn.IResolvable

When true, this rule's tag list overrides tags configured by earlier rules for the same metric. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/tag_indexing_rule#override_previous_rules TagIndexingRule#override_previous_rules}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.data">data</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference">TagIndexingRuleOptionsDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.dataInput">data_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.versionInput">version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.data"></a>

```python
data: TagIndexingRuleOptionsDataOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference">TagIndexingRuleOptionsDataOutputReference</a>

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.dataInput"></a>

```python
data_input: IResolvable | TagIndexingRuleOptionsData
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a>

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.versionInput"></a>

```python
version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TagIndexingRuleOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a>

---



