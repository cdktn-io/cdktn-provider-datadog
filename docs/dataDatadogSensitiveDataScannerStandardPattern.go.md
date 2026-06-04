# `dataDatadogSensitiveDataScannerStandardPattern` Submodule <a name="`dataDatadogSensitiveDataScannerStandardPattern` Submodule" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogSensitiveDataScannerStandardPattern <a name="DataDatadogSensitiveDataScannerStandardPattern" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/data-sources/sensitive_data_scanner_standard_pattern datadog_sensitive_data_scanner_standard_pattern}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogsensitivedatascannerstandardpattern"

datadatadogsensitivedatascannerstandardpattern.NewDataDatadogSensitiveDataScannerStandardPattern(scope Construct, id *string, config DataDatadogSensitiveDataScannerStandardPatternConfig) DataDatadogSensitiveDataScannerStandardPattern
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig">DataDatadogSensitiveDataScannerStandardPatternConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig">DataDatadogSensitiveDataScannerStandardPatternConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetStandardPatternId">ResetStandardPatternId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetId"></a>

```go
func ResetId()
```

##### `ResetStandardPatternId` <a name="ResetStandardPatternId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetStandardPatternId"></a>

```go
func ResetStandardPatternId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogSensitiveDataScannerStandardPattern resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogsensitivedatascannerstandardpattern"

datadatadogsensitivedatascannerstandardpattern.DataDatadogSensitiveDataScannerStandardPattern_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogsensitivedatascannerstandardpattern"

datadatadogsensitivedatascannerstandardpattern.DataDatadogSensitiveDataScannerStandardPattern_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogsensitivedatascannerstandardpattern"

datadatadogsensitivedatascannerstandardpattern.DataDatadogSensitiveDataScannerStandardPattern_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogsensitivedatascannerstandardpattern"

datadatadogsensitivedatascannerstandardpattern.DataDatadogSensitiveDataScannerStandardPattern_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatadogSensitiveDataScannerStandardPattern resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatadogSensitiveDataScannerStandardPattern to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatadogSensitiveDataScannerStandardPattern that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/data-sources/sensitive_data_scanner_standard_pattern#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogSensitiveDataScannerStandardPattern to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.includedKeywords">IncludedKeywords</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.standardPatternIdInput">StandardPatternIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.standardPatternId">StandardPatternId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IncludedKeywords`<sup>Required</sup> <a name="IncludedKeywords" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.includedKeywords"></a>

```go
func IncludedKeywords() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StandardPatternIdInput`<sup>Optional</sup> <a name="StandardPatternIdInput" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.standardPatternIdInput"></a>

```go
func StandardPatternIdInput() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `StandardPatternId`<sup>Required</sup> <a name="StandardPatternId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.standardPatternId"></a>

```go
func StandardPatternId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogSensitiveDataScannerStandardPatternConfig <a name="DataDatadogSensitiveDataScannerStandardPatternConfig" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogsensitivedatascannerstandardpattern"

&datadatadogsensitivedatascannerstandardpattern.DataDatadogSensitiveDataScannerStandardPatternConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: *string,
	Id: *string,
	StandardPatternId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.filter">Filter</a></code> | <code>*string</code> | Filter all the Datadog standard patterns by name. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/data-sources/sensitive_data_scanner_standard_pattern#id DataDatadogSensitiveDataScannerStandardPattern#id}. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.standardPatternId">StandardPatternId</a></code> | <code>*string</code> | Stable ID of the Datadog standard pattern to retrieve. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Filter all the Datadog standard patterns by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/data-sources/sensitive_data_scanner_standard_pattern#filter DataDatadogSensitiveDataScannerStandardPattern#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/data-sources/sensitive_data_scanner_standard_pattern#id DataDatadogSensitiveDataScannerStandardPattern#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StandardPatternId`<sup>Optional</sup> <a name="StandardPatternId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.standardPatternId"></a>

```go
StandardPatternId *string
```

- *Type:* *string

Stable ID of the Datadog standard pattern to retrieve.

This can be set directly to avoid Terraform configs breaking when Datadog renames a standard pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/data-sources/sensitive_data_scanner_standard_pattern#standard_pattern_id DataDatadogSensitiveDataScannerStandardPattern#standard_pattern_id}

---



