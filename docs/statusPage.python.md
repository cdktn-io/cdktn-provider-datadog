# `statusPage` Submodule <a name="`statusPage` Submodule" id="@cdktn/provider-datadog.statusPage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StatusPage <a name="StatusPage" id="@cdktn/provider-datadog.statusPage.StatusPage"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page datadog_status_page}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer"></a>

```python
from cdktn_provider_datadog import status_page

statusPage.StatusPage(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_prefix: str,
  name: str,
  type: str,
  visualization_type: str,
  company_logo: str = None,
  email_header_image: str = None,
  favicon: str = None,
  slack_app_icon: str = None,
  slack_subscriptions_enabled: bool | IResolvable = None,
  subscriptions_enabled: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.domainPrefix">domain_prefix</a></code> | <code>str</code> | The subdomain prefix used to build the status page's URL. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the status page. Valid values are: public, internal. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.visualizationType">visualization_type</a></code> | <code>str</code> | How component statuses are visualized on the page. Valid values are: bars_and_uptime_percentage, bars_only, component_name_only. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.companyLogo">company_logo</a></code> | <code>str</code> | The company logo displayed on the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.emailHeaderImage">email_header_image</a></code> | <code>str</code> | The header image included in subscriber emails. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.favicon">favicon</a></code> | <code>str</code> | The favicon displayed for the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.slackAppIcon">slack_app_icon</a></code> | <code>str</code> | The icon used for the status page's Slack app integration. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.slackSubscriptionsEnabled">slack_subscriptions_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Slack subscriber notifications are enabled for the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.subscriptionsEnabled">subscriptions_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether subscriber notifications are enabled for the status page. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_prefix`<sup>Required</sup> <a name="domain_prefix" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.domainPrefix"></a>

- *Type:* str

The subdomain prefix used to build the status page's URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#domain_prefix StatusPage#domain_prefix}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.name"></a>

- *Type:* str

The name of the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#name StatusPage#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.type"></a>

- *Type:* str

The type of the status page. Valid values are: public, internal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#type StatusPage#type}

---

##### `visualization_type`<sup>Required</sup> <a name="visualization_type" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.visualizationType"></a>

- *Type:* str

How component statuses are visualized on the page. Valid values are: bars_and_uptime_percentage, bars_only, component_name_only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#visualization_type StatusPage#visualization_type}

---

##### `company_logo`<sup>Optional</sup> <a name="company_logo" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.companyLogo"></a>

- *Type:* str

The company logo displayed on the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#company_logo StatusPage#company_logo}

---

##### `email_header_image`<sup>Optional</sup> <a name="email_header_image" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.emailHeaderImage"></a>

- *Type:* str

The header image included in subscriber emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#email_header_image StatusPage#email_header_image}

---

##### `favicon`<sup>Optional</sup> <a name="favicon" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.favicon"></a>

- *Type:* str

The favicon displayed for the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#favicon StatusPage#favicon}

---

##### `slack_app_icon`<sup>Optional</sup> <a name="slack_app_icon" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.slackAppIcon"></a>

- *Type:* str

The icon used for the status page's Slack app integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#slack_app_icon StatusPage#slack_app_icon}

---

##### `slack_subscriptions_enabled`<sup>Optional</sup> <a name="slack_subscriptions_enabled" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.slackSubscriptionsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether Slack subscriber notifications are enabled for the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#slack_subscriptions_enabled StatusPage#slack_subscriptions_enabled}

---

##### `subscriptions_enabled`<sup>Optional</sup> <a name="subscriptions_enabled" id="@cdktn/provider-datadog.statusPage.StatusPage.Initializer.parameter.subscriptionsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether subscriber notifications are enabled for the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#subscriptions_enabled StatusPage#subscriptions_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetCompanyLogo">reset_company_logo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetEmailHeaderImage">reset_email_header_image</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetFavicon">reset_favicon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetSlackAppIcon">reset_slack_app_icon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetSlackSubscriptionsEnabled">reset_slack_subscriptions_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.resetSubscriptionsEnabled">reset_subscriptions_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.statusPage.StatusPage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.statusPage.StatusPage.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.statusPage.StatusPage.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.statusPage.StatusPage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.statusPage.StatusPage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.statusPage.StatusPage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.statusPage.StatusPage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.statusPage.StatusPage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.statusPage.StatusPage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.statusPage.StatusPage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.statusPage.StatusPage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.statusPage.StatusPage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.statusPage.StatusPage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.statusPage.StatusPage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPage.StatusPage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.statusPage.StatusPage.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.statusPage.StatusPage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPage.StatusPage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPage.StatusPage.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.statusPage.StatusPage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.statusPage.StatusPage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.statusPage.StatusPage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPage.StatusPage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.statusPage.StatusPage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.statusPage.StatusPage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.statusPage.StatusPage.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.statusPage.StatusPage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPage.StatusPage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_company_logo` <a name="reset_company_logo" id="@cdktn/provider-datadog.statusPage.StatusPage.resetCompanyLogo"></a>

```python
def reset_company_logo() -> None
```

##### `reset_email_header_image` <a name="reset_email_header_image" id="@cdktn/provider-datadog.statusPage.StatusPage.resetEmailHeaderImage"></a>

```python
def reset_email_header_image() -> None
```

##### `reset_favicon` <a name="reset_favicon" id="@cdktn/provider-datadog.statusPage.StatusPage.resetFavicon"></a>

```python
def reset_favicon() -> None
```

##### `reset_slack_app_icon` <a name="reset_slack_app_icon" id="@cdktn/provider-datadog.statusPage.StatusPage.resetSlackAppIcon"></a>

```python
def reset_slack_app_icon() -> None
```

##### `reset_slack_subscriptions_enabled` <a name="reset_slack_subscriptions_enabled" id="@cdktn/provider-datadog.statusPage.StatusPage.resetSlackSubscriptionsEnabled"></a>

```python
def reset_slack_subscriptions_enabled() -> None
```

##### `reset_subscriptions_enabled` <a name="reset_subscriptions_enabled" id="@cdktn/provider-datadog.statusPage.StatusPage.resetSubscriptionsEnabled"></a>

```python
def reset_subscriptions_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a StatusPage resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.statusPage.StatusPage.isConstruct"></a>

```python
from cdktn_provider_datadog import status_page

statusPage.StatusPage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPage.StatusPage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.statusPage.StatusPage.isTerraformElement"></a>

```python
from cdktn_provider_datadog import status_page

statusPage.StatusPage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPage.StatusPage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.statusPage.StatusPage.isTerraformResource"></a>

```python
from cdktn_provider_datadog import status_page

statusPage.StatusPage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPage.StatusPage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import status_page

statusPage.StatusPage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a StatusPage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StatusPage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StatusPage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPage.StatusPage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StatusPage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.customDomain">custom_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.customDomainEnabled">custom_domain_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.pageUrl">page_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.companyLogoInput">company_logo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.domainPrefixInput">domain_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.emailHeaderImageInput">email_header_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.faviconInput">favicon_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.slackAppIconInput">slack_app_icon_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.slackSubscriptionsEnabledInput">slack_subscriptions_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.subscriptionsEnabledInput">subscriptions_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.visualizationTypeInput">visualization_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.companyLogo">company_logo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.domainPrefix">domain_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.emailHeaderImage">email_header_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.favicon">favicon</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.slackAppIcon">slack_app_icon</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.slackSubscriptionsEnabled">slack_subscriptions_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.subscriptionsEnabled">subscriptions_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.visualizationType">visualization_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.statusPage.StatusPage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.statusPage.StatusPage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.statusPage.StatusPage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.statusPage.StatusPage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.statusPage.StatusPage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.statusPage.StatusPage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.statusPage.StatusPage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.statusPage.StatusPage.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.statusPage.StatusPage.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.statusPage.StatusPage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.statusPage.StatusPage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.statusPage.StatusPage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPage.StatusPage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.statusPage.StatusPage.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-datadog.statusPage.StatusPage.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `custom_domain`<sup>Required</sup> <a name="custom_domain" id="@cdktn/provider-datadog.statusPage.StatusPage.property.customDomain"></a>

```python
custom_domain: str
```

- *Type:* str

---

##### `custom_domain_enabled`<sup>Required</sup> <a name="custom_domain_enabled" id="@cdktn/provider-datadog.statusPage.StatusPage.property.customDomainEnabled"></a>

```python
custom_domain_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.statusPage.StatusPage.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPage.StatusPage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-datadog.statusPage.StatusPage.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `page_url`<sup>Required</sup> <a name="page_url" id="@cdktn/provider-datadog.statusPage.StatusPage.property.pageUrl"></a>

```python
page_url: str
```

- *Type:* str

---

##### `company_logo_input`<sup>Optional</sup> <a name="company_logo_input" id="@cdktn/provider-datadog.statusPage.StatusPage.property.companyLogoInput"></a>

```python
company_logo_input: str
```

- *Type:* str

---

##### `domain_prefix_input`<sup>Optional</sup> <a name="domain_prefix_input" id="@cdktn/provider-datadog.statusPage.StatusPage.property.domainPrefixInput"></a>

```python
domain_prefix_input: str
```

- *Type:* str

---

##### `email_header_image_input`<sup>Optional</sup> <a name="email_header_image_input" id="@cdktn/provider-datadog.statusPage.StatusPage.property.emailHeaderImageInput"></a>

```python
email_header_image_input: str
```

- *Type:* str

---

##### `favicon_input`<sup>Optional</sup> <a name="favicon_input" id="@cdktn/provider-datadog.statusPage.StatusPage.property.faviconInput"></a>

```python
favicon_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.statusPage.StatusPage.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `slack_app_icon_input`<sup>Optional</sup> <a name="slack_app_icon_input" id="@cdktn/provider-datadog.statusPage.StatusPage.property.slackAppIconInput"></a>

```python
slack_app_icon_input: str
```

- *Type:* str

---

##### `slack_subscriptions_enabled_input`<sup>Optional</sup> <a name="slack_subscriptions_enabled_input" id="@cdktn/provider-datadog.statusPage.StatusPage.property.slackSubscriptionsEnabledInput"></a>

```python
slack_subscriptions_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `subscriptions_enabled_input`<sup>Optional</sup> <a name="subscriptions_enabled_input" id="@cdktn/provider-datadog.statusPage.StatusPage.property.subscriptionsEnabledInput"></a>

```python
subscriptions_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-datadog.statusPage.StatusPage.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `visualization_type_input`<sup>Optional</sup> <a name="visualization_type_input" id="@cdktn/provider-datadog.statusPage.StatusPage.property.visualizationTypeInput"></a>

```python
visualization_type_input: str
```

- *Type:* str

---

##### `company_logo`<sup>Required</sup> <a name="company_logo" id="@cdktn/provider-datadog.statusPage.StatusPage.property.companyLogo"></a>

```python
company_logo: str
```

- *Type:* str

---

##### `domain_prefix`<sup>Required</sup> <a name="domain_prefix" id="@cdktn/provider-datadog.statusPage.StatusPage.property.domainPrefix"></a>

```python
domain_prefix: str
```

- *Type:* str

---

##### `email_header_image`<sup>Required</sup> <a name="email_header_image" id="@cdktn/provider-datadog.statusPage.StatusPage.property.emailHeaderImage"></a>

```python
email_header_image: str
```

- *Type:* str

---

##### `favicon`<sup>Required</sup> <a name="favicon" id="@cdktn/provider-datadog.statusPage.StatusPage.property.favicon"></a>

```python
favicon: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPage.StatusPage.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `slack_app_icon`<sup>Required</sup> <a name="slack_app_icon" id="@cdktn/provider-datadog.statusPage.StatusPage.property.slackAppIcon"></a>

```python
slack_app_icon: str
```

- *Type:* str

---

##### `slack_subscriptions_enabled`<sup>Required</sup> <a name="slack_subscriptions_enabled" id="@cdktn/provider-datadog.statusPage.StatusPage.property.slackSubscriptionsEnabled"></a>

```python
slack_subscriptions_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `subscriptions_enabled`<sup>Required</sup> <a name="subscriptions_enabled" id="@cdktn/provider-datadog.statusPage.StatusPage.property.subscriptionsEnabled"></a>

```python
subscriptions_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.statusPage.StatusPage.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `visualization_type`<sup>Required</sup> <a name="visualization_type" id="@cdktn/provider-datadog.statusPage.StatusPage.property.visualizationType"></a>

```python
visualization_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.statusPage.StatusPage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StatusPageConfig <a name="StatusPageConfig" id="@cdktn/provider-datadog.statusPage.StatusPageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.Initializer"></a>

```python
from cdktn_provider_datadog import status_page

statusPage.StatusPageConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_prefix: str,
  name: str,
  type: str,
  visualization_type: str,
  company_logo: str = None,
  email_header_image: str = None,
  favicon: str = None,
  slack_app_icon: str = None,
  slack_subscriptions_enabled: bool | IResolvable = None,
  subscriptions_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.domainPrefix">domain_prefix</a></code> | <code>str</code> | The subdomain prefix used to build the status page's URL. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.name">name</a></code> | <code>str</code> | The name of the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.type">type</a></code> | <code>str</code> | The type of the status page. Valid values are: public, internal. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.visualizationType">visualization_type</a></code> | <code>str</code> | How component statuses are visualized on the page. Valid values are: bars_and_uptime_percentage, bars_only, component_name_only. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.companyLogo">company_logo</a></code> | <code>str</code> | The company logo displayed on the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.emailHeaderImage">email_header_image</a></code> | <code>str</code> | The header image included in subscriber emails. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.favicon">favicon</a></code> | <code>str</code> | The favicon displayed for the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.slackAppIcon">slack_app_icon</a></code> | <code>str</code> | The icon used for the status page's Slack app integration. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.slackSubscriptionsEnabled">slack_subscriptions_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether Slack subscriber notifications are enabled for the status page. |
| <code><a href="#@cdktn/provider-datadog.statusPage.StatusPageConfig.property.subscriptionsEnabled">subscriptions_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether subscriber notifications are enabled for the status page. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_prefix`<sup>Required</sup> <a name="domain_prefix" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.domainPrefix"></a>

```python
domain_prefix: str
```

- *Type:* str

The subdomain prefix used to build the status page's URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#domain_prefix StatusPage#domain_prefix}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#name StatusPage#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the status page. Valid values are: public, internal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#type StatusPage#type}

---

##### `visualization_type`<sup>Required</sup> <a name="visualization_type" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.visualizationType"></a>

```python
visualization_type: str
```

- *Type:* str

How component statuses are visualized on the page. Valid values are: bars_and_uptime_percentage, bars_only, component_name_only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#visualization_type StatusPage#visualization_type}

---

##### `company_logo`<sup>Optional</sup> <a name="company_logo" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.companyLogo"></a>

```python
company_logo: str
```

- *Type:* str

The company logo displayed on the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#company_logo StatusPage#company_logo}

---

##### `email_header_image`<sup>Optional</sup> <a name="email_header_image" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.emailHeaderImage"></a>

```python
email_header_image: str
```

- *Type:* str

The header image included in subscriber emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#email_header_image StatusPage#email_header_image}

---

##### `favicon`<sup>Optional</sup> <a name="favicon" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.favicon"></a>

```python
favicon: str
```

- *Type:* str

The favicon displayed for the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#favicon StatusPage#favicon}

---

##### `slack_app_icon`<sup>Optional</sup> <a name="slack_app_icon" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.slackAppIcon"></a>

```python
slack_app_icon: str
```

- *Type:* str

The icon used for the status page's Slack app integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#slack_app_icon StatusPage#slack_app_icon}

---

##### `slack_subscriptions_enabled`<sup>Optional</sup> <a name="slack_subscriptions_enabled" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.slackSubscriptionsEnabled"></a>

```python
slack_subscriptions_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether Slack subscriber notifications are enabled for the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#slack_subscriptions_enabled StatusPage#slack_subscriptions_enabled}

---

##### `subscriptions_enabled`<sup>Optional</sup> <a name="subscriptions_enabled" id="@cdktn/provider-datadog.statusPage.StatusPageConfig.property.subscriptionsEnabled"></a>

```python
subscriptions_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether subscriber notifications are enabled for the status page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#subscriptions_enabled StatusPage#subscriptions_enabled}

---



