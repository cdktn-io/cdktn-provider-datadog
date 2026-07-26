# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-datadog.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatadogProvider <a name="DatadogProvider" id="@cdktn/provider-datadog.provider.DatadogProvider"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs datadog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.provider.DatadogProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/provider"

provider.NewDatadogProvider(scope Construct, id *string, config DatadogProviderConfig) DatadogProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.provider.DatadogProviderConfig">DatadogProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.provider.DatadogProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.provider.DatadogProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-datadog.provider.DatadogProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.provider.DatadogProviderConfig">DatadogProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.resetApiUrl">ResetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.resetAppKey">ResetAppKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.resetAwsAccessKeyId">ResetAwsAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.resetAwsSecretAccessKey">ResetAwsSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.resetAwsSessionToken">ResetAwsSessionToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.resetBearerToken">ResetBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.resetCloudProviderRegion">ResetCloudProviderRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.resetCloudProviderType">ResetCloudProviderType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.resetDefaultTags">ResetDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.resetHttpClientRetryBackoffBase">ResetHttpClientRetryBackoffBase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.resetHttpClientRetryBackoffMultiplier">ResetHttpClientRetryBackoffMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.resetHttpClientRetryEnabled">ResetHttpClientRetryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.resetHttpClientRetryMaxRetries">ResetHttpClientRetryMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.resetHttpClientRetryTimeout">ResetHttpClientRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.resetIgnoreTagKeys">ResetIgnoreTagKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.resetOrgUuid">ResetOrgUuid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.resetValidate">ResetValidate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.provider.DatadogProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.provider.DatadogProvider.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.provider.DatadogProvider.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.provider.DatadogProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.provider.DatadogProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.provider.DatadogProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.provider.DatadogProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.provider.DatadogProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.provider.DatadogProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.provider.DatadogProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.provider.DatadogProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.provider.DatadogProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-datadog.provider.DatadogProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-datadog.provider.DatadogProvider.resetApiKey"></a>

```go
func ResetApiKey()
```

##### `ResetApiUrl` <a name="ResetApiUrl" id="@cdktn/provider-datadog.provider.DatadogProvider.resetApiUrl"></a>

```go
func ResetApiUrl()
```

##### `ResetAppKey` <a name="ResetAppKey" id="@cdktn/provider-datadog.provider.DatadogProvider.resetAppKey"></a>

```go
func ResetAppKey()
```

##### `ResetAwsAccessKeyId` <a name="ResetAwsAccessKeyId" id="@cdktn/provider-datadog.provider.DatadogProvider.resetAwsAccessKeyId"></a>

```go
func ResetAwsAccessKeyId()
```

##### `ResetAwsSecretAccessKey` <a name="ResetAwsSecretAccessKey" id="@cdktn/provider-datadog.provider.DatadogProvider.resetAwsSecretAccessKey"></a>

```go
func ResetAwsSecretAccessKey()
```

##### `ResetAwsSessionToken` <a name="ResetAwsSessionToken" id="@cdktn/provider-datadog.provider.DatadogProvider.resetAwsSessionToken"></a>

```go
func ResetAwsSessionToken()
```

##### `ResetBearerToken` <a name="ResetBearerToken" id="@cdktn/provider-datadog.provider.DatadogProvider.resetBearerToken"></a>

```go
func ResetBearerToken()
```

##### `ResetCloudProviderRegion` <a name="ResetCloudProviderRegion" id="@cdktn/provider-datadog.provider.DatadogProvider.resetCloudProviderRegion"></a>

```go
func ResetCloudProviderRegion()
```

##### `ResetCloudProviderType` <a name="ResetCloudProviderType" id="@cdktn/provider-datadog.provider.DatadogProvider.resetCloudProviderType"></a>

```go
func ResetCloudProviderType()
```

##### `ResetDefaultTags` <a name="ResetDefaultTags" id="@cdktn/provider-datadog.provider.DatadogProvider.resetDefaultTags"></a>

```go
func ResetDefaultTags()
```

##### `ResetHttpClientRetryBackoffBase` <a name="ResetHttpClientRetryBackoffBase" id="@cdktn/provider-datadog.provider.DatadogProvider.resetHttpClientRetryBackoffBase"></a>

```go
func ResetHttpClientRetryBackoffBase()
```

##### `ResetHttpClientRetryBackoffMultiplier` <a name="ResetHttpClientRetryBackoffMultiplier" id="@cdktn/provider-datadog.provider.DatadogProvider.resetHttpClientRetryBackoffMultiplier"></a>

```go
func ResetHttpClientRetryBackoffMultiplier()
```

##### `ResetHttpClientRetryEnabled` <a name="ResetHttpClientRetryEnabled" id="@cdktn/provider-datadog.provider.DatadogProvider.resetHttpClientRetryEnabled"></a>

```go
func ResetHttpClientRetryEnabled()
```

##### `ResetHttpClientRetryMaxRetries` <a name="ResetHttpClientRetryMaxRetries" id="@cdktn/provider-datadog.provider.DatadogProvider.resetHttpClientRetryMaxRetries"></a>

```go
func ResetHttpClientRetryMaxRetries()
```

##### `ResetHttpClientRetryTimeout` <a name="ResetHttpClientRetryTimeout" id="@cdktn/provider-datadog.provider.DatadogProvider.resetHttpClientRetryTimeout"></a>

```go
func ResetHttpClientRetryTimeout()
```

##### `ResetIgnoreTagKeys` <a name="ResetIgnoreTagKeys" id="@cdktn/provider-datadog.provider.DatadogProvider.resetIgnoreTagKeys"></a>

```go
func ResetIgnoreTagKeys()
```

##### `ResetOrgUuid` <a name="ResetOrgUuid" id="@cdktn/provider-datadog.provider.DatadogProvider.resetOrgUuid"></a>

```go
func ResetOrgUuid()
```

##### `ResetValidate` <a name="ResetValidate" id="@cdktn/provider-datadog.provider.DatadogProvider.resetValidate"></a>

```go
func ResetValidate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatadogProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.provider.DatadogProvider.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/provider"

provider.DatadogProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.provider.DatadogProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.provider.DatadogProvider.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/provider"

provider.DatadogProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.provider.DatadogProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktn/provider-datadog.provider.DatadogProvider.isTerraformProvider"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/provider"

provider.DatadogProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.provider.DatadogProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.provider.DatadogProvider.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/provider"

provider.DatadogProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DatadogProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.provider.DatadogProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.provider.DatadogProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatadogProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.provider.DatadogProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatadogProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.provider.DatadogProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DatadogProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.apiUrlInput">ApiUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.appKeyInput">AppKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.awsAccessKeyIdInput">AwsAccessKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.awsSecretAccessKeyInput">AwsSecretAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.awsSessionTokenInput">AwsSessionTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.bearerTokenInput">BearerTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.cloudProviderRegionInput">CloudProviderRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.cloudProviderTypeInput">CloudProviderTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.defaultTagsInput">DefaultTagsInput</a></code> | <code><a href="#@cdktn/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffBaseInput">HttpClientRetryBackoffBaseInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffMultiplierInput">HttpClientRetryBackoffMultiplierInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.httpClientRetryEnabledInput">HttpClientRetryEnabledInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.httpClientRetryMaxRetriesInput">HttpClientRetryMaxRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.httpClientRetryTimeoutInput">HttpClientRetryTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.ignoreTagKeysInput">IgnoreTagKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.orgUuidInput">OrgUuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.validateInput">ValidateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.apiUrl">ApiUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.appKey">AppKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.awsAccessKeyId">AwsAccessKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.awsSecretAccessKey">AwsSecretAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.awsSessionToken">AwsSessionToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.bearerToken">BearerToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.cloudProviderRegion">CloudProviderRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.cloudProviderType">CloudProviderType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.defaultTags">DefaultTags</a></code> | <code><a href="#@cdktn/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffBase">HttpClientRetryBackoffBase</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffMultiplier">HttpClientRetryBackoffMultiplier</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.httpClientRetryEnabled">HttpClientRetryEnabled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.httpClientRetryMaxRetries">HttpClientRetryMaxRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.httpClientRetryTimeout">HttpClientRetryTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.ignoreTagKeys">IgnoreTagKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.orgUuid">OrgUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.validate">Validate</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.provider.DatadogProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.provider.DatadogProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.provider.DatadogProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.provider.DatadogProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktn/provider-datadog.provider.DatadogProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.provider.DatadogProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.provider.DatadogProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktn/provider-datadog.provider.DatadogProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-datadog.provider.DatadogProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-datadog.provider.DatadogProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-datadog.provider.DatadogProvider.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `ApiUrlInput`<sup>Optional</sup> <a name="ApiUrlInput" id="@cdktn/provider-datadog.provider.DatadogProvider.property.apiUrlInput"></a>

```go
func ApiUrlInput() *string
```

- *Type:* *string

---

##### `AppKeyInput`<sup>Optional</sup> <a name="AppKeyInput" id="@cdktn/provider-datadog.provider.DatadogProvider.property.appKeyInput"></a>

```go
func AppKeyInput() *string
```

- *Type:* *string

---

##### `AwsAccessKeyIdInput`<sup>Optional</sup> <a name="AwsAccessKeyIdInput" id="@cdktn/provider-datadog.provider.DatadogProvider.property.awsAccessKeyIdInput"></a>

```go
func AwsAccessKeyIdInput() *string
```

- *Type:* *string

---

##### `AwsSecretAccessKeyInput`<sup>Optional</sup> <a name="AwsSecretAccessKeyInput" id="@cdktn/provider-datadog.provider.DatadogProvider.property.awsSecretAccessKeyInput"></a>

```go
func AwsSecretAccessKeyInput() *string
```

- *Type:* *string

---

##### `AwsSessionTokenInput`<sup>Optional</sup> <a name="AwsSessionTokenInput" id="@cdktn/provider-datadog.provider.DatadogProvider.property.awsSessionTokenInput"></a>

```go
func AwsSessionTokenInput() *string
```

- *Type:* *string

---

##### `BearerTokenInput`<sup>Optional</sup> <a name="BearerTokenInput" id="@cdktn/provider-datadog.provider.DatadogProvider.property.bearerTokenInput"></a>

```go
func BearerTokenInput() *string
```

- *Type:* *string

---

##### `CloudProviderRegionInput`<sup>Optional</sup> <a name="CloudProviderRegionInput" id="@cdktn/provider-datadog.provider.DatadogProvider.property.cloudProviderRegionInput"></a>

```go
func CloudProviderRegionInput() *string
```

- *Type:* *string

---

##### `CloudProviderTypeInput`<sup>Optional</sup> <a name="CloudProviderTypeInput" id="@cdktn/provider-datadog.provider.DatadogProvider.property.cloudProviderTypeInput"></a>

```go
func CloudProviderTypeInput() *string
```

- *Type:* *string

---

##### `DefaultTagsInput`<sup>Optional</sup> <a name="DefaultTagsInput" id="@cdktn/provider-datadog.provider.DatadogProvider.property.defaultTagsInput"></a>

```go
func DefaultTagsInput() DatadogProviderDefaultTags
```

- *Type:* <a href="#@cdktn/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a>

---

##### `HttpClientRetryBackoffBaseInput`<sup>Optional</sup> <a name="HttpClientRetryBackoffBaseInput" id="@cdktn/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffBaseInput"></a>

```go
func HttpClientRetryBackoffBaseInput() *f64
```

- *Type:* *f64

---

##### `HttpClientRetryBackoffMultiplierInput`<sup>Optional</sup> <a name="HttpClientRetryBackoffMultiplierInput" id="@cdktn/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffMultiplierInput"></a>

```go
func HttpClientRetryBackoffMultiplierInput() *f64
```

- *Type:* *f64

---

##### `HttpClientRetryEnabledInput`<sup>Optional</sup> <a name="HttpClientRetryEnabledInput" id="@cdktn/provider-datadog.provider.DatadogProvider.property.httpClientRetryEnabledInput"></a>

```go
func HttpClientRetryEnabledInput() *string
```

- *Type:* *string

---

##### `HttpClientRetryMaxRetriesInput`<sup>Optional</sup> <a name="HttpClientRetryMaxRetriesInput" id="@cdktn/provider-datadog.provider.DatadogProvider.property.httpClientRetryMaxRetriesInput"></a>

```go
func HttpClientRetryMaxRetriesInput() *f64
```

- *Type:* *f64

---

##### `HttpClientRetryTimeoutInput`<sup>Optional</sup> <a name="HttpClientRetryTimeoutInput" id="@cdktn/provider-datadog.provider.DatadogProvider.property.httpClientRetryTimeoutInput"></a>

```go
func HttpClientRetryTimeoutInput() *f64
```

- *Type:* *f64

---

##### `IgnoreTagKeysInput`<sup>Optional</sup> <a name="IgnoreTagKeysInput" id="@cdktn/provider-datadog.provider.DatadogProvider.property.ignoreTagKeysInput"></a>

```go
func IgnoreTagKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `OrgUuidInput`<sup>Optional</sup> <a name="OrgUuidInput" id="@cdktn/provider-datadog.provider.DatadogProvider.property.orgUuidInput"></a>

```go
func OrgUuidInput() *string
```

- *Type:* *string

---

##### `ValidateInput`<sup>Optional</sup> <a name="ValidateInput" id="@cdktn/provider-datadog.provider.DatadogProvider.property.validateInput"></a>

```go
func ValidateInput() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.provider.DatadogProvider.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `ApiUrl`<sup>Optional</sup> <a name="ApiUrl" id="@cdktn/provider-datadog.provider.DatadogProvider.property.apiUrl"></a>

```go
func ApiUrl() *string
```

- *Type:* *string

---

##### `AppKey`<sup>Optional</sup> <a name="AppKey" id="@cdktn/provider-datadog.provider.DatadogProvider.property.appKey"></a>

```go
func AppKey() *string
```

- *Type:* *string

---

##### `AwsAccessKeyId`<sup>Optional</sup> <a name="AwsAccessKeyId" id="@cdktn/provider-datadog.provider.DatadogProvider.property.awsAccessKeyId"></a>

```go
func AwsAccessKeyId() *string
```

- *Type:* *string

---

##### `AwsSecretAccessKey`<sup>Optional</sup> <a name="AwsSecretAccessKey" id="@cdktn/provider-datadog.provider.DatadogProvider.property.awsSecretAccessKey"></a>

```go
func AwsSecretAccessKey() *string
```

- *Type:* *string

---

##### `AwsSessionToken`<sup>Optional</sup> <a name="AwsSessionToken" id="@cdktn/provider-datadog.provider.DatadogProvider.property.awsSessionToken"></a>

```go
func AwsSessionToken() *string
```

- *Type:* *string

---

##### `BearerToken`<sup>Optional</sup> <a name="BearerToken" id="@cdktn/provider-datadog.provider.DatadogProvider.property.bearerToken"></a>

```go
func BearerToken() *string
```

- *Type:* *string

---

##### `CloudProviderRegion`<sup>Optional</sup> <a name="CloudProviderRegion" id="@cdktn/provider-datadog.provider.DatadogProvider.property.cloudProviderRegion"></a>

```go
func CloudProviderRegion() *string
```

- *Type:* *string

---

##### `CloudProviderType`<sup>Optional</sup> <a name="CloudProviderType" id="@cdktn/provider-datadog.provider.DatadogProvider.property.cloudProviderType"></a>

```go
func CloudProviderType() *string
```

- *Type:* *string

---

##### `DefaultTags`<sup>Optional</sup> <a name="DefaultTags" id="@cdktn/provider-datadog.provider.DatadogProvider.property.defaultTags"></a>

```go
func DefaultTags() DatadogProviderDefaultTags
```

- *Type:* <a href="#@cdktn/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a>

---

##### `HttpClientRetryBackoffBase`<sup>Optional</sup> <a name="HttpClientRetryBackoffBase" id="@cdktn/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffBase"></a>

```go
func HttpClientRetryBackoffBase() *f64
```

- *Type:* *f64

---

##### `HttpClientRetryBackoffMultiplier`<sup>Optional</sup> <a name="HttpClientRetryBackoffMultiplier" id="@cdktn/provider-datadog.provider.DatadogProvider.property.httpClientRetryBackoffMultiplier"></a>

```go
func HttpClientRetryBackoffMultiplier() *f64
```

- *Type:* *f64

---

##### `HttpClientRetryEnabled`<sup>Optional</sup> <a name="HttpClientRetryEnabled" id="@cdktn/provider-datadog.provider.DatadogProvider.property.httpClientRetryEnabled"></a>

```go
func HttpClientRetryEnabled() *string
```

- *Type:* *string

---

##### `HttpClientRetryMaxRetries`<sup>Optional</sup> <a name="HttpClientRetryMaxRetries" id="@cdktn/provider-datadog.provider.DatadogProvider.property.httpClientRetryMaxRetries"></a>

```go
func HttpClientRetryMaxRetries() *f64
```

- *Type:* *f64

---

##### `HttpClientRetryTimeout`<sup>Optional</sup> <a name="HttpClientRetryTimeout" id="@cdktn/provider-datadog.provider.DatadogProvider.property.httpClientRetryTimeout"></a>

```go
func HttpClientRetryTimeout() *f64
```

- *Type:* *f64

---

##### `IgnoreTagKeys`<sup>Optional</sup> <a name="IgnoreTagKeys" id="@cdktn/provider-datadog.provider.DatadogProvider.property.ignoreTagKeys"></a>

```go
func IgnoreTagKeys() *[]*string
```

- *Type:* *[]*string

---

##### `OrgUuid`<sup>Optional</sup> <a name="OrgUuid" id="@cdktn/provider-datadog.provider.DatadogProvider.property.orgUuid"></a>

```go
func OrgUuid() *string
```

- *Type:* *string

---

##### `Validate`<sup>Optional</sup> <a name="Validate" id="@cdktn/provider-datadog.provider.DatadogProvider.property.validate"></a>

```go
func Validate() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.provider.DatadogProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatadogProviderConfig <a name="DatadogProviderConfig" id="@cdktn/provider-datadog.provider.DatadogProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.provider.DatadogProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/provider"

&provider.DatadogProviderConfig {
	Alias: *string,
	ApiKey: *string,
	ApiUrl: *string,
	AppKey: *string,
	AwsAccessKeyId: *string,
	AwsSecretAccessKey: *string,
	AwsSessionToken: *string,
	BearerToken: *string,
	CloudProviderRegion: *string,
	CloudProviderType: *string,
	DefaultTags: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16.provider.DatadogProviderDefaultTags,
	HttpClientRetryBackoffBase: *f64,
	HttpClientRetryBackoffMultiplier: *f64,
	HttpClientRetryEnabled: *string,
	HttpClientRetryMaxRetries: *f64,
	HttpClientRetryTimeout: *f64,
	IgnoreTagKeys: *[]*string,
	OrgUuid: *string,
	Validate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProviderConfig.property.apiKey">ApiKey</a></code> | <code>*string</code> | (Required unless validate is false) Datadog API key. This can also be set via the DD_API_KEY environment variable. |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProviderConfig.property.apiUrl">ApiUrl</a></code> | <code>*string</code> | The API URL. |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProviderConfig.property.appKey">AppKey</a></code> | <code>*string</code> | (Required unless validate is false) Datadog APP key. This can also be set via the DD_APP_KEY environment variable. |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProviderConfig.property.awsAccessKeyId">AwsAccessKeyId</a></code> | <code>*string</code> | The AWS access key ID; |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProviderConfig.property.awsSecretAccessKey">AwsSecretAccessKey</a></code> | <code>*string</code> | The AWS secret access key; |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProviderConfig.property.awsSessionToken">AwsSessionToken</a></code> | <code>*string</code> | The AWS session token; |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProviderConfig.property.bearerToken">BearerToken</a></code> | <code>*string</code> | Datadog credential sent in the `Authorization: Bearer <token>` header. |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProviderConfig.property.cloudProviderRegion">CloudProviderRegion</a></code> | <code>*string</code> | The cloud provider region specifier; used for cloud-provider-based authentication. For example, `us-east-1` for AWS. |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProviderConfig.property.cloudProviderType">CloudProviderType</a></code> | <code>*string</code> | Specifies the cloud provider used for cloud-provider-based authentication, enabling keyless access without API or app keys. |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProviderConfig.property.defaultTags">DefaultTags</a></code> | <code><a href="#@cdktn/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a></code> | default_tags block. |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryBackoffBase">HttpClientRetryBackoffBase</a></code> | <code>*f64</code> | The HTTP request retry back off base. Defaults to 2. |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryBackoffMultiplier">HttpClientRetryBackoffMultiplier</a></code> | <code>*f64</code> | The HTTP request retry back off multiplier. Defaults to 2. |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryEnabled">HttpClientRetryEnabled</a></code> | <code>*string</code> | Enables request retries on HTTP status codes 429 and 5xx. Valid values are [`true`, `false`]. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryMaxRetries">HttpClientRetryMaxRetries</a></code> | <code>*f64</code> | The HTTP request maximum retry number. Defaults to 3. |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryTimeout">HttpClientRetryTimeout</a></code> | <code>*f64</code> | The HTTP request retry timeout period. Defaults to 60 seconds. |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProviderConfig.property.ignoreTagKeys">IgnoreTagKeys</a></code> | <code>*[]*string</code> | [Experimental - Monitors and Service Level Objectives only] Tag keys whose drift Terraform should ignore across all resources that support `ignore_tag_keys`. |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProviderConfig.property.orgUuid">OrgUuid</a></code> | <code>*string</code> | The organization UUID; |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProviderConfig.property.validate">Validate</a></code> | <code>*string</code> | Enables validation of the provided API key during provider initialization. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-datadog.provider.DatadogProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs#alias DatadogProvider#alias}

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.provider.DatadogProviderConfig.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

(Required unless validate is false) Datadog API key. This can also be set via the DD_API_KEY environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs#api_key DatadogProvider#api_key}

---

##### `ApiUrl`<sup>Optional</sup> <a name="ApiUrl" id="@cdktn/provider-datadog.provider.DatadogProviderConfig.property.apiUrl"></a>

```go
ApiUrl *string
```

- *Type:* *string

The API URL.

This can also be set via the DD_HOST environment variable, and defaults to `https://api.datadoghq.com`. Note that this URL must not end with the `/api/` path. For example, `https://api.datadoghq.com/` is a correct value, while `https://api.datadoghq.com/api/` is not. And if you're working with "EU" version of Datadog, use `https://api.datadoghq.eu/`. Other Datadog region examples: `https://api.us5.datadoghq.com/`, `https://api.us3.datadoghq.com/` and `https://api.ddog-gov.com/`. See https://docs.datadoghq.com/getting_started/site/ for all available regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs#api_url DatadogProvider#api_url}

---

##### `AppKey`<sup>Optional</sup> <a name="AppKey" id="@cdktn/provider-datadog.provider.DatadogProviderConfig.property.appKey"></a>

```go
AppKey *string
```

- *Type:* *string

(Required unless validate is false) Datadog APP key. This can also be set via the DD_APP_KEY environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs#app_key DatadogProvider#app_key}

---

##### `AwsAccessKeyId`<sup>Optional</sup> <a name="AwsAccessKeyId" id="@cdktn/provider-datadog.provider.DatadogProviderConfig.property.awsAccessKeyId"></a>

```go
AwsAccessKeyId *string
```

- *Type:* *string

The AWS access key ID;

used for cloud-provider-based authentication. This can also be set using the `AWS_ACCESS_KEY_ID` environment variable. Required when using `cloud_provider_type` set to `aws`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs#aws_access_key_id DatadogProvider#aws_access_key_id}

---

##### `AwsSecretAccessKey`<sup>Optional</sup> <a name="AwsSecretAccessKey" id="@cdktn/provider-datadog.provider.DatadogProviderConfig.property.awsSecretAccessKey"></a>

```go
AwsSecretAccessKey *string
```

- *Type:* *string

The AWS secret access key;

used for cloud-provider-based authentication. This can also be set using the `AWS_SECRET_ACCESS_KEY` environment variable. Required when using `cloud_provider_type` set to `aws`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs#aws_secret_access_key DatadogProvider#aws_secret_access_key}

---

##### `AwsSessionToken`<sup>Optional</sup> <a name="AwsSessionToken" id="@cdktn/provider-datadog.provider.DatadogProviderConfig.property.awsSessionToken"></a>

```go
AwsSessionToken *string
```

- *Type:* *string

The AWS session token;

used for cloud-provider-based authentication. This can also be set using the `AWS_SESSION_TOKEN` environment variable. Required when using `cloud_provider_type` set to `aws` and using temporary credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs#aws_session_token DatadogProvider#aws_session_token}

---

##### `BearerToken`<sup>Optional</sup> <a name="BearerToken" id="@cdktn/provider-datadog.provider.DatadogProviderConfig.property.bearerToken"></a>

```go
BearerToken *string
```

- *Type:* *string

Datadog credential sent in the `Authorization: Bearer <token>` header.

Accepts personal access tokens (`ddpat_*`) and service-account access tokens (`ddsat_*`). When set, the provider authenticates with `Authorization: Bearer <token>` instead of the `DD-API-KEY` / `DD-APPLICATION-KEY` headers. This can also be set via the `DD_BEARER_TOKEN` or `DATADOG_BEARER_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs#bearer_token DatadogProvider#bearer_token}

---

##### `CloudProviderRegion`<sup>Optional</sup> <a name="CloudProviderRegion" id="@cdktn/provider-datadog.provider.DatadogProviderConfig.property.cloudProviderRegion"></a>

```go
CloudProviderRegion *string
```

- *Type:* *string

The cloud provider region specifier; used for cloud-provider-based authentication. For example, `us-east-1` for AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs#cloud_provider_region DatadogProvider#cloud_provider_region}

---

##### `CloudProviderType`<sup>Optional</sup> <a name="CloudProviderType" id="@cdktn/provider-datadog.provider.DatadogProviderConfig.property.cloudProviderType"></a>

```go
CloudProviderType *string
```

- *Type:* *string

Specifies the cloud provider used for cloud-provider-based authentication, enabling keyless access without API or app keys.

Only [`aws`] is supported. This can also be set using the `DD_CLOUD_PROVIDER_TYPE` environment variable. This feature is in Preview. If you'd like to enable it for your organization, contact [support](https://docs.datadoghq.com/help/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs#cloud_provider_type DatadogProvider#cloud_provider_type}

---

##### `DefaultTags`<sup>Optional</sup> <a name="DefaultTags" id="@cdktn/provider-datadog.provider.DatadogProviderConfig.property.defaultTags"></a>

```go
DefaultTags DatadogProviderDefaultTags
```

- *Type:* <a href="#@cdktn/provider-datadog.provider.DatadogProviderDefaultTags">DatadogProviderDefaultTags</a>

default_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs#default_tags DatadogProvider#default_tags}

---

##### `HttpClientRetryBackoffBase`<sup>Optional</sup> <a name="HttpClientRetryBackoffBase" id="@cdktn/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryBackoffBase"></a>

```go
HttpClientRetryBackoffBase *f64
```

- *Type:* *f64

The HTTP request retry back off base. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs#http_client_retry_backoff_base DatadogProvider#http_client_retry_backoff_base}

---

##### `HttpClientRetryBackoffMultiplier`<sup>Optional</sup> <a name="HttpClientRetryBackoffMultiplier" id="@cdktn/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryBackoffMultiplier"></a>

```go
HttpClientRetryBackoffMultiplier *f64
```

- *Type:* *f64

The HTTP request retry back off multiplier. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs#http_client_retry_backoff_multiplier DatadogProvider#http_client_retry_backoff_multiplier}

---

##### `HttpClientRetryEnabled`<sup>Optional</sup> <a name="HttpClientRetryEnabled" id="@cdktn/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryEnabled"></a>

```go
HttpClientRetryEnabled *string
```

- *Type:* *string

Enables request retries on HTTP status codes 429 and 5xx. Valid values are [`true`, `false`]. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs#http_client_retry_enabled DatadogProvider#http_client_retry_enabled}

---

##### `HttpClientRetryMaxRetries`<sup>Optional</sup> <a name="HttpClientRetryMaxRetries" id="@cdktn/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryMaxRetries"></a>

```go
HttpClientRetryMaxRetries *f64
```

- *Type:* *f64

The HTTP request maximum retry number. Defaults to 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs#http_client_retry_max_retries DatadogProvider#http_client_retry_max_retries}

---

##### `HttpClientRetryTimeout`<sup>Optional</sup> <a name="HttpClientRetryTimeout" id="@cdktn/provider-datadog.provider.DatadogProviderConfig.property.httpClientRetryTimeout"></a>

```go
HttpClientRetryTimeout *f64
```

- *Type:* *f64

The HTTP request retry timeout period. Defaults to 60 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs#http_client_retry_timeout DatadogProvider#http_client_retry_timeout}

---

##### `IgnoreTagKeys`<sup>Optional</sup> <a name="IgnoreTagKeys" id="@cdktn/provider-datadog.provider.DatadogProviderConfig.property.ignoreTagKeys"></a>

```go
IgnoreTagKeys *[]*string
```

- *Type:* *[]*string

[Experimental - Monitors and Service Level Objectives only] Tag keys whose drift Terraform should ignore across all resources that support `ignore_tag_keys`.

A resource's own `ignore_tag_keys` is merged with this list for that resource. Any `:value` suffix is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs#ignore_tag_keys DatadogProvider#ignore_tag_keys}

---

##### `OrgUuid`<sup>Optional</sup> <a name="OrgUuid" id="@cdktn/provider-datadog.provider.DatadogProviderConfig.property.orgUuid"></a>

```go
OrgUuid *string
```

- *Type:* *string

The organization UUID;

used for cloud-provider-based authentication. This can also be set using the `DD_ORG_UUID` environment variable. See the [Datadog API documentation](https://docs.datadoghq.com/api/v1/organizations/) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs#org_uuid DatadogProvider#org_uuid}

---

##### `Validate`<sup>Optional</sup> <a name="Validate" id="@cdktn/provider-datadog.provider.DatadogProviderConfig.property.validate"></a>

```go
Validate *string
```

- *Type:* *string

Enables validation of the provided API key during provider initialization.

Valid values are [`true`, `false`]. Default is true. When false, api_key won't be checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs#validate DatadogProvider#validate}

---

### DatadogProviderDefaultTags <a name="DatadogProviderDefaultTags" id="@cdktn/provider-datadog.provider.DatadogProviderDefaultTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.provider.DatadogProviderDefaultTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/provider"

&provider.DatadogProviderDefaultTags {
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.provider.DatadogProviderDefaultTags.property.tags">Tags</a></code> | <code>*map[string]*string</code> | [Experimental - Logs Indexes, Logs Pipelines, Monitors Security Monitoring Rules, and Service Level Objectives only] Resource tags to be applied by default across all resources. |

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-datadog.provider.DatadogProviderDefaultTags.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

[Experimental - Logs Indexes, Logs Pipelines, Monitors Security Monitoring Rules, and Service Level Objectives only] Resource tags to be applied by default across all resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs#tags DatadogProvider#tags}

---



