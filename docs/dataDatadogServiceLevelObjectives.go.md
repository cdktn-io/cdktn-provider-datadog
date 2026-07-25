# `dataDatadogServiceLevelObjectives` Submodule <a name="`dataDatadogServiceLevelObjectives` Submodule" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogServiceLevelObjectives <a name="DataDatadogServiceLevelObjectives" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/service_level_objectives datadog_service_level_objectives}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogservicelevelobjectives"

datadatadogservicelevelobjectives.NewDataDatadogServiceLevelObjectives(scope Construct, id *string, config DataDatadogServiceLevelObjectivesConfig) DataDatadogServiceLevelObjectives
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig">DataDatadogServiceLevelObjectivesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig">DataDatadogServiceLevelObjectivesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetErrorOnEmptyResult">ResetErrorOnEmptyResult</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetIds">ResetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetMetricsQuery">ResetMetricsQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetNameQuery">ResetNameQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetTagsQuery">ResetTagsQuery</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetErrorOnEmptyResult` <a name="ResetErrorOnEmptyResult" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetErrorOnEmptyResult"></a>

```go
func ResetErrorOnEmptyResult()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetId"></a>

```go
func ResetId()
```

##### `ResetIds` <a name="ResetIds" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetIds"></a>

```go
func ResetIds()
```

##### `ResetMetricsQuery` <a name="ResetMetricsQuery" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetMetricsQuery"></a>

```go
func ResetMetricsQuery()
```

##### `ResetNameQuery` <a name="ResetNameQuery" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetNameQuery"></a>

```go
func ResetNameQuery()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetQuery"></a>

```go
func ResetQuery()
```

##### `ResetTagsQuery` <a name="ResetTagsQuery" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.resetTagsQuery"></a>

```go
func ResetTagsQuery()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogServiceLevelObjectives resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogservicelevelobjectives"

datadatadogservicelevelobjectives.DataDatadogServiceLevelObjectives_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogservicelevelobjectives"

datadatadogservicelevelobjectives.DataDatadogServiceLevelObjectives_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogservicelevelobjectives"

datadatadogservicelevelobjectives.DataDatadogServiceLevelObjectives_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogservicelevelobjectives"

datadatadogservicelevelobjectives.DataDatadogServiceLevelObjectives_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatadogServiceLevelObjectives resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatadogServiceLevelObjectives to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatadogServiceLevelObjectives that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/service_level_objectives#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogServiceLevelObjectives to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.slos">Slos</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList">DataDatadogServiceLevelObjectivesSlosList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.errorOnEmptyResultInput">ErrorOnEmptyResultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.idsInput">IdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.metricsQueryInput">MetricsQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.nameQueryInput">NameQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.tagsQueryInput">TagsQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.errorOnEmptyResult">ErrorOnEmptyResult</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.ids">Ids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.metricsQuery">MetricsQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.nameQuery">NameQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.tagsQuery">TagsQuery</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Slos`<sup>Required</sup> <a name="Slos" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.slos"></a>

```go
func Slos() DataDatadogServiceLevelObjectivesSlosList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList">DataDatadogServiceLevelObjectivesSlosList</a>

---

##### `ErrorOnEmptyResultInput`<sup>Optional</sup> <a name="ErrorOnEmptyResultInput" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.errorOnEmptyResultInput"></a>

```go
func ErrorOnEmptyResultInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdsInput`<sup>Optional</sup> <a name="IdsInput" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.idsInput"></a>

```go
func IdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MetricsQueryInput`<sup>Optional</sup> <a name="MetricsQueryInput" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.metricsQueryInput"></a>

```go
func MetricsQueryInput() *string
```

- *Type:* *string

---

##### `NameQueryInput`<sup>Optional</sup> <a name="NameQueryInput" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.nameQueryInput"></a>

```go
func NameQueryInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `TagsQueryInput`<sup>Optional</sup> <a name="TagsQueryInput" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.tagsQueryInput"></a>

```go
func TagsQueryInput() *string
```

- *Type:* *string

---

##### `ErrorOnEmptyResult`<sup>Required</sup> <a name="ErrorOnEmptyResult" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.errorOnEmptyResult"></a>

```go
func ErrorOnEmptyResult() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.ids"></a>

```go
func Ids() *[]*string
```

- *Type:* *[]*string

---

##### `MetricsQuery`<sup>Required</sup> <a name="MetricsQuery" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.metricsQuery"></a>

```go
func MetricsQuery() *string
```

- *Type:* *string

---

##### `NameQuery`<sup>Required</sup> <a name="NameQuery" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.nameQuery"></a>

```go
func NameQuery() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `TagsQuery`<sup>Required</sup> <a name="TagsQuery" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.tagsQuery"></a>

```go
func TagsQuery() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectives.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogServiceLevelObjectivesConfig <a name="DataDatadogServiceLevelObjectivesConfig" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogservicelevelobjectives"

&datadatadogservicelevelobjectives.DataDatadogServiceLevelObjectivesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ErrorOnEmptyResult: interface{},
	Id: *string,
	Ids: *[]*string,
	MetricsQuery: *string,
	NameQuery: *string,
	Query: *string,
	TagsQuery: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.errorOnEmptyResult">ErrorOnEmptyResult</a></code> | <code>interface{}</code> | Throw an error if no results are found. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/service_level_objectives#id DataDatadogServiceLevelObjectives#id}. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.ids">Ids</a></code> | <code>*[]*string</code> | An array of SLO IDs to limit the search. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.metricsQuery">MetricsQuery</a></code> | <code>*string</code> | Filter results based on SLO numerator and denominator. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.nameQuery">NameQuery</a></code> | <code>*string</code> | Filter results based on SLO names. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.query">Query</a></code> | <code>*string</code> | The query string to filter results based on SLO names. Some examples of queries include service:<service-name> and <slo-name>. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.tagsQuery">TagsQuery</a></code> | <code>*string</code> | Filter results based on a single SLO tag. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ErrorOnEmptyResult`<sup>Optional</sup> <a name="ErrorOnEmptyResult" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.errorOnEmptyResult"></a>

```go
ErrorOnEmptyResult interface{}
```

- *Type:* interface{}

Throw an error if no results are found. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/service_level_objectives#error_on_empty_result DataDatadogServiceLevelObjectives#error_on_empty_result}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/service_level_objectives#id DataDatadogServiceLevelObjectives#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ids`<sup>Optional</sup> <a name="Ids" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.ids"></a>

```go
Ids *[]*string
```

- *Type:* *[]*string

An array of SLO IDs to limit the search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/service_level_objectives#ids DataDatadogServiceLevelObjectives#ids}

---

##### `MetricsQuery`<sup>Optional</sup> <a name="MetricsQuery" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.metricsQuery"></a>

```go
MetricsQuery *string
```

- *Type:* *string

Filter results based on SLO numerator and denominator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/service_level_objectives#metrics_query DataDatadogServiceLevelObjectives#metrics_query}

---

##### `NameQuery`<sup>Optional</sup> <a name="NameQuery" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.nameQuery"></a>

```go
NameQuery *string
```

- *Type:* *string

Filter results based on SLO names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/service_level_objectives#name_query DataDatadogServiceLevelObjectives#name_query}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.query"></a>

```go
Query *string
```

- *Type:* *string

The query string to filter results based on SLO names. Some examples of queries include service:<service-name> and <slo-name>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/service_level_objectives#query DataDatadogServiceLevelObjectives#query}

---

##### `TagsQuery`<sup>Optional</sup> <a name="TagsQuery" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesConfig.property.tagsQuery"></a>

```go
TagsQuery *string
```

- *Type:* *string

Filter results based on a single SLO tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/service_level_objectives#tags_query DataDatadogServiceLevelObjectives#tags_query}

---

### DataDatadogServiceLevelObjectivesSlos <a name="DataDatadogServiceLevelObjectivesSlos" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlos.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogservicelevelobjectives"

&datadatadogservicelevelobjectives.DataDatadogServiceLevelObjectivesSlos {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogServiceLevelObjectivesSlosList <a name="DataDatadogServiceLevelObjectivesSlosList" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogservicelevelobjectives"

datadatadogservicelevelobjectives.NewDataDatadogServiceLevelObjectivesSlosList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogServiceLevelObjectivesSlosList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.get"></a>

```go
func Get(index *f64) DataDatadogServiceLevelObjectivesSlosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDatadogServiceLevelObjectivesSlosOutputReference <a name="DataDatadogServiceLevelObjectivesSlosOutputReference" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogservicelevelobjectives"

datadatadogservicelevelobjectives.NewDataDatadogServiceLevelObjectivesSlosOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogServiceLevelObjectivesSlosOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlos">DataDatadogServiceLevelObjectivesSlos</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlosOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatadogServiceLevelObjectivesSlos
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogServiceLevelObjectives.DataDatadogServiceLevelObjectivesSlos">DataDatadogServiceLevelObjectivesSlos</a>

---



