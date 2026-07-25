# `deploymentGate` Submodule <a name="`deploymentGate` Submodule" id="@cdktn/provider-datadog.deploymentGate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeploymentGate <a name="DeploymentGate" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/deployment_gate datadog_deployment_gate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer"></a>

```python
from cdktn_provider_datadog import deployment_gate

deploymentGate.DeploymentGate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  env: str,
  service: str,
  dry_run: bool | IResolvable = None,
  identifier: str = None,
  rule: IResolvable | typing.List[DeploymentGateRule] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.env">env</a></code> | <code>str</code> | The target environment (example: dev). |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.service">service</a></code> | <code>str</code> | The service name (example: transaction-backend). |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.dryRun">dry_run</a></code> | <code>bool \| cdktn.IResolvable</code> | Enable Dry Run to test gate behavior without impacting deployments. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.identifier">identifier</a></code> | <code>str</code> | Unique name for multiple gates on the same service/environment. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.rule">rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>]</code> | rule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.env"></a>

- *Type:* str

The target environment (example: dev).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/deployment_gate#env DeploymentGate#env}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.service"></a>

- *Type:* str

The service name (example: transaction-backend).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/deployment_gate#service DeploymentGate#service}

---

##### `dry_run`<sup>Optional</sup> <a name="dry_run" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.dryRun"></a>

- *Type:* bool | cdktn.IResolvable

Enable Dry Run to test gate behavior without impacting deployments.

The evaluation of a dry run gate always responds with a pass status, but the in-app result is the real status based on rules evaluation. This is particularly useful when performing an initial evaluation of the gate behavior without impacting the deployment pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/deployment_gate#dry_run DeploymentGate#dry_run}

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.identifier"></a>

- *Type:* str

Unique name for multiple gates on the same service/environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/deployment_gate#identifier DeploymentGate#identifier}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.rule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/deployment_gate#rule DeploymentGate#rule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetDryRun">reset_dry_run</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetIdentifier">reset_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetRule">reset_rule</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rule` <a name="put_rule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.putRule"></a>

```python
def put_rule(
  value: IResolvable | typing.List[DeploymentGateRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.putRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>]

---

##### `reset_dry_run` <a name="reset_dry_run" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetDryRun"></a>

```python
def reset_dry_run() -> None
```

##### `reset_identifier` <a name="reset_identifier" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetIdentifier"></a>

```python
def reset_identifier() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetRule"></a>

```python
def reset_rule() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DeploymentGate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isConstruct"></a>

```python
from cdktn_provider_datadog import deployment_gate

deploymentGate.DeploymentGate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformElement"></a>

```python
from cdktn_provider_datadog import deployment_gate

deploymentGate.DeploymentGate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformResource"></a>

```python
from cdktn_provider_datadog import deployment_gate

deploymentGate.DeploymentGate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport"></a>

```python
from cdktn_provider_datadog import deployment_gate

deploymentGate.DeploymentGate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DeploymentGate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DeploymentGate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DeploymentGate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/deployment_gate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DeploymentGate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList">DeploymentGateRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dryRunInput">dry_run_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.envInput">env_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.ruleInput">rule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dryRun">dry_run</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.env">env</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.service">service</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.rule"></a>

```python
rule: DeploymentGateRuleList
```

- *Type:* <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList">DeploymentGateRuleList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `dry_run_input`<sup>Optional</sup> <a name="dry_run_input" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dryRunInput"></a>

```python
dry_run_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.envInput"></a>

```python
env_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.ruleInput"></a>

```python
rule_input: IResolvable | typing.List[DeploymentGateRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>]

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `dry_run`<sup>Required</sup> <a name="dry_run" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dryRun"></a>

```python
dry_run: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.env"></a>

```python
env: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.service"></a>

```python
service: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DeploymentGateConfig <a name="DeploymentGateConfig" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.Initializer"></a>

```python
from cdktn_provider_datadog import deployment_gate

deploymentGate.DeploymentGateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  env: str,
  service: str,
  dry_run: bool | IResolvable = None,
  identifier: str = None,
  rule: IResolvable | typing.List[DeploymentGateRule] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.env">env</a></code> | <code>str</code> | The target environment (example: dev). |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.service">service</a></code> | <code>str</code> | The service name (example: transaction-backend). |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.dryRun">dry_run</a></code> | <code>bool \| cdktn.IResolvable</code> | Enable Dry Run to test gate behavior without impacting deployments. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.identifier">identifier</a></code> | <code>str</code> | Unique name for multiple gates on the same service/environment. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.rule">rule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>]</code> | rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.env"></a>

```python
env: str
```

- *Type:* str

The target environment (example: dev).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/deployment_gate#env DeploymentGate#env}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.service"></a>

```python
service: str
```

- *Type:* str

The service name (example: transaction-backend).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/deployment_gate#service DeploymentGate#service}

---

##### `dry_run`<sup>Optional</sup> <a name="dry_run" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.dryRun"></a>

```python
dry_run: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enable Dry Run to test gate behavior without impacting deployments.

The evaluation of a dry run gate always responds with a pass status, but the in-app result is the real status based on rules evaluation. This is particularly useful when performing an initial evaluation of the gate behavior without impacting the deployment pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/deployment_gate#dry_run DeploymentGate#dry_run}

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Unique name for multiple gates on the same service/environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/deployment_gate#identifier DeploymentGate#identifier}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.rule"></a>

```python
rule: IResolvable | typing.List[DeploymentGateRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/deployment_gate#rule DeploymentGate#rule}

---

### DeploymentGateRule <a name="DeploymentGateRule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.Initializer"></a>

```python
from cdktn_provider_datadog import deployment_gate

deploymentGate.DeploymentGateRule(
  name: str,
  type: str,
  dry_run: bool | IResolvable = None,
  options: DeploymentGateRuleOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.name">name</a></code> | <code>str</code> | The rule name. Must be unique within the deployment gate. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.type">type</a></code> | <code>str</code> | The rule type (e.g., 'faulty_deployment_detection', 'monitor'). |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.dryRun">dry_run</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the rule is in dry run mode. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.options">options</a></code> | <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a></code> | options block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.name"></a>

```python
name: str
```

- *Type:* str

The rule name. Must be unique within the deployment gate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/deployment_gate#name DeploymentGate#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.type"></a>

```python
type: str
```

- *Type:* str

The rule type (e.g., 'faulty_deployment_detection', 'monitor').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/deployment_gate#type DeploymentGate#type}

---

##### `dry_run`<sup>Optional</sup> <a name="dry_run" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.dryRun"></a>

```python
dry_run: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the rule is in dry run mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/deployment_gate#dry_run DeploymentGate#dry_run}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.options"></a>

```python
options: DeploymentGateRuleOptions
```

- *Type:* <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/deployment_gate#options DeploymentGate#options}

---

### DeploymentGateRuleOptions <a name="DeploymentGateRuleOptions" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.Initializer"></a>

```python
from cdktn_provider_datadog import deployment_gate

deploymentGate.DeploymentGateRuleOptions(
  duration: typing.Union[int, float] = None,
  excluded_resources: typing.List[str] = None,
  query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | The duration for the rule. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.excludedResources">excluded_resources</a></code> | <code>typing.List[str]</code> | Resources to exclude from faulty deployment detection. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.query">query</a></code> | <code>str</code> | The query for monitor rules. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/deployment_gate#duration DeploymentGate#duration}

---

##### `excluded_resources`<sup>Optional</sup> <a name="excluded_resources" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.excludedResources"></a>

```python
excluded_resources: typing.List[str]
```

- *Type:* typing.List[str]

Resources to exclude from faulty deployment detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/deployment_gate#excluded_resources DeploymentGate#excluded_resources}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.query"></a>

```python
query: str
```

- *Type:* str

The query for monitor rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/deployment_gate#query DeploymentGate#query}

---

## Classes <a name="Classes" id="Classes"></a>

### DeploymentGateRuleList <a name="DeploymentGateRuleList" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer"></a>

```python
from cdktn_provider_datadog import deployment_gate

deploymentGate.DeploymentGateRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DeploymentGateRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DeploymentGateRule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>]

---


### DeploymentGateRuleOptionsOutputReference <a name="DeploymentGateRuleOptionsOutputReference" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import deployment_gate

deploymentGate.DeploymentGateRuleOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetDuration">reset_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetExcludedResources">reset_excluded_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetQuery">reset_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_duration` <a name="reset_duration" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetDuration"></a>

```python
def reset_duration() -> None
```

##### `reset_excluded_resources` <a name="reset_excluded_resources" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetExcludedResources"></a>

```python
def reset_excluded_resources() -> None
```

##### `reset_query` <a name="reset_query" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.durationInput">duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.excludedResourcesInput">excluded_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.excludedResources">excluded_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.durationInput"></a>

```python
duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `excluded_resources_input`<sup>Optional</sup> <a name="excluded_resources_input" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.excludedResourcesInput"></a>

```python
excluded_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `excluded_resources`<sup>Required</sup> <a name="excluded_resources" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.excludedResources"></a>

```python
excluded_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeploymentGateRuleOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a>

---


### DeploymentGateRuleOutputReference <a name="DeploymentGateRuleOutputReference" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_datadog import deployment_gate

deploymentGate.DeploymentGateRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.putOptions">put_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resetDryRun">reset_dry_run</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resetOptions">reset_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_options` <a name="put_options" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.putOptions"></a>

```python
def put_options(
  duration: typing.Union[int, float] = None,
  excluded_resources: typing.List[str] = None,
  query: str = None
) -> None
```

###### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.putOptions.parameter.duration"></a>

- *Type:* typing.Union[int, float]

The duration for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/deployment_gate#duration DeploymentGate#duration}

---

###### `excluded_resources`<sup>Optional</sup> <a name="excluded_resources" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.putOptions.parameter.excludedResources"></a>

- *Type:* typing.List[str]

Resources to exclude from faulty deployment detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/deployment_gate#excluded_resources DeploymentGate#excluded_resources}

---

###### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.putOptions.parameter.query"></a>

- *Type:* str

The query for monitor rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/deployment_gate#query DeploymentGate#query}

---

##### `reset_dry_run` <a name="reset_dry_run" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resetDryRun"></a>

```python
def reset_dry_run() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resetOptions"></a>

```python
def reset_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.options">options</a></code> | <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference">DeploymentGateRuleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.dryRunInput">dry_run_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.optionsInput">options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.dryRun">dry_run</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.options"></a>

```python
options: DeploymentGateRuleOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference">DeploymentGateRuleOptionsOutputReference</a>

---

##### `dry_run_input`<sup>Optional</sup> <a name="dry_run_input" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.dryRunInput"></a>

```python
dry_run_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.optionsInput"></a>

```python
options_input: IResolvable | DeploymentGateRuleOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `dry_run`<sup>Required</sup> <a name="dry_run" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.dryRun"></a>

```python
dry_run: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DeploymentGateRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>

---



