# `secureEmbedDashboard` Submodule <a name="`secureEmbedDashboard` Submodule" id="@cdktn/provider-datadog.secureEmbedDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecureEmbedDashboard <a name="SecureEmbedDashboard" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/secure_embed_dashboard datadog_secure_embed_dashboard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer"></a>

```python
from cdktn_provider_datadog import secure_embed_dashboard

secureEmbedDashboard.SecureEmbedDashboard(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dashboard_id: str,
  title: str,
  global_time_live_span: str = None,
  global_time_selectable: bool | IResolvable = None,
  selectable_template_vars: IResolvable | typing.List[SecureEmbedDashboardSelectableTemplateVars] = None,
  status: str = None,
  viewing_preferences_high_density: bool | IResolvable = None,
  viewing_preferences_theme: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.dashboardId">dashboard_id</a></code> | <code>str</code> | The ID of the dashboard to create a secure embed for. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.title">title</a></code> | <code>str</code> | Title of the secure embed share. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.globalTimeLiveSpan">global_time_live_span</a></code> | <code>str</code> | The live span for the global time, e.g. `1h`, `4h`, `1d`, `2d`, `1w`. Defaults to `"1h"`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.globalTimeSelectable">global_time_selectable</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether viewers can change the global time range. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.selectableTemplateVars">selectable_template_vars</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>]</code> | selectable_template_vars block. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.status">status</a></code> | <code>str</code> | Status of the secure embed. Valid values are `active` and `paused`. Defaults to `"active"`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.viewingPreferencesHighDensity">viewing_preferences_high_density</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to display the dashboard in high density mode. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.viewingPreferencesTheme">viewing_preferences_theme</a></code> | <code>str</code> | Display theme for the embedded dashboard. Valid values are `system`, `dark`, `light`. Defaults to `"system"`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dashboard_id`<sup>Required</sup> <a name="dashboard_id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.dashboardId"></a>

- *Type:* str

The ID of the dashboard to create a secure embed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/secure_embed_dashboard#dashboard_id SecureEmbedDashboard#dashboard_id}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.title"></a>

- *Type:* str

Title of the secure embed share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/secure_embed_dashboard#title SecureEmbedDashboard#title}

---

##### `global_time_live_span`<sup>Optional</sup> <a name="global_time_live_span" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.globalTimeLiveSpan"></a>

- *Type:* str

The live span for the global time, e.g. `1h`, `4h`, `1d`, `2d`, `1w`. Defaults to `"1h"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/secure_embed_dashboard#global_time_live_span SecureEmbedDashboard#global_time_live_span}

---

##### `global_time_selectable`<sup>Optional</sup> <a name="global_time_selectable" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.globalTimeSelectable"></a>

- *Type:* bool | cdktn.IResolvable

Whether viewers can change the global time range. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/secure_embed_dashboard#global_time_selectable SecureEmbedDashboard#global_time_selectable}

---

##### `selectable_template_vars`<sup>Optional</sup> <a name="selectable_template_vars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.selectableTemplateVars"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>]

selectable_template_vars block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/secure_embed_dashboard#selectable_template_vars SecureEmbedDashboard#selectable_template_vars}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.status"></a>

- *Type:* str

Status of the secure embed. Valid values are `active` and `paused`. Defaults to `"active"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/secure_embed_dashboard#status SecureEmbedDashboard#status}

---

##### `viewing_preferences_high_density`<sup>Optional</sup> <a name="viewing_preferences_high_density" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.viewingPreferencesHighDensity"></a>

- *Type:* bool | cdktn.IResolvable

Whether to display the dashboard in high density mode. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/secure_embed_dashboard#viewing_preferences_high_density SecureEmbedDashboard#viewing_preferences_high_density}

---

##### `viewing_preferences_theme`<sup>Optional</sup> <a name="viewing_preferences_theme" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.Initializer.parameter.viewingPreferencesTheme"></a>

- *Type:* str

Display theme for the embedded dashboard. Valid values are `system`, `dark`, `light`. Defaults to `"system"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/secure_embed_dashboard#viewing_preferences_theme SecureEmbedDashboard#viewing_preferences_theme}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.putSelectableTemplateVars">put_selectable_template_vars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetGlobalTimeLiveSpan">reset_global_time_live_span</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetGlobalTimeSelectable">reset_global_time_selectable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetSelectableTemplateVars">reset_selectable_template_vars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetViewingPreferencesHighDensity">reset_viewing_preferences_high_density</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetViewingPreferencesTheme">reset_viewing_preferences_theme</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_selectable_template_vars` <a name="put_selectable_template_vars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.putSelectableTemplateVars"></a>

```python
def put_selectable_template_vars(
  value: IResolvable | typing.List[SecureEmbedDashboardSelectableTemplateVars]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.putSelectableTemplateVars.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>]

---

##### `reset_global_time_live_span` <a name="reset_global_time_live_span" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetGlobalTimeLiveSpan"></a>

```python
def reset_global_time_live_span() -> None
```

##### `reset_global_time_selectable` <a name="reset_global_time_selectable" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetGlobalTimeSelectable"></a>

```python
def reset_global_time_selectable() -> None
```

##### `reset_selectable_template_vars` <a name="reset_selectable_template_vars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetSelectableTemplateVars"></a>

```python
def reset_selectable_template_vars() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_viewing_preferences_high_density` <a name="reset_viewing_preferences_high_density" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetViewingPreferencesHighDensity"></a>

```python
def reset_viewing_preferences_high_density() -> None
```

##### `reset_viewing_preferences_theme` <a name="reset_viewing_preferences_theme" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.resetViewingPreferencesTheme"></a>

```python
def reset_viewing_preferences_theme() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SecureEmbedDashboard resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isConstruct"></a>

```python
from cdktn_provider_datadog import secure_embed_dashboard

secureEmbedDashboard.SecureEmbedDashboard.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformElement"></a>

```python
from cdktn_provider_datadog import secure_embed_dashboard

secureEmbedDashboard.SecureEmbedDashboard.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformResource"></a>

```python
from cdktn_provider_datadog import secure_embed_dashboard

secureEmbedDashboard.SecureEmbedDashboard.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import secure_embed_dashboard

secureEmbedDashboard.SecureEmbedDashboard.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SecureEmbedDashboard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecureEmbedDashboard to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecureEmbedDashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/secure_embed_dashboard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecureEmbedDashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.credential">credential</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.selectableTemplateVars">selectable_template_vars</a></code> | <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList">SecureEmbedDashboardSelectableTemplateVarsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dashboardIdInput">dashboard_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeLiveSpanInput">global_time_live_span_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeSelectableInput">global_time_selectable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.selectableTemplateVarsInput">selectable_template_vars_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesHighDensityInput">viewing_preferences_high_density_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesThemeInput">viewing_preferences_theme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dashboardId">dashboard_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeLiveSpan">global_time_live_span</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeSelectable">global_time_selectable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesHighDensity">viewing_preferences_high_density</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesTheme">viewing_preferences_theme</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.credential"></a>

```python
credential: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `selectable_template_vars`<sup>Required</sup> <a name="selectable_template_vars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.selectableTemplateVars"></a>

```python
selectable_template_vars: SecureEmbedDashboardSelectableTemplateVarsList
```

- *Type:* <a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList">SecureEmbedDashboardSelectableTemplateVarsList</a>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `dashboard_id_input`<sup>Optional</sup> <a name="dashboard_id_input" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dashboardIdInput"></a>

```python
dashboard_id_input: str
```

- *Type:* str

---

##### `global_time_live_span_input`<sup>Optional</sup> <a name="global_time_live_span_input" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeLiveSpanInput"></a>

```python
global_time_live_span_input: str
```

- *Type:* str

---

##### `global_time_selectable_input`<sup>Optional</sup> <a name="global_time_selectable_input" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeSelectableInput"></a>

```python
global_time_selectable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `selectable_template_vars_input`<sup>Optional</sup> <a name="selectable_template_vars_input" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.selectableTemplateVarsInput"></a>

```python
selectable_template_vars_input: IResolvable | typing.List[SecureEmbedDashboardSelectableTemplateVars]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `viewing_preferences_high_density_input`<sup>Optional</sup> <a name="viewing_preferences_high_density_input" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesHighDensityInput"></a>

```python
viewing_preferences_high_density_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `viewing_preferences_theme_input`<sup>Optional</sup> <a name="viewing_preferences_theme_input" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesThemeInput"></a>

```python
viewing_preferences_theme_input: str
```

- *Type:* str

---

##### `dashboard_id`<sup>Required</sup> <a name="dashboard_id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.dashboardId"></a>

```python
dashboard_id: str
```

- *Type:* str

---

##### `global_time_live_span`<sup>Required</sup> <a name="global_time_live_span" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeLiveSpan"></a>

```python
global_time_live_span: str
```

- *Type:* str

---

##### `global_time_selectable`<sup>Required</sup> <a name="global_time_selectable" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.globalTimeSelectable"></a>

```python
global_time_selectable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `viewing_preferences_high_density`<sup>Required</sup> <a name="viewing_preferences_high_density" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesHighDensity"></a>

```python
viewing_preferences_high_density: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `viewing_preferences_theme`<sup>Required</sup> <a name="viewing_preferences_theme" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.viewingPreferencesTheme"></a>

```python
viewing_preferences_theme: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboard.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecureEmbedDashboardConfig <a name="SecureEmbedDashboardConfig" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.Initializer"></a>

```python
from cdktn_provider_datadog import secure_embed_dashboard

secureEmbedDashboard.SecureEmbedDashboardConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dashboard_id: str,
  title: str,
  global_time_live_span: str = None,
  global_time_selectable: bool | IResolvable = None,
  selectable_template_vars: IResolvable | typing.List[SecureEmbedDashboardSelectableTemplateVars] = None,
  status: str = None,
  viewing_preferences_high_density: bool | IResolvable = None,
  viewing_preferences_theme: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.dashboardId">dashboard_id</a></code> | <code>str</code> | The ID of the dashboard to create a secure embed for. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.title">title</a></code> | <code>str</code> | Title of the secure embed share. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.globalTimeLiveSpan">global_time_live_span</a></code> | <code>str</code> | The live span for the global time, e.g. `1h`, `4h`, `1d`, `2d`, `1w`. Defaults to `"1h"`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.globalTimeSelectable">global_time_selectable</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether viewers can change the global time range. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.selectableTemplateVars">selectable_template_vars</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>]</code> | selectable_template_vars block. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.status">status</a></code> | <code>str</code> | Status of the secure embed. Valid values are `active` and `paused`. Defaults to `"active"`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.viewingPreferencesHighDensity">viewing_preferences_high_density</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to display the dashboard in high density mode. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.viewingPreferencesTheme">viewing_preferences_theme</a></code> | <code>str</code> | Display theme for the embedded dashboard. Valid values are `system`, `dark`, `light`. Defaults to `"system"`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dashboard_id`<sup>Required</sup> <a name="dashboard_id" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.dashboardId"></a>

```python
dashboard_id: str
```

- *Type:* str

The ID of the dashboard to create a secure embed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/secure_embed_dashboard#dashboard_id SecureEmbedDashboard#dashboard_id}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.title"></a>

```python
title: str
```

- *Type:* str

Title of the secure embed share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/secure_embed_dashboard#title SecureEmbedDashboard#title}

---

##### `global_time_live_span`<sup>Optional</sup> <a name="global_time_live_span" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.globalTimeLiveSpan"></a>

```python
global_time_live_span: str
```

- *Type:* str

The live span for the global time, e.g. `1h`, `4h`, `1d`, `2d`, `1w`. Defaults to `"1h"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/secure_embed_dashboard#global_time_live_span SecureEmbedDashboard#global_time_live_span}

---

##### `global_time_selectable`<sup>Optional</sup> <a name="global_time_selectable" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.globalTimeSelectable"></a>

```python
global_time_selectable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether viewers can change the global time range. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/secure_embed_dashboard#global_time_selectable SecureEmbedDashboard#global_time_selectable}

---

##### `selectable_template_vars`<sup>Optional</sup> <a name="selectable_template_vars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.selectableTemplateVars"></a>

```python
selectable_template_vars: IResolvable | typing.List[SecureEmbedDashboardSelectableTemplateVars]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>]

selectable_template_vars block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/secure_embed_dashboard#selectable_template_vars SecureEmbedDashboard#selectable_template_vars}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Status of the secure embed. Valid values are `active` and `paused`. Defaults to `"active"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/secure_embed_dashboard#status SecureEmbedDashboard#status}

---

##### `viewing_preferences_high_density`<sup>Optional</sup> <a name="viewing_preferences_high_density" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.viewingPreferencesHighDensity"></a>

```python
viewing_preferences_high_density: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to display the dashboard in high density mode. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/secure_embed_dashboard#viewing_preferences_high_density SecureEmbedDashboard#viewing_preferences_high_density}

---

##### `viewing_preferences_theme`<sup>Optional</sup> <a name="viewing_preferences_theme" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardConfig.property.viewingPreferencesTheme"></a>

```python
viewing_preferences_theme: str
```

- *Type:* str

Display theme for the embedded dashboard. Valid values are `system`, `dark`, `light`. Defaults to `"system"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/secure_embed_dashboard#viewing_preferences_theme SecureEmbedDashboard#viewing_preferences_theme}

---

### SecureEmbedDashboardSelectableTemplateVars <a name="SecureEmbedDashboardSelectableTemplateVars" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.Initializer"></a>

```python
from cdktn_provider_datadog import secure_embed_dashboard

secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars(
  name: str,
  default_values: typing.List[str] = None,
  prefix: str = None,
  type: str = None,
  visible_tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.name">name</a></code> | <code>str</code> | The name of the template variable. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.defaultValues">default_values</a></code> | <code>typing.List[str]</code> | The default values for this template variable. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.prefix">prefix</a></code> | <code>str</code> | The tag prefix for this template variable. Defaults to `""`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.type">type</a></code> | <code>str</code> | The type of the template variable. Defaults to `""`. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.visibleTags">visible_tags</a></code> | <code>typing.List[str]</code> | The visible tag values for this template variable. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the template variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/secure_embed_dashboard#name SecureEmbedDashboard#name}

---

##### `default_values`<sup>Optional</sup> <a name="default_values" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.defaultValues"></a>

```python
default_values: typing.List[str]
```

- *Type:* typing.List[str]

The default values for this template variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/secure_embed_dashboard#default_values SecureEmbedDashboard#default_values}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

The tag prefix for this template variable. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/secure_embed_dashboard#prefix SecureEmbedDashboard#prefix}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the template variable. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/secure_embed_dashboard#type SecureEmbedDashboard#type}

---

##### `visible_tags`<sup>Optional</sup> <a name="visible_tags" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars.property.visibleTags"></a>

```python
visible_tags: typing.List[str]
```

- *Type:* typing.List[str]

The visible tag values for this template variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/secure_embed_dashboard#visible_tags SecureEmbedDashboard#visible_tags}

---

## Classes <a name="Classes" id="Classes"></a>

### SecureEmbedDashboardSelectableTemplateVarsList <a name="SecureEmbedDashboardSelectableTemplateVarsList" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer"></a>

```python
from cdktn_provider_datadog import secure_embed_dashboard

secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecureEmbedDashboardSelectableTemplateVarsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecureEmbedDashboardSelectableTemplateVars]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>]

---


### SecureEmbedDashboardSelectableTemplateVarsOutputReference <a name="SecureEmbedDashboardSelectableTemplateVarsOutputReference" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import secure_embed_dashboard

secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetDefaultValues">reset_default_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetVisibleTags">reset_visible_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_values` <a name="reset_default_values" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetDefaultValues"></a>

```python
def reset_default_values() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_visible_tags` <a name="reset_visible_tags" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.resetVisibleTags"></a>

```python
def reset_visible_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.defaultValuesInput">default_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.visibleTagsInput">visible_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.defaultValues">default_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.visibleTags">visible_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_values_input`<sup>Optional</sup> <a name="default_values_input" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.defaultValuesInput"></a>

```python
default_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `visible_tags_input`<sup>Optional</sup> <a name="visible_tags_input" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.visibleTagsInput"></a>

```python
visible_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_values`<sup>Required</sup> <a name="default_values" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.defaultValues"></a>

```python
default_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `visible_tags`<sup>Required</sup> <a name="visible_tags" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.visibleTags"></a>

```python
visible_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVarsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecureEmbedDashboardSelectableTemplateVars
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.secureEmbedDashboard.SecureEmbedDashboardSelectableTemplateVars">SecureEmbedDashboardSelectableTemplateVars</a>

---



