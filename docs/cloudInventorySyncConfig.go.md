# `cloudInventorySyncConfig` Submodule <a name="`cloudInventorySyncConfig` Submodule" id="@cdktn/provider-datadog.cloudInventorySyncConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudInventorySyncConfig <a name="CloudInventorySyncConfig" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/cloud_inventory_sync_config datadog_cloud_inventory_sync_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/cloudinventorysyncconfig"

cloudinventorysyncconfig.NewCloudInventorySyncConfig(scope Construct, id *string, config CloudInventorySyncConfigConfig) CloudInventorySyncConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig">CloudInventorySyncConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig">CloudInventorySyncConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAws">PutAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putGcp">PutGcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetAws">ResetAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetGcp">ResetGcp</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAws` <a name="PutAws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAws"></a>

```go
func PutAws(value CloudInventorySyncConfigAws)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a>

---

##### `PutAzure` <a name="PutAzure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAzure"></a>

```go
func PutAzure(value CloudInventorySyncConfigAzure)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putAzure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a>

---

##### `PutGcp` <a name="PutGcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putGcp"></a>

```go
func PutGcp(value CloudInventorySyncConfigGcp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.putGcp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a>

---

##### `ResetAws` <a name="ResetAws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetAws"></a>

```go
func ResetAws()
```

##### `ResetAzure` <a name="ResetAzure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetAzure"></a>

```go
func ResetAzure()
```

##### `ResetGcp` <a name="ResetGcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.resetGcp"></a>

```go
func ResetGcp()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudInventorySyncConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/cloudinventorysyncconfig"

cloudinventorysyncconfig.CloudInventorySyncConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/cloudinventorysyncconfig"

cloudinventorysyncconfig.CloudInventorySyncConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/cloudinventorysyncconfig"

cloudinventorysyncconfig.CloudInventorySyncConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/cloudinventorysyncconfig"

cloudinventorysyncconfig.CloudInventorySyncConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudInventorySyncConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudInventorySyncConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudInventorySyncConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/cloud_inventory_sync_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudInventorySyncConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.aws">Aws</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference">CloudInventorySyncConfigAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.azure">Azure</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference">CloudInventorySyncConfigAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.gcp">Gcp</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference">CloudInventorySyncConfigGcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.awsInput">AwsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.azureInput">AzureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cloudProviderInput">CloudProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.gcpInput">GcpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cloudProvider">CloudProvider</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.aws"></a>

```go
func Aws() CloudInventorySyncConfigAwsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference">CloudInventorySyncConfigAwsOutputReference</a>

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.azure"></a>

```go
func Azure() CloudInventorySyncConfigAzureOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference">CloudInventorySyncConfigAzureOutputReference</a>

---

##### `Gcp`<sup>Required</sup> <a name="Gcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.gcp"></a>

```go
func Gcp() CloudInventorySyncConfigGcpOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference">CloudInventorySyncConfigGcpOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AwsInput`<sup>Optional</sup> <a name="AwsInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.awsInput"></a>

```go
func AwsInput() interface{}
```

- *Type:* interface{}

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.azureInput"></a>

```go
func AzureInput() interface{}
```

- *Type:* interface{}

---

##### `CloudProviderInput`<sup>Optional</sup> <a name="CloudProviderInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cloudProviderInput"></a>

```go
func CloudProviderInput() *string
```

- *Type:* *string

---

##### `GcpInput`<sup>Optional</sup> <a name="GcpInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.gcpInput"></a>

```go
func GcpInput() interface{}
```

- *Type:* interface{}

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.cloudProvider"></a>

```go
func CloudProvider() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudInventorySyncConfigAws <a name="CloudInventorySyncConfigAws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/cloudinventorysyncconfig"

&cloudinventorysyncconfig.CloudInventorySyncConfigAws {
	AwsAccountId: *string,
	DestinationBucketName: *string,
	DestinationBucketRegion: *string,
	DestinationPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | AWS Account ID of the account holding the bucket. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationBucketName">DestinationBucketName</a></code> | <code>*string</code> | Name of the S3 bucket holding the inventory files. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationBucketRegion">DestinationBucketRegion</a></code> | <code>*string</code> | AWS Region of the bucket holding the inventory files. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationPrefix">DestinationPrefix</a></code> | <code>*string</code> | Prefix path within the bucket for inventory files. |

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

AWS Account ID of the account holding the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/cloud_inventory_sync_config#aws_account_id CloudInventorySyncConfig#aws_account_id}

---

##### `DestinationBucketName`<sup>Optional</sup> <a name="DestinationBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationBucketName"></a>

```go
DestinationBucketName *string
```

- *Type:* *string

Name of the S3 bucket holding the inventory files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/cloud_inventory_sync_config#destination_bucket_name CloudInventorySyncConfig#destination_bucket_name}

---

##### `DestinationBucketRegion`<sup>Optional</sup> <a name="DestinationBucketRegion" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationBucketRegion"></a>

```go
DestinationBucketRegion *string
```

- *Type:* *string

AWS Region of the bucket holding the inventory files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/cloud_inventory_sync_config#destination_bucket_region CloudInventorySyncConfig#destination_bucket_region}

---

##### `DestinationPrefix`<sup>Optional</sup> <a name="DestinationPrefix" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws.property.destinationPrefix"></a>

```go
DestinationPrefix *string
```

- *Type:* *string

Prefix path within the bucket for inventory files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/cloud_inventory_sync_config#destination_prefix CloudInventorySyncConfig#destination_prefix}

---

### CloudInventorySyncConfigAzure <a name="CloudInventorySyncConfigAzure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/cloudinventorysyncconfig"

&cloudinventorysyncconfig.CloudInventorySyncConfigAzure {
	ClientId: *string,
	Container: *string,
	ResourceGroup: *string,
	StorageAccount: *string,
	SubscriptionId: *string,
	TenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.clientId">ClientId</a></code> | <code>*string</code> | Azure Client ID. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.container">Container</a></code> | <code>*string</code> | Azure Storage Container name. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | Azure Resource Group name. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.storageAccount">StorageAccount</a></code> | <code>*string</code> | Azure Storage Account name. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Azure Subscription ID. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.tenantId">TenantId</a></code> | <code>*string</code> | Azure Tenant ID. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Azure Client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/cloud_inventory_sync_config#client_id CloudInventorySyncConfig#client_id}

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.container"></a>

```go
Container *string
```

- *Type:* *string

Azure Storage Container name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/cloud_inventory_sync_config#container CloudInventorySyncConfig#container}

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.resourceGroup"></a>

```go
ResourceGroup *string
```

- *Type:* *string

Azure Resource Group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/cloud_inventory_sync_config#resource_group CloudInventorySyncConfig#resource_group}

---

##### `StorageAccount`<sup>Optional</sup> <a name="StorageAccount" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.storageAccount"></a>

```go
StorageAccount *string
```

- *Type:* *string

Azure Storage Account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/cloud_inventory_sync_config#storage_account CloudInventorySyncConfig#storage_account}

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Azure Subscription ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/cloud_inventory_sync_config#subscription_id CloudInventorySyncConfig#subscription_id}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Azure Tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/cloud_inventory_sync_config#tenant_id CloudInventorySyncConfig#tenant_id}

---

### CloudInventorySyncConfigConfig <a name="CloudInventorySyncConfigConfig" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/cloudinventorysyncconfig"

&cloudinventorysyncconfig.CloudInventorySyncConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CloudProvider: *string,
	Aws: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15.cloudInventorySyncConfig.CloudInventorySyncConfigAws,
	Azure: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15.cloudInventorySyncConfig.CloudInventorySyncConfigAzure,
	Gcp: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15.cloudInventorySyncConfig.CloudInventorySyncConfigGcp,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.cloudProvider">CloudProvider</a></code> | <code>*string</code> | The cloud provider type. Valid values are `aws`, `azure`, `gcp`. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.aws">Aws</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a></code> | aws block. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.azure">Azure</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a></code> | azure block. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.gcp">Gcp</a></code> | <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a></code> | gcp block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.cloudProvider"></a>

```go
CloudProvider *string
```

- *Type:* *string

The cloud provider type. Valid values are `aws`, `azure`, `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/cloud_inventory_sync_config#cloud_provider CloudInventorySyncConfig#cloud_provider}

---

##### `Aws`<sup>Optional</sup> <a name="Aws" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.aws"></a>

```go
Aws CloudInventorySyncConfigAws
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAws">CloudInventorySyncConfigAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/cloud_inventory_sync_config#aws CloudInventorySyncConfig#aws}

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.azure"></a>

```go
Azure CloudInventorySyncConfigAzure
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzure">CloudInventorySyncConfigAzure</a>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/cloud_inventory_sync_config#azure CloudInventorySyncConfig#azure}

---

##### `Gcp`<sup>Optional</sup> <a name="Gcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigConfig.property.gcp"></a>

```go
Gcp CloudInventorySyncConfigGcp
```

- *Type:* <a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp">CloudInventorySyncConfigGcp</a>

gcp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/cloud_inventory_sync_config#gcp CloudInventorySyncConfig#gcp}

---

### CloudInventorySyncConfigGcp <a name="CloudInventorySyncConfigGcp" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/cloudinventorysyncconfig"

&cloudinventorysyncconfig.CloudInventorySyncConfigGcp {
	DestinationBucketName: *string,
	ProjectId: *string,
	ServiceAccountEmail: *string,
	SourceBucketName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.destinationBucketName">DestinationBucketName</a></code> | <code>*string</code> | Name of the GCS bucket holding the inventory files. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.projectId">ProjectId</a></code> | <code>*string</code> | GCP Project ID of the project holding the bucket. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | Service account email used for reading the bucket. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.sourceBucketName">SourceBucketName</a></code> | <code>*string</code> | Name of the source bucket the inventory report is generated for. |

---

##### `DestinationBucketName`<sup>Optional</sup> <a name="DestinationBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.destinationBucketName"></a>

```go
DestinationBucketName *string
```

- *Type:* *string

Name of the GCS bucket holding the inventory files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/cloud_inventory_sync_config#destination_bucket_name CloudInventorySyncConfig#destination_bucket_name}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

GCP Project ID of the project holding the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/cloud_inventory_sync_config#project_id CloudInventorySyncConfig#project_id}

---

##### `ServiceAccountEmail`<sup>Optional</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.serviceAccountEmail"></a>

```go
ServiceAccountEmail *string
```

- *Type:* *string

Service account email used for reading the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/cloud_inventory_sync_config#service_account_email CloudInventorySyncConfig#service_account_email}

---

##### `SourceBucketName`<sup>Optional</sup> <a name="SourceBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcp.property.sourceBucketName"></a>

```go
SourceBucketName *string
```

- *Type:* *string

Name of the source bucket the inventory report is generated for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/cloud_inventory_sync_config#source_bucket_name CloudInventorySyncConfig#source_bucket_name}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudInventorySyncConfigAwsOutputReference <a name="CloudInventorySyncConfigAwsOutputReference" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/cloudinventorysyncconfig"

cloudinventorysyncconfig.NewCloudInventorySyncConfigAwsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudInventorySyncConfigAwsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationBucketName">ResetDestinationBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationBucketRegion">ResetDestinationBucketRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationPrefix">ResetDestinationPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetAwsAccountId"></a>

```go
func ResetAwsAccountId()
```

##### `ResetDestinationBucketName` <a name="ResetDestinationBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationBucketName"></a>

```go
func ResetDestinationBucketName()
```

##### `ResetDestinationBucketRegion` <a name="ResetDestinationBucketRegion" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationBucketRegion"></a>

```go
func ResetDestinationBucketRegion()
```

##### `ResetDestinationPrefix` <a name="ResetDestinationPrefix" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.resetDestinationPrefix"></a>

```go
func ResetDestinationPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketNameInput">DestinationBucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketRegionInput">DestinationBucketRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationPrefixInput">DestinationPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketName">DestinationBucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketRegion">DestinationBucketRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationPrefix">DestinationPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `DestinationBucketNameInput`<sup>Optional</sup> <a name="DestinationBucketNameInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketNameInput"></a>

```go
func DestinationBucketNameInput() *string
```

- *Type:* *string

---

##### `DestinationBucketRegionInput`<sup>Optional</sup> <a name="DestinationBucketRegionInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketRegionInput"></a>

```go
func DestinationBucketRegionInput() *string
```

- *Type:* *string

---

##### `DestinationPrefixInput`<sup>Optional</sup> <a name="DestinationPrefixInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationPrefixInput"></a>

```go
func DestinationPrefixInput() *string
```

- *Type:* *string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `DestinationBucketName`<sup>Required</sup> <a name="DestinationBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketName"></a>

```go
func DestinationBucketName() *string
```

- *Type:* *string

---

##### `DestinationBucketRegion`<sup>Required</sup> <a name="DestinationBucketRegion" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationBucketRegion"></a>

```go
func DestinationBucketRegion() *string
```

- *Type:* *string

---

##### `DestinationPrefix`<sup>Required</sup> <a name="DestinationPrefix" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.destinationPrefix"></a>

```go
func DestinationPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAwsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudInventorySyncConfigAzureOutputReference <a name="CloudInventorySyncConfigAzureOutputReference" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/cloudinventorysyncconfig"

cloudinventorysyncconfig.NewCloudInventorySyncConfigAzureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudInventorySyncConfigAzureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetContainer">ResetContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetResourceGroup">ResetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetStorageAccount">ResetStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetContainer` <a name="ResetContainer" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetContainer"></a>

```go
func ResetContainer()
```

##### `ResetResourceGroup` <a name="ResetResourceGroup" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetResourceGroup"></a>

```go
func ResetResourceGroup()
```

##### `ResetStorageAccount` <a name="ResetStorageAccount" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetStorageAccount"></a>

```go
func ResetStorageAccount()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetSubscriptionId"></a>

```go
func ResetSubscriptionId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.resetTenantId"></a>

```go
func ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.containerInput">ContainerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.resourceGroupInput">ResourceGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.storageAccountInput">StorageAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.container">Container</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.storageAccount">StorageAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.containerInput"></a>

```go
func ContainerInput() *string
```

- *Type:* *string

---

##### `ResourceGroupInput`<sup>Optional</sup> <a name="ResourceGroupInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.resourceGroupInput"></a>

```go
func ResourceGroupInput() *string
```

- *Type:* *string

---

##### `StorageAccountInput`<sup>Optional</sup> <a name="StorageAccountInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.storageAccountInput"></a>

```go
func StorageAccountInput() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.container"></a>

```go
func Container() *string
```

- *Type:* *string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.resourceGroup"></a>

```go
func ResourceGroup() *string
```

- *Type:* *string

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.storageAccount"></a>

```go
func StorageAccount() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigAzureOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudInventorySyncConfigGcpOutputReference <a name="CloudInventorySyncConfigGcpOutputReference" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/cloudinventorysyncconfig"

cloudinventorysyncconfig.NewCloudInventorySyncConfigGcpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudInventorySyncConfigGcpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetDestinationBucketName">ResetDestinationBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetServiceAccountEmail">ResetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetSourceBucketName">ResetSourceBucketName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationBucketName` <a name="ResetDestinationBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetDestinationBucketName"></a>

```go
func ResetDestinationBucketName()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetServiceAccountEmail` <a name="ResetServiceAccountEmail" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetServiceAccountEmail"></a>

```go
func ResetServiceAccountEmail()
```

##### `ResetSourceBucketName` <a name="ResetSourceBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.resetSourceBucketName"></a>

```go
func ResetSourceBucketName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.destinationBucketNameInput">DestinationBucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.sourceBucketNameInput">SourceBucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.destinationBucketName">DestinationBucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.sourceBucketName">SourceBucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationBucketNameInput`<sup>Optional</sup> <a name="DestinationBucketNameInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.destinationBucketNameInput"></a>

```go
func DestinationBucketNameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.serviceAccountEmailInput"></a>

```go
func ServiceAccountEmailInput() *string
```

- *Type:* *string

---

##### `SourceBucketNameInput`<sup>Optional</sup> <a name="SourceBucketNameInput" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.sourceBucketNameInput"></a>

```go
func SourceBucketNameInput() *string
```

- *Type:* *string

---

##### `DestinationBucketName`<sup>Required</sup> <a name="DestinationBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.destinationBucketName"></a>

```go
func DestinationBucketName() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.serviceAccountEmail"></a>

```go
func ServiceAccountEmail() *string
```

- *Type:* *string

---

##### `SourceBucketName`<sup>Required</sup> <a name="SourceBucketName" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.sourceBucketName"></a>

```go
func SourceBucketName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.cloudInventorySyncConfig.CloudInventorySyncConfigGcpOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



