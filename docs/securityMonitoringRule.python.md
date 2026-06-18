# `securityMonitoringRule` Submodule <a name="`securityMonitoringRule` Submodule" id="@cdktn/provider-datadog.securityMonitoringRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityMonitoringRule <a name="SecurityMonitoringRule" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule datadog_security_monitoring_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  message: str,
  name: str,
  calculated_field: IResolvable | typing.List[SecurityMonitoringRuleCalculatedField] = None,
  case: IResolvable | typing.List[SecurityMonitoringRuleCase] = None,
  enabled: bool | IResolvable = None,
  filter: IResolvable | typing.List[SecurityMonitoringRuleFilter] = None,
  group_signals_by: typing.List[str] = None,
  has_extended_title: bool | IResolvable = None,
  options: IResolvable | typing.List[SecurityMonitoringRuleOptions] = None,
  query: IResolvable | typing.List[SecurityMonitoringRuleQuery] = None,
  reference_tables: IResolvable | typing.List[SecurityMonitoringRuleReferenceTables] = None,
  scheduling_options: IResolvable | typing.List[SecurityMonitoringRuleSchedulingOptions] = None,
  signal_query: IResolvable | typing.List[SecurityMonitoringRuleSignalQuery] = None,
  tags: typing.List[str] = None,
  third_party_case: IResolvable | typing.List[SecurityMonitoringRuleThirdPartyCase] = None,
  type: str = None,
  validate: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.message">message</a></code> | <code>str</code> | Message for generated signals. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the rule. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.calculatedField">calculated_field</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>]</code> | calculated_field block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.case">case</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>]</code> | case block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the rule is enabled. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.filter">filter</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>]</code> | filter block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.groupSignalsBy">group_signals_by</a></code> | <code>typing.List[str]</code> | Additional grouping to perform on top of the query grouping. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.hasExtendedTitle">has_extended_title</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the notifications include the triggering group-by values in their title. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.options">options</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>]</code> | options block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.query">query</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>]</code> | query block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.referenceTables">reference_tables</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>]</code> | reference_tables block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.schedulingOptions">scheduling_options</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a>]</code> | scheduling_options block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.signalQuery">signal_query</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>]</code> | signal_query block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | User-defined tags for generated signals. See also `effective_tags`, which includes provider-level `default_tags`. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.thirdPartyCase">third_party_case</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>]</code> | third_party_case block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.type">type</a></code> | <code>str</code> | The rule type. Valid values are `application_security`, `log_detection`, `workload_security`, `signal_correlation`. Defaults to `"log_detection"`. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.validate">validate</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether or not to validate the Rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.message"></a>

- *Type:* str

Message for generated signals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#message SecurityMonitoringRule#message}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.name"></a>

- *Type:* str

The name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

##### `calculated_field`<sup>Optional</sup> <a name="calculated_field" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.calculatedField"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>]

calculated_field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#calculated_field SecurityMonitoringRule#calculated_field}

---

##### `case`<sup>Optional</sup> <a name="case" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.case"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>]

case block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#case SecurityMonitoringRule#case}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#enabled SecurityMonitoringRule#enabled}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.filter"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#filter SecurityMonitoringRule#filter}

---

##### `group_signals_by`<sup>Optional</sup> <a name="group_signals_by" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.groupSignalsBy"></a>

- *Type:* typing.List[str]

Additional grouping to perform on top of the query grouping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#group_signals_by SecurityMonitoringRule#group_signals_by}

---

##### `has_extended_title`<sup>Optional</sup> <a name="has_extended_title" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.hasExtendedTitle"></a>

- *Type:* bool | cdktn.IResolvable

Whether the notifications include the triggering group-by values in their title. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#has_extended_title SecurityMonitoringRule#has_extended_title}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.options"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>]

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#options SecurityMonitoringRule#options}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.query"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>]

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

##### `reference_tables`<sup>Optional</sup> <a name="reference_tables" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.referenceTables"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>]

reference_tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#reference_tables SecurityMonitoringRule#reference_tables}

---

##### `scheduling_options`<sup>Optional</sup> <a name="scheduling_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.schedulingOptions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a>]

scheduling_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#scheduling_options SecurityMonitoringRule#scheduling_options}

---

##### `signal_query`<sup>Optional</sup> <a name="signal_query" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.signalQuery"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>]

signal_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#signal_query SecurityMonitoringRule#signal_query}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

User-defined tags for generated signals. See also `effective_tags`, which includes provider-level `default_tags`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#tags SecurityMonitoringRule#tags}

---

##### `third_party_case`<sup>Optional</sup> <a name="third_party_case" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.thirdPartyCase"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>]

third_party_case block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#third_party_case SecurityMonitoringRule#third_party_case}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.type"></a>

- *Type:* str

The rule type. Valid values are `application_security`, `log_detection`, `workload_security`, `signal_correlation`. Defaults to `"log_detection"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#type SecurityMonitoringRule#type}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.Initializer.parameter.validate"></a>

- *Type:* bool | cdktn.IResolvable

Whether or not to validate the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#validate SecurityMonitoringRule#validate}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCalculatedField">put_calculated_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCase">put_case</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putOptions">put_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putQuery">put_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putReferenceTables">put_reference_tables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSchedulingOptions">put_scheduling_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSignalQuery">put_signal_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putThirdPartyCase">put_third_party_case</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetCalculatedField">reset_calculated_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetCase">reset_case</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetGroupSignalsBy">reset_group_signals_by</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetHasExtendedTitle">reset_has_extended_title</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetQuery">reset_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetReferenceTables">reset_reference_tables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetSchedulingOptions">reset_scheduling_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetSignalQuery">reset_signal_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetThirdPartyCase">reset_third_party_case</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetValidate">reset_validate</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_calculated_field` <a name="put_calculated_field" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCalculatedField"></a>

```python
def put_calculated_field(
  value: IResolvable | typing.List[SecurityMonitoringRuleCalculatedField]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCalculatedField.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>]

---

##### `put_case` <a name="put_case" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCase"></a>

```python
def put_case(
  value: IResolvable | typing.List[SecurityMonitoringRuleCase]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putCase.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>]

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putFilter"></a>

```python
def put_filter(
  value: IResolvable | typing.List[SecurityMonitoringRuleFilter]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>]

---

##### `put_options` <a name="put_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putOptions"></a>

```python
def put_options(
  value: IResolvable | typing.List[SecurityMonitoringRuleOptions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putOptions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>]

---

##### `put_query` <a name="put_query" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putQuery"></a>

```python
def put_query(
  value: IResolvable | typing.List[SecurityMonitoringRuleQuery]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putQuery.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>]

---

##### `put_reference_tables` <a name="put_reference_tables" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putReferenceTables"></a>

```python
def put_reference_tables(
  value: IResolvable | typing.List[SecurityMonitoringRuleReferenceTables]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putReferenceTables.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>]

---

##### `put_scheduling_options` <a name="put_scheduling_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSchedulingOptions"></a>

```python
def put_scheduling_options(
  value: IResolvable | typing.List[SecurityMonitoringRuleSchedulingOptions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSchedulingOptions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a>]

---

##### `put_signal_query` <a name="put_signal_query" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSignalQuery"></a>

```python
def put_signal_query(
  value: IResolvable | typing.List[SecurityMonitoringRuleSignalQuery]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putSignalQuery.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>]

---

##### `put_third_party_case` <a name="put_third_party_case" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putThirdPartyCase"></a>

```python
def put_third_party_case(
  value: IResolvable | typing.List[SecurityMonitoringRuleThirdPartyCase]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.putThirdPartyCase.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>]

---

##### `reset_calculated_field` <a name="reset_calculated_field" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetCalculatedField"></a>

```python
def reset_calculated_field() -> None
```

##### `reset_case` <a name="reset_case" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetCase"></a>

```python
def reset_case() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_group_signals_by` <a name="reset_group_signals_by" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetGroupSignalsBy"></a>

```python
def reset_group_signals_by() -> None
```

##### `reset_has_extended_title` <a name="reset_has_extended_title" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetHasExtendedTitle"></a>

```python
def reset_has_extended_title() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_query` <a name="reset_query" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetQuery"></a>

```python
def reset_query() -> None
```

##### `reset_reference_tables` <a name="reset_reference_tables" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetReferenceTables"></a>

```python
def reset_reference_tables() -> None
```

##### `reset_scheduling_options` <a name="reset_scheduling_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetSchedulingOptions"></a>

```python
def reset_scheduling_options() -> None
```

##### `reset_signal_query` <a name="reset_signal_query" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetSignalQuery"></a>

```python
def reset_signal_query() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_third_party_case` <a name="reset_third_party_case" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetThirdPartyCase"></a>

```python
def reset_third_party_case() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_validate` <a name="reset_validate" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.resetValidate"></a>

```python
def reset_validate() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SecurityMonitoringRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isConstruct"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformElement"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformResource"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SecurityMonitoringRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecurityMonitoringRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecurityMonitoringRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityMonitoringRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.calculatedField">calculated_field</a></code> | <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList">SecurityMonitoringRuleCalculatedFieldList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.case">case</a></code> | <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList">SecurityMonitoringRuleCaseList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.effectiveTags">effective_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList">SecurityMonitoringRuleFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.options">options</a></code> | <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList">SecurityMonitoringRuleOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.query">query</a></code> | <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList">SecurityMonitoringRuleQueryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.referenceTables">reference_tables</a></code> | <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList">SecurityMonitoringRuleReferenceTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.schedulingOptions">scheduling_options</a></code> | <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList">SecurityMonitoringRuleSchedulingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.signalQuery">signal_query</a></code> | <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList">SecurityMonitoringRuleSignalQueryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.thirdPartyCase">third_party_case</a></code> | <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList">SecurityMonitoringRuleThirdPartyCaseList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.calculatedFieldInput">calculated_field_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.caseInput">case_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.groupSignalsByInput">group_signals_by_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.hasExtendedTitleInput">has_extended_title_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.optionsInput">options_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.queryInput">query_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.referenceTablesInput">reference_tables_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.schedulingOptionsInput">scheduling_options_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.signalQueryInput">signal_query_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.thirdPartyCaseInput">third_party_case_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.validateInput">validate_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.groupSignalsBy">group_signals_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.hasExtendedTitle">has_extended_title</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.validate">validate</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `calculated_field`<sup>Required</sup> <a name="calculated_field" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.calculatedField"></a>

```python
calculated_field: SecurityMonitoringRuleCalculatedFieldList
```

- *Type:* <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList">SecurityMonitoringRuleCalculatedFieldList</a>

---

##### `case`<sup>Required</sup> <a name="case" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.case"></a>

```python
case: SecurityMonitoringRuleCaseList
```

- *Type:* <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList">SecurityMonitoringRuleCaseList</a>

---

##### `effective_tags`<sup>Required</sup> <a name="effective_tags" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.effectiveTags"></a>

```python
effective_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.filter"></a>

```python
filter: SecurityMonitoringRuleFilterList
```

- *Type:* <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList">SecurityMonitoringRuleFilterList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.options"></a>

```python
options: SecurityMonitoringRuleOptionsList
```

- *Type:* <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList">SecurityMonitoringRuleOptionsList</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.query"></a>

```python
query: SecurityMonitoringRuleQueryList
```

- *Type:* <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList">SecurityMonitoringRuleQueryList</a>

---

##### `reference_tables`<sup>Required</sup> <a name="reference_tables" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.referenceTables"></a>

```python
reference_tables: SecurityMonitoringRuleReferenceTablesList
```

- *Type:* <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList">SecurityMonitoringRuleReferenceTablesList</a>

---

##### `scheduling_options`<sup>Required</sup> <a name="scheduling_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.schedulingOptions"></a>

```python
scheduling_options: SecurityMonitoringRuleSchedulingOptionsList
```

- *Type:* <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList">SecurityMonitoringRuleSchedulingOptionsList</a>

---

##### `signal_query`<sup>Required</sup> <a name="signal_query" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.signalQuery"></a>

```python
signal_query: SecurityMonitoringRuleSignalQueryList
```

- *Type:* <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList">SecurityMonitoringRuleSignalQueryList</a>

---

##### `third_party_case`<sup>Required</sup> <a name="third_party_case" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.thirdPartyCase"></a>

```python
third_party_case: SecurityMonitoringRuleThirdPartyCaseList
```

- *Type:* <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList">SecurityMonitoringRuleThirdPartyCaseList</a>

---

##### `calculated_field_input`<sup>Optional</sup> <a name="calculated_field_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.calculatedFieldInput"></a>

```python
calculated_field_input: IResolvable | typing.List[SecurityMonitoringRuleCalculatedField]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>]

---

##### `case_input`<sup>Optional</sup> <a name="case_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.caseInput"></a>

```python
case_input: IResolvable | typing.List[SecurityMonitoringRuleCase]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.filterInput"></a>

```python
filter_input: IResolvable | typing.List[SecurityMonitoringRuleFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>]

---

##### `group_signals_by_input`<sup>Optional</sup> <a name="group_signals_by_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.groupSignalsByInput"></a>

```python
group_signals_by_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `has_extended_title_input`<sup>Optional</sup> <a name="has_extended_title_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.hasExtendedTitleInput"></a>

```python
has_extended_title_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.optionsInput"></a>

```python
options_input: IResolvable | typing.List[SecurityMonitoringRuleOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>]

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.queryInput"></a>

```python
query_input: IResolvable | typing.List[SecurityMonitoringRuleQuery]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>]

---

##### `reference_tables_input`<sup>Optional</sup> <a name="reference_tables_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.referenceTablesInput"></a>

```python
reference_tables_input: IResolvable | typing.List[SecurityMonitoringRuleReferenceTables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>]

---

##### `scheduling_options_input`<sup>Optional</sup> <a name="scheduling_options_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.schedulingOptionsInput"></a>

```python
scheduling_options_input: IResolvable | typing.List[SecurityMonitoringRuleSchedulingOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a>]

---

##### `signal_query_input`<sup>Optional</sup> <a name="signal_query_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.signalQueryInput"></a>

```python
signal_query_input: IResolvable | typing.List[SecurityMonitoringRuleSignalQuery]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `third_party_case_input`<sup>Optional</sup> <a name="third_party_case_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.thirdPartyCaseInput"></a>

```python
third_party_case_input: IResolvable | typing.List[SecurityMonitoringRuleThirdPartyCase]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `validate_input`<sup>Optional</sup> <a name="validate_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.validateInput"></a>

```python
validate_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `group_signals_by`<sup>Required</sup> <a name="group_signals_by" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.groupSignalsBy"></a>

```python
group_signals_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `has_extended_title`<sup>Required</sup> <a name="has_extended_title" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.hasExtendedTitle"></a>

```python
has_extended_title: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.validate"></a>

```python
validate: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityMonitoringRuleCalculatedField <a name="SecurityMonitoringRuleCalculatedField" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleCalculatedField(
  expression: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField.property.expression">expression</a></code> | <code>str</code> | Expression. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField.property.name">name</a></code> | <code>str</code> | Field name. String length must be at least 1. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField.property.expression"></a>

```python
expression: str
```

- *Type:* str

Expression. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#expression SecurityMonitoringRule#expression}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField.property.name"></a>

```python
name: str
```

- *Type:* str

Field name. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

### SecurityMonitoringRuleCase <a name="SecurityMonitoringRuleCase" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleCase(
  status: str,
  action: IResolvable | typing.List[SecurityMonitoringRuleCaseAction] = None,
  condition: str = None,
  name: str = None,
  notifications: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.status">status</a></code> | <code>str</code> | Severity of the Security Signal. Valid values are `info`, `low`, `medium`, `high`, `critical`. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.action">action</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a>]</code> | action block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.condition">condition</a></code> | <code>str</code> | A rule case contains logical operations (`>`,`>=`, `&&`, `\|\|`) to determine if a signal should be generated based on the event counts in the previously defined queries. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.name">name</a></code> | <code>str</code> | Name of the case. Defaults to `""`. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.notifications">notifications</a></code> | <code>typing.List[str]</code> | Notification targets for each rule case. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.status"></a>

```python
status: str
```

- *Type:* str

Severity of the Security Signal. Valid values are `info`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#status SecurityMonitoringRule#status}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.action"></a>

```python
action: IResolvable | typing.List[SecurityMonitoringRuleCaseAction]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a>]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#action SecurityMonitoringRule#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.condition"></a>

```python
condition: str
```

- *Type:* str

A rule case contains logical operations (`>`,`>=`, `&&`, `||`) to determine if a signal should be generated based on the event counts in the previously defined queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#condition SecurityMonitoringRule#condition}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the case. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase.property.notifications"></a>

```python
notifications: typing.List[str]
```

- *Type:* typing.List[str]

Notification targets for each rule case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#notifications SecurityMonitoringRule#notifications}

---

### SecurityMonitoringRuleCaseAction <a name="SecurityMonitoringRuleCaseAction" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleCaseAction(
  type: str,
  options: IResolvable | typing.List[SecurityMonitoringRuleCaseActionOptions] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction.property.type">type</a></code> | <code>str</code> | Type of action to perform when the case triggers. Valid values are `block_ip`, `block_user`, `user_behavior`, `flag_ip`. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction.property.options">options</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a>]</code> | options block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction.property.type"></a>

```python
type: str
```

- *Type:* str

Type of action to perform when the case triggers. Valid values are `block_ip`, `block_user`, `user_behavior`, `flag_ip`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#type SecurityMonitoringRule#type}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction.property.options"></a>

```python
options: IResolvable | typing.List[SecurityMonitoringRuleCaseActionOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a>]

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#options SecurityMonitoringRule#options}

---

### SecurityMonitoringRuleCaseActionOptions <a name="SecurityMonitoringRuleCaseActionOptions" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions(
  duration: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | Duration of the action in seconds. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Duration of the action in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#duration SecurityMonitoringRule#duration}

---

### SecurityMonitoringRuleConfig <a name="SecurityMonitoringRuleConfig" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  message: str,
  name: str,
  calculated_field: IResolvable | typing.List[SecurityMonitoringRuleCalculatedField] = None,
  case: IResolvable | typing.List[SecurityMonitoringRuleCase] = None,
  enabled: bool | IResolvable = None,
  filter: IResolvable | typing.List[SecurityMonitoringRuleFilter] = None,
  group_signals_by: typing.List[str] = None,
  has_extended_title: bool | IResolvable = None,
  options: IResolvable | typing.List[SecurityMonitoringRuleOptions] = None,
  query: IResolvable | typing.List[SecurityMonitoringRuleQuery] = None,
  reference_tables: IResolvable | typing.List[SecurityMonitoringRuleReferenceTables] = None,
  scheduling_options: IResolvable | typing.List[SecurityMonitoringRuleSchedulingOptions] = None,
  signal_query: IResolvable | typing.List[SecurityMonitoringRuleSignalQuery] = None,
  tags: typing.List[str] = None,
  third_party_case: IResolvable | typing.List[SecurityMonitoringRuleThirdPartyCase] = None,
  type: str = None,
  validate: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.message">message</a></code> | <code>str</code> | Message for generated signals. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.name">name</a></code> | <code>str</code> | The name of the rule. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.calculatedField">calculated_field</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>]</code> | calculated_field block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.case">case</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>]</code> | case block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the rule is enabled. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.filter">filter</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>]</code> | filter block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.groupSignalsBy">group_signals_by</a></code> | <code>typing.List[str]</code> | Additional grouping to perform on top of the query grouping. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.hasExtendedTitle">has_extended_title</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the notifications include the triggering group-by values in their title. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.options">options</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>]</code> | options block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.query">query</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>]</code> | query block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.referenceTables">reference_tables</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>]</code> | reference_tables block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.schedulingOptions">scheduling_options</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a>]</code> | scheduling_options block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.signalQuery">signal_query</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>]</code> | signal_query block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | User-defined tags for generated signals. See also `effective_tags`, which includes provider-level `default_tags`. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.thirdPartyCase">third_party_case</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>]</code> | third_party_case block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.type">type</a></code> | <code>str</code> | The rule type. Valid values are `application_security`, `log_detection`, `workload_security`, `signal_correlation`. Defaults to `"log_detection"`. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.validate">validate</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether or not to validate the Rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.message"></a>

```python
message: str
```

- *Type:* str

Message for generated signals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#message SecurityMonitoringRule#message}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

##### `calculated_field`<sup>Optional</sup> <a name="calculated_field" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.calculatedField"></a>

```python
calculated_field: IResolvable | typing.List[SecurityMonitoringRuleCalculatedField]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>]

calculated_field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#calculated_field SecurityMonitoringRule#calculated_field}

---

##### `case`<sup>Optional</sup> <a name="case" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.case"></a>

```python
case: IResolvable | typing.List[SecurityMonitoringRuleCase]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>]

case block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#case SecurityMonitoringRule#case}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#enabled SecurityMonitoringRule#enabled}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.filter"></a>

```python
filter: IResolvable | typing.List[SecurityMonitoringRuleFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#filter SecurityMonitoringRule#filter}

---

##### `group_signals_by`<sup>Optional</sup> <a name="group_signals_by" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.groupSignalsBy"></a>

```python
group_signals_by: typing.List[str]
```

- *Type:* typing.List[str]

Additional grouping to perform on top of the query grouping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#group_signals_by SecurityMonitoringRule#group_signals_by}

---

##### `has_extended_title`<sup>Optional</sup> <a name="has_extended_title" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.hasExtendedTitle"></a>

```python
has_extended_title: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the notifications include the triggering group-by values in their title. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#has_extended_title SecurityMonitoringRule#has_extended_title}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.options"></a>

```python
options: IResolvable | typing.List[SecurityMonitoringRuleOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>]

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#options SecurityMonitoringRule#options}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.query"></a>

```python
query: IResolvable | typing.List[SecurityMonitoringRuleQuery]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>]

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

##### `reference_tables`<sup>Optional</sup> <a name="reference_tables" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.referenceTables"></a>

```python
reference_tables: IResolvable | typing.List[SecurityMonitoringRuleReferenceTables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>]

reference_tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#reference_tables SecurityMonitoringRule#reference_tables}

---

##### `scheduling_options`<sup>Optional</sup> <a name="scheduling_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.schedulingOptions"></a>

```python
scheduling_options: IResolvable | typing.List[SecurityMonitoringRuleSchedulingOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a>]

scheduling_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#scheduling_options SecurityMonitoringRule#scheduling_options}

---

##### `signal_query`<sup>Optional</sup> <a name="signal_query" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.signalQuery"></a>

```python
signal_query: IResolvable | typing.List[SecurityMonitoringRuleSignalQuery]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>]

signal_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#signal_query SecurityMonitoringRule#signal_query}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

User-defined tags for generated signals. See also `effective_tags`, which includes provider-level `default_tags`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#tags SecurityMonitoringRule#tags}

---

##### `third_party_case`<sup>Optional</sup> <a name="third_party_case" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.thirdPartyCase"></a>

```python
third_party_case: IResolvable | typing.List[SecurityMonitoringRuleThirdPartyCase]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>]

third_party_case block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#third_party_case SecurityMonitoringRule#third_party_case}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The rule type. Valid values are `application_security`, `log_detection`, `workload_security`, `signal_correlation`. Defaults to `"log_detection"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#type SecurityMonitoringRule#type}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleConfig.property.validate"></a>

```python
validate: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether or not to validate the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#validate SecurityMonitoringRule#validate}

---

### SecurityMonitoringRuleFilter <a name="SecurityMonitoringRuleFilter" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleFilter(
  action: str,
  query: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter.property.action">action</a></code> | <code>str</code> | The type of filtering action. Valid values are `require`, `suppress`. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter.property.query">query</a></code> | <code>str</code> | Query for selecting logs to apply the filtering action. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter.property.action"></a>

```python
action: str
```

- *Type:* str

The type of filtering action. Valid values are `require`, `suppress`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#action SecurityMonitoringRule#action}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter.property.query"></a>

```python
query: str
```

- *Type:* str

Query for selecting logs to apply the filtering action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

### SecurityMonitoringRuleOptions <a name="SecurityMonitoringRuleOptions" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptions(
  anomaly_detection_options: IResolvable | typing.List[SecurityMonitoringRuleOptionsAnomalyDetectionOptions] = None,
  decrease_criticality_based_on_env: bool | IResolvable = None,
  detection_method: str = None,
  evaluation_window: typing.Union[int, float] = None,
  impossible_travel_options: IResolvable | typing.List[SecurityMonitoringRuleOptionsImpossibleTravelOptions] = None,
  keep_alive: typing.Union[int, float] = None,
  max_signal_duration: typing.Union[int, float] = None,
  new_value_options: IResolvable | typing.List[SecurityMonitoringRuleOptionsNewValueOptions] = None,
  sequence_detection_options: IResolvable | typing.List[SecurityMonitoringRuleOptionsSequenceDetectionOptions] = None,
  third_party_rule_options: IResolvable | typing.List[SecurityMonitoringRuleOptionsThirdPartyRuleOptions] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.anomalyDetectionOptions">anomaly_detection_options</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptions">SecurityMonitoringRuleOptionsAnomalyDetectionOptions</a>]</code> | anomaly_detection_options block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.decreaseCriticalityBasedOnEnv">decrease_criticality_based_on_env</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, signals in non-production environments have a lower severity than what is defined by the rule case, which can reduce noise. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.detectionMethod">detection_method</a></code> | <code>str</code> | The detection method. Valid values are `threshold`, `new_value`, `anomaly_detection`, `impossible_travel`, `hardcoded`, `third_party`, `anomaly_threshold`, `sequence_detection`. Defaults to `"threshold"`. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.evaluationWindow">evaluation_window</a></code> | <code>typing.Union[int, float]</code> | A time window is specified to match when at least one of the cases matches true. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.impossibleTravelOptions">impossible_travel_options</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a>]</code> | impossible_travel_options block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.keepAlive">keep_alive</a></code> | <code>typing.Union[int, float]</code> | Once a signal is generated, the signal will remain "open" if a case is matched at least once within this keep alive window (in seconds). |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.maxSignalDuration">max_signal_duration</a></code> | <code>typing.Union[int, float]</code> | A signal will "close" regardless of the query being matched once the time exceeds the maximum duration (in seconds). |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.newValueOptions">new_value_options</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a>]</code> | new_value_options block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.sequenceDetectionOptions">sequence_detection_options</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptions">SecurityMonitoringRuleOptionsSequenceDetectionOptions</a>]</code> | sequence_detection_options block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.thirdPartyRuleOptions">third_party_rule_options</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a>]</code> | third_party_rule_options block. |

---

##### `anomaly_detection_options`<sup>Optional</sup> <a name="anomaly_detection_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.anomalyDetectionOptions"></a>

```python
anomaly_detection_options: IResolvable | typing.List[SecurityMonitoringRuleOptionsAnomalyDetectionOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptions">SecurityMonitoringRuleOptionsAnomalyDetectionOptions</a>]

anomaly_detection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#anomaly_detection_options SecurityMonitoringRule#anomaly_detection_options}

---

##### `decrease_criticality_based_on_env`<sup>Optional</sup> <a name="decrease_criticality_based_on_env" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.decreaseCriticalityBasedOnEnv"></a>

```python
decrease_criticality_based_on_env: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, signals in non-production environments have a lower severity than what is defined by the rule case, which can reduce noise.

The decrement is applied when the environment tag of the signal starts with `staging`, `test`, or `dev`. Only available when the rule type is `log_detection`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#decrease_criticality_based_on_env SecurityMonitoringRule#decrease_criticality_based_on_env}

---

##### `detection_method`<sup>Optional</sup> <a name="detection_method" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.detectionMethod"></a>

```python
detection_method: str
```

- *Type:* str

The detection method. Valid values are `threshold`, `new_value`, `anomaly_detection`, `impossible_travel`, `hardcoded`, `third_party`, `anomaly_threshold`, `sequence_detection`. Defaults to `"threshold"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#detection_method SecurityMonitoringRule#detection_method}

---

##### `evaluation_window`<sup>Optional</sup> <a name="evaluation_window" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.evaluationWindow"></a>

```python
evaluation_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A time window is specified to match when at least one of the cases matches true.

This is a sliding window and evaluates in real time. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#evaluation_window SecurityMonitoringRule#evaluation_window}

---

##### `impossible_travel_options`<sup>Optional</sup> <a name="impossible_travel_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.impossibleTravelOptions"></a>

```python
impossible_travel_options: IResolvable | typing.List[SecurityMonitoringRuleOptionsImpossibleTravelOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a>]

impossible_travel_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#impossible_travel_options SecurityMonitoringRule#impossible_travel_options}

---

##### `keep_alive`<sup>Optional</sup> <a name="keep_alive" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.keepAlive"></a>

```python
keep_alive: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Once a signal is generated, the signal will remain "open" if a case is matched at least once within this keep alive window (in seconds).

Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`. Defaults to `3600`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#keep_alive SecurityMonitoringRule#keep_alive}

---

##### `max_signal_duration`<sup>Optional</sup> <a name="max_signal_duration" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.maxSignalDuration"></a>

```python
max_signal_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A signal will "close" regardless of the query being matched once the time exceeds the maximum duration (in seconds).

This time is calculated from the first seen timestamp. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#max_signal_duration SecurityMonitoringRule#max_signal_duration}

---

##### `new_value_options`<sup>Optional</sup> <a name="new_value_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.newValueOptions"></a>

```python
new_value_options: IResolvable | typing.List[SecurityMonitoringRuleOptionsNewValueOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a>]

new_value_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#new_value_options SecurityMonitoringRule#new_value_options}

---

##### `sequence_detection_options`<sup>Optional</sup> <a name="sequence_detection_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.sequenceDetectionOptions"></a>

```python
sequence_detection_options: IResolvable | typing.List[SecurityMonitoringRuleOptionsSequenceDetectionOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptions">SecurityMonitoringRuleOptionsSequenceDetectionOptions</a>]

sequence_detection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#sequence_detection_options SecurityMonitoringRule#sequence_detection_options}

---

##### `third_party_rule_options`<sup>Optional</sup> <a name="third_party_rule_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions.property.thirdPartyRuleOptions"></a>

```python
third_party_rule_options: IResolvable | typing.List[SecurityMonitoringRuleOptionsThirdPartyRuleOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a>]

third_party_rule_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#third_party_rule_options SecurityMonitoringRule#third_party_rule_options}

---

### SecurityMonitoringRuleOptionsAnomalyDetectionOptions <a name="SecurityMonitoringRuleOptionsAnomalyDetectionOptions" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptions.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptions(
  bucket_duration: typing.Union[int, float] = None,
  detection_tolerance: typing.Union[int, float] = None,
  instantaneous_baseline: bool | IResolvable = None,
  learning_duration: typing.Union[int, float] = None,
  learning_period_baseline: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptions.property.bucketDuration">bucket_duration</a></code> | <code>typing.Union[int, float]</code> | Duration in seconds of the time buckets used to aggregate events matched by the rule. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptions.property.detectionTolerance">detection_tolerance</a></code> | <code>typing.Union[int, float]</code> | An optional parameter that sets how permissive anomaly detection is. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptions.property.instantaneousBaseline">instantaneous_baseline</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true, Datadog uses previous values that fall within the defined learning window to construct the baseline, enabling the system to establish an accurate baseline more rapidly rather than relying solely on gradual learning over time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptions.property.learningDuration">learning_duration</a></code> | <code>typing.Union[int, float]</code> | Learning duration in hours. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptions.property.learningPeriodBaseline">learning_period_baseline</a></code> | <code>typing.Union[int, float]</code> | An optional override baseline to apply while the rule is in the learning period. |

---

##### `bucket_duration`<sup>Optional</sup> <a name="bucket_duration" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptions.property.bucketDuration"></a>

```python
bucket_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Duration in seconds of the time buckets used to aggregate events matched by the rule.

Valid values are 300, 600, 900, 1800, 3600, 10800. Valid values are `300`, `600`, `900`, `1800`, `3600`, `10800`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#bucket_duration SecurityMonitoringRule#bucket_duration}

---

##### `detection_tolerance`<sup>Optional</sup> <a name="detection_tolerance" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptions.property.detectionTolerance"></a>

```python
detection_tolerance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An optional parameter that sets how permissive anomaly detection is.

Higher values require higher deviations before triggering a signal. Valid values are 1, 2, 3, 4, 5. Valid values are `1`, `2`, `3`, `4`, `5`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#detection_tolerance SecurityMonitoringRule#detection_tolerance}

---

##### `instantaneous_baseline`<sup>Optional</sup> <a name="instantaneous_baseline" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptions.property.instantaneousBaseline"></a>

```python
instantaneous_baseline: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When set to true, Datadog uses previous values that fall within the defined learning window to construct the baseline, enabling the system to establish an accurate baseline more rapidly rather than relying solely on gradual learning over time.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#instantaneous_baseline SecurityMonitoringRule#instantaneous_baseline}

---

##### `learning_duration`<sup>Optional</sup> <a name="learning_duration" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptions.property.learningDuration"></a>

```python
learning_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Learning duration in hours.

Anomaly detection waits for at least this amount of historical data before it starts evaluating. Valid values are 1, 6, 12, 24, 48, 168, 336. Valid values are `1`, `6`, `12`, `24`, `48`, `168`, `336`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#learning_duration SecurityMonitoringRule#learning_duration}

---

##### `learning_period_baseline`<sup>Optional</sup> <a name="learning_period_baseline" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptions.property.learningPeriodBaseline"></a>

```python
learning_period_baseline: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An optional override baseline to apply while the rule is in the learning period.

Value must be at least 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#learning_period_baseline SecurityMonitoringRule#learning_period_baseline}

---

### SecurityMonitoringRuleOptionsImpossibleTravelOptions <a name="SecurityMonitoringRuleOptionsImpossibleTravelOptions" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions(
  baseline_user_locations: bool | IResolvable = None,
  baseline_user_locations_duration: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions.property.baselineUserLocations">baseline_user_locations</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, signals are suppressed for the first 24 hours. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions.property.baselineUserLocationsDuration">baseline_user_locations_duration</a></code> | <code>typing.Union[int, float]</code> | The duration in days during which Datadog learns a user's access locations before generating signals. |

---

##### `baseline_user_locations`<sup>Optional</sup> <a name="baseline_user_locations" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions.property.baselineUserLocations"></a>

```python
baseline_user_locations: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, signals are suppressed for the first 24 hours.

During that time, Datadog learns the user's regular access locations. This can be helpful to reduce noise and infer VPN usage or credentialed API access. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#baseline_user_locations SecurityMonitoringRule#baseline_user_locations}

---

##### `baseline_user_locations_duration`<sup>Optional</sup> <a name="baseline_user_locations_duration" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions.property.baselineUserLocationsDuration"></a>

```python
baseline_user_locations_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration in days during which Datadog learns a user's access locations before generating signals.

Only applicable when `baseline_user_locations` is `true`. Defaults to `1` if unset. . Value must be between 1 and 30.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#baseline_user_locations_duration SecurityMonitoringRule#baseline_user_locations_duration}

---

### SecurityMonitoringRuleOptionsNewValueOptions <a name="SecurityMonitoringRuleOptionsNewValueOptions" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions(
  forget_after: typing.Union[int, float],
  instantaneous_baseline: bool | IResolvable = None,
  learning_duration: typing.Union[int, float] = None,
  learning_method: str = None,
  learning_threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.forgetAfter">forget_after</a></code> | <code>typing.Union[int, float]</code> | The duration in days after which a learned value is forgotten. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.instantaneousBaseline">instantaneous_baseline</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true, Datadog uses previous values that fall within the defined learning window to construct the baseline, enabling the system to establish an accurate baseline more rapidly rather than relying solely on gradual learning over time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningDuration">learning_duration</a></code> | <code>typing.Union[int, float]</code> | The duration in days during which values are learned, and after which signals will be generated for values that weren't learned. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningMethod">learning_method</a></code> | <code>str</code> | The learning method used to determine when signals should be generated for values that weren't learned. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningThreshold">learning_threshold</a></code> | <code>typing.Union[int, float]</code> | A number of occurrences after which signals are generated for values that weren't learned. |

---

##### `forget_after`<sup>Required</sup> <a name="forget_after" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.forgetAfter"></a>

```python
forget_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration in days after which a learned value is forgotten.

Accepted values are between 1 and 30. Value must be between 1 and 30.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#forget_after SecurityMonitoringRule#forget_after}

---

##### `instantaneous_baseline`<sup>Optional</sup> <a name="instantaneous_baseline" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.instantaneousBaseline"></a>

```python
instantaneous_baseline: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When set to true, Datadog uses previous values that fall within the defined learning window to construct the baseline, enabling the system to establish an accurate baseline more rapidly rather than relying solely on gradual learning over time.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#instantaneous_baseline SecurityMonitoringRule#instantaneous_baseline}

---

##### `learning_duration`<sup>Optional</sup> <a name="learning_duration" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningDuration"></a>

```python
learning_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration in days during which values are learned, and after which signals will be generated for values that weren't learned.

If set to 0, a signal will be generated for all new values after the first value is learned. Accepted values are between 0 and 30. Value must be between 0 and 30. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#learning_duration SecurityMonitoringRule#learning_duration}

---

##### `learning_method`<sup>Optional</sup> <a name="learning_method" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningMethod"></a>

```python
learning_method: str
```

- *Type:* str

The learning method used to determine when signals should be generated for values that weren't learned.

Valid values are `duration`, `threshold`. Defaults to `"duration"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#learning_method SecurityMonitoringRule#learning_method}

---

##### `learning_threshold`<sup>Optional</sup> <a name="learning_threshold" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions.property.learningThreshold"></a>

```python
learning_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A number of occurrences after which signals are generated for values that weren't learned.

Valid values are `0`, `1`. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#learning_threshold SecurityMonitoringRule#learning_threshold}

---

### SecurityMonitoringRuleOptionsSequenceDetectionOptions <a name="SecurityMonitoringRuleOptionsSequenceDetectionOptions" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptions.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptions(
  steps: IResolvable | typing.List[SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps] = None,
  step_transitions: IResolvable | typing.List[SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptions.property.steps">steps</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps">SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps</a>]</code> | steps block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptions.property.stepTransitions">step_transitions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions">SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions</a>]</code> | step_transitions block. |

---

##### `steps`<sup>Optional</sup> <a name="steps" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptions.property.steps"></a>

```python
steps: IResolvable | typing.List[SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps">SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps</a>]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#steps SecurityMonitoringRule#steps}

---

##### `step_transitions`<sup>Optional</sup> <a name="step_transitions" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptions.property.stepTransitions"></a>

```python
step_transitions: IResolvable | typing.List[SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions">SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions</a>]

step_transitions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#step_transitions SecurityMonitoringRule#step_transitions}

---

### SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps <a name="SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps(
  condition: str,
  name: str,
  evaluation_window: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps.property.condition">condition</a></code> | <code>str</code> | Condition for the step to match. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps.property.name">name</a></code> | <code>str</code> | Unique name of the step. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps.property.evaluationWindow">evaluation_window</a></code> | <code>typing.Union[int, float]</code> | Evaluation window for the step. |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps.property.condition"></a>

```python
condition: str
```

- *Type:* str

Condition for the step to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#condition SecurityMonitoringRule#condition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps.property.name"></a>

```python
name: str
```

- *Type:* str

Unique name of the step.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

##### `evaluation_window`<sup>Optional</sup> <a name="evaluation_window" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps.property.evaluationWindow"></a>

```python
evaluation_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Evaluation window for the step.

Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#evaluation_window SecurityMonitoringRule#evaluation_window}

---

### SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions <a name="SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions(
  child: str,
  parent: str,
  evaluation_window: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions.property.child">child</a></code> | <code>str</code> | Child step name. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions.property.parent">parent</a></code> | <code>str</code> | Parent step name. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions.property.evaluationWindow">evaluation_window</a></code> | <code>typing.Union[int, float]</code> | Maximum time allowed to transition from parent to child. |

---

##### `child`<sup>Required</sup> <a name="child" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions.property.child"></a>

```python
child: str
```

- *Type:* str

Child step name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#child SecurityMonitoringRule#child}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions.property.parent"></a>

```python
parent: str
```

- *Type:* str

Parent step name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#parent SecurityMonitoringRule#parent}

---

##### `evaluation_window`<sup>Optional</sup> <a name="evaluation_window" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions.property.evaluationWindow"></a>

```python
evaluation_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum time allowed to transition from parent to child.

Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#evaluation_window SecurityMonitoringRule#evaluation_window}

---

### SecurityMonitoringRuleOptionsThirdPartyRuleOptions <a name="SecurityMonitoringRuleOptionsThirdPartyRuleOptions" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions(
  default_status: str,
  default_notifications: typing.List[str] = None,
  root_query: IResolvable | typing.List[SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery] = None,
  signal_title_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.defaultStatus">default_status</a></code> | <code>str</code> | Severity of the default rule case, when none of the third-party cases match. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.defaultNotifications">default_notifications</a></code> | <code>typing.List[str]</code> | Notification targets for the default rule case, when none of the third-party cases match. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.rootQuery">root_query</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a>]</code> | root_query block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.signalTitleTemplate">signal_title_template</a></code> | <code>str</code> | A template for the signal title; if omitted, the title is generated based on the case name. |

---

##### `default_status`<sup>Required</sup> <a name="default_status" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.defaultStatus"></a>

```python
default_status: str
```

- *Type:* str

Severity of the default rule case, when none of the third-party cases match.

Valid values are `info`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#default_status SecurityMonitoringRule#default_status}

---

##### `default_notifications`<sup>Optional</sup> <a name="default_notifications" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.defaultNotifications"></a>

```python
default_notifications: typing.List[str]
```

- *Type:* typing.List[str]

Notification targets for the default rule case, when none of the third-party cases match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#default_notifications SecurityMonitoringRule#default_notifications}

---

##### `root_query`<sup>Optional</sup> <a name="root_query" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.rootQuery"></a>

```python
root_query: IResolvable | typing.List[SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a>]

root_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#root_query SecurityMonitoringRule#root_query}

---

##### `signal_title_template`<sup>Optional</sup> <a name="signal_title_template" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions.property.signalTitleTemplate"></a>

```python
signal_title_template: str
```

- *Type:* str

A template for the signal title; if omitted, the title is generated based on the case name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#signal_title_template SecurityMonitoringRule#signal_title_template}

---

### SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery <a name="SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery(
  query: str,
  group_by_fields: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery.property.query">query</a></code> | <code>str</code> | Query to filter logs. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery.property.groupByFields">group_by_fields</a></code> | <code>typing.List[str]</code> | Fields to group by. If empty, each log triggers a signal. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery.property.query"></a>

```python
query: str
```

- *Type:* str

Query to filter logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

##### `group_by_fields`<sup>Optional</sup> <a name="group_by_fields" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery.property.groupByFields"></a>

```python
group_by_fields: typing.List[str]
```

- *Type:* typing.List[str]

Fields to group by. If empty, each log triggers a signal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#group_by_fields SecurityMonitoringRule#group_by_fields}

---

### SecurityMonitoringRuleQuery <a name="SecurityMonitoringRuleQuery" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleQuery(
  query: str,
  agent_rule: IResolvable | typing.List[SecurityMonitoringRuleQueryAgentRule] = None,
  aggregation: str = None,
  data_source: str = None,
  distinct_fields: typing.List[str] = None,
  group_by_fields: typing.List[str] = None,
  has_optional_group_by_fields: bool | IResolvable = None,
  indexes: typing.List[str] = None,
  metric: str = None,
  metrics: typing.List[str] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.query">query</a></code> | <code>str</code> | Query to run on logs. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.agentRule">agent_rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>]</code> | agent_rule block. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.aggregation">aggregation</a></code> | <code>str</code> | The aggregation type. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.dataSource">data_source</a></code> | <code>str</code> | Source of events. Valid values are `logs`, `audit`, `app_sec_spans`, `spans`, `security_runtime`, `network`, `events`, `security_signals`. Defaults to `"logs"`. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.distinctFields">distinct_fields</a></code> | <code>typing.List[str]</code> | Field for which the cardinality is measured. Sent as an array. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.groupByFields">group_by_fields</a></code> | <code>typing.List[str]</code> | Fields to group by. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.hasOptionalGroupByFields">has_optional_group_by_fields</a></code> | <code>bool \| cdktn.IResolvable</code> | When false, events without a group-by value are ignored by the rule. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.indexes">indexes</a></code> | <code>typing.List[str]</code> | List of indexes to run the query on when the data source is `logs`. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.metric">metric</a></code> | <code>str</code> | The target field to aggregate over when using the `sum`, `max`, or `geo_data` aggregations. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.metrics">metrics</a></code> | <code>typing.List[str]</code> | Group of target fields to aggregate over when using the `sum`, `max`, `geo_data`, or `new_value` aggregations. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.name">name</a></code> | <code>str</code> | Name of the query. Not compatible with `new_value` aggregations. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.query"></a>

```python
query: str
```

- *Type:* str

Query to run on logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

##### `agent_rule`<sup>Optional</sup> <a name="agent_rule" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.agentRule"></a>

```python
agent_rule: IResolvable | typing.List[SecurityMonitoringRuleQueryAgentRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>]

agent_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#agent_rule SecurityMonitoringRule#agent_rule}

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

The aggregation type.

For Signal Correlation rules, it must be event_count. Valid values are `count`, `cardinality`, `sum`, `max`, `new_value`, `geo_data`, `event_count`, `none`. Defaults to `"count"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#aggregation SecurityMonitoringRule#aggregation}

---

##### `data_source`<sup>Optional</sup> <a name="data_source" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

Source of events. Valid values are `logs`, `audit`, `app_sec_spans`, `spans`, `security_runtime`, `network`, `events`, `security_signals`. Defaults to `"logs"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#data_source SecurityMonitoringRule#data_source}

---

##### `distinct_fields`<sup>Optional</sup> <a name="distinct_fields" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.distinctFields"></a>

```python
distinct_fields: typing.List[str]
```

- *Type:* typing.List[str]

Field for which the cardinality is measured. Sent as an array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#distinct_fields SecurityMonitoringRule#distinct_fields}

---

##### `group_by_fields`<sup>Optional</sup> <a name="group_by_fields" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.groupByFields"></a>

```python
group_by_fields: typing.List[str]
```

- *Type:* typing.List[str]

Fields to group by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#group_by_fields SecurityMonitoringRule#group_by_fields}

---

##### `has_optional_group_by_fields`<sup>Optional</sup> <a name="has_optional_group_by_fields" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.hasOptionalGroupByFields"></a>

```python
has_optional_group_by_fields: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When false, events without a group-by value are ignored by the rule.

When true, events with missing group-by fields are processed with `N/A`, replacing the missing values. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#has_optional_group_by_fields SecurityMonitoringRule#has_optional_group_by_fields}

---

##### `indexes`<sup>Optional</sup> <a name="indexes" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.indexes"></a>

```python
indexes: typing.List[str]
```

- *Type:* typing.List[str]

List of indexes to run the query on when the data source is `logs`.

Supports only one element. Used only for scheduled rules (in other words, when `scheduling_options` is defined).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#indexes SecurityMonitoringRule#indexes}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.metric"></a>

```python
metric: str
```

- *Type:* str

The target field to aggregate over when using the `sum`, `max`, or `geo_data` aggregations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#metric SecurityMonitoringRule#metric}

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.metrics"></a>

```python
metrics: typing.List[str]
```

- *Type:* typing.List[str]

Group of target fields to aggregate over when using the `sum`, `max`, `geo_data`, or `new_value` aggregations.

The `sum`, `max`, and `geo_data` aggregations only accept one value in this list, whereas the `new_value` aggregation accepts up to five values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#metrics SecurityMonitoringRule#metrics}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the query. Not compatible with `new_value` aggregations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

### SecurityMonitoringRuleQueryAgentRule <a name="SecurityMonitoringRuleQueryAgentRule" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule(
  agent_rule_id: str,
  expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule.property.agentRuleId">agent_rule_id</a></code> | <code>str</code> | **Deprecated**. It won't be applied anymore. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule.property.expression">expression</a></code> | <code>str</code> | **Deprecated**. It won't be applied anymore. |

---

##### `agent_rule_id`<sup>Required</sup> <a name="agent_rule_id" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule.property.agentRuleId"></a>

```python
agent_rule_id: str
```

- *Type:* str

**Deprecated**. It won't be applied anymore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#agent_rule_id SecurityMonitoringRule#agent_rule_id}

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule.property.expression"></a>

```python
expression: str
```

- *Type:* str

**Deprecated**. It won't be applied anymore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#expression SecurityMonitoringRule#expression}

---

### SecurityMonitoringRuleReferenceTables <a name="SecurityMonitoringRuleReferenceTables" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleReferenceTables(
  check_presence: bool | IResolvable,
  column_name: str,
  log_field_path: str,
  rule_query_name: str,
  table_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.checkPresence">check_presence</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to include or exclude logs that match the reference table. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.columnName">column_name</a></code> | <code>str</code> | The name of the column in the reference table. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.logFieldPath">log_field_path</a></code> | <code>str</code> | The field in the log that should be matched against the reference table. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.ruleQueryName">rule_query_name</a></code> | <code>str</code> | The name of the query to filter. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.tableName">table_name</a></code> | <code>str</code> | The name of the reference table. String length must be at least 1. |

---

##### `check_presence`<sup>Required</sup> <a name="check_presence" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.checkPresence"></a>

```python
check_presence: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to include or exclude logs that match the reference table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#check_presence SecurityMonitoringRule#check_presence}

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

The name of the column in the reference table. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#column_name SecurityMonitoringRule#column_name}

---

##### `log_field_path`<sup>Required</sup> <a name="log_field_path" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.logFieldPath"></a>

```python
log_field_path: str
```

- *Type:* str

The field in the log that should be matched against the reference table.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#log_field_path SecurityMonitoringRule#log_field_path}

---

##### `rule_query_name`<sup>Required</sup> <a name="rule_query_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.ruleQueryName"></a>

```python
rule_query_name: str
```

- *Type:* str

The name of the query to filter. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#rule_query_name SecurityMonitoringRule#rule_query_name}

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

The name of the reference table. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#table_name SecurityMonitoringRule#table_name}

---

### SecurityMonitoringRuleSchedulingOptions <a name="SecurityMonitoringRuleSchedulingOptions" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions(
  rrule: str,
  start: str,
  timezone: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.property.rrule">rrule</a></code> | <code>str</code> | Schedule for the rule queries, written in RRULE syntax. See [RFC](https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html) for syntax reference. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.property.start">start</a></code> | <code>str</code> | Start date for the schedule, in ISO 8601 format without timezone. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.property.timezone">timezone</a></code> | <code>str</code> | Time zone of the start date, in the [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) format. |

---

##### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.property.rrule"></a>

```python
rrule: str
```

- *Type:* str

Schedule for the rule queries, written in RRULE syntax. See [RFC](https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html) for syntax reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#rrule SecurityMonitoringRule#rrule}

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.property.start"></a>

```python
start: str
```

- *Type:* str

Start date for the schedule, in ISO 8601 format without timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#start SecurityMonitoringRule#start}

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Time zone of the start date, in the [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#timezone SecurityMonitoringRule#timezone}

---

### SecurityMonitoringRuleSignalQuery <a name="SecurityMonitoringRuleSignalQuery" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleSignalQuery(
  rule_id: str,
  aggregation: str = None,
  correlated_by_fields: typing.List[str] = None,
  correlated_query_index: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.ruleId">rule_id</a></code> | <code>str</code> | Rule ID of the signal to correlate. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.aggregation">aggregation</a></code> | <code>str</code> | The aggregation type. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.correlatedByFields">correlated_by_fields</a></code> | <code>typing.List[str]</code> | Fields to correlate by. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.correlatedQueryIndex">correlated_query_index</a></code> | <code>str</code> | Index of the rule query used to retrieve the correlated field. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.name">name</a></code> | <code>str</code> | Name of the query. Not compatible with `new_value` aggregations. |

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

Rule ID of the signal to correlate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#rule_id SecurityMonitoringRule#rule_id}

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

The aggregation type.

For Signal Correlation rules, it must be event_count. Valid values are `count`, `cardinality`, `sum`, `max`, `new_value`, `geo_data`, `event_count`, `none`. Defaults to `"event_count"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#aggregation SecurityMonitoringRule#aggregation}

---

##### `correlated_by_fields`<sup>Optional</sup> <a name="correlated_by_fields" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.correlatedByFields"></a>

```python
correlated_by_fields: typing.List[str]
```

- *Type:* typing.List[str]

Fields to correlate by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#correlated_by_fields SecurityMonitoringRule#correlated_by_fields}

---

##### `correlated_query_index`<sup>Optional</sup> <a name="correlated_query_index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.correlatedQueryIndex"></a>

```python
correlated_query_index: str
```

- *Type:* str

Index of the rule query used to retrieve the correlated field.

An empty string applies correlation on the non-projected per query attributes of the rule. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#correlated_query_index SecurityMonitoringRule#correlated_query_index}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the query. Not compatible with `new_value` aggregations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

### SecurityMonitoringRuleThirdPartyCase <a name="SecurityMonitoringRuleThirdPartyCase" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase(
  status: str,
  name: str = None,
  notifications: typing.List[str] = None,
  query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.status">status</a></code> | <code>str</code> | Severity of the Security Signal. Valid values are `info`, `low`, `medium`, `high`, `critical`. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.name">name</a></code> | <code>str</code> | Name of the case. Defaults to `""`. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.notifications">notifications</a></code> | <code>typing.List[str]</code> | Notification targets for each rule case. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.query">query</a></code> | <code>str</code> | A query to associate a third-party event to this case. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.status"></a>

```python
status: str
```

- *Type:* str

Severity of the Security Signal. Valid values are `info`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#status SecurityMonitoringRule#status}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the case. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#name SecurityMonitoringRule#name}

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.notifications"></a>

```python
notifications: typing.List[str]
```

- *Type:* typing.List[str]

Notification targets for each rule case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#notifications SecurityMonitoringRule#notifications}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase.property.query"></a>

```python
query: str
```

- *Type:* str

A query to associate a third-party event to this case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/security_monitoring_rule#query SecurityMonitoringRule#query}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityMonitoringRuleCalculatedFieldList <a name="SecurityMonitoringRuleCalculatedFieldList" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleCalculatedFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleCalculatedField]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>]

---


### SecurityMonitoringRuleCalculatedFieldOutputReference <a name="SecurityMonitoringRuleCalculatedFieldOutputReference" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedFieldOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleCalculatedField
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCalculatedField">SecurityMonitoringRuleCalculatedField</a>

---


### SecurityMonitoringRuleCaseActionList <a name="SecurityMonitoringRuleCaseActionList" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleCaseActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleCaseActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleCaseAction]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a>]

---


### SecurityMonitoringRuleCaseActionOptionsList <a name="SecurityMonitoringRuleCaseActionOptionsList" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleCaseActionOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleCaseActionOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a>]

---


### SecurityMonitoringRuleCaseActionOptionsOutputReference <a name="SecurityMonitoringRuleCaseActionOptionsOutputReference" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.resetDuration">reset_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_duration` <a name="reset_duration" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.resetDuration"></a>

```python
def reset_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.durationInput">duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.durationInput"></a>

```python
duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleCaseActionOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a>

---


### SecurityMonitoringRuleCaseActionOutputReference <a name="SecurityMonitoringRuleCaseActionOutputReference" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.putOptions">put_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.resetOptions">reset_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_options` <a name="put_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.putOptions"></a>

```python
def put_options(
  value: IResolvable | typing.List[SecurityMonitoringRuleCaseActionOptions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.putOptions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a>]

---

##### `reset_options` <a name="reset_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.resetOptions"></a>

```python
def reset_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.options">options</a></code> | <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList">SecurityMonitoringRuleCaseActionOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.optionsInput">options_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.options"></a>

```python
options: SecurityMonitoringRuleCaseActionOptionsList
```

- *Type:* <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptionsList">SecurityMonitoringRuleCaseActionOptionsList</a>

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.optionsInput"></a>

```python
options_input: IResolvable | typing.List[SecurityMonitoringRuleCaseActionOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOptions">SecurityMonitoringRuleCaseActionOptions</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleCaseAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a>

---


### SecurityMonitoringRuleCaseList <a name="SecurityMonitoringRuleCaseList" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleCaseList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleCaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleCase]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>]

---


### SecurityMonitoringRuleCaseOutputReference <a name="SecurityMonitoringRuleCaseOutputReference" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetNotifications">reset_notifications</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.putAction"></a>

```python
def put_action(
  value: IResolvable | typing.List[SecurityMonitoringRuleCaseAction]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.putAction.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a>]

---

##### `reset_action` <a name="reset_action" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_notifications` <a name="reset_notifications" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.resetNotifications"></a>

```python
def reset_notifications() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.action">action</a></code> | <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList">SecurityMonitoringRuleCaseActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.actionInput">action_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.notificationsInput">notifications_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.notifications">notifications</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.action"></a>

```python
action: SecurityMonitoringRuleCaseActionList
```

- *Type:* <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseActionList">SecurityMonitoringRuleCaseActionList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.actionInput"></a>

```python
action_input: IResolvable | typing.List[SecurityMonitoringRuleCaseAction]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseAction">SecurityMonitoringRuleCaseAction</a>]

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notifications_input`<sup>Optional</sup> <a name="notifications_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.notificationsInput"></a>

```python
notifications_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.notifications"></a>

```python
notifications: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCaseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleCase
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleCase">SecurityMonitoringRuleCase</a>

---


### SecurityMonitoringRuleFilterList <a name="SecurityMonitoringRuleFilterList" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleFilter]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>]

---


### SecurityMonitoringRuleFilterOutputReference <a name="SecurityMonitoringRuleFilterOutputReference" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleFilter">SecurityMonitoringRuleFilter</a>

---


### SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList <a name="SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptions">SecurityMonitoringRuleOptionsAnomalyDetectionOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleOptionsAnomalyDetectionOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptions">SecurityMonitoringRuleOptionsAnomalyDetectionOptions</a>]

---


### SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference <a name="SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.resetBucketDuration">reset_bucket_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.resetDetectionTolerance">reset_detection_tolerance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.resetInstantaneousBaseline">reset_instantaneous_baseline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.resetLearningDuration">reset_learning_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.resetLearningPeriodBaseline">reset_learning_period_baseline</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_duration` <a name="reset_bucket_duration" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.resetBucketDuration"></a>

```python
def reset_bucket_duration() -> None
```

##### `reset_detection_tolerance` <a name="reset_detection_tolerance" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.resetDetectionTolerance"></a>

```python
def reset_detection_tolerance() -> None
```

##### `reset_instantaneous_baseline` <a name="reset_instantaneous_baseline" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.resetInstantaneousBaseline"></a>

```python
def reset_instantaneous_baseline() -> None
```

##### `reset_learning_duration` <a name="reset_learning_duration" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.resetLearningDuration"></a>

```python
def reset_learning_duration() -> None
```

##### `reset_learning_period_baseline` <a name="reset_learning_period_baseline" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.resetLearningPeriodBaseline"></a>

```python
def reset_learning_period_baseline() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.bucketDurationInput">bucket_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.detectionToleranceInput">detection_tolerance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.instantaneousBaselineInput">instantaneous_baseline_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.learningDurationInput">learning_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.learningPeriodBaselineInput">learning_period_baseline_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.bucketDuration">bucket_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.detectionTolerance">detection_tolerance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.instantaneousBaseline">instantaneous_baseline</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.learningDuration">learning_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.learningPeriodBaseline">learning_period_baseline</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptions">SecurityMonitoringRuleOptionsAnomalyDetectionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_duration_input`<sup>Optional</sup> <a name="bucket_duration_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.bucketDurationInput"></a>

```python
bucket_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `detection_tolerance_input`<sup>Optional</sup> <a name="detection_tolerance_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.detectionToleranceInput"></a>

```python
detection_tolerance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instantaneous_baseline_input`<sup>Optional</sup> <a name="instantaneous_baseline_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.instantaneousBaselineInput"></a>

```python
instantaneous_baseline_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `learning_duration_input`<sup>Optional</sup> <a name="learning_duration_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.learningDurationInput"></a>

```python
learning_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `learning_period_baseline_input`<sup>Optional</sup> <a name="learning_period_baseline_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.learningPeriodBaselineInput"></a>

```python
learning_period_baseline_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bucket_duration`<sup>Required</sup> <a name="bucket_duration" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.bucketDuration"></a>

```python
bucket_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `detection_tolerance`<sup>Required</sup> <a name="detection_tolerance" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.detectionTolerance"></a>

```python
detection_tolerance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instantaneous_baseline`<sup>Required</sup> <a name="instantaneous_baseline" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.instantaneousBaseline"></a>

```python
instantaneous_baseline: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `learning_duration`<sup>Required</sup> <a name="learning_duration" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.learningDuration"></a>

```python
learning_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `learning_period_baseline`<sup>Required</sup> <a name="learning_period_baseline" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.learningPeriodBaseline"></a>

```python
learning_period_baseline: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleOptionsAnomalyDetectionOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptions">SecurityMonitoringRuleOptionsAnomalyDetectionOptions</a>

---


### SecurityMonitoringRuleOptionsImpossibleTravelOptionsList <a name="SecurityMonitoringRuleOptionsImpossibleTravelOptionsList" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleOptionsImpossibleTravelOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a>]

---


### SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference <a name="SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resetBaselineUserLocations">reset_baseline_user_locations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resetBaselineUserLocationsDuration">reset_baseline_user_locations_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_baseline_user_locations` <a name="reset_baseline_user_locations" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resetBaselineUserLocations"></a>

```python
def reset_baseline_user_locations() -> None
```

##### `reset_baseline_user_locations_duration` <a name="reset_baseline_user_locations_duration" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.resetBaselineUserLocationsDuration"></a>

```python
def reset_baseline_user_locations_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocationsDurationInput">baseline_user_locations_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocationsInput">baseline_user_locations_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocations">baseline_user_locations</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocationsDuration">baseline_user_locations_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `baseline_user_locations_duration_input`<sup>Optional</sup> <a name="baseline_user_locations_duration_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocationsDurationInput"></a>

```python
baseline_user_locations_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `baseline_user_locations_input`<sup>Optional</sup> <a name="baseline_user_locations_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocationsInput"></a>

```python
baseline_user_locations_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `baseline_user_locations`<sup>Required</sup> <a name="baseline_user_locations" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocations"></a>

```python
baseline_user_locations: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `baseline_user_locations_duration`<sup>Required</sup> <a name="baseline_user_locations_duration" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.baselineUserLocationsDuration"></a>

```python
baseline_user_locations_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleOptionsImpossibleTravelOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a>

---


### SecurityMonitoringRuleOptionsList <a name="SecurityMonitoringRuleOptionsList" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>]

---


### SecurityMonitoringRuleOptionsNewValueOptionsList <a name="SecurityMonitoringRuleOptionsNewValueOptionsList" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleOptionsNewValueOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleOptionsNewValueOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a>]

---


### SecurityMonitoringRuleOptionsNewValueOptionsOutputReference <a name="SecurityMonitoringRuleOptionsNewValueOptionsOutputReference" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetInstantaneousBaseline">reset_instantaneous_baseline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningDuration">reset_learning_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningMethod">reset_learning_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningThreshold">reset_learning_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instantaneous_baseline` <a name="reset_instantaneous_baseline" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetInstantaneousBaseline"></a>

```python
def reset_instantaneous_baseline() -> None
```

##### `reset_learning_duration` <a name="reset_learning_duration" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningDuration"></a>

```python
def reset_learning_duration() -> None
```

##### `reset_learning_method` <a name="reset_learning_method" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningMethod"></a>

```python
def reset_learning_method() -> None
```

##### `reset_learning_threshold` <a name="reset_learning_threshold" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.resetLearningThreshold"></a>

```python
def reset_learning_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.forgetAfterInput">forget_after_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.instantaneousBaselineInput">instantaneous_baseline_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningDurationInput">learning_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningMethodInput">learning_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningThresholdInput">learning_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.forgetAfter">forget_after</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.instantaneousBaseline">instantaneous_baseline</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningDuration">learning_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningMethod">learning_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningThreshold">learning_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forget_after_input`<sup>Optional</sup> <a name="forget_after_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.forgetAfterInput"></a>

```python
forget_after_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instantaneous_baseline_input`<sup>Optional</sup> <a name="instantaneous_baseline_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.instantaneousBaselineInput"></a>

```python
instantaneous_baseline_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `learning_duration_input`<sup>Optional</sup> <a name="learning_duration_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningDurationInput"></a>

```python
learning_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `learning_method_input`<sup>Optional</sup> <a name="learning_method_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningMethodInput"></a>

```python
learning_method_input: str
```

- *Type:* str

---

##### `learning_threshold_input`<sup>Optional</sup> <a name="learning_threshold_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningThresholdInput"></a>

```python
learning_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `forget_after`<sup>Required</sup> <a name="forget_after" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.forgetAfter"></a>

```python
forget_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instantaneous_baseline`<sup>Required</sup> <a name="instantaneous_baseline" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.instantaneousBaseline"></a>

```python
instantaneous_baseline: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `learning_duration`<sup>Required</sup> <a name="learning_duration" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningDuration"></a>

```python
learning_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `learning_method`<sup>Required</sup> <a name="learning_method" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningMethod"></a>

```python
learning_method: str
```

- *Type:* str

---

##### `learning_threshold`<sup>Required</sup> <a name="learning_threshold" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.learningThreshold"></a>

```python
learning_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleOptionsNewValueOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a>

---


### SecurityMonitoringRuleOptionsOutputReference <a name="SecurityMonitoringRuleOptionsOutputReference" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putAnomalyDetectionOptions">put_anomaly_detection_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putImpossibleTravelOptions">put_impossible_travel_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putNewValueOptions">put_new_value_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putSequenceDetectionOptions">put_sequence_detection_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putThirdPartyRuleOptions">put_third_party_rule_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetAnomalyDetectionOptions">reset_anomaly_detection_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetDecreaseCriticalityBasedOnEnv">reset_decrease_criticality_based_on_env</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetDetectionMethod">reset_detection_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetEvaluationWindow">reset_evaluation_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetImpossibleTravelOptions">reset_impossible_travel_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetKeepAlive">reset_keep_alive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetMaxSignalDuration">reset_max_signal_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetNewValueOptions">reset_new_value_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetSequenceDetectionOptions">reset_sequence_detection_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetThirdPartyRuleOptions">reset_third_party_rule_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_anomaly_detection_options` <a name="put_anomaly_detection_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putAnomalyDetectionOptions"></a>

```python
def put_anomaly_detection_options(
  value: IResolvable | typing.List[SecurityMonitoringRuleOptionsAnomalyDetectionOptions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putAnomalyDetectionOptions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptions">SecurityMonitoringRuleOptionsAnomalyDetectionOptions</a>]

---

##### `put_impossible_travel_options` <a name="put_impossible_travel_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putImpossibleTravelOptions"></a>

```python
def put_impossible_travel_options(
  value: IResolvable | typing.List[SecurityMonitoringRuleOptionsImpossibleTravelOptions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putImpossibleTravelOptions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a>]

---

##### `put_new_value_options` <a name="put_new_value_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putNewValueOptions"></a>

```python
def put_new_value_options(
  value: IResolvable | typing.List[SecurityMonitoringRuleOptionsNewValueOptions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putNewValueOptions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a>]

---

##### `put_sequence_detection_options` <a name="put_sequence_detection_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putSequenceDetectionOptions"></a>

```python
def put_sequence_detection_options(
  value: IResolvable | typing.List[SecurityMonitoringRuleOptionsSequenceDetectionOptions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putSequenceDetectionOptions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptions">SecurityMonitoringRuleOptionsSequenceDetectionOptions</a>]

---

##### `put_third_party_rule_options` <a name="put_third_party_rule_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putThirdPartyRuleOptions"></a>

```python
def put_third_party_rule_options(
  value: IResolvable | typing.List[SecurityMonitoringRuleOptionsThirdPartyRuleOptions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.putThirdPartyRuleOptions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a>]

---

##### `reset_anomaly_detection_options` <a name="reset_anomaly_detection_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetAnomalyDetectionOptions"></a>

```python
def reset_anomaly_detection_options() -> None
```

##### `reset_decrease_criticality_based_on_env` <a name="reset_decrease_criticality_based_on_env" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetDecreaseCriticalityBasedOnEnv"></a>

```python
def reset_decrease_criticality_based_on_env() -> None
```

##### `reset_detection_method` <a name="reset_detection_method" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetDetectionMethod"></a>

```python
def reset_detection_method() -> None
```

##### `reset_evaluation_window` <a name="reset_evaluation_window" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetEvaluationWindow"></a>

```python
def reset_evaluation_window() -> None
```

##### `reset_impossible_travel_options` <a name="reset_impossible_travel_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetImpossibleTravelOptions"></a>

```python
def reset_impossible_travel_options() -> None
```

##### `reset_keep_alive` <a name="reset_keep_alive" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetKeepAlive"></a>

```python
def reset_keep_alive() -> None
```

##### `reset_max_signal_duration` <a name="reset_max_signal_duration" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetMaxSignalDuration"></a>

```python
def reset_max_signal_duration() -> None
```

##### `reset_new_value_options` <a name="reset_new_value_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetNewValueOptions"></a>

```python
def reset_new_value_options() -> None
```

##### `reset_sequence_detection_options` <a name="reset_sequence_detection_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetSequenceDetectionOptions"></a>

```python
def reset_sequence_detection_options() -> None
```

##### `reset_third_party_rule_options` <a name="reset_third_party_rule_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.resetThirdPartyRuleOptions"></a>

```python
def reset_third_party_rule_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.anomalyDetectionOptions">anomaly_detection_options</a></code> | <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList">SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.impossibleTravelOptions">impossible_travel_options</a></code> | <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList">SecurityMonitoringRuleOptionsImpossibleTravelOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.newValueOptions">new_value_options</a></code> | <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList">SecurityMonitoringRuleOptionsNewValueOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.sequenceDetectionOptions">sequence_detection_options</a></code> | <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList">SecurityMonitoringRuleOptionsSequenceDetectionOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.thirdPartyRuleOptions">third_party_rule_options</a></code> | <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.anomalyDetectionOptionsInput">anomaly_detection_options_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptions">SecurityMonitoringRuleOptionsAnomalyDetectionOptions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnvInput">decrease_criticality_based_on_env_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.detectionMethodInput">detection_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.evaluationWindowInput">evaluation_window_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.impossibleTravelOptionsInput">impossible_travel_options_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.keepAliveInput">keep_alive_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.maxSignalDurationInput">max_signal_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.newValueOptionsInput">new_value_options_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.sequenceDetectionOptionsInput">sequence_detection_options_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptions">SecurityMonitoringRuleOptionsSequenceDetectionOptions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.thirdPartyRuleOptionsInput">third_party_rule_options_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnv">decrease_criticality_based_on_env</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.detectionMethod">detection_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.evaluationWindow">evaluation_window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.keepAlive">keep_alive</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.maxSignalDuration">max_signal_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `anomaly_detection_options`<sup>Required</sup> <a name="anomaly_detection_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.anomalyDetectionOptions"></a>

```python
anomaly_detection_options: SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList
```

- *Type:* <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList">SecurityMonitoringRuleOptionsAnomalyDetectionOptionsList</a>

---

##### `impossible_travel_options`<sup>Required</sup> <a name="impossible_travel_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.impossibleTravelOptions"></a>

```python
impossible_travel_options: SecurityMonitoringRuleOptionsImpossibleTravelOptionsList
```

- *Type:* <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptionsList">SecurityMonitoringRuleOptionsImpossibleTravelOptionsList</a>

---

##### `new_value_options`<sup>Required</sup> <a name="new_value_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.newValueOptions"></a>

```python
new_value_options: SecurityMonitoringRuleOptionsNewValueOptionsList
```

- *Type:* <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptionsList">SecurityMonitoringRuleOptionsNewValueOptionsList</a>

---

##### `sequence_detection_options`<sup>Required</sup> <a name="sequence_detection_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.sequenceDetectionOptions"></a>

```python
sequence_detection_options: SecurityMonitoringRuleOptionsSequenceDetectionOptionsList
```

- *Type:* <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList">SecurityMonitoringRuleOptionsSequenceDetectionOptionsList</a>

---

##### `third_party_rule_options`<sup>Required</sup> <a name="third_party_rule_options" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.thirdPartyRuleOptions"></a>

```python
third_party_rule_options: SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList
```

- *Type:* <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList</a>

---

##### `anomaly_detection_options_input`<sup>Optional</sup> <a name="anomaly_detection_options_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.anomalyDetectionOptionsInput"></a>

```python
anomaly_detection_options_input: IResolvable | typing.List[SecurityMonitoringRuleOptionsAnomalyDetectionOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsAnomalyDetectionOptions">SecurityMonitoringRuleOptionsAnomalyDetectionOptions</a>]

---

##### `decrease_criticality_based_on_env_input`<sup>Optional</sup> <a name="decrease_criticality_based_on_env_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnvInput"></a>

```python
decrease_criticality_based_on_env_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `detection_method_input`<sup>Optional</sup> <a name="detection_method_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.detectionMethodInput"></a>

```python
detection_method_input: str
```

- *Type:* str

---

##### `evaluation_window_input`<sup>Optional</sup> <a name="evaluation_window_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.evaluationWindowInput"></a>

```python
evaluation_window_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `impossible_travel_options_input`<sup>Optional</sup> <a name="impossible_travel_options_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.impossibleTravelOptionsInput"></a>

```python
impossible_travel_options_input: IResolvable | typing.List[SecurityMonitoringRuleOptionsImpossibleTravelOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsImpossibleTravelOptions">SecurityMonitoringRuleOptionsImpossibleTravelOptions</a>]

---

##### `keep_alive_input`<sup>Optional</sup> <a name="keep_alive_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.keepAliveInput"></a>

```python
keep_alive_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_signal_duration_input`<sup>Optional</sup> <a name="max_signal_duration_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.maxSignalDurationInput"></a>

```python
max_signal_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `new_value_options_input`<sup>Optional</sup> <a name="new_value_options_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.newValueOptionsInput"></a>

```python
new_value_options_input: IResolvable | typing.List[SecurityMonitoringRuleOptionsNewValueOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsNewValueOptions">SecurityMonitoringRuleOptionsNewValueOptions</a>]

---

##### `sequence_detection_options_input`<sup>Optional</sup> <a name="sequence_detection_options_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.sequenceDetectionOptionsInput"></a>

```python
sequence_detection_options_input: IResolvable | typing.List[SecurityMonitoringRuleOptionsSequenceDetectionOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptions">SecurityMonitoringRuleOptionsSequenceDetectionOptions</a>]

---

##### `third_party_rule_options_input`<sup>Optional</sup> <a name="third_party_rule_options_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.thirdPartyRuleOptionsInput"></a>

```python
third_party_rule_options_input: IResolvable | typing.List[SecurityMonitoringRuleOptionsThirdPartyRuleOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a>]

---

##### `decrease_criticality_based_on_env`<sup>Required</sup> <a name="decrease_criticality_based_on_env" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.decreaseCriticalityBasedOnEnv"></a>

```python
decrease_criticality_based_on_env: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `detection_method`<sup>Required</sup> <a name="detection_method" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.detectionMethod"></a>

```python
detection_method: str
```

- *Type:* str

---

##### `evaluation_window`<sup>Required</sup> <a name="evaluation_window" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.evaluationWindow"></a>

```python
evaluation_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `keep_alive`<sup>Required</sup> <a name="keep_alive" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.keepAlive"></a>

```python
keep_alive: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_signal_duration`<sup>Required</sup> <a name="max_signal_duration" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.maxSignalDuration"></a>

```python
max_signal_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptions">SecurityMonitoringRuleOptions</a>

---


### SecurityMonitoringRuleOptionsSequenceDetectionOptionsList <a name="SecurityMonitoringRuleOptionsSequenceDetectionOptionsList" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptions">SecurityMonitoringRuleOptionsSequenceDetectionOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleOptionsSequenceDetectionOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptions">SecurityMonitoringRuleOptionsSequenceDetectionOptions</a>]

---


### SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference <a name="SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.putSteps">put_steps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.putStepTransitions">put_step_transitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.resetSteps">reset_steps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.resetStepTransitions">reset_step_transitions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_steps` <a name="put_steps" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.putSteps"></a>

```python
def put_steps(
  value: IResolvable | typing.List[SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.putSteps.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps">SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps</a>]

---

##### `put_step_transitions` <a name="put_step_transitions" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.putStepTransitions"></a>

```python
def put_step_transitions(
  value: IResolvable | typing.List[SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.putStepTransitions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions">SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions</a>]

---

##### `reset_steps` <a name="reset_steps" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.resetSteps"></a>

```python
def reset_steps() -> None
```

##### `reset_step_transitions` <a name="reset_step_transitions" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.resetStepTransitions"></a>

```python
def reset_step_transitions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList">SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.property.stepTransitions">step_transitions</a></code> | <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList">SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.property.stepsInput">steps_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps">SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.property.stepTransitionsInput">step_transitions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions">SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptions">SecurityMonitoringRuleOptionsSequenceDetectionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.property.steps"></a>

```python
steps: SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList
```

- *Type:* <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList">SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList</a>

---

##### `step_transitions`<sup>Required</sup> <a name="step_transitions" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.property.stepTransitions"></a>

```python
step_transitions: SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList
```

- *Type:* <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList">SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList</a>

---

##### `steps_input`<sup>Optional</sup> <a name="steps_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.property.stepsInput"></a>

```python
steps_input: IResolvable | typing.List[SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps">SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps</a>]

---

##### `step_transitions_input`<sup>Optional</sup> <a name="step_transitions_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.property.stepTransitionsInput"></a>

```python
step_transitions_input: IResolvable | typing.List[SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions">SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleOptionsSequenceDetectionOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptions">SecurityMonitoringRuleOptionsSequenceDetectionOptions</a>

---


### SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList <a name="SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps">SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps">SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps</a>]

---


### SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference <a name="SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.resetEvaluationWindow">reset_evaluation_window</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_evaluation_window` <a name="reset_evaluation_window" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.resetEvaluationWindow"></a>

```python
def reset_evaluation_window() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.property.evaluationWindowInput">evaluation_window_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.property.evaluationWindow">evaluation_window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps">SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `evaluation_window_input`<sup>Optional</sup> <a name="evaluation_window_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.property.evaluationWindowInput"></a>

```python
evaluation_window_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `evaluation_window`<sup>Required</sup> <a name="evaluation_window" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.property.evaluationWindow"></a>

```python
evaluation_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps">SecurityMonitoringRuleOptionsSequenceDetectionOptionsSteps</a>

---


### SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList <a name="SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions">SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions">SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions</a>]

---


### SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference <a name="SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.resetEvaluationWindow">reset_evaluation_window</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_evaluation_window` <a name="reset_evaluation_window" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.resetEvaluationWindow"></a>

```python
def reset_evaluation_window() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.property.childInput">child_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.property.evaluationWindowInput">evaluation_window_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.property.child">child</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.property.evaluationWindow">evaluation_window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions">SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `child_input`<sup>Optional</sup> <a name="child_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.property.childInput"></a>

```python
child_input: str
```

- *Type:* str

---

##### `evaluation_window_input`<sup>Optional</sup> <a name="evaluation_window_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.property.evaluationWindowInput"></a>

```python
evaluation_window_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `child`<sup>Required</sup> <a name="child" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.property.child"></a>

```python
child: str
```

- *Type:* str

---

##### `evaluation_window`<sup>Required</sup> <a name="evaluation_window" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.property.evaluationWindow"></a>

```python
evaluation_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions">SecurityMonitoringRuleOptionsSequenceDetectionOptionsStepTransitions</a>

---


### SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList <a name="SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleOptionsThirdPartyRuleOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a>]

---


### SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference <a name="SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.putRootQuery">put_root_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resetDefaultNotifications">reset_default_notifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resetRootQuery">reset_root_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resetSignalTitleTemplate">reset_signal_title_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_root_query` <a name="put_root_query" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.putRootQuery"></a>

```python
def put_root_query(
  value: IResolvable | typing.List[SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.putRootQuery.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a>]

---

##### `reset_default_notifications` <a name="reset_default_notifications" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resetDefaultNotifications"></a>

```python
def reset_default_notifications() -> None
```

##### `reset_root_query` <a name="reset_root_query" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resetRootQuery"></a>

```python
def reset_root_query() -> None
```

##### `reset_signal_title_template` <a name="reset_signal_title_template" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.resetSignalTitleTemplate"></a>

```python
def reset_signal_title_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.rootQuery">root_query</a></code> | <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultNotificationsInput">default_notifications_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultStatusInput">default_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.rootQueryInput">root_query_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.signalTitleTemplateInput">signal_title_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultNotifications">default_notifications</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultStatus">default_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.signalTitleTemplate">signal_title_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `root_query`<sup>Required</sup> <a name="root_query" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.rootQuery"></a>

```python
root_query: SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList
```

- *Type:* <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList</a>

---

##### `default_notifications_input`<sup>Optional</sup> <a name="default_notifications_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultNotificationsInput"></a>

```python
default_notifications_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_status_input`<sup>Optional</sup> <a name="default_status_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultStatusInput"></a>

```python
default_status_input: str
```

- *Type:* str

---

##### `root_query_input`<sup>Optional</sup> <a name="root_query_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.rootQueryInput"></a>

```python
root_query_input: IResolvable | typing.List[SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a>]

---

##### `signal_title_template_input`<sup>Optional</sup> <a name="signal_title_template_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.signalTitleTemplateInput"></a>

```python
signal_title_template_input: str
```

- *Type:* str

---

##### `default_notifications`<sup>Required</sup> <a name="default_notifications" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultNotifications"></a>

```python
default_notifications: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_status`<sup>Required</sup> <a name="default_status" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.defaultStatus"></a>

```python
default_status: str
```

- *Type:* str

---

##### `signal_title_template`<sup>Required</sup> <a name="signal_title_template" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.signalTitleTemplate"></a>

```python
signal_title_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleOptionsThirdPartyRuleOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptions">SecurityMonitoringRuleOptionsThirdPartyRuleOptions</a>

---


### SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList <a name="SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a>]

---


### SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference <a name="SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.resetGroupByFields">reset_group_by_fields</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_by_fields` <a name="reset_group_by_fields" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.resetGroupByFields"></a>

```python
def reset_group_by_fields() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.groupByFieldsInput">group_by_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.groupByFields">group_by_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_by_fields_input`<sup>Optional</sup> <a name="group_by_fields_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.groupByFieldsInput"></a>

```python
group_by_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `group_by_fields`<sup>Required</sup> <a name="group_by_fields" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.groupByFields"></a>

```python
group_by_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQueryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery">SecurityMonitoringRuleOptionsThirdPartyRuleOptionsRootQuery</a>

---


### SecurityMonitoringRuleQueryAgentRuleList <a name="SecurityMonitoringRuleQueryAgentRuleList" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleQueryAgentRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleQueryAgentRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>]

---


### SecurityMonitoringRuleQueryAgentRuleOutputReference <a name="SecurityMonitoringRuleQueryAgentRuleOutputReference" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.agentRuleIdInput">agent_rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.agentRuleId">agent_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_rule_id_input`<sup>Optional</sup> <a name="agent_rule_id_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.agentRuleIdInput"></a>

```python
agent_rule_id_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `agent_rule_id`<sup>Required</sup> <a name="agent_rule_id" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.agentRuleId"></a>

```python
agent_rule_id: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleQueryAgentRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>

---


### SecurityMonitoringRuleQueryList <a name="SecurityMonitoringRuleQueryList" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleQueryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleQuery]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>]

---


### SecurityMonitoringRuleQueryOutputReference <a name="SecurityMonitoringRuleQueryOutputReference" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.putAgentRule">put_agent_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetAgentRule">reset_agent_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetAggregation">reset_aggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetDataSource">reset_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetDistinctFields">reset_distinct_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetGroupByFields">reset_group_by_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetHasOptionalGroupByFields">reset_has_optional_group_by_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetIndexes">reset_indexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetMetric">reset_metric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetMetrics">reset_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_agent_rule` <a name="put_agent_rule" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.putAgentRule"></a>

```python
def put_agent_rule(
  value: IResolvable | typing.List[SecurityMonitoringRuleQueryAgentRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.putAgentRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>]

---

##### `reset_agent_rule` <a name="reset_agent_rule" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetAgentRule"></a>

```python
def reset_agent_rule() -> None
```

##### `reset_aggregation` <a name="reset_aggregation" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetAggregation"></a>

```python
def reset_aggregation() -> None
```

##### `reset_data_source` <a name="reset_data_source" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetDataSource"></a>

```python
def reset_data_source() -> None
```

##### `reset_distinct_fields` <a name="reset_distinct_fields" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetDistinctFields"></a>

```python
def reset_distinct_fields() -> None
```

##### `reset_group_by_fields` <a name="reset_group_by_fields" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetGroupByFields"></a>

```python
def reset_group_by_fields() -> None
```

##### `reset_has_optional_group_by_fields` <a name="reset_has_optional_group_by_fields" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetHasOptionalGroupByFields"></a>

```python
def reset_has_optional_group_by_fields() -> None
```

##### `reset_indexes` <a name="reset_indexes" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetIndexes"></a>

```python
def reset_indexes() -> None
```

##### `reset_metric` <a name="reset_metric" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetMetric"></a>

```python
def reset_metric() -> None
```

##### `reset_metrics` <a name="reset_metrics" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetMetrics"></a>

```python
def reset_metrics() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.agentRule">agent_rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList">SecurityMonitoringRuleQueryAgentRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.agentRuleInput">agent_rule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.aggregationInput">aggregation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.dataSourceInput">data_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.distinctFieldsInput">distinct_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.groupByFieldsInput">group_by_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.hasOptionalGroupByFieldsInput">has_optional_group_by_fields_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.indexesInput">indexes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metricInput">metric_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metricsInput">metrics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.aggregation">aggregation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.dataSource">data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.distinctFields">distinct_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.groupByFields">group_by_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.hasOptionalGroupByFields">has_optional_group_by_fields</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.indexes">indexes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metrics">metrics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_rule`<sup>Required</sup> <a name="agent_rule" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.agentRule"></a>

```python
agent_rule: SecurityMonitoringRuleQueryAgentRuleList
```

- *Type:* <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRuleList">SecurityMonitoringRuleQueryAgentRuleList</a>

---

##### `agent_rule_input`<sup>Optional</sup> <a name="agent_rule_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.agentRuleInput"></a>

```python
agent_rule_input: IResolvable | typing.List[SecurityMonitoringRuleQueryAgentRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryAgentRule">SecurityMonitoringRuleQueryAgentRule</a>]

---

##### `aggregation_input`<sup>Optional</sup> <a name="aggregation_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.aggregationInput"></a>

```python
aggregation_input: str
```

- *Type:* str

---

##### `data_source_input`<sup>Optional</sup> <a name="data_source_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.dataSourceInput"></a>

```python
data_source_input: str
```

- *Type:* str

---

##### `distinct_fields_input`<sup>Optional</sup> <a name="distinct_fields_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.distinctFieldsInput"></a>

```python
distinct_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_by_fields_input`<sup>Optional</sup> <a name="group_by_fields_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.groupByFieldsInput"></a>

```python
group_by_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `has_optional_group_by_fields_input`<sup>Optional</sup> <a name="has_optional_group_by_fields_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.hasOptionalGroupByFieldsInput"></a>

```python
has_optional_group_by_fields_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `indexes_input`<sup>Optional</sup> <a name="indexes_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.indexesInput"></a>

```python
indexes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metricInput"></a>

```python
metric_input: str
```

- *Type:* str

---

##### `metrics_input`<sup>Optional</sup> <a name="metrics_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metricsInput"></a>

```python
metrics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

---

##### `distinct_fields`<sup>Required</sup> <a name="distinct_fields" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.distinctFields"></a>

```python
distinct_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_by_fields`<sup>Required</sup> <a name="group_by_fields" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.groupByFields"></a>

```python
group_by_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `has_optional_group_by_fields`<sup>Required</sup> <a name="has_optional_group_by_fields" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.hasOptionalGroupByFields"></a>

```python
has_optional_group_by_fields: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `indexes`<sup>Required</sup> <a name="indexes" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.indexes"></a>

```python
indexes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.metrics"></a>

```python
metrics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQueryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleQuery
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleQuery">SecurityMonitoringRuleQuery</a>

---


### SecurityMonitoringRuleReferenceTablesList <a name="SecurityMonitoringRuleReferenceTablesList" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleReferenceTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleReferenceTables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>]

---


### SecurityMonitoringRuleReferenceTablesOutputReference <a name="SecurityMonitoringRuleReferenceTablesOutputReference" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.checkPresenceInput">check_presence_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.columnNameInput">column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.logFieldPathInput">log_field_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.ruleQueryNameInput">rule_query_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.checkPresence">check_presence</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.logFieldPath">log_field_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.ruleQueryName">rule_query_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `check_presence_input`<sup>Optional</sup> <a name="check_presence_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.checkPresenceInput"></a>

```python
check_presence_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.columnNameInput"></a>

```python
column_name_input: str
```

- *Type:* str

---

##### `log_field_path_input`<sup>Optional</sup> <a name="log_field_path_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.logFieldPathInput"></a>

```python
log_field_path_input: str
```

- *Type:* str

---

##### `rule_query_name_input`<sup>Optional</sup> <a name="rule_query_name_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.ruleQueryNameInput"></a>

```python
rule_query_name_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `check_presence`<sup>Required</sup> <a name="check_presence" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.checkPresence"></a>

```python
check_presence: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `log_field_path`<sup>Required</sup> <a name="log_field_path" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.logFieldPath"></a>

```python
log_field_path: str
```

- *Type:* str

---

##### `rule_query_name`<sup>Required</sup> <a name="rule_query_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.ruleQueryName"></a>

```python
rule_query_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTablesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleReferenceTables
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleReferenceTables">SecurityMonitoringRuleReferenceTables</a>

---


### SecurityMonitoringRuleSchedulingOptionsList <a name="SecurityMonitoringRuleSchedulingOptionsList" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleSchedulingOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleSchedulingOptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a>]

---


### SecurityMonitoringRuleSchedulingOptionsOutputReference <a name="SecurityMonitoringRuleSchedulingOptionsOutputReference" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.rruleInput">rrule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.startInput">start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.rrule">rrule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.start">start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rrule_input`<sup>Optional</sup> <a name="rrule_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.rruleInput"></a>

```python
rrule_input: str
```

- *Type:* str

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.startInput"></a>

```python
start_input: str
```

- *Type:* str

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.rrule"></a>

```python
rrule: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.start"></a>

```python
start: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleSchedulingOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSchedulingOptions">SecurityMonitoringRuleSchedulingOptions</a>

---


### SecurityMonitoringRuleSignalQueryList <a name="SecurityMonitoringRuleSignalQueryList" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleSignalQueryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleSignalQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleSignalQuery]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>]

---


### SecurityMonitoringRuleSignalQueryOutputReference <a name="SecurityMonitoringRuleSignalQueryOutputReference" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetAggregation">reset_aggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetCorrelatedByFields">reset_correlated_by_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetCorrelatedQueryIndex">reset_correlated_query_index</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aggregation` <a name="reset_aggregation" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetAggregation"></a>

```python
def reset_aggregation() -> None
```

##### `reset_correlated_by_fields` <a name="reset_correlated_by_fields" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetCorrelatedByFields"></a>

```python
def reset_correlated_by_fields() -> None
```

##### `reset_correlated_query_index` <a name="reset_correlated_query_index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetCorrelatedQueryIndex"></a>

```python
def reset_correlated_query_index() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.defaultRuleId">default_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.aggregationInput">aggregation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedByFieldsInput">correlated_by_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedQueryIndexInput">correlated_query_index_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.ruleIdInput">rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.aggregation">aggregation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedByFields">correlated_by_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedQueryIndex">correlated_query_index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_rule_id`<sup>Required</sup> <a name="default_rule_id" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.defaultRuleId"></a>

```python
default_rule_id: str
```

- *Type:* str

---

##### `aggregation_input`<sup>Optional</sup> <a name="aggregation_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.aggregationInput"></a>

```python
aggregation_input: str
```

- *Type:* str

---

##### `correlated_by_fields_input`<sup>Optional</sup> <a name="correlated_by_fields_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedByFieldsInput"></a>

```python
correlated_by_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `correlated_query_index_input`<sup>Optional</sup> <a name="correlated_query_index_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedQueryIndexInput"></a>

```python
correlated_query_index_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rule_id_input`<sup>Optional</sup> <a name="rule_id_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.ruleIdInput"></a>

```python
rule_id_input: str
```

- *Type:* str

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

---

##### `correlated_by_fields`<sup>Required</sup> <a name="correlated_by_fields" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedByFields"></a>

```python
correlated_by_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `correlated_query_index`<sup>Required</sup> <a name="correlated_query_index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.correlatedQueryIndex"></a>

```python
correlated_query_index: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQueryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleSignalQuery
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleSignalQuery">SecurityMonitoringRuleSignalQuery</a>

---


### SecurityMonitoringRuleThirdPartyCaseList <a name="SecurityMonitoringRuleThirdPartyCaseList" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityMonitoringRuleThirdPartyCaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityMonitoringRuleThirdPartyCase]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>]

---


### SecurityMonitoringRuleThirdPartyCaseOutputReference <a name="SecurityMonitoringRuleThirdPartyCaseOutputReference" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import security_monitoring_rule

securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resetNotifications">reset_notifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resetQuery">reset_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_notifications` <a name="reset_notifications" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resetNotifications"></a>

```python
def reset_notifications() -> None
```

##### `reset_query` <a name="reset_query" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.notificationsInput">notifications_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.notifications">notifications</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notifications_input`<sup>Optional</sup> <a name="notifications_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.notificationsInput"></a>

```python
notifications_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.notifications"></a>

```python
notifications: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCaseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityMonitoringRuleThirdPartyCase
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.securityMonitoringRule.SecurityMonitoringRuleThirdPartyCase">SecurityMonitoringRuleThirdPartyCase</a>

---



