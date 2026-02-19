# `securityMonitoringCriticalAsset` Submodule <a name="`securityMonitoringCriticalAsset` Submodule" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityMonitoringCriticalAsset <a name="SecurityMonitoringCriticalAsset" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/security_monitoring_critical_asset datadog_security_monitoring_critical_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_critical_asset

securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  query: str,
  rule_query: str,
  severity: str,
  enabled: bool | IResolvable = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.query">query</a></code> | <code>str</code> | The query used to match a critical asset and the associated signals. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.ruleQuery">rule_query</a></code> | <code>str</code> | The rule query to filter which detection rules this critical asset applies to. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.severity">severity</a></code> | <code>str</code> | The severity change applied to signals matching this critical asset. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the critical asset is enabled. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tags associated with the critical asset. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.query"></a>

- *Type:* str

The query used to match a critical asset and the associated signals.

Uses the same syntax as the search bar in the Security Signals Explorer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/security_monitoring_critical_asset#query SecurityMonitoringCriticalAsset#query}

---

##### `rule_query`<sup>Required</sup> <a name="rule_query" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.ruleQuery"></a>

- *Type:* str

The rule query to filter which detection rules this critical asset applies to.

Uses the same syntax as the search bar for detection rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/security_monitoring_critical_asset#rule_query SecurityMonitoringCriticalAsset#rule_query}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.severity"></a>

- *Type:* str

The severity change applied to signals matching this critical asset.

Valid values are `critical`, `high`, `medium`, `low`, `info`, `increase`, `decrease`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/security_monitoring_critical_asset#severity SecurityMonitoringCriticalAsset#severity}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the critical asset is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/security_monitoring_critical_asset#enabled SecurityMonitoringCriticalAsset#enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

A list of tags associated with the critical asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/security_monitoring_critical_asset#tags SecurityMonitoringCriticalAsset#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SecurityMonitoringCriticalAsset resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isConstruct"></a>

```python
from cdktn_provider_datadog import security_monitoring_critical_asset

securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformElement"></a>

```python
from cdktn_provider_datadog import security_monitoring_critical_asset

securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformResource"></a>

```python
from cdktn_provider_datadog import security_monitoring_critical_asset

securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import security_monitoring_critical_asset

securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SecurityMonitoringCriticalAsset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecurityMonitoringCriticalAsset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecurityMonitoringCriticalAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/security_monitoring_critical_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityMonitoringCriticalAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.ruleQueryInput">rule_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.ruleQuery">rule_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `rule_query_input`<sup>Optional</sup> <a name="rule_query_input" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.ruleQueryInput"></a>

```python
rule_query_input: str
```

- *Type:* str

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `rule_query`<sup>Required</sup> <a name="rule_query" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.ruleQuery"></a>

```python
rule_query: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAsset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityMonitoringCriticalAssetConfig <a name="SecurityMonitoringCriticalAssetConfig" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_critical_asset

securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  query: str,
  rule_query: str,
  severity: str,
  enabled: bool | IResolvable = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.query">query</a></code> | <code>str</code> | The query used to match a critical asset and the associated signals. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.ruleQuery">rule_query</a></code> | <code>str</code> | The rule query to filter which detection rules this critical asset applies to. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.severity">severity</a></code> | <code>str</code> | The severity change applied to signals matching this critical asset. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the critical asset is enabled. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tags associated with the critical asset. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.query"></a>

```python
query: str
```

- *Type:* str

The query used to match a critical asset and the associated signals.

Uses the same syntax as the search bar in the Security Signals Explorer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/security_monitoring_critical_asset#query SecurityMonitoringCriticalAsset#query}

---

##### `rule_query`<sup>Required</sup> <a name="rule_query" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.ruleQuery"></a>

```python
rule_query: str
```

- *Type:* str

The rule query to filter which detection rules this critical asset applies to.

Uses the same syntax as the search bar for detection rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/security_monitoring_critical_asset#rule_query SecurityMonitoringCriticalAsset#rule_query}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.severity"></a>

```python
severity: str
```

- *Type:* str

The severity change applied to signals matching this critical asset.

Valid values are `critical`, `high`, `medium`, `low`, `info`, `increase`, `decrease`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/security_monitoring_critical_asset#severity SecurityMonitoringCriticalAsset#severity}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the critical asset is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/security_monitoring_critical_asset#enabled SecurityMonitoringCriticalAsset#enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.securityMonitoringCriticalAsset.SecurityMonitoringCriticalAssetConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of tags associated with the critical asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/security_monitoring_critical_asset#tags SecurityMonitoringCriticalAsset#tags}

---



