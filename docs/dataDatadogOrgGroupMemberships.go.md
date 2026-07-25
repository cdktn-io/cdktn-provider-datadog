# `dataDatadogOrgGroupMemberships` Submodule <a name="`dataDatadogOrgGroupMemberships` Submodule" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogOrgGroupMemberships <a name="DataDatadogOrgGroupMemberships" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/org_group_memberships datadog_org_group_memberships}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogorggroupmemberships"

datadatadogorggroupmemberships.NewDataDatadogOrgGroupMemberships(scope Construct, id *string, config DataDatadogOrgGroupMembershipsConfig) DataDatadogOrgGroupMemberships
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig">DataDatadogOrgGroupMembershipsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig">DataDatadogOrgGroupMembershipsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.resetOrgGroupId">ResetOrgGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.resetOrgUuid">ResetOrgUuid</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetOrgGroupId` <a name="ResetOrgGroupId" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.resetOrgGroupId"></a>

```go
func ResetOrgGroupId()
```

##### `ResetOrgUuid` <a name="ResetOrgUuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.resetOrgUuid"></a>

```go
func ResetOrgUuid()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogOrgGroupMemberships resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogorggroupmemberships"

datadatadogorggroupmemberships.DataDatadogOrgGroupMemberships_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogorggroupmemberships"

datadatadogorggroupmemberships.DataDatadogOrgGroupMemberships_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogorggroupmemberships"

datadatadogorggroupmemberships.DataDatadogOrgGroupMemberships_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogorggroupmemberships"

datadatadogorggroupmemberships.DataDatadogOrgGroupMemberships_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatadogOrgGroupMemberships resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatadogOrgGroupMemberships to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatadogOrgGroupMemberships that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/org_group_memberships#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogOrgGroupMemberships to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.memberships">Memberships</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList">DataDatadogOrgGroupMembershipsMembershipsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.orgGroupIdInput">OrgGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.orgUuidInput">OrgUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.orgGroupId">OrgGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.orgUuid">OrgUuid</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Memberships`<sup>Required</sup> <a name="Memberships" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.memberships"></a>

```go
func Memberships() DataDatadogOrgGroupMembershipsMembershipsList
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList">DataDatadogOrgGroupMembershipsMembershipsList</a>

---

##### `OrgGroupIdInput`<sup>Optional</sup> <a name="OrgGroupIdInput" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.orgGroupIdInput"></a>

```go
func OrgGroupIdInput() *string
```

- *Type:* *string

---

##### `OrgUuidInput`<sup>Optional</sup> <a name="OrgUuidInput" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.orgUuidInput"></a>

```go
func OrgUuidInput() *string
```

- *Type:* *string

---

##### `OrgGroupId`<sup>Required</sup> <a name="OrgGroupId" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.orgGroupId"></a>

```go
func OrgGroupId() *string
```

- *Type:* *string

---

##### `OrgUuid`<sup>Required</sup> <a name="OrgUuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.orgUuid"></a>

```go
func OrgUuid() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMemberships.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogOrgGroupMembershipsConfig <a name="DataDatadogOrgGroupMembershipsConfig" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogorggroupmemberships"

&datadatadogorggroupmemberships.DataDatadogOrgGroupMembershipsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	OrgGroupId: *string,
	OrgUuid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.orgGroupId">OrgGroupId</a></code> | <code>*string</code> | Filter memberships to those within the given org group. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.orgUuid">OrgUuid</a></code> | <code>*string</code> | Filter memberships to those for the given organization. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OrgGroupId`<sup>Optional</sup> <a name="OrgGroupId" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.orgGroupId"></a>

```go
OrgGroupId *string
```

- *Type:* *string

Filter memberships to those within the given org group.

At least one filter (`org_group_id` or `org_uuid`) is required. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/org_group_memberships#org_group_id DataDatadogOrgGroupMemberships#org_group_id}

---

##### `OrgUuid`<sup>Optional</sup> <a name="OrgUuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsConfig.property.orgUuid"></a>

```go
OrgUuid *string
```

- *Type:* *string

Filter memberships to those for the given organization.

At least one filter (`org_group_id` or `org_uuid`) is required. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/org_group_memberships#org_uuid DataDatadogOrgGroupMemberships#org_uuid}

---

### DataDatadogOrgGroupMembershipsMemberships <a name="DataDatadogOrgGroupMembershipsMemberships" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMemberships"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMemberships.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogorggroupmemberships"

&datadatadogorggroupmemberships.DataDatadogOrgGroupMembershipsMemberships {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogOrgGroupMembershipsMembershipsList <a name="DataDatadogOrgGroupMembershipsMembershipsList" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogorggroupmemberships"

datadatadogorggroupmemberships.NewDataDatadogOrgGroupMembershipsMembershipsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatadogOrgGroupMembershipsMembershipsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.get"></a>

```go
func Get(index *f64) DataDatadogOrgGroupMembershipsMembershipsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDatadogOrgGroupMembershipsMembershipsOutputReference <a name="DataDatadogOrgGroupMembershipsMembershipsOutputReference" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/datadatadogorggroupmemberships"

datadatadogorggroupmemberships.NewDataDatadogOrgGroupMembershipsMembershipsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatadogOrgGroupMembershipsMembershipsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.orgGroupId">OrgGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.orgName">OrgName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.orgSite">OrgSite</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.orgUuid">OrgUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMemberships">DataDatadogOrgGroupMembershipsMemberships</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrgGroupId`<sup>Required</sup> <a name="OrgGroupId" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.orgGroupId"></a>

```go
func OrgGroupId() *string
```

- *Type:* *string

---

##### `OrgName`<sup>Required</sup> <a name="OrgName" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.orgName"></a>

```go
func OrgName() *string
```

- *Type:* *string

---

##### `OrgSite`<sup>Required</sup> <a name="OrgSite" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.orgSite"></a>

```go
func OrgSite() *string
```

- *Type:* *string

---

##### `OrgUuid`<sup>Required</sup> <a name="OrgUuid" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.orgUuid"></a>

```go
func OrgUuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMembershipsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatadogOrgGroupMembershipsMemberships
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrgGroupMemberships.DataDatadogOrgGroupMembershipsMemberships">DataDatadogOrgGroupMembershipsMemberships</a>

---



