# `serviceAccountApplicationKey` Submodule <a name="`serviceAccountApplicationKey` Submodule" id="@cdktn/provider-datadog.serviceAccountApplicationKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceAccountApplicationKey <a name="ServiceAccountApplicationKey" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/service_account_application_key datadog_service_account_application_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/serviceaccountapplicationkey"

serviceaccountapplicationkey.NewServiceAccountApplicationKey(scope Construct, id *string, config ServiceAccountApplicationKeyConfig) ServiceAccountApplicationKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKeyConfig">ServiceAccountApplicationKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKeyConfig">ServiceAccountApplicationKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.resetScopes">ResetScopes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetScopes` <a name="ResetScopes" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.resetScopes"></a>

```go
func ResetScopes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServiceAccountApplicationKey resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/serviceaccountapplicationkey"

serviceaccountapplicationkey.ServiceAccountApplicationKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/serviceaccountapplicationkey"

serviceaccountapplicationkey.ServiceAccountApplicationKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/serviceaccountapplicationkey"

serviceaccountapplicationkey.ServiceAccountApplicationKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/serviceaccountapplicationkey"

serviceaccountapplicationkey.ServiceAccountApplicationKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ServiceAccountApplicationKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServiceAccountApplicationKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServiceAccountApplicationKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/service_account_application_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ServiceAccountApplicationKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.last4">Last4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.serviceAccountIdInput">ServiceAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.serviceAccountId">ServiceAccountId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Last4`<sup>Required</sup> <a name="Last4" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.last4"></a>

```go
func Last4() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccountIdInput`<sup>Optional</sup> <a name="ServiceAccountIdInput" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.serviceAccountIdInput"></a>

```go
func ServiceAccountIdInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.serviceAccountId"></a>

```go
func ServiceAccountId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceAccountApplicationKeyConfig <a name="ServiceAccountApplicationKeyConfig" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKeyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/serviceaccountapplicationkey"

&serviceaccountapplicationkey.ServiceAccountApplicationKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ServiceAccountId: *string,
	Scopes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKeyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKeyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the application key. |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKeyConfig.property.serviceAccountId">ServiceAccountId</a></code> | <code>*string</code> | ID of the service account that owns this key. |
| <code><a href="#@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKeyConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | Authorization scopes for the Application Key. Application Keys configured with no scopes have full access. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKeyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the application key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/service_account_application_key#name ServiceAccountApplicationKey#name}

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKeyConfig.property.serviceAccountId"></a>

```go
ServiceAccountId *string
```

- *Type:* *string

ID of the service account that owns this key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/service_account_application_key#service_account_id ServiceAccountApplicationKey#service_account_id}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktn/provider-datadog.serviceAccountApplicationKey.ServiceAccountApplicationKeyConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

Authorization scopes for the Application Key. Application Keys configured with no scopes have full access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/service_account_application_key#scopes ServiceAccountApplicationKey#scopes}

---



