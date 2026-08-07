# `dataDatadogCostCustomForecast` Submodule <a name="`dataDatadogCostCustomForecast` Submodule" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogCostCustomForecast <a name="DataDatadogCostCustomForecast" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/cost_custom_forecast datadog_cost_custom_forecast}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogcostcustomforecast"

datadatadogcostcustomforecast.NewDataDatadogCostCustomForecast(scope Construct, id *string, config DataDatadogCostCustomForecastConfig) DataDatadogCostCustomForecast
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig">DataDatadogCostCustomForecastConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig">DataDatadogCostCustomForecastConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.putEntries">PutEntries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.resetEntries">ResetEntries</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEntries` <a name="PutEntries" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.putEntries"></a>

```go
func PutEntries(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.putEntries.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEntries` <a name="ResetEntries" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.resetEntries"></a>

```go
func ResetEntries()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogCostCustomForecast resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogcostcustomforecast"

datadatadogcostcustomforecast.DataDatadogCostCustomForecast_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogcostcustomforecast"

datadatadogcostcustomforecast.DataDatadogCostCustomForecast_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogcostcustomforecast"

datadatadogcostcustomforecast.DataDatadogCostCustomForecast_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogcostcustomforecast"

datadatadogcostcustomforecast.DataDatadogCostCustomForecast_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatadogCostCustomForecast resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatadogCostCustomForecast to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatadogCostCustomForecast that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/cost_custom_forecast#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogCostCustomForecast to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.entries">Entries</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList">DataDatadogCostCustomForecastEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.updatedAt">UpdatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.budgetUidInput">BudgetUidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.entriesInput">EntriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.budgetUid">BudgetUid</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.entries"></a>

```go
func Entries() DataDatadogCostCustomForecastEntriesList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList">DataDatadogCostCustomForecastEntriesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.updatedAt"></a>

```go
func UpdatedAt() *f64
```

- *Type:* *f64

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `BudgetUidInput`<sup>Optional</sup> <a name="BudgetUidInput" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.budgetUidInput"></a>

```go
func BudgetUidInput() *string
```

- *Type:* *string

---

##### `EntriesInput`<sup>Optional</sup> <a name="EntriesInput" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.entriesInput"></a>

```go
func EntriesInput() interface{}
```

- *Type:* interface{}

---

##### `BudgetUid`<sup>Required</sup> <a name="BudgetUid" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.budgetUid"></a>

```go
func BudgetUid() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogCostCustomForecastConfig <a name="DataDatadogCostCustomForecastConfig" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogcostcustomforecast"

&datadatadogcostcustomforecast.DataDatadogCostCustomForecastConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BudgetUid: *string,
	Entries: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.budgetUid">BudgetUid</a></code> | <code>*string</code> | The UUID of the budget that this custom forecast belongs to. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.entries">Entries</a></code> | <code>interface{}</code> | entries block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BudgetUid`<sup>Required</sup> <a name="BudgetUid" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.budgetUid"></a>

```go
BudgetUid *string
```

- *Type:* *string

The UUID of the budget that this custom forecast belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/cost_custom_forecast#budget_uid DataDatadogCostCustomForecast#budget_uid}

---

##### `Entries`<sup>Optional</sup> <a name="Entries" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.entries"></a>

```go
Entries interface{}
```

- *Type:* interface{}

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/cost_custom_forecast#entries DataDatadogCostCustomForecast#entries}

---

### DataDatadogCostCustomForecastEntries <a name="DataDatadogCostCustomForecastEntries" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogcostcustomforecast"

&datadatadogcostcustomforecast.DataDatadogCostCustomForecastEntries {
	TagFilters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries.property.tagFilters">TagFilters</a></code> | <code>interface{}</code> | tag_filters block. |

---

##### `TagFilters`<sup>Optional</sup> <a name="TagFilters" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries.property.tagFilters"></a>

```go
TagFilters interface{}
```

- *Type:* interface{}

tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/cost_custom_forecast#tag_filters DataDatadogCostCustomForecast#tag_filters}

---

### DataDatadogCostCustomForecastEntriesTagFilters <a name="DataDatadogCostCustomForecastEntriesTagFilters" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogcostcustomforecast"

&datadatadogcostcustomforecast.DataDatadogCostCustomForecastEntriesTagFilters {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogCostCustomForecastEntriesList <a name="DataDatadogCostCustomForecastEntriesList" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogcostcustomforecast"

datadatadogcostcustomforecast.NewDataDatadogCostCustomForecastEntriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogCostCustomForecastEntriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.get"></a>

```go
func Get(index *f64) DataDatadogCostCustomForecastEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogCostCustomForecastEntriesOutputReference <a name="DataDatadogCostCustomForecastEntriesOutputReference" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogcostcustomforecast"

datadatadogcostcustomforecast.NewDataDatadogCostCustomForecastEntriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogCostCustomForecastEntriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.putTagFilters">PutTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.resetTagFilters">ResetTagFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTagFilters` <a name="PutTagFilters" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.putTagFilters"></a>

```go
func PutTagFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.putTagFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTagFilters` <a name="ResetTagFilters" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.resetTagFilters"></a>

```go
func ResetTagFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.amount">Amount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.month">Month</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.tagFilters">TagFilters</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList">DataDatadogCostCustomForecastEntriesTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.tagFiltersInput">TagFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.amount"></a>

```go
func Amount() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.month"></a>

```go
func Month() *f64
```

- *Type:* *f64

---

##### `TagFilters`<sup>Required</sup> <a name="TagFilters" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.tagFilters"></a>

```go
func TagFilters() DataDatadogCostCustomForecastEntriesTagFiltersList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList">DataDatadogCostCustomForecastEntriesTagFiltersList</a>

---

##### `TagFiltersInput`<sup>Optional</sup> <a name="TagFiltersInput" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.tagFiltersInput"></a>

```go
func TagFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogCostCustomForecastEntriesTagFiltersList <a name="DataDatadogCostCustomForecastEntriesTagFiltersList" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogcostcustomforecast"

datadatadogcostcustomforecast.NewDataDatadogCostCustomForecastEntriesTagFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogCostCustomForecastEntriesTagFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.get"></a>

```go
func Get(index *f64) DataDatadogCostCustomForecastEntriesTagFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogCostCustomForecastEntriesTagFiltersOutputReference <a name="DataDatadogCostCustomForecastEntriesTagFiltersOutputReference" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogcostcustomforecast"

datadatadogcostcustomforecast.NewDataDatadogCostCustomForecastEntriesTagFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogCostCustomForecastEntriesTagFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.tagValue">TagValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.tagValue"></a>

```go
func TagValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



