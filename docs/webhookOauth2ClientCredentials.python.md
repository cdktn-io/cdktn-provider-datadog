# `webhookOauth2ClientCredentials` Submodule <a name="`webhookOauth2ClientCredentials` Submodule" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebhookOauth2ClientCredentials <a name="WebhookOauth2ClientCredentials" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials datadog_webhook_oauth2_client_credentials}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer"></a>

```python
from cdktn_provider_datadog import webhook_oauth2_client_credentials

webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_token_url: str,
  client_id: str,
  client_secret: str,
  name: str,
  audience: str = None,
  scope: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.accessTokenUrl">access_token_url</a></code> | <code>str</code> | The URL used to fetch the access token. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | The OAuth2 client ID. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.clientSecret">client_secret</a></code> | <code>str</code> | The OAuth2 client secret. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the auth method. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.audience">audience</a></code> | <code>str</code> | The audience requested when fetching the access token. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.scope">scope</a></code> | <code>str</code> | The scope requested when fetching the access token. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_token_url`<sup>Required</sup> <a name="access_token_url" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.accessTokenUrl"></a>

- *Type:* str

The URL used to fetch the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#access_token_url WebhookOauth2ClientCredentials#access_token_url}

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.clientId"></a>

- *Type:* str

The OAuth2 client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#client_id WebhookOauth2ClientCredentials#client_id}

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.clientSecret"></a>

- *Type:* str

The OAuth2 client secret.

This value is not returned by the API, so it cannot be detected as drifted or filled in on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#client_secret WebhookOauth2ClientCredentials#client_secret}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.name"></a>

- *Type:* str

The name of the auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#name WebhookOauth2ClientCredentials#name}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.audience"></a>

- *Type:* str

The audience requested when fetching the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#audience WebhookOauth2ClientCredentials#audience}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.scope"></a>

- *Type:* str

The scope requested when fetching the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#scope WebhookOauth2ClientCredentials#scope}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetAudience">reset_audience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetScope">reset_scope</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_audience` <a name="reset_audience" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetAudience"></a>

```python
def reset_audience() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetScope"></a>

```python
def reset_scope() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WebhookOauth2ClientCredentials resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isConstruct"></a>

```python
from cdktn_provider_datadog import webhook_oauth2_client_credentials

webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformElement"></a>

```python
from cdktn_provider_datadog import webhook_oauth2_client_credentials

webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformResource"></a>

```python
from cdktn_provider_datadog import webhook_oauth2_client_credentials

webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import webhook_oauth2_client_credentials

webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WebhookOauth2ClientCredentials resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WebhookOauth2ClientCredentials to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WebhookOauth2ClientCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WebhookOauth2ClientCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.accessTokenUrlInput">access_token_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.audienceInput">audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.accessTokenUrl">access_token_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.scope">scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `access_token_url_input`<sup>Optional</sup> <a name="access_token_url_input" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.accessTokenUrlInput"></a>

```python
access_token_url_input: str
```

- *Type:* str

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.audienceInput"></a>

```python
audience_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `access_token_url`<sup>Required</sup> <a name="access_token_url" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.accessTokenUrl"></a>

```python
access_token_url: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WebhookOauth2ClientCredentialsConfig <a name="WebhookOauth2ClientCredentialsConfig" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.Initializer"></a>

```python
from cdktn_provider_datadog import webhook_oauth2_client_credentials

webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_token_url: str,
  client_id: str,
  client_secret: str,
  name: str,
  audience: str = None,
  scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.accessTokenUrl">access_token_url</a></code> | <code>str</code> | The URL used to fetch the access token. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.clientId">client_id</a></code> | <code>str</code> | The OAuth2 client ID. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | The OAuth2 client secret. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.name">name</a></code> | <code>str</code> | The name of the auth method. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.audience">audience</a></code> | <code>str</code> | The audience requested when fetching the access token. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.scope">scope</a></code> | <code>str</code> | The scope requested when fetching the access token. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_token_url`<sup>Required</sup> <a name="access_token_url" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.accessTokenUrl"></a>

```python
access_token_url: str
```

- *Type:* str

The URL used to fetch the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#access_token_url WebhookOauth2ClientCredentials#access_token_url}

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The OAuth2 client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#client_id WebhookOauth2ClientCredentials#client_id}

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The OAuth2 client secret.

This value is not returned by the API, so it cannot be detected as drifted or filled in on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#client_secret WebhookOauth2ClientCredentials#client_secret}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#name WebhookOauth2ClientCredentials#name}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.audience"></a>

```python
audience: str
```

- *Type:* str

The audience requested when fetching the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#audience WebhookOauth2ClientCredentials#audience}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

The scope requested when fetching the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#scope WebhookOauth2ClientCredentials#scope}

---



