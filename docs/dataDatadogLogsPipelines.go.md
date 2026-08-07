# `dataDatadogLogsPipelines` Submodule <a name="`dataDatadogLogsPipelines` Submodule" id="@cdktn/provider-datadog.dataDatadogLogsPipelines"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogLogsPipelines <a name="DataDatadogLogsPipelines" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/logs_pipelines datadog_logs_pipelines}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadoglogspipelines"

datadatadoglogspipelines.NewDataDatadogLogsPipelines(scope Construct, id *string, config DataDatadogLogsPipelinesConfig) DataDatadogLogsPipelines
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesConfig">DataDatadogLogsPipelinesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesConfig">DataDatadogLogsPipelinesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.resetIsReadOnly">ResetIsReadOnly</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.resetId"></a>

```go
func ResetId()
```

##### `ResetIsReadOnly` <a name="ResetIsReadOnly" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.resetIsReadOnly"></a>

```go
func ResetIsReadOnly()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogLogsPipelines resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadoglogspipelines"

datadatadoglogspipelines.DataDatadogLogsPipelines_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadoglogspipelines"

datadatadoglogspipelines.DataDatadogLogsPipelines_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadoglogspipelines"

datadatadoglogspipelines.DataDatadogLogsPipelines_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadoglogspipelines"

datadatadoglogspipelines.DataDatadogLogsPipelines_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatadogLogsPipelines resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatadogLogsPipelines to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatadogLogsPipelines that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/logs_pipelines#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogLogsPipelines to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.logsPipelines">LogsPipelines</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList">DataDatadogLogsPipelinesLogsPipelinesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.isReadOnlyInput">IsReadOnlyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.isReadOnly">IsReadOnly</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `LogsPipelines`<sup>Required</sup> <a name="LogsPipelines" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.logsPipelines"></a>

```go
func LogsPipelines() DataDatadogLogsPipelinesLogsPipelinesList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList">DataDatadogLogsPipelinesLogsPipelinesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsReadOnlyInput`<sup>Optional</sup> <a name="IsReadOnlyInput" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.isReadOnlyInput"></a>

```go
func IsReadOnlyInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsReadOnly`<sup>Required</sup> <a name="IsReadOnly" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.isReadOnly"></a>

```go
func IsReadOnly() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelines.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogLogsPipelinesConfig <a name="DataDatadogLogsPipelinesConfig" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadoglogspipelines"

&datadatadoglogspipelines.DataDatadogLogsPipelinesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	IsReadOnly: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/logs_pipelines#id DataDatadogLogsPipelines#id}. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesConfig.property.isReadOnly">IsReadOnly</a></code> | <code>*string</code> | Filter parameter for retrieved pipelines. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/logs_pipelines#id DataDatadogLogsPipelines#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsReadOnly`<sup>Optional</sup> <a name="IsReadOnly" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesConfig.property.isReadOnly"></a>

```go
IsReadOnly *string
```

- *Type:* *string

Filter parameter for retrieved pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/logs_pipelines#is_read_only DataDatadogLogsPipelines#is_read_only}

---

### DataDatadogLogsPipelinesLogsPipelines <a name="DataDatadogLogsPipelinesLogsPipelines" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelines.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadoglogspipelines"

&datadatadoglogspipelines.DataDatadogLogsPipelinesLogsPipelines {

}
```


### DataDatadogLogsPipelinesLogsPipelinesFilter <a name="DataDatadogLogsPipelinesLogsPipelinesFilter" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadoglogspipelines"

&datadatadoglogspipelines.DataDatadogLogsPipelinesLogsPipelinesFilter {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogLogsPipelinesLogsPipelinesFilterList <a name="DataDatadogLogsPipelinesLogsPipelinesFilterList" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadoglogspipelines"

datadatadoglogspipelines.NewDataDatadogLogsPipelinesLogsPipelinesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogLogsPipelinesLogsPipelinesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList.get"></a>

```go
func Get(index *f64) DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference <a name="DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadoglogspipelines"

datadatadoglogspipelines.NewDataDatadogLogsPipelinesLogsPipelinesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilter">DataDatadogLogsPipelinesLogsPipelinesFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatadogLogsPipelinesLogsPipelinesFilter
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilter">DataDatadogLogsPipelinesLogsPipelinesFilter</a>

---


### DataDatadogLogsPipelinesLogsPipelinesList <a name="DataDatadogLogsPipelinesLogsPipelinesList" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadoglogspipelines"

datadatadoglogspipelines.NewDataDatadogLogsPipelinesLogsPipelinesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogLogsPipelinesLogsPipelinesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList.get"></a>

```go
func Get(index *f64) DataDatadogLogsPipelinesLogsPipelinesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDatadogLogsPipelinesLogsPipelinesOutputReference <a name="DataDatadogLogsPipelinesLogsPipelinesOutputReference" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadoglogspipelines"

datadatadoglogspipelines.NewDataDatadogLogsPipelinesLogsPipelinesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogLogsPipelinesLogsPipelinesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList">DataDatadogLogsPipelinesLogsPipelinesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.property.isReadOnly">IsReadOnly</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelines">DataDatadogLogsPipelinesLogsPipelines</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.property.filter"></a>

```go
func Filter() DataDatadogLogsPipelinesLogsPipelinesFilterList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesFilterList">DataDatadogLogsPipelinesLogsPipelinesFilterList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IsReadOnly`<sup>Required</sup> <a name="IsReadOnly" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.property.isReadOnly"></a>

```go
func IsReadOnly() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelinesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatadogLogsPipelinesLogsPipelines
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogLogsPipelines.DataDatadogLogsPipelinesLogsPipelines">DataDatadogLogsPipelinesLogsPipelines</a>

---



