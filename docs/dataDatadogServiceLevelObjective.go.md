# `dataDatadogServiceLevelObjective` Submodule <a name="`dataDatadogServiceLevelObjective` Submodule" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogServiceLevelObjective <a name="DataDatadogServiceLevelObjective" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/data-sources/service_level_objective datadog_service_level_objective}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogservicelevelobjective"

datadatadogservicelevelobjective.NewDataDatadogServiceLevelObjective(scope Construct, id *string, config DataDatadogServiceLevelObjectiveConfig) DataDatadogServiceLevelObjective
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig">DataDatadogServiceLevelObjectiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig">DataDatadogServiceLevelObjectiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetMetricsQuery">ResetMetricsQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetNameQuery">ResetNameQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetTagsQuery">ResetTagsQuery</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetId"></a>

```go
func ResetId()
```

##### `ResetMetricsQuery` <a name="ResetMetricsQuery" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetMetricsQuery"></a>

```go
func ResetMetricsQuery()
```

##### `ResetNameQuery` <a name="ResetNameQuery" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetNameQuery"></a>

```go
func ResetNameQuery()
```

##### `ResetTagsQuery` <a name="ResetTagsQuery" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.resetTagsQuery"></a>

```go
func ResetTagsQuery()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogServiceLevelObjective resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogservicelevelobjective"

datadatadogservicelevelobjective.DataDatadogServiceLevelObjective_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogservicelevelobjective"

datadatadogservicelevelobjective.DataDatadogServiceLevelObjective_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogservicelevelobjective"

datadatadogservicelevelobjective.DataDatadogServiceLevelObjective_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogservicelevelobjective"

datadatadogservicelevelobjective.DataDatadogServiceLevelObjective_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatadogServiceLevelObjective resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatadogServiceLevelObjective to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatadogServiceLevelObjective that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/data-sources/service_level_objective#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogServiceLevelObjective to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.query">Query</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList">DataDatadogServiceLevelObjectiveQueryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.targetThreshold">TargetThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.timeframe">Timeframe</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.warningThreshold">WarningThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.metricsQueryInput">MetricsQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.nameQueryInput">NameQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tagsQueryInput">TagsQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.metricsQuery">MetricsQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.nameQuery">NameQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tagsQuery">TagsQuery</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.query"></a>

```go
func Query() DataDatadogServiceLevelObjectiveQueryList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList">DataDatadogServiceLevelObjectiveQueryList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `TargetThreshold`<sup>Required</sup> <a name="TargetThreshold" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.targetThreshold"></a>

```go
func TargetThreshold() *f64
```

- *Type:* *f64

---

##### `Timeframe`<sup>Required</sup> <a name="Timeframe" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.timeframe"></a>

```go
func Timeframe() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `WarningThreshold`<sup>Required</sup> <a name="WarningThreshold" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.warningThreshold"></a>

```go
func WarningThreshold() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetricsQueryInput`<sup>Optional</sup> <a name="MetricsQueryInput" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.metricsQueryInput"></a>

```go
func MetricsQueryInput() *string
```

- *Type:* *string

---

##### `NameQueryInput`<sup>Optional</sup> <a name="NameQueryInput" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.nameQueryInput"></a>

```go
func NameQueryInput() *string
```

- *Type:* *string

---

##### `TagsQueryInput`<sup>Optional</sup> <a name="TagsQueryInput" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tagsQueryInput"></a>

```go
func TagsQueryInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MetricsQuery`<sup>Required</sup> <a name="MetricsQuery" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.metricsQuery"></a>

```go
func MetricsQuery() *string
```

- *Type:* *string

---

##### `NameQuery`<sup>Required</sup> <a name="NameQuery" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.nameQuery"></a>

```go
func NameQuery() *string
```

- *Type:* *string

---

##### `TagsQuery`<sup>Required</sup> <a name="TagsQuery" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tagsQuery"></a>

```go
func TagsQuery() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjective.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogServiceLevelObjectiveConfig <a name="DataDatadogServiceLevelObjectiveConfig" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogservicelevelobjective"

&datadatadogservicelevelobjective.DataDatadogServiceLevelObjectiveConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	MetricsQuery: *string,
	NameQuery: *string,
	TagsQuery: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.id">Id</a></code> | <code>*string</code> | A SLO ID to limit the search. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.metricsQuery">MetricsQuery</a></code> | <code>*string</code> | Filter results based on SLO numerator and denominator. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.nameQuery">NameQuery</a></code> | <code>*string</code> | Filter results based on SLO names. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.tagsQuery">TagsQuery</a></code> | <code>*string</code> | Filter results based on a single SLO tag. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

A SLO ID to limit the search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/data-sources/service_level_objective#id DataDatadogServiceLevelObjective#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetricsQuery`<sup>Optional</sup> <a name="MetricsQuery" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.metricsQuery"></a>

```go
MetricsQuery *string
```

- *Type:* *string

Filter results based on SLO numerator and denominator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/data-sources/service_level_objective#metrics_query DataDatadogServiceLevelObjective#metrics_query}

---

##### `NameQuery`<sup>Optional</sup> <a name="NameQuery" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.nameQuery"></a>

```go
NameQuery *string
```

- *Type:* *string

Filter results based on SLO names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/data-sources/service_level_objective#name_query DataDatadogServiceLevelObjective#name_query}

---

##### `TagsQuery`<sup>Optional</sup> <a name="TagsQuery" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveConfig.property.tagsQuery"></a>

```go
TagsQuery *string
```

- *Type:* *string

Filter results based on a single SLO tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/data-sources/service_level_objective#tags_query DataDatadogServiceLevelObjective#tags_query}

---

### DataDatadogServiceLevelObjectiveQuery <a name="DataDatadogServiceLevelObjectiveQuery" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQuery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogservicelevelobjective"

&datadatadogservicelevelobjective.DataDatadogServiceLevelObjectiveQuery {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogServiceLevelObjectiveQueryList <a name="DataDatadogServiceLevelObjectiveQueryList" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogservicelevelobjective"

datadatadogservicelevelobjective.NewDataDatadogServiceLevelObjectiveQueryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogServiceLevelObjectiveQueryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.get"></a>

```go
func Get(index *f64) DataDatadogServiceLevelObjectiveQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDatadogServiceLevelObjectiveQueryOutputReference <a name="DataDatadogServiceLevelObjectiveQueryOutputReference" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogservicelevelobjective"

datadatadogservicelevelobjective.NewDataDatadogServiceLevelObjectiveQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogServiceLevelObjectiveQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.denominator">Denominator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.numerator">Numerator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQuery">DataDatadogServiceLevelObjectiveQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Denominator`<sup>Required</sup> <a name="Denominator" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.denominator"></a>

```go
func Denominator() *string
```

- *Type:* *string

---

##### `Numerator`<sup>Required</sup> <a name="Numerator" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.numerator"></a>

```go
func Numerator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatadogServiceLevelObjectiveQuery
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjective.DataDatadogServiceLevelObjectiveQuery">DataDatadogServiceLevelObjectiveQuery</a>

---



