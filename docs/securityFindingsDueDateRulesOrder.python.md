# `securityFindingsDueDateRulesOrder` Submodule <a name="`securityFindingsDueDateRulesOrder` Submodule" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityFindingsDueDateRulesOrder <a name="SecurityFindingsDueDateRulesOrder" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_findings_due_date_rules_order datadog_security_findings_due_date_rules_order}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_due_date_rules_order

securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder(
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
  rule_ids: typing.List[str]
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.name">name</a></code> | <code>str</code> | A unique identifier for the order resource. This field has no server-side equivalent; Datadog recommends matching the resource name. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.ruleIds">rule_ids</a></code> | <code>typing.List[str]</code> | The ordered list of all due date rule IDs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.name"></a>

- *Type:* str

A unique identifier for the order resource. This field has no server-side equivalent; Datadog recommends matching the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_findings_due_date_rules_order#name SecurityFindingsDueDateRulesOrder#name}

---

##### `rule_ids`<sup>Required</sup> <a name="rule_ids" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.ruleIds"></a>

- *Type:* typing.List[str]

The ordered list of all due date rule IDs.

The order of IDs in this attribute defines the evaluation order of the due date rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_findings_due_date_rules_order#rule_ids SecurityFindingsDueDateRulesOrder#rule_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SecurityFindingsDueDateRulesOrder resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.isConstruct"></a>

```python
from cdktn_provider_datadog import security_findings_due_date_rules_order

securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.isTerraformElement"></a>

```python
from cdktn_provider_datadog import security_findings_due_date_rules_order

securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.isTerraformResource"></a>

```python
from cdktn_provider_datadog import security_findings_due_date_rules_order

securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import security_findings_due_date_rules_order

securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SecurityFindingsDueDateRulesOrder resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecurityFindingsDueDateRulesOrder to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecurityFindingsDueDateRulesOrder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_findings_due_date_rules_order#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityFindingsDueDateRulesOrder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.ruleIdsInput">rule_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.ruleIds">rule_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rule_ids_input`<sup>Optional</sup> <a name="rule_ids_input" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.ruleIdsInput"></a>

```python
rule_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rule_ids`<sup>Required</sup> <a name="rule_ids" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.ruleIds"></a>

```python
rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityFindingsDueDateRulesOrderConfig <a name="SecurityFindingsDueDateRulesOrderConfig" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.Initializer"></a>

```python
from cdktn_provider_datadog import security_findings_due_date_rules_order

securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  rule_ids: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.name">name</a></code> | <code>str</code> | A unique identifier for the order resource. This field has no server-side equivalent; Datadog recommends matching the resource name. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.ruleIds">rule_ids</a></code> | <code>typing.List[str]</code> | The ordered list of all due date rule IDs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A unique identifier for the order resource. This field has no server-side equivalent; Datadog recommends matching the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_findings_due_date_rules_order#name SecurityFindingsDueDateRulesOrder#name}

---

##### `rule_ids`<sup>Required</sup> <a name="rule_ids" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.ruleIds"></a>

```python
rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

The ordered list of all due date rule IDs.

The order of IDs in this attribute defines the evaluation order of the due date rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/security_findings_due_date_rules_order#rule_ids SecurityFindingsDueDateRulesOrder#rule_ids}

---



