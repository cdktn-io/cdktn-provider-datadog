# `integrationAws` Submodule <a name="`integrationAws` Submodule" id="@cdktn/provider-datadog.integrationAws"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAws <a name="IntegrationAws" id="@cdktn/provider-datadog.integrationAws.IntegrationAws"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/integration_aws datadog_integration_aws}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.Initializer"></a>

```typescript
import { integrationAws } from '@cdktn/provider-datadog'

new integrationAws.IntegrationAws(scope: Construct, id: string, config?: IntegrationAwsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig">IntegrationAwsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig">IntegrationAwsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.resetAccessKeyId">resetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.resetAccountSpecificNamespaceRules">resetAccountSpecificNamespaceRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.resetCspmResourceCollectionEnabled">resetCspmResourceCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.resetExcludedRegions">resetExcludedRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.resetExtendedResourceCollectionEnabled">resetExtendedResourceCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.resetFilterTags">resetFilterTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.resetHostTags">resetHostTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.resetMetricsCollectionEnabled">resetMetricsCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.resetResourceCollectionEnabled">resetResourceCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.resetRoleName">resetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.resetSecretAccessKey">resetSecretAccessKey</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccessKeyId` <a name="resetAccessKeyId" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.resetAccessKeyId"></a>

```typescript
public resetAccessKeyId(): void
```

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetAccountSpecificNamespaceRules` <a name="resetAccountSpecificNamespaceRules" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.resetAccountSpecificNamespaceRules"></a>

```typescript
public resetAccountSpecificNamespaceRules(): void
```

##### `resetCspmResourceCollectionEnabled` <a name="resetCspmResourceCollectionEnabled" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.resetCspmResourceCollectionEnabled"></a>

```typescript
public resetCspmResourceCollectionEnabled(): void
```

##### `resetExcludedRegions` <a name="resetExcludedRegions" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.resetExcludedRegions"></a>

```typescript
public resetExcludedRegions(): void
```

##### `resetExtendedResourceCollectionEnabled` <a name="resetExtendedResourceCollectionEnabled" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.resetExtendedResourceCollectionEnabled"></a>

```typescript
public resetExtendedResourceCollectionEnabled(): void
```

##### `resetFilterTags` <a name="resetFilterTags" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.resetFilterTags"></a>

```typescript
public resetFilterTags(): void
```

##### `resetHostTags` <a name="resetHostTags" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.resetHostTags"></a>

```typescript
public resetHostTags(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetricsCollectionEnabled` <a name="resetMetricsCollectionEnabled" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.resetMetricsCollectionEnabled"></a>

```typescript
public resetMetricsCollectionEnabled(): void
```

##### `resetResourceCollectionEnabled` <a name="resetResourceCollectionEnabled" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.resetResourceCollectionEnabled"></a>

```typescript
public resetResourceCollectionEnabled(): void
```

##### `resetRoleName` <a name="resetRoleName" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.resetRoleName"></a>

```typescript
public resetRoleName(): void
```

##### `resetSecretAccessKey` <a name="resetSecretAccessKey" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.resetSecretAccessKey"></a>

```typescript
public resetSecretAccessKey(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IntegrationAws resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.isConstruct"></a>

```typescript
import { integrationAws } from '@cdktn/provider-datadog'

integrationAws.IntegrationAws.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.isTerraformElement"></a>

```typescript
import { integrationAws } from '@cdktn/provider-datadog'

integrationAws.IntegrationAws.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.isTerraformResource"></a>

```typescript
import { integrationAws } from '@cdktn/provider-datadog'

integrationAws.IntegrationAws.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.generateConfigForImport"></a>

```typescript
import { integrationAws } from '@cdktn/provider-datadog'

integrationAws.IntegrationAws.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IntegrationAws resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationAws to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationAws that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/integration_aws#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationAws to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.accountSpecificNamespaceRulesInput">accountSpecificNamespaceRulesInput</a></code> | <code>{[ key: string ]: boolean \| cdktn.IResolvable}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.cspmResourceCollectionEnabledInput">cspmResourceCollectionEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.excludedRegionsInput">excludedRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.extendedResourceCollectionEnabledInput">extendedResourceCollectionEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.filterTagsInput">filterTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.hostTagsInput">hostTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.metricsCollectionEnabledInput">metricsCollectionEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.resourceCollectionEnabledInput">resourceCollectionEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.secretAccessKeyInput">secretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.accountSpecificNamespaceRules">accountSpecificNamespaceRules</a></code> | <code>{[ key: string ]: boolean \| cdktn.IResolvable}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.cspmResourceCollectionEnabled">cspmResourceCollectionEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.excludedRegions">excludedRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.extendedResourceCollectionEnabled">extendedResourceCollectionEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.filterTags">filterTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.hostTags">hostTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.metricsCollectionEnabled">metricsCollectionEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.resourceCollectionEnabled">resourceCollectionEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.accessKeyIdInput"></a>

```typescript
public readonly accessKeyIdInput: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `accountSpecificNamespaceRulesInput`<sup>Optional</sup> <a name="accountSpecificNamespaceRulesInput" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.accountSpecificNamespaceRulesInput"></a>

```typescript
public readonly accountSpecificNamespaceRulesInput: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktn.IResolvable}

---

##### `cspmResourceCollectionEnabledInput`<sup>Optional</sup> <a name="cspmResourceCollectionEnabledInput" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.cspmResourceCollectionEnabledInput"></a>

```typescript
public readonly cspmResourceCollectionEnabledInput: string;
```

- *Type:* string

---

##### `excludedRegionsInput`<sup>Optional</sup> <a name="excludedRegionsInput" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.excludedRegionsInput"></a>

```typescript
public readonly excludedRegionsInput: string[];
```

- *Type:* string[]

---

##### `extendedResourceCollectionEnabledInput`<sup>Optional</sup> <a name="extendedResourceCollectionEnabledInput" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.extendedResourceCollectionEnabledInput"></a>

```typescript
public readonly extendedResourceCollectionEnabledInput: string;
```

- *Type:* string

---

##### `filterTagsInput`<sup>Optional</sup> <a name="filterTagsInput" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.filterTagsInput"></a>

```typescript
public readonly filterTagsInput: string[];
```

- *Type:* string[]

---

##### `hostTagsInput`<sup>Optional</sup> <a name="hostTagsInput" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.hostTagsInput"></a>

```typescript
public readonly hostTagsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metricsCollectionEnabledInput`<sup>Optional</sup> <a name="metricsCollectionEnabledInput" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.metricsCollectionEnabledInput"></a>

```typescript
public readonly metricsCollectionEnabledInput: string;
```

- *Type:* string

---

##### `resourceCollectionEnabledInput`<sup>Optional</sup> <a name="resourceCollectionEnabledInput" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.resourceCollectionEnabledInput"></a>

```typescript
public readonly resourceCollectionEnabledInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `secretAccessKeyInput`<sup>Optional</sup> <a name="secretAccessKeyInput" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.secretAccessKeyInput"></a>

```typescript
public readonly secretAccessKeyInput: string;
```

- *Type:* string

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `accountSpecificNamespaceRules`<sup>Required</sup> <a name="accountSpecificNamespaceRules" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.accountSpecificNamespaceRules"></a>

```typescript
public readonly accountSpecificNamespaceRules: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktn.IResolvable}

---

##### `cspmResourceCollectionEnabled`<sup>Required</sup> <a name="cspmResourceCollectionEnabled" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.cspmResourceCollectionEnabled"></a>

```typescript
public readonly cspmResourceCollectionEnabled: string;
```

- *Type:* string

---

##### `excludedRegions`<sup>Required</sup> <a name="excludedRegions" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.excludedRegions"></a>

```typescript
public readonly excludedRegions: string[];
```

- *Type:* string[]

---

##### `extendedResourceCollectionEnabled`<sup>Required</sup> <a name="extendedResourceCollectionEnabled" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.extendedResourceCollectionEnabled"></a>

```typescript
public readonly extendedResourceCollectionEnabled: string;
```

- *Type:* string

---

##### `filterTags`<sup>Required</sup> <a name="filterTags" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.filterTags"></a>

```typescript
public readonly filterTags: string[];
```

- *Type:* string[]

---

##### `hostTags`<sup>Required</sup> <a name="hostTags" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.hostTags"></a>

```typescript
public readonly hostTags: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricsCollectionEnabled`<sup>Required</sup> <a name="metricsCollectionEnabled" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.metricsCollectionEnabled"></a>

```typescript
public readonly metricsCollectionEnabled: string;
```

- *Type:* string

---

##### `resourceCollectionEnabled`<sup>Required</sup> <a name="resourceCollectionEnabled" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.resourceCollectionEnabled"></a>

```typescript
public readonly resourceCollectionEnabled: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAws.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.integrationAws.IntegrationAws.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsConfig <a name="IntegrationAwsConfig" id="@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.Initializer"></a>

```typescript
import { integrationAws } from '@cdktn/provider-datadog'

const integrationAwsConfig: integrationAws.IntegrationAwsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | Your AWS access key ID. Only required if your AWS account is a GovCloud or China account. |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.accountId">accountId</a></code> | <code>string</code> | Your AWS Account ID without dashes. |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.accountSpecificNamespaceRules">accountSpecificNamespaceRules</a></code> | <code>{[ key: string ]: boolean \| cdktn.IResolvable}</code> | Enables or disables metric collection for specific AWS namespaces for this AWS account only. |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.cspmResourceCollectionEnabled">cspmResourceCollectionEnabled</a></code> | <code>string</code> | Whether Datadog collects cloud security posture management resources from your AWS account. |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.excludedRegions">excludedRegions</a></code> | <code>string[]</code> | An array of AWS regions to exclude from metrics collection. |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.extendedResourceCollectionEnabled">extendedResourceCollectionEnabled</a></code> | <code>string</code> | Whether Datadog collects additional attributes and configuration information about the resources in your AWS account. Required for `cspm_resource_collection_enabled`. |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.filterTags">filterTags</a></code> | <code>string[]</code> | Array of EC2 tags (in the form `key:value`) defines a filter that Datadog uses when collecting metrics from EC2. |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.hostTags">hostTags</a></code> | <code>string[]</code> | Array of tags (in the form `key:value`) to add to all hosts and metrics reporting through this integration. |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/integration_aws#id IntegrationAws#id}. |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.metricsCollectionEnabled">metricsCollectionEnabled</a></code> | <code>string</code> | Whether Datadog collects metrics for this AWS account. |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.resourceCollectionEnabled">resourceCollectionEnabled</a></code> | <code>string</code> | Whether Datadog collects a standard set of resources from your AWS account. **Deprecated.** Deprecated in favor of `extended_resource_collection_enabled`. |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.roleName">roleName</a></code> | <code>string</code> | Your Datadog role delegation name. |
| <code><a href="#@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | Your AWS secret access key. Only required if your AWS account is a GovCloud or China account. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessKeyId`<sup>Optional</sup> <a name="accessKeyId" id="@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

Your AWS access key ID. Only required if your AWS account is a GovCloud or China account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/integration_aws#access_key_id IntegrationAws#access_key_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Your AWS Account ID without dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/integration_aws#account_id IntegrationAws#account_id}

---

##### `accountSpecificNamespaceRules`<sup>Optional</sup> <a name="accountSpecificNamespaceRules" id="@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.accountSpecificNamespaceRules"></a>

```typescript
public readonly accountSpecificNamespaceRules: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktn.IResolvable}

Enables or disables metric collection for specific AWS namespaces for this AWS account only.

A list of namespaces can be found at the [available namespace rules API endpoint](https://docs.datadoghq.com/api/v1/aws-integration/#list-namespace-rules).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/integration_aws#account_specific_namespace_rules IntegrationAws#account_specific_namespace_rules}

---

##### `cspmResourceCollectionEnabled`<sup>Optional</sup> <a name="cspmResourceCollectionEnabled" id="@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.cspmResourceCollectionEnabled"></a>

```typescript
public readonly cspmResourceCollectionEnabled: string;
```

- *Type:* string

Whether Datadog collects cloud security posture management resources from your AWS account.

This includes additional resources not covered under the general resource_collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/integration_aws#cspm_resource_collection_enabled IntegrationAws#cspm_resource_collection_enabled}

---

##### `excludedRegions`<sup>Optional</sup> <a name="excludedRegions" id="@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.excludedRegions"></a>

```typescript
public readonly excludedRegions: string[];
```

- *Type:* string[]

An array of AWS regions to exclude from metrics collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/integration_aws#excluded_regions IntegrationAws#excluded_regions}

---

##### `extendedResourceCollectionEnabled`<sup>Optional</sup> <a name="extendedResourceCollectionEnabled" id="@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.extendedResourceCollectionEnabled"></a>

```typescript
public readonly extendedResourceCollectionEnabled: string;
```

- *Type:* string

Whether Datadog collects additional attributes and configuration information about the resources in your AWS account. Required for `cspm_resource_collection_enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/integration_aws#extended_resource_collection_enabled IntegrationAws#extended_resource_collection_enabled}

---

##### `filterTags`<sup>Optional</sup> <a name="filterTags" id="@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.filterTags"></a>

```typescript
public readonly filterTags: string[];
```

- *Type:* string[]

Array of EC2 tags (in the form `key:value`) defines a filter that Datadog uses when collecting metrics from EC2.

Wildcards, such as `?` (for single characters) and `*` (for multiple characters) can also be used. Only hosts that match one of the defined tags will be imported into Datadog. The rest will be ignored. Host matching a given tag can also be excluded by adding `!` before the tag. e.x. `env:production,instance-type:c1.*,!region:us-east-1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/integration_aws#filter_tags IntegrationAws#filter_tags}

---

##### `hostTags`<sup>Optional</sup> <a name="hostTags" id="@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.hostTags"></a>

```typescript
public readonly hostTags: string[];
```

- *Type:* string[]

Array of tags (in the form `key:value`) to add to all hosts and metrics reporting through this integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/integration_aws#host_tags IntegrationAws#host_tags}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/integration_aws#id IntegrationAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metricsCollectionEnabled`<sup>Optional</sup> <a name="metricsCollectionEnabled" id="@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.metricsCollectionEnabled"></a>

```typescript
public readonly metricsCollectionEnabled: string;
```

- *Type:* string

Whether Datadog collects metrics for this AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/integration_aws#metrics_collection_enabled IntegrationAws#metrics_collection_enabled}

---

##### `resourceCollectionEnabled`<sup>Optional</sup> <a name="resourceCollectionEnabled" id="@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.resourceCollectionEnabled"></a>

```typescript
public readonly resourceCollectionEnabled: string;
```

- *Type:* string

Whether Datadog collects a standard set of resources from your AWS account. **Deprecated.** Deprecated in favor of `extended_resource_collection_enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/integration_aws#resource_collection_enabled IntegrationAws#resource_collection_enabled}

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Your Datadog role delegation name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/integration_aws#role_name IntegrationAws#role_name}

---

##### `secretAccessKey`<sup>Optional</sup> <a name="secretAccessKey" id="@cdktn/provider-datadog.integrationAws.IntegrationAwsConfig.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

Your AWS secret access key. Only required if your AWS account is a GovCloud or China account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/integration_aws#secret_access_key IntegrationAws#secret_access_key}

---



