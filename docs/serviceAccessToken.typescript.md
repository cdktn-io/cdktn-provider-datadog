# `serviceAccessToken` Submodule <a name="`serviceAccessToken` Submodule" id="@cdktn/provider-datadog.serviceAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceAccessToken <a name="ServiceAccessToken" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/service_access_token datadog_service_access_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.Initializer"></a>

```typescript
import { serviceAccessToken } from '@cdktn/provider-datadog'

new serviceAccessToken.ServiceAccessToken(scope: Construct, id: string, config: ServiceAccessTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig">ServiceAccessTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig">ServiceAccessTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.resetExpiresAt">resetExpiresAt</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetExpiresAt` <a name="resetExpiresAt" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.resetExpiresAt"></a>

```typescript
public resetExpiresAt(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServiceAccessToken resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.isConstruct"></a>

```typescript
import { serviceAccessToken } from '@cdktn/provider-datadog'

serviceAccessToken.ServiceAccessToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.isTerraformElement"></a>

```typescript
import { serviceAccessToken } from '@cdktn/provider-datadog'

serviceAccessToken.ServiceAccessToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.isTerraformResource"></a>

```typescript
import { serviceAccessToken } from '@cdktn/provider-datadog'

serviceAccessToken.ServiceAccessToken.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.generateConfigForImport"></a>

```typescript
import { serviceAccessToken } from '@cdktn/provider-datadog'

serviceAccessToken.ServiceAccessToken.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ServiceAccessToken resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceAccessToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceAccessToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/service_access_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServiceAccessToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.lastUsedAt">lastUsedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.publicPortion">publicPortion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.expiresAtInput">expiresAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.serviceAccountIdInput">serviceAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `lastUsedAt`<sup>Required</sup> <a name="lastUsedAt" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.lastUsedAt"></a>

```typescript
public readonly lastUsedAt: string;
```

- *Type:* string

---

##### `publicPortion`<sup>Required</sup> <a name="publicPortion" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.publicPortion"></a>

```typescript
public readonly publicPortion: string;
```

- *Type:* string

---

##### `expiresAtInput`<sup>Optional</sup> <a name="expiresAtInput" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.expiresAtInput"></a>

```typescript
public readonly expiresAtInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `serviceAccountIdInput`<sup>Optional</sup> <a name="serviceAccountIdInput" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.serviceAccountIdInput"></a>

```typescript
public readonly serviceAccountIdInput: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceAccessTokenConfig <a name="ServiceAccessTokenConfig" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig.Initializer"></a>

```typescript
import { serviceAccessToken } from '@cdktn/provider-datadog'

const serviceAccessTokenConfig: serviceAccessToken.ServiceAccessTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig.property.name">name</a></code> | <code>string</code> | Name of the service access token. Must be non-empty. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig.property.scopes">scopes</a></code> | <code>string[]</code> | Authorization scopes granted to the service access token. At least one scope is required. |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | ID of the service account that owns this access token. |
| <code><a href="#@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig.property.expiresAt">expiresAt</a></code> | <code>string</code> | Expiration date of the service access token, in RFC3339 format. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the service access token. Must be non-empty. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/service_access_token#name ServiceAccessToken#name}

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Authorization scopes granted to the service access token. At least one scope is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/service_access_token#scopes ServiceAccessToken#scopes}

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

ID of the service account that owns this access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/service_access_token#service_account_id ServiceAccessToken#service_account_id}

---

##### `expiresAt`<sup>Optional</sup> <a name="expiresAt" id="@cdktn/provider-datadog.serviceAccessToken.ServiceAccessTokenConfig.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

Expiration date of the service access token, in RFC3339 format.

Omit for a non-expiring token. The Datadog API caps expirations to within 365 days from creation. This attribute is immutable: it cannot be added, changed, or removed after creation. To rotate the expiration, destroy and re-create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/service_access_token#expires_at ServiceAccessToken#expires_at}

---



