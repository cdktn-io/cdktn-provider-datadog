# `dataDatadogActionConnection` Submodule <a name="`dataDatadogActionConnection` Submodule" id="@cdktn/provider-datadog.dataDatadogActionConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogActionConnection <a name="DataDatadogActionConnection" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/action_connection datadog_action_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnection(scope Construct, id *string, config DataDatadogActionConnectionConfig) DataDatadogActionConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig">DataDatadogActionConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig">DataDatadogActionConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.putHttp">PutHttp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.resetHttp">ResetHttp</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutHttp` <a name="PutHttp" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.putHttp"></a>

```go
func PutHttp(value DataDatadogActionConnectionHttp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp">DataDatadogActionConnectionHttp</a>

---

##### `ResetHttp` <a name="ResetHttp" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.resetHttp"></a>

```go
func ResetHttp()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogActionConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.DataDatadogActionConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.DataDatadogActionConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.DataDatadogActionConnection_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.DataDatadogActionConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatadogActionConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatadogActionConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatadogActionConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/action_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogActionConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.anthropic">Anthropic</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference">DataDatadogActionConnectionAnthropicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.asana">Asana</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference">DataDatadogActionConnectionAsanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.aws">Aws</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference">DataDatadogActionConnectionAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.azure">Azure</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference">DataDatadogActionConnectionAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.circleCi">CircleCi</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference">DataDatadogActionConnectionCircleCiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.clickup">Clickup</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference">DataDatadogActionConnectionClickupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.cloudflare">Cloudflare</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference">DataDatadogActionConnectionCloudflareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.configCat">ConfigCat</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference">DataDatadogActionConnectionConfigCatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.datadog">Datadog</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference">DataDatadogActionConnectionDatadogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.fastly">Fastly</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference">DataDatadogActionConnectionFastlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.freshservice">Freshservice</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference">DataDatadogActionConnectionFreshserviceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.gcp">Gcp</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference">DataDatadogActionConnectionGcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.gemini">Gemini</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference">DataDatadogActionConnectionGeminiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.gitlab">Gitlab</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference">DataDatadogActionConnectionGitlabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.greyNoise">GreyNoise</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference">DataDatadogActionConnectionGreyNoiseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.http">Http</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference">DataDatadogActionConnectionHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.launchDarkly">LaunchDarkly</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference">DataDatadogActionConnectionLaunchDarklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.notion">Notion</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference">DataDatadogActionConnectionNotionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.okta">Okta</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference">DataDatadogActionConnectionOktaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.openai">Openai</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference">DataDatadogActionConnectionOpenaiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference">DataDatadogActionConnectionServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.split">Split</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference">DataDatadogActionConnectionSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.statsig">Statsig</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference">DataDatadogActionConnectionStatsigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.virusTotal">VirusTotal</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference">DataDatadogActionConnectionVirusTotalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.httpInput">HttpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Anthropic`<sup>Required</sup> <a name="Anthropic" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.anthropic"></a>

```go
func Anthropic() DataDatadogActionConnectionAnthropicOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference">DataDatadogActionConnectionAnthropicOutputReference</a>

---

##### `Asana`<sup>Required</sup> <a name="Asana" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.asana"></a>

```go
func Asana() DataDatadogActionConnectionAsanaOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference">DataDatadogActionConnectionAsanaOutputReference</a>

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.aws"></a>

```go
func Aws() DataDatadogActionConnectionAwsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference">DataDatadogActionConnectionAwsOutputReference</a>

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.azure"></a>

```go
func Azure() DataDatadogActionConnectionAzureOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference">DataDatadogActionConnectionAzureOutputReference</a>

---

##### `CircleCi`<sup>Required</sup> <a name="CircleCi" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.circleCi"></a>

```go
func CircleCi() DataDatadogActionConnectionCircleCiOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference">DataDatadogActionConnectionCircleCiOutputReference</a>

---

##### `Clickup`<sup>Required</sup> <a name="Clickup" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.clickup"></a>

```go
func Clickup() DataDatadogActionConnectionClickupOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference">DataDatadogActionConnectionClickupOutputReference</a>

---

##### `Cloudflare`<sup>Required</sup> <a name="Cloudflare" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.cloudflare"></a>

```go
func Cloudflare() DataDatadogActionConnectionCloudflareOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference">DataDatadogActionConnectionCloudflareOutputReference</a>

---

##### `ConfigCat`<sup>Required</sup> <a name="ConfigCat" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.configCat"></a>

```go
func ConfigCat() DataDatadogActionConnectionConfigCatOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference">DataDatadogActionConnectionConfigCatOutputReference</a>

---

##### `Datadog`<sup>Required</sup> <a name="Datadog" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.datadog"></a>

```go
func Datadog() DataDatadogActionConnectionDatadogOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference">DataDatadogActionConnectionDatadogOutputReference</a>

---

##### `Fastly`<sup>Required</sup> <a name="Fastly" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.fastly"></a>

```go
func Fastly() DataDatadogActionConnectionFastlyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference">DataDatadogActionConnectionFastlyOutputReference</a>

---

##### `Freshservice`<sup>Required</sup> <a name="Freshservice" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.freshservice"></a>

```go
func Freshservice() DataDatadogActionConnectionFreshserviceOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference">DataDatadogActionConnectionFreshserviceOutputReference</a>

---

##### `Gcp`<sup>Required</sup> <a name="Gcp" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.gcp"></a>

```go
func Gcp() DataDatadogActionConnectionGcpOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference">DataDatadogActionConnectionGcpOutputReference</a>

---

##### `Gemini`<sup>Required</sup> <a name="Gemini" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.gemini"></a>

```go
func Gemini() DataDatadogActionConnectionGeminiOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference">DataDatadogActionConnectionGeminiOutputReference</a>

---

##### `Gitlab`<sup>Required</sup> <a name="Gitlab" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.gitlab"></a>

```go
func Gitlab() DataDatadogActionConnectionGitlabOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference">DataDatadogActionConnectionGitlabOutputReference</a>

---

##### `GreyNoise`<sup>Required</sup> <a name="GreyNoise" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.greyNoise"></a>

```go
func GreyNoise() DataDatadogActionConnectionGreyNoiseOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference">DataDatadogActionConnectionGreyNoiseOutputReference</a>

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.http"></a>

```go
func Http() DataDatadogActionConnectionHttpOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference">DataDatadogActionConnectionHttpOutputReference</a>

---

##### `LaunchDarkly`<sup>Required</sup> <a name="LaunchDarkly" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.launchDarkly"></a>

```go
func LaunchDarkly() DataDatadogActionConnectionLaunchDarklyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference">DataDatadogActionConnectionLaunchDarklyOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Notion`<sup>Required</sup> <a name="Notion" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.notion"></a>

```go
func Notion() DataDatadogActionConnectionNotionOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference">DataDatadogActionConnectionNotionOutputReference</a>

---

##### `Okta`<sup>Required</sup> <a name="Okta" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.okta"></a>

```go
func Okta() DataDatadogActionConnectionOktaOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference">DataDatadogActionConnectionOktaOutputReference</a>

---

##### `Openai`<sup>Required</sup> <a name="Openai" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.openai"></a>

```go
func Openai() DataDatadogActionConnectionOpenaiOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference">DataDatadogActionConnectionOpenaiOutputReference</a>

---

##### `ServiceNow`<sup>Required</sup> <a name="ServiceNow" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.serviceNow"></a>

```go
func ServiceNow() DataDatadogActionConnectionServiceNowOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference">DataDatadogActionConnectionServiceNowOutputReference</a>

---

##### `Split`<sup>Required</sup> <a name="Split" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.split"></a>

```go
func Split() DataDatadogActionConnectionSplitOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference">DataDatadogActionConnectionSplitOutputReference</a>

---

##### `Statsig`<sup>Required</sup> <a name="Statsig" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.statsig"></a>

```go
func Statsig() DataDatadogActionConnectionStatsigOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference">DataDatadogActionConnectionStatsigOutputReference</a>

---

##### `VirusTotal`<sup>Required</sup> <a name="VirusTotal" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.virusTotal"></a>

```go
func VirusTotal() DataDatadogActionConnectionVirusTotalOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference">DataDatadogActionConnectionVirusTotalOutputReference</a>

---

##### `HttpInput`<sup>Optional</sup> <a name="HttpInput" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.httpInput"></a>

```go
func HttpInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogActionConnectionAnthropic <a name="DataDatadogActionConnectionAnthropic" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropic.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionAnthropic {

}
```


### DataDatadogActionConnectionAnthropicApiKey <a name="DataDatadogActionConnectionAnthropicApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionAnthropicApiKey {

}
```


### DataDatadogActionConnectionAsana <a name="DataDatadogActionConnectionAsana" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsana"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsana.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionAsana {

}
```


### DataDatadogActionConnectionAsanaAccessToken <a name="DataDatadogActionConnectionAsanaAccessToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessToken.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionAsanaAccessToken {

}
```


### DataDatadogActionConnectionAws <a name="DataDatadogActionConnectionAws" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAws.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionAws {

}
```


### DataDatadogActionConnectionAwsAssumeRole <a name="DataDatadogActionConnectionAwsAssumeRole" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRole.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionAwsAssumeRole {

}
```


### DataDatadogActionConnectionAzure <a name="DataDatadogActionConnectionAzure" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzure.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionAzure {

}
```


### DataDatadogActionConnectionAzureTenant <a name="DataDatadogActionConnectionAzureTenant" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenant.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionAzureTenant {

}
```


### DataDatadogActionConnectionCircleCi <a name="DataDatadogActionConnectionCircleCi" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCi.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionCircleCi {

}
```


### DataDatadogActionConnectionCircleCiApiKey <a name="DataDatadogActionConnectionCircleCiApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionCircleCiApiKey {

}
```


### DataDatadogActionConnectionClickup <a name="DataDatadogActionConnectionClickup" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionClickup {

}
```


### DataDatadogActionConnectionClickupApiKey <a name="DataDatadogActionConnectionClickupApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionClickupApiKey {

}
```


### DataDatadogActionConnectionCloudflare <a name="DataDatadogActionConnectionCloudflare" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflare"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflare.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionCloudflare {

}
```


### DataDatadogActionConnectionCloudflareApiToken <a name="DataDatadogActionConnectionCloudflareApiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiToken.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionCloudflareApiToken {

}
```


### DataDatadogActionConnectionCloudflareGlobalApiToken <a name="DataDatadogActionConnectionCloudflareGlobalApiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiToken.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionCloudflareGlobalApiToken {

}
```


### DataDatadogActionConnectionConfig <a name="DataDatadogActionConnectionConfig" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Http: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.dataDatadogActionConnection.DataDatadogActionConnectionHttp,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.id">Id</a></code> | <code>*string</code> | ID for Connection. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.http">Http</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp">DataDatadogActionConnectionHttp</a></code> | http block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

ID for Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/action_connection#id DataDatadogActionConnection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Http`<sup>Optional</sup> <a name="Http" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.http"></a>

```go
Http DataDatadogActionConnectionHttp
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp">DataDatadogActionConnectionHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/action_connection#http DataDatadogActionConnection#http}

---

### DataDatadogActionConnectionConfigCat <a name="DataDatadogActionConnectionConfigCat" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionConfigCat {

}
```


### DataDatadogActionConnectionConfigCatSdkKey <a name="DataDatadogActionConnectionConfigCatSdkKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionConfigCatSdkKey {

}
```


### DataDatadogActionConnectionDatadog <a name="DataDatadogActionConnectionDatadog" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionDatadog {

}
```


### DataDatadogActionConnectionDatadogApiKey <a name="DataDatadogActionConnectionDatadogApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionDatadogApiKey {

}
```


### DataDatadogActionConnectionFastly <a name="DataDatadogActionConnectionFastly" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastly.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionFastly {

}
```


### DataDatadogActionConnectionFastlyApiKey <a name="DataDatadogActionConnectionFastlyApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionFastlyApiKey {

}
```


### DataDatadogActionConnectionFreshservice <a name="DataDatadogActionConnectionFreshservice" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshservice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshservice.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionFreshservice {

}
```


### DataDatadogActionConnectionFreshserviceApiKey <a name="DataDatadogActionConnectionFreshserviceApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionFreshserviceApiKey {

}
```


### DataDatadogActionConnectionGcp <a name="DataDatadogActionConnectionGcp" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionGcp {

}
```


### DataDatadogActionConnectionGcpServiceAccount <a name="DataDatadogActionConnectionGcpServiceAccount" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionGcpServiceAccount {

}
```


### DataDatadogActionConnectionGemini <a name="DataDatadogActionConnectionGemini" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGemini"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGemini.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionGemini {

}
```


### DataDatadogActionConnectionGeminiApiKey <a name="DataDatadogActionConnectionGeminiApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionGeminiApiKey {

}
```


### DataDatadogActionConnectionGitlab <a name="DataDatadogActionConnectionGitlab" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlab.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionGitlab {

}
```


### DataDatadogActionConnectionGitlabApiKey <a name="DataDatadogActionConnectionGitlabApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionGitlabApiKey {

}
```


### DataDatadogActionConnectionGreyNoise <a name="DataDatadogActionConnectionGreyNoise" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoise"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoise.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionGreyNoise {

}
```


### DataDatadogActionConnectionGreyNoiseApiKey <a name="DataDatadogActionConnectionGreyNoiseApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionGreyNoiseApiKey {

}
```


### DataDatadogActionConnectionHttp <a name="DataDatadogActionConnectionHttp" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionHttp {
	TokenAuth: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp.property.tokenAuth">TokenAuth</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth">DataDatadogActionConnectionHttpTokenAuth</a></code> | token_auth block. |

---

##### `TokenAuth`<sup>Optional</sup> <a name="TokenAuth" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp.property.tokenAuth"></a>

```go
TokenAuth DataDatadogActionConnectionHttpTokenAuth
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth">DataDatadogActionConnectionHttpTokenAuth</a>

token_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/action_connection#token_auth DataDatadogActionConnection#token_auth}

---

### DataDatadogActionConnectionHttpTokenAuth <a name="DataDatadogActionConnectionHttpTokenAuth" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionHttpTokenAuth {
	Header: interface{},
	Token: interface{},
	UrlParameter: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth.property.header">Header</a></code> | <code>interface{}</code> | header block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth.property.token">Token</a></code> | <code>interface{}</code> | token block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth.property.urlParameter">UrlParameter</a></code> | <code>interface{}</code> | url_parameter block. |

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth.property.header"></a>

```go
Header interface{}
```

- *Type:* interface{}

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/action_connection#header DataDatadogActionConnection#header}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth.property.token"></a>

```go
Token interface{}
```

- *Type:* interface{}

token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/action_connection#token DataDatadogActionConnection#token}

---

##### `UrlParameter`<sup>Optional</sup> <a name="UrlParameter" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth.property.urlParameter"></a>

```go
UrlParameter interface{}
```

- *Type:* interface{}

url_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/action_connection#url_parameter DataDatadogActionConnection#url_parameter}

---

### DataDatadogActionConnectionHttpTokenAuthBody <a name="DataDatadogActionConnectionHttpTokenAuthBody" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBody"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBody.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionHttpTokenAuthBody {

}
```


### DataDatadogActionConnectionHttpTokenAuthHeader <a name="DataDatadogActionConnectionHttpTokenAuthHeader" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeader.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionHttpTokenAuthHeader {

}
```


### DataDatadogActionConnectionHttpTokenAuthToken <a name="DataDatadogActionConnectionHttpTokenAuthToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthToken.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionHttpTokenAuthToken {

}
```


### DataDatadogActionConnectionHttpTokenAuthUrlParameter <a name="DataDatadogActionConnectionHttpTokenAuthUrlParameter" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter {

}
```


### DataDatadogActionConnectionLaunchDarkly <a name="DataDatadogActionConnectionLaunchDarkly" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarkly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarkly.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionLaunchDarkly {

}
```


### DataDatadogActionConnectionLaunchDarklyApiKey <a name="DataDatadogActionConnectionLaunchDarklyApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionLaunchDarklyApiKey {

}
```


### DataDatadogActionConnectionNotion <a name="DataDatadogActionConnectionNotion" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionNotion {

}
```


### DataDatadogActionConnectionNotionApiKey <a name="DataDatadogActionConnectionNotionApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionNotionApiKey {

}
```


### DataDatadogActionConnectionOkta <a name="DataDatadogActionConnectionOkta" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOkta"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOkta.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionOkta {

}
```


### DataDatadogActionConnectionOktaApiToken <a name="DataDatadogActionConnectionOktaApiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiToken.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionOktaApiToken {

}
```


### DataDatadogActionConnectionOpenai <a name="DataDatadogActionConnectionOpenai" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenai"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenai.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionOpenai {

}
```


### DataDatadogActionConnectionOpenaiApiKey <a name="DataDatadogActionConnectionOpenaiApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionOpenaiApiKey {

}
```


### DataDatadogActionConnectionServiceNow <a name="DataDatadogActionConnectionServiceNow" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionServiceNow {

}
```


### DataDatadogActionConnectionServiceNowBasicAuth <a name="DataDatadogActionConnectionServiceNowBasicAuth" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionServiceNowBasicAuth {

}
```


### DataDatadogActionConnectionSplit <a name="DataDatadogActionConnectionSplit" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionSplit {

}
```


### DataDatadogActionConnectionSplitApiKey <a name="DataDatadogActionConnectionSplitApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionSplitApiKey {

}
```


### DataDatadogActionConnectionStatsig <a name="DataDatadogActionConnectionStatsig" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionStatsig {

}
```


### DataDatadogActionConnectionStatsigApiKey <a name="DataDatadogActionConnectionStatsigApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionStatsigApiKey {

}
```


### DataDatadogActionConnectionVirusTotal <a name="DataDatadogActionConnectionVirusTotal" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionVirusTotal {

}
```


### DataDatadogActionConnectionVirusTotalApiKey <a name="DataDatadogActionConnectionVirusTotalApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

&datadatadogactionconnection.DataDatadogActionConnectionVirusTotalApiKey {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogActionConnectionAnthropicApiKeyOutputReference <a name="DataDatadogActionConnectionAnthropicApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionAnthropicApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionAnthropicApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionAnthropicOutputReference <a name="DataDatadogActionConnectionAnthropicOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionAnthropicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionAnthropicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference">DataDatadogActionConnectionAnthropicApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.property.apiKey"></a>

```go
func ApiKey() DataDatadogActionConnectionAnthropicApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicApiKeyOutputReference">DataDatadogActionConnectionAnthropicApiKeyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAnthropicOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionAsanaAccessTokenOutputReference <a name="DataDatadogActionConnectionAsanaAccessTokenOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionAsanaAccessTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionAsanaAccessTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.property.accessToken">AccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.property.accessToken"></a>

```go
func AccessToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionAsanaOutputReference <a name="DataDatadogActionConnectionAsanaOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionAsanaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionAsanaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.property.accessToken">AccessToken</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference">DataDatadogActionConnectionAsanaAccessTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.property.accessToken"></a>

```go
func AccessToken() DataDatadogActionConnectionAsanaAccessTokenOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaAccessTokenOutputReference">DataDatadogActionConnectionAsanaAccessTokenOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAsanaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionAwsAssumeRoleOutputReference <a name="DataDatadogActionConnectionAwsAssumeRoleOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionAwsAssumeRoleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionAwsAssumeRoleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionAwsOutputReference <a name="DataDatadogActionConnectionAwsOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionAwsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionAwsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.property.assumeRole">AssumeRole</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference">DataDatadogActionConnectionAwsAssumeRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssumeRole`<sup>Required</sup> <a name="AssumeRole" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.property.assumeRole"></a>

```go
func AssumeRole() DataDatadogActionConnectionAwsAssumeRoleOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference">DataDatadogActionConnectionAwsAssumeRoleOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionAzureOutputReference <a name="DataDatadogActionConnectionAzureOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionAzureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionAzureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.property.tenant">Tenant</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference">DataDatadogActionConnectionAzureTenantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.property.tenant"></a>

```go
func Tenant() DataDatadogActionConnectionAzureTenantOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference">DataDatadogActionConnectionAzureTenantOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionAzureTenantOutputReference <a name="DataDatadogActionConnectionAzureTenantOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionAzureTenantOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionAzureTenantOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.appClientId">AppClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.customScopes">CustomScopes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppClientId`<sup>Required</sup> <a name="AppClientId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.appClientId"></a>

```go
func AppClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `CustomScopes`<sup>Required</sup> <a name="CustomScopes" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.customScopes"></a>

```go
func CustomScopes() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAzureTenantOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionCircleCiApiKeyOutputReference <a name="DataDatadogActionConnectionCircleCiApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionCircleCiApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionCircleCiApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionCircleCiOutputReference <a name="DataDatadogActionConnectionCircleCiOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionCircleCiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionCircleCiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference">DataDatadogActionConnectionCircleCiApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.property.apiKey"></a>

```go
func ApiKey() DataDatadogActionConnectionCircleCiApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiApiKeyOutputReference">DataDatadogActionConnectionCircleCiApiKeyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCircleCiOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionClickupApiKeyOutputReference <a name="DataDatadogActionConnectionClickupApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionClickupApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionClickupApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionClickupOutputReference <a name="DataDatadogActionConnectionClickupOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionClickupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionClickupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference">DataDatadogActionConnectionClickupApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.property.apiKey"></a>

```go
func ApiKey() DataDatadogActionConnectionClickupApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupApiKeyOutputReference">DataDatadogActionConnectionClickupApiKeyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionClickupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionCloudflareApiTokenOutputReference <a name="DataDatadogActionConnectionCloudflareApiTokenOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionCloudflareApiTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionCloudflareApiTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference <a name="DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.property.authEmail">AuthEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.property.globalApiKey">GlobalApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthEmail`<sup>Required</sup> <a name="AuthEmail" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.property.authEmail"></a>

```go
func AuthEmail() *string
```

- *Type:* *string

---

##### `GlobalApiKey`<sup>Required</sup> <a name="GlobalApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.property.globalApiKey"></a>

```go
func GlobalApiKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionCloudflareOutputReference <a name="DataDatadogActionConnectionCloudflareOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionCloudflareOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionCloudflareOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.property.apiToken">ApiToken</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference">DataDatadogActionConnectionCloudflareApiTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.property.globalApiToken">GlobalApiToken</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference">DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.property.apiToken"></a>

```go
func ApiToken() DataDatadogActionConnectionCloudflareApiTokenOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareApiTokenOutputReference">DataDatadogActionConnectionCloudflareApiTokenOutputReference</a>

---

##### `GlobalApiToken`<sup>Required</sup> <a name="GlobalApiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.property.globalApiToken"></a>

```go
func GlobalApiToken() DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference">DataDatadogActionConnectionCloudflareGlobalApiTokenOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionCloudflareOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionConfigCatOutputReference <a name="DataDatadogActionConnectionConfigCatOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionConfigCatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionConfigCatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.property.sdkKey">SdkKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference">DataDatadogActionConnectionConfigCatSdkKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SdkKey`<sup>Required</sup> <a name="SdkKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.property.sdkKey"></a>

```go
func SdkKey() DataDatadogActionConnectionConfigCatSdkKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference">DataDatadogActionConnectionConfigCatSdkKeyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionConfigCatSdkKeyOutputReference <a name="DataDatadogActionConnectionConfigCatSdkKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionConfigCatSdkKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionConfigCatSdkKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.property.apiPassword">ApiPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.property.apiUsername">ApiUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.property.sdkKey">SdkKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiPassword`<sup>Required</sup> <a name="ApiPassword" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.property.apiPassword"></a>

```go
func ApiPassword() *string
```

- *Type:* *string

---

##### `ApiUsername`<sup>Required</sup> <a name="ApiUsername" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.property.apiUsername"></a>

```go
func ApiUsername() *string
```

- *Type:* *string

---

##### `SdkKey`<sup>Required</sup> <a name="SdkKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.property.sdkKey"></a>

```go
func SdkKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfigCatSdkKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionDatadogApiKeyOutputReference <a name="DataDatadogActionConnectionDatadogApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionDatadogApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionDatadogApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.appKey">AppKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.datacenter">Datacenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.subdomain">Subdomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `AppKey`<sup>Required</sup> <a name="AppKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.appKey"></a>

```go
func AppKey() *string
```

- *Type:* *string

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.datacenter"></a>

```go
func Datacenter() *string
```

- *Type:* *string

---

##### `Subdomain`<sup>Required</sup> <a name="Subdomain" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.subdomain"></a>

```go
func Subdomain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionDatadogOutputReference <a name="DataDatadogActionConnectionDatadogOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionDatadogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionDatadogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference">DataDatadogActionConnectionDatadogApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.property.apiKey"></a>

```go
func ApiKey() DataDatadogActionConnectionDatadogApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogApiKeyOutputReference">DataDatadogActionConnectionDatadogApiKeyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionDatadogOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionFastlyApiKeyOutputReference <a name="DataDatadogActionConnectionFastlyApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionFastlyApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionFastlyApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionFastlyOutputReference <a name="DataDatadogActionConnectionFastlyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionFastlyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionFastlyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference">DataDatadogActionConnectionFastlyApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.property.apiKey"></a>

```go
func ApiKey() DataDatadogActionConnectionFastlyApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyApiKeyOutputReference">DataDatadogActionConnectionFastlyApiKeyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFastlyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionFreshserviceApiKeyOutputReference <a name="DataDatadogActionConnectionFreshserviceApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionFreshserviceApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionFreshserviceApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionFreshserviceOutputReference <a name="DataDatadogActionConnectionFreshserviceOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionFreshserviceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionFreshserviceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference">DataDatadogActionConnectionFreshserviceApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.property.apiKey"></a>

```go
func ApiKey() DataDatadogActionConnectionFreshserviceApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceApiKeyOutputReference">DataDatadogActionConnectionFreshserviceApiKeyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionFreshserviceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionGcpOutputReference <a name="DataDatadogActionConnectionGcpOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionGcpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionGcpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference">DataDatadogActionConnectionGcpServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() DataDatadogActionConnectionGcpServiceAccountOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference">DataDatadogActionConnectionGcpServiceAccountOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionGcpServiceAccountOutputReference <a name="DataDatadogActionConnectionGcpServiceAccountOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionGcpServiceAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionGcpServiceAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGcpServiceAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionGeminiApiKeyOutputReference <a name="DataDatadogActionConnectionGeminiApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionGeminiApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionGeminiApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionGeminiOutputReference <a name="DataDatadogActionConnectionGeminiOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionGeminiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionGeminiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference">DataDatadogActionConnectionGeminiApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.property.apiKey"></a>

```go
func ApiKey() DataDatadogActionConnectionGeminiApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiApiKeyOutputReference">DataDatadogActionConnectionGeminiApiKeyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGeminiOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionGitlabApiKeyOutputReference <a name="DataDatadogActionConnectionGitlabApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionGitlabApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionGitlabApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionGitlabOutputReference <a name="DataDatadogActionConnectionGitlabOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionGitlabOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionGitlabOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference">DataDatadogActionConnectionGitlabApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.property.apiKey"></a>

```go
func ApiKey() DataDatadogActionConnectionGitlabApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabApiKeyOutputReference">DataDatadogActionConnectionGitlabApiKeyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGitlabOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionGreyNoiseApiKeyOutputReference <a name="DataDatadogActionConnectionGreyNoiseApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionGreyNoiseApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionGreyNoiseApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionGreyNoiseOutputReference <a name="DataDatadogActionConnectionGreyNoiseOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionGreyNoiseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionGreyNoiseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference">DataDatadogActionConnectionGreyNoiseApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.property.apiKey"></a>

```go
func ApiKey() DataDatadogActionConnectionGreyNoiseApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseApiKeyOutputReference">DataDatadogActionConnectionGreyNoiseApiKeyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionGreyNoiseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionHttpOutputReference <a name="DataDatadogActionConnectionHttpOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionHttpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionHttpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.putTokenAuth">PutTokenAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.resetTokenAuth">ResetTokenAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTokenAuth` <a name="PutTokenAuth" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.putTokenAuth"></a>

```go
func PutTokenAuth(value DataDatadogActionConnectionHttpTokenAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.putTokenAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth">DataDatadogActionConnectionHttpTokenAuth</a>

---

##### `ResetTokenAuth` <a name="ResetTokenAuth" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.resetTokenAuth"></a>

```go
func ResetTokenAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.tokenAuth">TokenAuth</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference">DataDatadogActionConnectionHttpTokenAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.tokenAuthInput">TokenAuthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `TokenAuth`<sup>Required</sup> <a name="TokenAuth" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.tokenAuth"></a>

```go
func TokenAuth() DataDatadogActionConnectionHttpTokenAuthOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference">DataDatadogActionConnectionHttpTokenAuthOutputReference</a>

---

##### `TokenAuthInput`<sup>Optional</sup> <a name="TokenAuthInput" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.tokenAuthInput"></a>

```go
func TokenAuthInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionHttpTokenAuthBodyOutputReference <a name="DataDatadogActionConnectionHttpTokenAuthBodyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionHttpTokenAuthBodyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionHttpTokenAuthBodyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionHttpTokenAuthHeaderList <a name="DataDatadogActionConnectionHttpTokenAuthHeaderList" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionHttpTokenAuthHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogActionConnectionHttpTokenAuthHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.get"></a>

```go
func Get(index *f64) DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference <a name="DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionHttpTokenAuthHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionHttpTokenAuthOutputReference <a name="DataDatadogActionConnectionHttpTokenAuthOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionHttpTokenAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionHttpTokenAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putToken">PutToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putUrlParameter">PutUrlParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resetUrlParameter">ResetUrlParameter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putHeader"></a>

```go
func PutHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutToken` <a name="PutToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putToken"></a>

```go
func PutToken(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putToken.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUrlParameter` <a name="PutUrlParameter" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putUrlParameter"></a>

```go
func PutUrlParameter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putUrlParameter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHeader` <a name="ResetHeader" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetToken` <a name="ResetToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resetToken"></a>

```go
func ResetToken()
```

##### `ResetUrlParameter` <a name="ResetUrlParameter" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resetUrlParameter"></a>

```go
func ResetUrlParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.body">Body</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference">DataDatadogActionConnectionHttpTokenAuthBodyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.header">Header</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList">DataDatadogActionConnectionHttpTokenAuthHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.token">Token</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList">DataDatadogActionConnectionHttpTokenAuthTokenList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.urlParameter">UrlParameter</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList">DataDatadogActionConnectionHttpTokenAuthUrlParameterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.tokenInput">TokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.urlParameterInput">UrlParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.body"></a>

```go
func Body() DataDatadogActionConnectionHttpTokenAuthBodyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference">DataDatadogActionConnectionHttpTokenAuthBodyOutputReference</a>

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.header"></a>

```go
func Header() DataDatadogActionConnectionHttpTokenAuthHeaderList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList">DataDatadogActionConnectionHttpTokenAuthHeaderList</a>

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.token"></a>

```go
func Token() DataDatadogActionConnectionHttpTokenAuthTokenList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList">DataDatadogActionConnectionHttpTokenAuthTokenList</a>

---

##### `UrlParameter`<sup>Required</sup> <a name="UrlParameter" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.urlParameter"></a>

```go
func UrlParameter() DataDatadogActionConnectionHttpTokenAuthUrlParameterList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList">DataDatadogActionConnectionHttpTokenAuthUrlParameterList</a>

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.tokenInput"></a>

```go
func TokenInput() interface{}
```

- *Type:* interface{}

---

##### `UrlParameterInput`<sup>Optional</sup> <a name="UrlParameterInput" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.urlParameterInput"></a>

```go
func UrlParameterInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionHttpTokenAuthTokenList <a name="DataDatadogActionConnectionHttpTokenAuthTokenList" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionHttpTokenAuthTokenList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogActionConnectionHttpTokenAuthTokenList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.get"></a>

```go
func Get(index *f64) DataDatadogActionConnectionHttpTokenAuthTokenOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionHttpTokenAuthTokenOutputReference <a name="DataDatadogActionConnectionHttpTokenAuthTokenOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionHttpTokenAuthTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogActionConnectionHttpTokenAuthTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionHttpTokenAuthUrlParameterList <a name="DataDatadogActionConnectionHttpTokenAuthUrlParameterList" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionHttpTokenAuthUrlParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogActionConnectionHttpTokenAuthUrlParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.get"></a>

```go
func Get(index *f64) DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference <a name="DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference <a name="DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionLaunchDarklyApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionLaunchDarklyOutputReference <a name="DataDatadogActionConnectionLaunchDarklyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionLaunchDarklyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionLaunchDarklyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference">DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.property.apiKey"></a>

```go
func ApiKey() DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference">DataDatadogActionConnectionLaunchDarklyApiKeyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionLaunchDarklyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionNotionApiKeyOutputReference <a name="DataDatadogActionConnectionNotionApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionNotionApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionNotionApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionNotionOutputReference <a name="DataDatadogActionConnectionNotionOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionNotionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionNotionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference">DataDatadogActionConnectionNotionApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.property.apiKey"></a>

```go
func ApiKey() DataDatadogActionConnectionNotionApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionApiKeyOutputReference">DataDatadogActionConnectionNotionApiKeyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionNotionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionOktaApiTokenOutputReference <a name="DataDatadogActionConnectionOktaApiTokenOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionOktaApiTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionOktaApiTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionOktaOutputReference <a name="DataDatadogActionConnectionOktaOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionOktaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionOktaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.property.apiToken">ApiToken</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference">DataDatadogActionConnectionOktaApiTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.property.apiToken"></a>

```go
func ApiToken() DataDatadogActionConnectionOktaApiTokenOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaApiTokenOutputReference">DataDatadogActionConnectionOktaApiTokenOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOktaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionOpenaiApiKeyOutputReference <a name="DataDatadogActionConnectionOpenaiApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionOpenaiApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionOpenaiApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionOpenaiOutputReference <a name="DataDatadogActionConnectionOpenaiOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionOpenaiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionOpenaiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference">DataDatadogActionConnectionOpenaiApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.property.apiKey"></a>

```go
func ApiKey() DataDatadogActionConnectionOpenaiApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiApiKeyOutputReference">DataDatadogActionConnectionOpenaiApiKeyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionOpenaiOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionServiceNowBasicAuthOutputReference <a name="DataDatadogActionConnectionServiceNowBasicAuthOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionServiceNowBasicAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionServiceNowBasicAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionServiceNowOutputReference <a name="DataDatadogActionConnectionServiceNowOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionServiceNowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionServiceNowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.property.basicAuth">BasicAuth</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference">DataDatadogActionConnectionServiceNowBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BasicAuth`<sup>Required</sup> <a name="BasicAuth" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.property.basicAuth"></a>

```go
func BasicAuth() DataDatadogActionConnectionServiceNowBasicAuthOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowBasicAuthOutputReference">DataDatadogActionConnectionServiceNowBasicAuthOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionServiceNowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionSplitApiKeyOutputReference <a name="DataDatadogActionConnectionSplitApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionSplitApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionSplitApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionSplitOutputReference <a name="DataDatadogActionConnectionSplitOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionSplitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionSplitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference">DataDatadogActionConnectionSplitApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.property.apiKey"></a>

```go
func ApiKey() DataDatadogActionConnectionSplitApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitApiKeyOutputReference">DataDatadogActionConnectionSplitApiKeyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionSplitOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionStatsigApiKeyOutputReference <a name="DataDatadogActionConnectionStatsigApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionStatsigApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionStatsigApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionStatsigOutputReference <a name="DataDatadogActionConnectionStatsigOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionStatsigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionStatsigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference">DataDatadogActionConnectionStatsigApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.property.apiKey"></a>

```go
func ApiKey() DataDatadogActionConnectionStatsigApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigApiKeyOutputReference">DataDatadogActionConnectionStatsigApiKeyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionStatsigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionVirusTotalApiKeyOutputReference <a name="DataDatadogActionConnectionVirusTotalApiKeyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionVirusTotalApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionVirusTotalApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatadogActionConnectionVirusTotalOutputReference <a name="DataDatadogActionConnectionVirusTotalOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/datadatadogactionconnection"

datadatadogactionconnection.NewDataDatadogActionConnectionVirusTotalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatadogActionConnectionVirusTotalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference">DataDatadogActionConnectionVirusTotalApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.property.apiKey"></a>

```go
func ApiKey() DataDatadogActionConnectionVirusTotalApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalApiKeyOutputReference">DataDatadogActionConnectionVirusTotalApiKeyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionVirusTotalOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



