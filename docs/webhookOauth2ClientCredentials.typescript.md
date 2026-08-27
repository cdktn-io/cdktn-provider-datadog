# `webhookOauth2ClientCredentials` Submodule <a name="`webhookOauth2ClientCredentials` Submodule" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebhookOauth2ClientCredentials <a name="WebhookOauth2ClientCredentials" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials datadog_webhook_oauth2_client_credentials}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer"></a>

```typescript
import { webhookOauth2ClientCredentials } from '@cdktn/provider-datadog'

new webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials(scope: Construct, id: string, config: WebhookOauth2ClientCredentialsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig">WebhookOauth2ClientCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig">WebhookOauth2ClientCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetAudience">resetAudience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetScope">resetScope</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAudience` <a name="resetAudience" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetAudience"></a>

```typescript
public resetAudience(): void
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.resetScope"></a>

```typescript
public resetScope(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WebhookOauth2ClientCredentials resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isConstruct"></a>

```typescript
import { webhookOauth2ClientCredentials } from '@cdktn/provider-datadog'

webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformElement"></a>

```typescript
import { webhookOauth2ClientCredentials } from '@cdktn/provider-datadog'

webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformResource"></a>

```typescript
import { webhookOauth2ClientCredentials } from '@cdktn/provider-datadog'

webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport"></a>

```typescript
import { webhookOauth2ClientCredentials } from '@cdktn/provider-datadog'

webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WebhookOauth2ClientCredentials resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WebhookOauth2ClientCredentials to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WebhookOauth2ClientCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WebhookOauth2ClientCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.accessTokenUrlInput">accessTokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.audienceInput">audienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.accessTokenUrl">accessTokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `accessTokenUrlInput`<sup>Optional</sup> <a name="accessTokenUrlInput" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.accessTokenUrlInput"></a>

```typescript
public readonly accessTokenUrlInput: string;
```

- *Type:* string

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.audienceInput"></a>

```typescript
public readonly audienceInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `accessTokenUrl`<sup>Required</sup> <a name="accessTokenUrl" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.accessTokenUrl"></a>

```typescript
public readonly accessTokenUrl: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentials.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WebhookOauth2ClientCredentialsConfig <a name="WebhookOauth2ClientCredentialsConfig" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.Initializer"></a>

```typescript
import { webhookOauth2ClientCredentials } from '@cdktn/provider-datadog'

const webhookOauth2ClientCredentialsConfig: webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.accessTokenUrl">accessTokenUrl</a></code> | <code>string</code> | The URL used to fetch the access token. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.clientId">clientId</a></code> | <code>string</code> | The OAuth2 client ID. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | The OAuth2 client secret. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.name">name</a></code> | <code>string</code> | The name of the auth method. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.audience">audience</a></code> | <code>string</code> | The audience requested when fetching the access token. |
| <code><a href="#@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.scope">scope</a></code> | <code>string</code> | The scope requested when fetching the access token. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessTokenUrl`<sup>Required</sup> <a name="accessTokenUrl" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.accessTokenUrl"></a>

```typescript
public readonly accessTokenUrl: string;
```

- *Type:* string

The URL used to fetch the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#access_token_url WebhookOauth2ClientCredentials#access_token_url}

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The OAuth2 client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#client_id WebhookOauth2ClientCredentials#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The OAuth2 client secret.

This value is not returned by the API, so it cannot be detected as drifted or filled in on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#client_secret WebhookOauth2ClientCredentials#client_secret}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#name WebhookOauth2ClientCredentials#name}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

The audience requested when fetching the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#audience WebhookOauth2ClientCredentials#audience}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-datadog.webhookOauth2ClientCredentials.WebhookOauth2ClientCredentialsConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The scope requested when fetching the access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#scope WebhookOauth2ClientCredentials#scope}

---



