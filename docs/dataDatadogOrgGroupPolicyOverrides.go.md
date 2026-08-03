# `dataDatadogOrgGroupPolicyOverrides` Submodule <a name="`dataDatadogOrgGroupPolicyOverrides` Submodule" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogOrgGroupPolicyOverrides <a name="DataDatadogOrgGroupPolicyOverrides" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/org_group_policy_overrides datadog_org_group_policy_overrides}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogorggrouppolicyoverrides"

datadatadogorggrouppolicyoverrides.NewDataDatadogOrgGroupPolicyOverrides(scope Construct, id *string, config DataDatadogOrgGroupPolicyOverridesConfig) DataDatadogOrgGroupPolicyOverrides
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig">DataDatadogOrgGroupPolicyOverridesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig">DataDatadogOrgGroupPolicyOverridesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.resetOrgUuid">ResetOrgUuid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.resetPolicyId">ResetPolicyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetOrgUuid` <a name="ResetOrgUuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.resetOrgUuid"></a>

```go
func ResetOrgUuid()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.resetPolicyId"></a>

```go
func ResetPolicyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogOrgGroupPolicyOverrides resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogorggrouppolicyoverrides"

datadatadogorggrouppolicyoverrides.DataDatadogOrgGroupPolicyOverrides_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogorggrouppolicyoverrides"

datadatadogorggrouppolicyoverrides.DataDatadogOrgGroupPolicyOverrides_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogorggrouppolicyoverrides"

datadatadogorggrouppolicyoverrides.DataDatadogOrgGroupPolicyOverrides_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogorggrouppolicyoverrides"

datadatadogorggrouppolicyoverrides.DataDatadogOrgGroupPolicyOverrides_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatadogOrgGroupPolicyOverrides resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatadogOrgGroupPolicyOverrides to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatadogOrgGroupPolicyOverrides that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/org_group_policy_overrides#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogOrgGroupPolicyOverrides to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.overrides">Overrides</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList">DataDatadogOrgGroupPolicyOverridesOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgGroupIdInput">OrgGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgUuidInput">OrgUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgGroupId">OrgGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgUuid">OrgUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.overrides"></a>

```go
func Overrides() DataDatadogOrgGroupPolicyOverridesOverridesList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList">DataDatadogOrgGroupPolicyOverridesOverridesList</a>

---

##### `OrgGroupIdInput`<sup>Optional</sup> <a name="OrgGroupIdInput" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgGroupIdInput"></a>

```go
func OrgGroupIdInput() *string
```

- *Type:* *string

---

##### `OrgUuidInput`<sup>Optional</sup> <a name="OrgUuidInput" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgUuidInput"></a>

```go
func OrgUuidInput() *string
```

- *Type:* *string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `OrgGroupId`<sup>Required</sup> <a name="OrgGroupId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgGroupId"></a>

```go
func OrgGroupId() *string
```

- *Type:* *string

---

##### `OrgUuid`<sup>Required</sup> <a name="OrgUuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.orgUuid"></a>

```go
func OrgUuid() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverrides.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogOrgGroupPolicyOverridesConfig <a name="DataDatadogOrgGroupPolicyOverridesConfig" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogorggrouppolicyoverrides"

&datadatadogorggrouppolicyoverrides.DataDatadogOrgGroupPolicyOverridesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	OrgGroupId: *string,
	OrgUuid: *string,
	PolicyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.orgGroupId">OrgGroupId</a></code> | <code>*string</code> | The UUID of the org group whose overrides to list. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.orgUuid">OrgUuid</a></code> | <code>*string</code> | Filter overrides to those for the given organization. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | Filter overrides to those on the given policy. Must be a valid UUID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OrgGroupId`<sup>Required</sup> <a name="OrgGroupId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.orgGroupId"></a>

```go
OrgGroupId *string
```

- *Type:* *string

The UUID of the org group whose overrides to list. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/org_group_policy_overrides#org_group_id DataDatadogOrgGroupPolicyOverrides#org_group_id}

---

##### `OrgUuid`<sup>Optional</sup> <a name="OrgUuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.orgUuid"></a>

```go
OrgUuid *string
```

- *Type:* *string

Filter overrides to those for the given organization.

Applied client-side after the List call because the API does not accept an `org_uuid` filter on this endpoint. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/org_group_policy_overrides#org_uuid DataDatadogOrgGroupPolicyOverrides#org_uuid}

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Filter overrides to those on the given policy. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/org_group_policy_overrides#policy_id DataDatadogOrgGroupPolicyOverrides#policy_id}

---

### DataDatadogOrgGroupPolicyOverridesOverrides <a name="DataDatadogOrgGroupPolicyOverridesOverrides" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogorggrouppolicyoverrides"

&datadatadogorggrouppolicyoverrides.DataDatadogOrgGroupPolicyOverridesOverrides {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogOrgGroupPolicyOverridesOverridesList <a name="DataDatadogOrgGroupPolicyOverridesOverridesList" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogorggrouppolicyoverrides"

datadatadogorggrouppolicyoverrides.NewDataDatadogOrgGroupPolicyOverridesOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogOrgGroupPolicyOverridesOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.get"></a>

```go
func Get(index *f64) DataDatadogOrgGroupPolicyOverridesOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDatadogOrgGroupPolicyOverridesOverridesOutputReference <a name="DataDatadogOrgGroupPolicyOverridesOverridesOutputReference" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogorggrouppolicyoverrides"

datadatadogorggrouppolicyoverrides.NewDataDatadogOrgGroupPolicyOverridesOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogOrgGroupPolicyOverridesOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.orgGroupId">OrgGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.orgSite">OrgSite</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.orgUuid">OrgUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverrides">DataDatadogOrgGroupPolicyOverridesOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrgGroupId`<sup>Required</sup> <a name="OrgGroupId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.orgGroupId"></a>

```go
func OrgGroupId() *string
```

- *Type:* *string

---

##### `OrgSite`<sup>Required</sup> <a name="OrgSite" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.orgSite"></a>

```go
func OrgSite() *string
```

- *Type:* *string

---

##### `OrgUuid`<sup>Required</sup> <a name="OrgUuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.orgUuid"></a>

```go
func OrgUuid() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatadogOrgGroupPolicyOverridesOverrides
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicyOverrides.DataDatadogOrgGroupPolicyOverridesOverrides">DataDatadogOrgGroupPolicyOverridesOverrides</a>

---



