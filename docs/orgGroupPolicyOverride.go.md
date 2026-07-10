# `orgGroupPolicyOverride` Submodule <a name="`orgGroupPolicyOverride` Submodule" id="@cdktn/provider-datadog.orgGroupPolicyOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrgGroupPolicyOverride <a name="OrgGroupPolicyOverride" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/org_group_policy_override datadog_org_group_policy_override}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/orggrouppolicyoverride"

orggrouppolicyoverride.NewOrgGroupPolicyOverride(scope Construct, id *string, config OrgGroupPolicyOverrideConfig) OrgGroupPolicyOverride
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig">OrgGroupPolicyOverrideConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig">OrgGroupPolicyOverrideConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OrgGroupPolicyOverride resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/orggrouppolicyoverride"

orggrouppolicyoverride.OrgGroupPolicyOverride_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/orggrouppolicyoverride"

orggrouppolicyoverride.OrgGroupPolicyOverride_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/orggrouppolicyoverride"

orggrouppolicyoverride.OrgGroupPolicyOverride_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/orggrouppolicyoverride"

orggrouppolicyoverride.OrgGroupPolicyOverride_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OrgGroupPolicyOverride resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OrgGroupPolicyOverride to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OrgGroupPolicyOverride that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/org_group_policy_override#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OrgGroupPolicyOverride to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgGroupIdInput">OrgGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgSiteInput">OrgSiteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgUuidInput">OrgUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgGroupId">OrgGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgSite">OrgSite</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgUuid">OrgUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrgGroupIdInput`<sup>Optional</sup> <a name="OrgGroupIdInput" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgGroupIdInput"></a>

```go
func OrgGroupIdInput() *string
```

- *Type:* *string

---

##### `OrgSiteInput`<sup>Optional</sup> <a name="OrgSiteInput" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgSiteInput"></a>

```go
func OrgSiteInput() *string
```

- *Type:* *string

---

##### `OrgUuidInput`<sup>Optional</sup> <a name="OrgUuidInput" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgUuidInput"></a>

```go
func OrgUuidInput() *string
```

- *Type:* *string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `OrgGroupId`<sup>Required</sup> <a name="OrgGroupId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgGroupId"></a>

```go
func OrgGroupId() *string
```

- *Type:* *string

---

##### `OrgSite`<sup>Required</sup> <a name="OrgSite" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgSite"></a>

```go
func OrgSite() *string
```

- *Type:* *string

---

##### `OrgUuid`<sup>Required</sup> <a name="OrgUuid" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.orgUuid"></a>

```go
func OrgUuid() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverride.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OrgGroupPolicyOverrideConfig <a name="OrgGroupPolicyOverrideConfig" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/orggrouppolicyoverride"

&orggrouppolicyoverride.OrgGroupPolicyOverrideConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	OrgGroupId: *string,
	OrgSite: *string,
	OrgUuid: *string,
	PolicyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.orgGroupId">OrgGroupId</a></code> | <code>*string</code> | The UUID of the org group that owns the policy. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.orgSite">OrgSite</a></code> | <code>*string</code> | The short site name of the organization (e.g., `us1`, `eu1`, `us1-fed`). Part of the override's server-side identity; changing it replaces the resource. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.orgUuid">OrgUuid</a></code> | <code>*string</code> | The UUID of the organization being exempted from the policy. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | The UUID of the org group policy the override applies to. Must be a valid UUID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OrgGroupId`<sup>Required</sup> <a name="OrgGroupId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.orgGroupId"></a>

```go
OrgGroupId *string
```

- *Type:* *string

The UUID of the org group that owns the policy. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/org_group_policy_override#org_group_id OrgGroupPolicyOverride#org_group_id}

---

##### `OrgSite`<sup>Required</sup> <a name="OrgSite" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.orgSite"></a>

```go
OrgSite *string
```

- *Type:* *string

The short site name of the organization (e.g., `us1`, `eu1`, `us1-fed`). Part of the override's server-side identity; changing it replaces the resource. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/org_group_policy_override#org_site OrgGroupPolicyOverride#org_site}

---

##### `OrgUuid`<sup>Required</sup> <a name="OrgUuid" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.orgUuid"></a>

```go
OrgUuid *string
```

- *Type:* *string

The UUID of the organization being exempted from the policy. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/org_group_policy_override#org_uuid OrgGroupPolicyOverride#org_uuid}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-datadog.orgGroupPolicyOverride.OrgGroupPolicyOverrideConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

The UUID of the org group policy the override applies to. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/org_group_policy_override#policy_id OrgGroupPolicyOverride#policy_id}

---



