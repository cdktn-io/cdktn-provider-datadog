# `agentlessScanningAzureScanOptions` Submodule <a name="`agentlessScanningAzureScanOptions` Submodule" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentlessScanningAzureScanOptions <a name="AgentlessScanningAzureScanOptions" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/agentless_scanning_azure_scan_options datadog_agentless_scanning_azure_scan_options}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer"></a>

```python
from cdktn_provider_datadog import agentless_scanning_azure_scan_options

agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  azure_subscription_id: str,
  function: bool | IResolvable,
  vuln_containers_os: bool | IResolvable,
  vuln_host_os: bool | IResolvable,
  compliance_host: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.azureSubscriptionId">azure_subscription_id</a></code> | <code>str</code> | The Azure subscription ID for which agentless scanning is configured. Must be a valid Azure subscription ID (UUID format). |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.function">function</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates if scanning of Azure Functions is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.vulnContainersOs">vuln_containers_os</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates if scanning for vulnerabilities in containers is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.vulnHostOs">vuln_host_os</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates if scanning for vulnerabilities in hosts is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.complianceHost">compliance_host</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether host compliance scanning is enabled. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `azure_subscription_id`<sup>Required</sup> <a name="azure_subscription_id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.azureSubscriptionId"></a>

- *Type:* str

The Azure subscription ID for which agentless scanning is configured. Must be a valid Azure subscription ID (UUID format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/agentless_scanning_azure_scan_options#azure_subscription_id AgentlessScanningAzureScanOptions#azure_subscription_id}

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.function"></a>

- *Type:* bool | cdktn.IResolvable

Indicates if scanning of Azure Functions is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/agentless_scanning_azure_scan_options#function AgentlessScanningAzureScanOptions#function}

---

##### `vuln_containers_os`<sup>Required</sup> <a name="vuln_containers_os" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.vulnContainersOs"></a>

- *Type:* bool | cdktn.IResolvable

Indicates if scanning for vulnerabilities in containers is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/agentless_scanning_azure_scan_options#vuln_containers_os AgentlessScanningAzureScanOptions#vuln_containers_os}

---

##### `vuln_host_os`<sup>Required</sup> <a name="vuln_host_os" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.vulnHostOs"></a>

- *Type:* bool | cdktn.IResolvable

Indicates if scanning for vulnerabilities in hosts is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/agentless_scanning_azure_scan_options#vuln_host_os AgentlessScanningAzureScanOptions#vuln_host_os}

---

##### `compliance_host`<sup>Optional</sup> <a name="compliance_host" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.Initializer.parameter.complianceHost"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether host compliance scanning is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/agentless_scanning_azure_scan_options#compliance_host AgentlessScanningAzureScanOptions#compliance_host}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.resetComplianceHost">reset_compliance_host</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_compliance_host` <a name="reset_compliance_host" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.resetComplianceHost"></a>

```python
def reset_compliance_host() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AgentlessScanningAzureScanOptions resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isConstruct"></a>

```python
from cdktn_provider_datadog import agentless_scanning_azure_scan_options

agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformElement"></a>

```python
from cdktn_provider_datadog import agentless_scanning_azure_scan_options

agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformResource"></a>

```python
from cdktn_provider_datadog import agentless_scanning_azure_scan_options

agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import agentless_scanning_azure_scan_options

agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AgentlessScanningAzureScanOptions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AgentlessScanningAzureScanOptions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AgentlessScanningAzureScanOptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/agentless_scanning_azure_scan_options#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AgentlessScanningAzureScanOptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.azureSubscriptionIdInput">azure_subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.complianceHostInput">compliance_host_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.functionInput">function_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnContainersOsInput">vuln_containers_os_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnHostOsInput">vuln_host_os_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.azureSubscriptionId">azure_subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.complianceHost">compliance_host</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.function">function</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnContainersOs">vuln_containers_os</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnHostOs">vuln_host_os</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `azure_subscription_id_input`<sup>Optional</sup> <a name="azure_subscription_id_input" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.azureSubscriptionIdInput"></a>

```python
azure_subscription_id_input: str
```

- *Type:* str

---

##### `compliance_host_input`<sup>Optional</sup> <a name="compliance_host_input" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.complianceHostInput"></a>

```python
compliance_host_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `function_input`<sup>Optional</sup> <a name="function_input" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.functionInput"></a>

```python
function_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `vuln_containers_os_input`<sup>Optional</sup> <a name="vuln_containers_os_input" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnContainersOsInput"></a>

```python
vuln_containers_os_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `vuln_host_os_input`<sup>Optional</sup> <a name="vuln_host_os_input" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnHostOsInput"></a>

```python
vuln_host_os_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `azure_subscription_id`<sup>Required</sup> <a name="azure_subscription_id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.azureSubscriptionId"></a>

```python
azure_subscription_id: str
```

- *Type:* str

---

##### `compliance_host`<sup>Required</sup> <a name="compliance_host" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.complianceHost"></a>

```python
compliance_host: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.function"></a>

```python
function: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `vuln_containers_os`<sup>Required</sup> <a name="vuln_containers_os" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnContainersOs"></a>

```python
vuln_containers_os: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `vuln_host_os`<sup>Required</sup> <a name="vuln_host_os" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.vulnHostOs"></a>

```python
vuln_host_os: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AgentlessScanningAzureScanOptionsConfig <a name="AgentlessScanningAzureScanOptionsConfig" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.Initializer"></a>

```python
from cdktn_provider_datadog import agentless_scanning_azure_scan_options

agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  azure_subscription_id: str,
  function: bool | IResolvable,
  vuln_containers_os: bool | IResolvable,
  vuln_host_os: bool | IResolvable,
  compliance_host: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.azureSubscriptionId">azure_subscription_id</a></code> | <code>str</code> | The Azure subscription ID for which agentless scanning is configured. Must be a valid Azure subscription ID (UUID format). |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.function">function</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates if scanning of Azure Functions is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.vulnContainersOs">vuln_containers_os</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates if scanning for vulnerabilities in containers is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.vulnHostOs">vuln_host_os</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates if scanning for vulnerabilities in hosts is enabled. |
| <code><a href="#@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.complianceHost">compliance_host</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether host compliance scanning is enabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `azure_subscription_id`<sup>Required</sup> <a name="azure_subscription_id" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.azureSubscriptionId"></a>

```python
azure_subscription_id: str
```

- *Type:* str

The Azure subscription ID for which agentless scanning is configured. Must be a valid Azure subscription ID (UUID format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/agentless_scanning_azure_scan_options#azure_subscription_id AgentlessScanningAzureScanOptions#azure_subscription_id}

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.function"></a>

```python
function: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates if scanning of Azure Functions is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/agentless_scanning_azure_scan_options#function AgentlessScanningAzureScanOptions#function}

---

##### `vuln_containers_os`<sup>Required</sup> <a name="vuln_containers_os" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.vulnContainersOs"></a>

```python
vuln_containers_os: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates if scanning for vulnerabilities in containers is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/agentless_scanning_azure_scan_options#vuln_containers_os AgentlessScanningAzureScanOptions#vuln_containers_os}

---

##### `vuln_host_os`<sup>Required</sup> <a name="vuln_host_os" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.vulnHostOs"></a>

```python
vuln_host_os: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates if scanning for vulnerabilities in hosts is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/agentless_scanning_azure_scan_options#vuln_host_os AgentlessScanningAzureScanOptions#vuln_host_os}

---

##### `compliance_host`<sup>Optional</sup> <a name="compliance_host" id="@cdktn/provider-datadog.agentlessScanningAzureScanOptions.AgentlessScanningAzureScanOptionsConfig.property.complianceHost"></a>

```python
compliance_host: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether host compliance scanning is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/agentless_scanning_azure_scan_options#compliance_host AgentlessScanningAzureScanOptions#compliance_host}

---



