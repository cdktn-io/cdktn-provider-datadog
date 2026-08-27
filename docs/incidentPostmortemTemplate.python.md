# `incidentPostmortemTemplate` Submodule <a name="`incidentPostmortemTemplate` Submodule" id="@cdktn/provider-datadog.incidentPostmortemTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentPostmortemTemplate <a name="IncidentPostmortemTemplate" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template datadog_incident_postmortem_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer"></a>

```python
from cdktn_provider_datadog import incident_postmortem_template

incidentPostmortemTemplate.IncidentPostmortemTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  incident_type: str,
  name: str,
  confluence_postmortem_settings: IncidentPostmortemTemplateConfluencePostmortemSettings = None,
  content: str = None,
  google_docs_postmortem_settings: IncidentPostmortemTemplateGoogleDocsPostmortemSettings = None,
  is_default: bool | IResolvable = None,
  location: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.incidentType">incident_type</a></code> | <code>str</code> | The ID of the incident type this template is associated with. Immutable after creation. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the template. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.confluencePostmortemSettings">confluence_postmortem_settings</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a></code> | confluence_postmortem_settings block. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.content">content</a></code> | <code>str</code> | The templated content of the postmortem, supporting Markdown and incident template variables. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.googleDocsPostmortemSettings">google_docs_postmortem_settings</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a></code> | google_docs_postmortem_settings block. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.isDefault">is_default</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether this template is a default for its incident type. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.location">location</a></code> | <code>str</code> | The location where the postmortem is created and stored. Valid values are: datadog_notebooks, confluence, google_docs. Defaults to datadog_notebooks. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `incident_type`<sup>Required</sup> <a name="incident_type" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.incidentType"></a>

- *Type:* str

The ID of the incident type this template is associated with. Immutable after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#incident_type IncidentPostmortemTemplate#incident_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.name"></a>

- *Type:* str

The name of the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#name IncidentPostmortemTemplate#name}

---

##### `confluence_postmortem_settings`<sup>Optional</sup> <a name="confluence_postmortem_settings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.confluencePostmortemSettings"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a>

confluence_postmortem_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#confluence_postmortem_settings IncidentPostmortemTemplate#confluence_postmortem_settings}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.content"></a>

- *Type:* str

The templated content of the postmortem, supporting Markdown and incident template variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#content IncidentPostmortemTemplate#content}

---

##### `google_docs_postmortem_settings`<sup>Optional</sup> <a name="google_docs_postmortem_settings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.googleDocsPostmortemSettings"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a>

google_docs_postmortem_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#google_docs_postmortem_settings IncidentPostmortemTemplate#google_docs_postmortem_settings}

---

##### `is_default`<sup>Optional</sup> <a name="is_default" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.isDefault"></a>

- *Type:* bool | cdktn.IResolvable

Whether this template is a default for its incident type.

The API stores a timestamp; the effective default for an incident type is the template with the most recent default timestamp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#is_default IncidentPostmortemTemplate#is_default}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.location"></a>

- *Type:* str

The location where the postmortem is created and stored. Valid values are: datadog_notebooks, confluence, google_docs. Defaults to datadog_notebooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#location IncidentPostmortemTemplate#location}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putConfluencePostmortemSettings">put_confluence_postmortem_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putGoogleDocsPostmortemSettings">put_google_docs_postmortem_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetConfluencePostmortemSettings">reset_confluence_postmortem_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetGoogleDocsPostmortemSettings">reset_google_docs_postmortem_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetIsDefault">reset_is_default</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetLocation">reset_location</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_confluence_postmortem_settings` <a name="put_confluence_postmortem_settings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putConfluencePostmortemSettings"></a>

```python
def put_confluence_postmortem_settings(
  account_id: str = None,
  parent_id: str = None,
  space_id: str = None
) -> None
```

###### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putConfluencePostmortemSettings.parameter.accountId"></a>

- *Type:* str

The ID of the Confluence account, a Datadog connected-account UUID (e.g. `3f9b1c2a-8d4e-4a11-9c2f-0b7e5d6a1f23`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#account_id IncidentPostmortemTemplate#account_id}

---

###### `parent_id`<sup>Optional</sup> <a name="parent_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putConfluencePostmortemSettings.parameter.parentId"></a>

- *Type:* str

The ID of the parent Confluence page under which postmortems are created: a numeric page ID (e.g. `393217`), not a page path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#parent_id IncidentPostmortemTemplate#parent_id}

---

###### `space_id`<sup>Optional</sup> <a name="space_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putConfluencePostmortemSettings.parameter.spaceId"></a>

- *Type:* str

The Confluence space key (e.g. `ENG`), not a numeric space ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#space_id IncidentPostmortemTemplate#space_id}

---

##### `put_google_docs_postmortem_settings` <a name="put_google_docs_postmortem_settings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putGoogleDocsPostmortemSettings"></a>

```python
def put_google_docs_postmortem_settings(
  account_id: str = None,
  parent_folder_id: str = None
) -> None
```

###### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putGoogleDocsPostmortemSettings.parameter.accountId"></a>

- *Type:* str

The ID of the Google Drive account, a Datadog connected-account UUID (e.g. `a1b2c3d4-e5f6-4789-8abc-1234567890ab`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#account_id IncidentPostmortemTemplate#account_id}

---

###### `parent_folder_id`<sup>Optional</sup> <a name="parent_folder_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putGoogleDocsPostmortemSettings.parameter.parentFolderId"></a>

- *Type:* str

The Google Drive folder ID where postmortems are created, taken from the folder URL (e.g. `1eCqLAKQqRHt49J2aqQLGUcnPMzGHkt2B`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#parent_folder_id IncidentPostmortemTemplate#parent_folder_id}

---

##### `reset_confluence_postmortem_settings` <a name="reset_confluence_postmortem_settings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetConfluencePostmortemSettings"></a>

```python
def reset_confluence_postmortem_settings() -> None
```

##### `reset_content` <a name="reset_content" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_google_docs_postmortem_settings` <a name="reset_google_docs_postmortem_settings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetGoogleDocsPostmortemSettings"></a>

```python
def reset_google_docs_postmortem_settings() -> None
```

##### `reset_is_default` <a name="reset_is_default" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetIsDefault"></a>

```python
def reset_is_default() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetLocation"></a>

```python
def reset_location() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IncidentPostmortemTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isConstruct"></a>

```python
from cdktn_provider_datadog import incident_postmortem_template

incidentPostmortemTemplate.IncidentPostmortemTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformElement"></a>

```python
from cdktn_provider_datadog import incident_postmortem_template

incidentPostmortemTemplate.IncidentPostmortemTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformResource"></a>

```python
from cdktn_provider_datadog import incident_postmortem_template

incidentPostmortemTemplate.IncidentPostmortemTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import incident_postmortem_template

incidentPostmortemTemplate.IncidentPostmortemTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IncidentPostmortemTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IncidentPostmortemTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IncidentPostmortemTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IncidentPostmortemTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.confluencePostmortemSettings">confluence_postmortem_settings</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference">IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.googleDocsPostmortemSettings">google_docs_postmortem_settings</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference">IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.lastModifiedByUser">last_modified_by_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.modified">modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.confluencePostmortemSettingsInput">confluence_postmortem_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.googleDocsPostmortemSettingsInput">google_docs_postmortem_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.incidentTypeInput">incident_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.isDefaultInput">is_default_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.incidentType">incident_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.isDefault">is_default</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `confluence_postmortem_settings`<sup>Required</sup> <a name="confluence_postmortem_settings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.confluencePostmortemSettings"></a>

```python
confluence_postmortem_settings: IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference">IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `google_docs_postmortem_settings`<sup>Required</sup> <a name="google_docs_postmortem_settings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.googleDocsPostmortemSettings"></a>

```python
google_docs_postmortem_settings: IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference">IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_by_user`<sup>Required</sup> <a name="last_modified_by_user" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.lastModifiedByUser"></a>

```python
last_modified_by_user: str
```

- *Type:* str

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.modified"></a>

```python
modified: str
```

- *Type:* str

---

##### `confluence_postmortem_settings_input`<sup>Optional</sup> <a name="confluence_postmortem_settings_input" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.confluencePostmortemSettingsInput"></a>

```python
confluence_postmortem_settings_input: IResolvable | IncidentPostmortemTemplateConfluencePostmortemSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a>

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `google_docs_postmortem_settings_input`<sup>Optional</sup> <a name="google_docs_postmortem_settings_input" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.googleDocsPostmortemSettingsInput"></a>

```python
google_docs_postmortem_settings_input: IResolvable | IncidentPostmortemTemplateGoogleDocsPostmortemSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a>

---

##### `incident_type_input`<sup>Optional</sup> <a name="incident_type_input" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.incidentTypeInput"></a>

```python
incident_type_input: str
```

- *Type:* str

---

##### `is_default_input`<sup>Optional</sup> <a name="is_default_input" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.isDefaultInput"></a>

```python
is_default_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `incident_type`<sup>Required</sup> <a name="incident_type" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.incidentType"></a>

```python
incident_type: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.isDefault"></a>

```python
is_default: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentPostmortemTemplateConfig <a name="IncidentPostmortemTemplateConfig" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.Initializer"></a>

```python
from cdktn_provider_datadog import incident_postmortem_template

incidentPostmortemTemplate.IncidentPostmortemTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  incident_type: str,
  name: str,
  confluence_postmortem_settings: IncidentPostmortemTemplateConfluencePostmortemSettings = None,
  content: str = None,
  google_docs_postmortem_settings: IncidentPostmortemTemplateGoogleDocsPostmortemSettings = None,
  is_default: bool | IResolvable = None,
  location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.incidentType">incident_type</a></code> | <code>str</code> | The ID of the incident type this template is associated with. Immutable after creation. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.name">name</a></code> | <code>str</code> | The name of the template. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.confluencePostmortemSettings">confluence_postmortem_settings</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a></code> | confluence_postmortem_settings block. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.content">content</a></code> | <code>str</code> | The templated content of the postmortem, supporting Markdown and incident template variables. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.googleDocsPostmortemSettings">google_docs_postmortem_settings</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a></code> | google_docs_postmortem_settings block. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.isDefault">is_default</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether this template is a default for its incident type. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.location">location</a></code> | <code>str</code> | The location where the postmortem is created and stored. Valid values are: datadog_notebooks, confluence, google_docs. Defaults to datadog_notebooks. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `incident_type`<sup>Required</sup> <a name="incident_type" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.incidentType"></a>

```python
incident_type: str
```

- *Type:* str

The ID of the incident type this template is associated with. Immutable after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#incident_type IncidentPostmortemTemplate#incident_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#name IncidentPostmortemTemplate#name}

---

##### `confluence_postmortem_settings`<sup>Optional</sup> <a name="confluence_postmortem_settings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.confluencePostmortemSettings"></a>

```python
confluence_postmortem_settings: IncidentPostmortemTemplateConfluencePostmortemSettings
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a>

confluence_postmortem_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#confluence_postmortem_settings IncidentPostmortemTemplate#confluence_postmortem_settings}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.content"></a>

```python
content: str
```

- *Type:* str

The templated content of the postmortem, supporting Markdown and incident template variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#content IncidentPostmortemTemplate#content}

---

##### `google_docs_postmortem_settings`<sup>Optional</sup> <a name="google_docs_postmortem_settings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.googleDocsPostmortemSettings"></a>

```python
google_docs_postmortem_settings: IncidentPostmortemTemplateGoogleDocsPostmortemSettings
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a>

google_docs_postmortem_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#google_docs_postmortem_settings IncidentPostmortemTemplate#google_docs_postmortem_settings}

---

##### `is_default`<sup>Optional</sup> <a name="is_default" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.isDefault"></a>

```python
is_default: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether this template is a default for its incident type.

The API stores a timestamp; the effective default for an incident type is the template with the most recent default timestamp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#is_default IncidentPostmortemTemplate#is_default}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location where the postmortem is created and stored. Valid values are: datadog_notebooks, confluence, google_docs. Defaults to datadog_notebooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#location IncidentPostmortemTemplate#location}

---

### IncidentPostmortemTemplateConfluencePostmortemSettings <a name="IncidentPostmortemTemplateConfluencePostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.Initializer"></a>

```python
from cdktn_provider_datadog import incident_postmortem_template

incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings(
  account_id: str = None,
  parent_id: str = None,
  space_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.accountId">account_id</a></code> | <code>str</code> | The ID of the Confluence account, a Datadog connected-account UUID (e.g. `3f9b1c2a-8d4e-4a11-9c2f-0b7e5d6a1f23`). |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.parentId">parent_id</a></code> | <code>str</code> | The ID of the parent Confluence page under which postmortems are created: a numeric page ID (e.g. `393217`), not a page path. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.spaceId">space_id</a></code> | <code>str</code> | The Confluence space key (e.g. `ENG`), not a numeric space ID. |

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The ID of the Confluence account, a Datadog connected-account UUID (e.g. `3f9b1c2a-8d4e-4a11-9c2f-0b7e5d6a1f23`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#account_id IncidentPostmortemTemplate#account_id}

---

##### `parent_id`<sup>Optional</sup> <a name="parent_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

The ID of the parent Confluence page under which postmortems are created: a numeric page ID (e.g. `393217`), not a page path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#parent_id IncidentPostmortemTemplate#parent_id}

---

##### `space_id`<sup>Optional</sup> <a name="space_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.spaceId"></a>

```python
space_id: str
```

- *Type:* str

The Confluence space key (e.g. `ENG`), not a numeric space ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#space_id IncidentPostmortemTemplate#space_id}

---

### IncidentPostmortemTemplateGoogleDocsPostmortemSettings <a name="IncidentPostmortemTemplateGoogleDocsPostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings.Initializer"></a>

```python
from cdktn_provider_datadog import incident_postmortem_template

incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings(
  account_id: str = None,
  parent_folder_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings.property.accountId">account_id</a></code> | <code>str</code> | The ID of the Google Drive account, a Datadog connected-account UUID (e.g. `a1b2c3d4-e5f6-4789-8abc-1234567890ab`). |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings.property.parentFolderId">parent_folder_id</a></code> | <code>str</code> | The Google Drive folder ID where postmortems are created, taken from the folder URL (e.g. `1eCqLAKQqRHt49J2aqQLGUcnPMzGHkt2B`). |

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The ID of the Google Drive account, a Datadog connected-account UUID (e.g. `a1b2c3d4-e5f6-4789-8abc-1234567890ab`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#account_id IncidentPostmortemTemplate#account_id}

---

##### `parent_folder_id`<sup>Optional</sup> <a name="parent_folder_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings.property.parentFolderId"></a>

```python
parent_folder_id: str
```

- *Type:* str

The Google Drive folder ID where postmortems are created, taken from the folder URL (e.g. `1eCqLAKQqRHt49J2aqQLGUcnPMzGHkt2B`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_postmortem_template#parent_folder_id IncidentPostmortemTemplate#parent_folder_id}

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference <a name="IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import incident_postmortem_template

incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetParentId">reset_parent_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetSpaceId">reset_space_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_parent_id` <a name="reset_parent_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetParentId"></a>

```python
def reset_parent_id() -> None
```

##### `reset_space_id` <a name="reset_space_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetSpaceId"></a>

```python
def reset_space_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.parentIdInput">parent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.spaceIdInput">space_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.parentId">parent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.spaceId">space_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `parent_id_input`<sup>Optional</sup> <a name="parent_id_input" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.parentIdInput"></a>

```python
parent_id_input: str
```

- *Type:* str

---

##### `space_id_input`<sup>Optional</sup> <a name="space_id_input" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.spaceIdInput"></a>

```python
space_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

---

##### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.spaceId"></a>

```python
space_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IncidentPostmortemTemplateConfluencePostmortemSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a>

---


### IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference <a name="IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import incident_postmortem_template

incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resetParentFolderId">reset_parent_folder_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_parent_folder_id` <a name="reset_parent_folder_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resetParentFolderId"></a>

```python
def reset_parent_folder_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.parentFolderIdInput">parent_folder_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.parentFolderId">parent_folder_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `parent_folder_id_input`<sup>Optional</sup> <a name="parent_folder_id_input" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.parentFolderIdInput"></a>

```python
parent_folder_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `parent_folder_id`<sup>Required</sup> <a name="parent_folder_id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.parentFolderId"></a>

```python
parent_folder_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IncidentPostmortemTemplateGoogleDocsPostmortemSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a>

---



