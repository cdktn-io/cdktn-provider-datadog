# `webhookOauth2ClientCredentials` Submodule <a name="`webhookOauth2ClientCredentials` Submodule" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebhookOauth2ClientCredentials <a name="WebhookOauth2ClientCredentials" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials datadog_webhook_oauth2_client_credentials}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/webhookoauth2clientcredentials"

webhookoauth2clientcredentials.NewWebhookOauth2ClientCredentials(scope Construct, id *string, config WebhookOauth2ClientCredentialsConfig) WebhookOauth2ClientCredentials
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig">WebhookOauth2ClientCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig">WebhookOauth2ClientCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetAudience">ResetAudience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAudience` <a name="ResetAudience" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetAudience"></a>

```go
func ResetAudience()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetScope"></a>

```go
func ResetScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WebhookOauth2ClientCredentials resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/webhookoauth2clientcredentials"

webhookoauth2clientcredentials.WebhookOauth2ClientCredentials_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/webhookoauth2clientcredentials"

webhookoauth2clientcredentials.WebhookOauth2ClientCredentials_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/webhookoauth2clientcredentials"

webhookoauth2clientcredentials.WebhookOauth2ClientCredentials_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/webhookoauth2clientcredentials"

webhookoauth2clientcredentials.WebhookOauth2ClientCredentials_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a WebhookOauth2ClientCredentials resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WebhookOauth2ClientCredentials to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WebhookOauth2ClientCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the WebhookOauth2ClientCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.accessTokenUrlInput">AccessTokenUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.audienceInput">AudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.accessTokenUrl">AccessTokenUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AccessTokenUrlInput`<sup>Optional</sup> <a name="AccessTokenUrlInput" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.accessTokenUrlInput"></a>

```go
func AccessTokenUrlInput() *string
```

- *Type:* *string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.audienceInput"></a>

```go
func AudienceInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `AccessTokenUrl`<sup>Required</sup> <a name="AccessTokenUrl" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.accessTokenUrl"></a>

```go
func AccessTokenUrl() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WebhookOauth2ClientCredentialsConfig <a name="WebhookOauth2ClientCredentialsConfig" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/webhookoauth2clientcredentials"

&webhookoauth2clientcredentials.WebhookOauth2ClientCredentialsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccessTokenUrl: *string,
	ClientId: *string,
	ClientSecret: *string,
	Name: *string,
	Audience: *string,
	Scope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.accessTokenUrl">AccessTokenUrl</a></code> | <code>*string</code> | The URL used to fetch the access token. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The OAuth2 client ID. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The OAuth2 client secret. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.name">Name</a></code> | <code>*string</code> | The name of the auth method. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.audience">Audience</a></code> | <code>*string</code> | The audience requested when fetching the access token. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.scope">Scope</a></code> | <code>*string</code> | The scope requested when fetching the access token. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessTokenUrl`<sup>Required</sup> <a name="AccessTokenUrl" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.accessTokenUrl"></a>

```go
AccessTokenUrl *string
```

- *Type:* *string

The URL used to fetch the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#access_token_url WebhookOauth2ClientCredentials#access_token_url}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The OAuth2 client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#client_id WebhookOauth2ClientCredentials#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The OAuth2 client secret.

This value is not returned by the API, so it cannot be detected as drifted or filled in on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#client_secret WebhookOauth2ClientCredentials#client_secret}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#name WebhookOauth2ClientCredentials#name}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.audience"></a>

```go
Audience *string
```

- *Type:* *string

The audience requested when fetching the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#audience WebhookOauth2ClientCredentials#audience}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

The scope requested when fetching the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#scope WebhookOauth2ClientCredentials#scope}

---



