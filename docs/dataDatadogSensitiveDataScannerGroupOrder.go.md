# `dataDatadogSensitiveDataScannerGroupOrder` Submodule <a name="`dataDatadogSensitiveDataScannerGroupOrder` Submodule" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogSensitiveDataScannerGroupOrder <a name="DataDatadogSensitiveDataScannerGroupOrder" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/data-sources/sensitive_data_scanner_group_order datadog_sensitive_data_scanner_group_order}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogsensitivedatascannergrouporder"

datadatadogsensitivedatascannergrouporder.NewDataDatadogSensitiveDataScannerGroupOrder(scope Construct, id *string, config DataDatadogSensitiveDataScannerGroupOrderConfig) DataDatadogSensitiveDataScannerGroupOrder
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig">DataDatadogSensitiveDataScannerGroupOrderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig">DataDatadogSensitiveDataScannerGroupOrderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogSensitiveDataScannerGroupOrder resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogsensitivedatascannergrouporder"

datadatadogsensitivedatascannergrouporder.DataDatadogSensitiveDataScannerGroupOrder_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogsensitivedatascannergrouporder"

datadatadogsensitivedatascannergrouporder.DataDatadogSensitiveDataScannerGroupOrder_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogsensitivedatascannergrouporder"

datadatadogsensitivedatascannergrouporder.DataDatadogSensitiveDataScannerGroupOrder_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogsensitivedatascannergrouporder"

datadatadogsensitivedatascannergrouporder.DataDatadogSensitiveDataScannerGroupOrder_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatadogSensitiveDataScannerGroupOrder resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatadogSensitiveDataScannerGroupOrder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatadogSensitiveDataScannerGroupOrder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/data-sources/sensitive_data_scanner_group_order#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogSensitiveDataScannerGroupOrder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.groupIds">GroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `GroupIds`<sup>Required</sup> <a name="GroupIds" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.groupIds"></a>

```go
func GroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrder.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogSensitiveDataScannerGroupOrderConfig <a name="DataDatadogSensitiveDataScannerGroupOrderConfig" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v13/datadatadogsensitivedatascannergrouporder"

&datadatadogsensitivedatascannergrouporder.DataDatadogSensitiveDataScannerGroupOrderConfig {
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
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerGroupOrder.DataDatadogSensitiveDataScannerGroupOrderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---



