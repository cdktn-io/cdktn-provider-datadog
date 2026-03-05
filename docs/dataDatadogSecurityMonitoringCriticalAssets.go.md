# `dataDatadogSecurityMonitoringCriticalAssets` Submodule <a name="`dataDatadogSecurityMonitoringCriticalAssets` Submodule" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogSecurityMonitoringCriticalAssets <a name="DataDatadogSecurityMonitoringCriticalAssets" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/data-sources/security_monitoring_critical_assets datadog_security_monitoring_critical_assets}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogsecuritymonitoringcriticalassets"

datadatadogsecuritymonitoringcriticalassets.NewDataDatadogSecurityMonitoringCriticalAssets(scope Construct, id *string, config DataDatadogSecurityMonitoringCriticalAssetsConfig) DataDatadogSecurityMonitoringCriticalAssets
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig">DataDatadogSecurityMonitoringCriticalAssetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig">DataDatadogSecurityMonitoringCriticalAssetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogSecurityMonitoringCriticalAssets resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogsecuritymonitoringcriticalassets"

datadatadogsecuritymonitoringcriticalassets.DataDatadogSecurityMonitoringCriticalAssets_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogsecuritymonitoringcriticalassets"

datadatadogsecuritymonitoringcriticalassets.DataDatadogSecurityMonitoringCriticalAssets_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogsecuritymonitoringcriticalassets"

datadatadogsecuritymonitoringcriticalassets.DataDatadogSecurityMonitoringCriticalAssets_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogsecuritymonitoringcriticalassets"

datadatadogsecuritymonitoringcriticalassets.DataDatadogSecurityMonitoringCriticalAssets_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatadogSecurityMonitoringCriticalAssets resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatadogSecurityMonitoringCriticalAssets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatadogSecurityMonitoringCriticalAssets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/data-sources/security_monitoring_critical_assets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogSecurityMonitoringCriticalAssets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.criticalAssets">CriticalAssets</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList">DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CriticalAssets`<sup>Required</sup> <a name="CriticalAssets" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.criticalAssets"></a>

```go
func CriticalAssets() DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList">DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogSecurityMonitoringCriticalAssetsConfig <a name="DataDatadogSecurityMonitoringCriticalAssetsConfig" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogsecuritymonitoringcriticalassets"

&datadatadogsecuritymonitoringcriticalassets.DataDatadogSecurityMonitoringCriticalAssetsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

### DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets <a name="DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogsecuritymonitoringcriticalassets"

&datadatadogsecuritymonitoringcriticalassets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList <a name="DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogsecuritymonitoringcriticalassets"

datadatadogsecuritymonitoringcriticalassets.NewDataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.get"></a>

```go
func Get(index *f64) DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference <a name="DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogsecuritymonitoringcriticalassets"

datadatadogsecuritymonitoringcriticalassets.NewDataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.ruleQuery">RuleQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets">DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `RuleQuery`<sup>Required</sup> <a name="RuleQuery" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.ruleQuery"></a>

```go
func RuleQuery() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets">DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets</a>

---



