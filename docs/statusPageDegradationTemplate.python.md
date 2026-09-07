# `statusPageDegradationTemplate` Submodule <a name="`statusPageDegradationTemplate` Submodule" id="@cdktn/provider-datadog.statusPageDegradationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StatusPageDegradationTemplate <a name="StatusPageDegradationTemplate" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template datadog_status_page_degradation_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer"></a>

```python
from cdktn_provider_datadog import status_page_degradation_template

statusPageDegradationTemplate.StatusPageDegradationTemplate(
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
  page_id: str,
  components_affected: IResolvable | typing.List[StatusPageDegradationTemplateComponentsAffected] = None,
  degradation_title: str = None,
  updates: IResolvable | typing.List[StatusPageDegradationTemplateUpdates] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the degradation template. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.pageId">page_id</a></code> | <code>str</code> | The ID of the status page this degradation template belongs to. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.componentsAffected">components_affected</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>]</code> | The components affected by a degradation created from this template. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.degradationTitle">degradation_title</a></code> | <code>str</code> | The title used for a degradation created from this template. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.updates">updates</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>]</code> | The pre-filled updates for a degradation created from this template. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.name"></a>

- *Type:* str

The name of the degradation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#name StatusPageDegradationTemplate#name}

---

##### `page_id`<sup>Required</sup> <a name="page_id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.pageId"></a>

- *Type:* str

The ID of the status page this degradation template belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#page_id StatusPageDegradationTemplate#page_id}

---

##### `components_affected`<sup>Optional</sup> <a name="components_affected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.componentsAffected"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>]

The components affected by a degradation created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#components_affected StatusPageDegradationTemplate#components_affected}

---

##### `degradation_title`<sup>Optional</sup> <a name="degradation_title" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.degradationTitle"></a>

- *Type:* str

The title used for a degradation created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#degradation_title StatusPageDegradationTemplate#degradation_title}

---

##### `updates`<sup>Optional</sup> <a name="updates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.updates"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>]

The pre-filled updates for a degradation created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#updates StatusPageDegradationTemplate#updates}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putComponentsAffected">put_components_affected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putUpdates">put_updates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetComponentsAffected">reset_components_affected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetDegradationTitle">reset_degradation_title</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetUpdates">reset_updates</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_components_affected` <a name="put_components_affected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putComponentsAffected"></a>

```python
def put_components_affected(
  value: IResolvable | typing.List[StatusPageDegradationTemplateComponentsAffected]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putComponentsAffected.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>]

---

##### `put_updates` <a name="put_updates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putUpdates"></a>

```python
def put_updates(
  value: IResolvable | typing.List[StatusPageDegradationTemplateUpdates]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putUpdates.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>]

---

##### `reset_components_affected` <a name="reset_components_affected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetComponentsAffected"></a>

```python
def reset_components_affected() -> None
```

##### `reset_degradation_title` <a name="reset_degradation_title" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetDegradationTitle"></a>

```python
def reset_degradation_title() -> None
```

##### `reset_updates` <a name="reset_updates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetUpdates"></a>

```python
def reset_updates() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a StatusPageDegradationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isConstruct"></a>

```python
from cdktn_provider_datadog import status_page_degradation_template

statusPageDegradationTemplate.StatusPageDegradationTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformElement"></a>

```python
from cdktn_provider_datadog import status_page_degradation_template

statusPageDegradationTemplate.StatusPageDegradationTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformResource"></a>

```python
from cdktn_provider_datadog import status_page_degradation_template

statusPageDegradationTemplate.StatusPageDegradationTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import status_page_degradation_template

statusPageDegradationTemplate.StatusPageDegradationTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a StatusPageDegradationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StatusPageDegradationTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StatusPageDegradationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StatusPageDegradationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.componentsAffected">components_affected</a></code> | <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList">StatusPageDegradationTemplateComponentsAffectedList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.updates">updates</a></code> | <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList">StatusPageDegradationTemplateUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.componentsAffectedInput">components_affected_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.degradationTitleInput">degradation_title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.pageIdInput">page_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.updatesInput">updates_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.degradationTitle">degradation_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.pageId">page_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `components_affected`<sup>Required</sup> <a name="components_affected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.componentsAffected"></a>

```python
components_affected: StatusPageDegradationTemplateComponentsAffectedList
```

- *Type:* <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList">StatusPageDegradationTemplateComponentsAffectedList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `updates`<sup>Required</sup> <a name="updates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.updates"></a>

```python
updates: StatusPageDegradationTemplateUpdatesList
```

- *Type:* <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList">StatusPageDegradationTemplateUpdatesList</a>

---

##### `components_affected_input`<sup>Optional</sup> <a name="components_affected_input" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.componentsAffectedInput"></a>

```python
components_affected_input: IResolvable | typing.List[StatusPageDegradationTemplateComponentsAffected]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>]

---

##### `degradation_title_input`<sup>Optional</sup> <a name="degradation_title_input" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.degradationTitleInput"></a>

```python
degradation_title_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `page_id_input`<sup>Optional</sup> <a name="page_id_input" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.pageIdInput"></a>

```python
page_id_input: str
```

- *Type:* str

---

##### `updates_input`<sup>Optional</sup> <a name="updates_input" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.updatesInput"></a>

```python
updates_input: IResolvable | typing.List[StatusPageDegradationTemplateUpdates]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>]

---

##### `degradation_title`<sup>Required</sup> <a name="degradation_title" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.degradationTitle"></a>

```python
degradation_title: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `page_id`<sup>Required</sup> <a name="page_id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.pageId"></a>

```python
page_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StatusPageDegradationTemplateComponentsAffected <a name="StatusPageDegradationTemplateComponentsAffected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.Initializer"></a>

```python
from cdktn_provider_datadog import status_page_degradation_template

statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected(
  id: str,
  status: str,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.id">id</a></code> | <code>str</code> | The ID of the affected component. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.status">status</a></code> | <code>str</code> | The pre-filled status for this component. Valid values are: operational, degraded, partial_outage, major_outage. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.name">name</a></code> | <code>str</code> | The name of the affected component. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the affected component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#id StatusPageDegradationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.status"></a>

```python
status: str
```

- *Type:* str

The pre-filled status for this component. Valid values are: operational, degraded, partial_outage, major_outage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#status StatusPageDegradationTemplate#status}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the affected component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#name StatusPageDegradationTemplate#name}

---

### StatusPageDegradationTemplateConfig <a name="StatusPageDegradationTemplateConfig" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.Initializer"></a>

```python
from cdktn_provider_datadog import status_page_degradation_template

statusPageDegradationTemplate.StatusPageDegradationTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  page_id: str,
  components_affected: IResolvable | typing.List[StatusPageDegradationTemplateComponentsAffected] = None,
  degradation_title: str = None,
  updates: IResolvable | typing.List[StatusPageDegradationTemplateUpdates] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.name">name</a></code> | <code>str</code> | The name of the degradation template. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.pageId">page_id</a></code> | <code>str</code> | The ID of the status page this degradation template belongs to. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.componentsAffected">components_affected</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>]</code> | The components affected by a degradation created from this template. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.degradationTitle">degradation_title</a></code> | <code>str</code> | The title used for a degradation created from this template. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.updates">updates</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>]</code> | The pre-filled updates for a degradation created from this template. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the degradation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#name StatusPageDegradationTemplate#name}

---

##### `page_id`<sup>Required</sup> <a name="page_id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.pageId"></a>

```python
page_id: str
```

- *Type:* str

The ID of the status page this degradation template belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#page_id StatusPageDegradationTemplate#page_id}

---

##### `components_affected`<sup>Optional</sup> <a name="components_affected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.componentsAffected"></a>

```python
components_affected: IResolvable | typing.List[StatusPageDegradationTemplateComponentsAffected]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>]

The components affected by a degradation created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#components_affected StatusPageDegradationTemplate#components_affected}

---

##### `degradation_title`<sup>Optional</sup> <a name="degradation_title" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.degradationTitle"></a>

```python
degradation_title: str
```

- *Type:* str

The title used for a degradation created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#degradation_title StatusPageDegradationTemplate#degradation_title}

---

##### `updates`<sup>Optional</sup> <a name="updates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.updates"></a>

```python
updates: IResolvable | typing.List[StatusPageDegradationTemplateUpdates]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>]

The pre-filled updates for a degradation created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#updates StatusPageDegradationTemplate#updates}

---

### StatusPageDegradationTemplateUpdates <a name="StatusPageDegradationTemplateUpdates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates.Initializer"></a>

```python
from cdktn_provider_datadog import status_page_degradation_template

statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates(
  status: str,
  message: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates.property.status">status</a></code> | <code>str</code> | The pre-filled degradation status for this update. Valid values are: investigating, identified, monitoring, resolved. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates.property.message">message</a></code> | <code>str</code> | The pre-filled message for this update. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates.property.status"></a>

```python
status: str
```

- *Type:* str

The pre-filled degradation status for this update. Valid values are: investigating, identified, monitoring, resolved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#status StatusPageDegradationTemplate#status}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates.property.message"></a>

```python
message: str
```

- *Type:* str

The pre-filled message for this update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#message StatusPageDegradationTemplate#message}

---

## Classes <a name="Classes" id="Classes"></a>

### StatusPageDegradationTemplateComponentsAffectedList <a name="StatusPageDegradationTemplateComponentsAffectedList" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer"></a>

```python
from cdktn_provider_datadog import status_page_degradation_template

statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatusPageDegradationTemplateComponentsAffectedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[StatusPageDegradationTemplateComponentsAffected]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>]

---


### StatusPageDegradationTemplateComponentsAffectedOutputReference <a name="StatusPageDegradationTemplateComponentsAffectedOutputReference" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import status_page_degradation_template

statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StatusPageDegradationTemplateComponentsAffected
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected">StatusPageDegradationTemplateComponentsAffected</a>

---


### StatusPageDegradationTemplateUpdatesList <a name="StatusPageDegradationTemplateUpdatesList" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer"></a>

```python
from cdktn_provider_datadog import status_page_degradation_template

statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StatusPageDegradationTemplateUpdatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[StatusPageDegradationTemplateUpdates]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>]

---


### StatusPageDegradationTemplateUpdatesOutputReference <a name="StatusPageDegradationTemplateUpdatesOutputReference" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import status_page_degradation_template

statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.resetMessage">reset_message</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_message` <a name="reset_message" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.resetMessage"></a>

```python
def reset_message() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StatusPageDegradationTemplateUpdates
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates">StatusPageDegradationTemplateUpdates</a>

---



